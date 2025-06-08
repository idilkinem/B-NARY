import { NextRequest, NextResponse } from 'next/server';
import * as XLSX from 'xlsx';

export const runtime = 'nodejs';

interface TestResult {
  test: string;
  value: string;
  normalRange: string;
  status: 'normal' | 'warning' | 'danger';
}

interface PatientInfo {
  firstName: string;
  lastName: string;
  tcNo: string;
  birthDate: string;
  height: string;
  weight: string;
  bloodType: string;
  gender: string;
  chronicDiseases: string[];
  allergies: string[];
  medications: string;
  recentIllnesses: string;
}

interface AnalysisResult {
  patientInfo: PatientInfo;
  testResults: TestResult[];
  aiComment: string;
  recommendations: string[];
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File;
    
    if (!file) {
      return NextResponse.json({ error: 'Dosya bulunamadı.' }, { status: 400 });
    }

    // Dosya tipini kontrol et
    if (!file.type.includes('excel') && !file.type.includes('spreadsheet')) {
      return NextResponse.json({ error: 'Lütfen sadece Excel dosyası (.xlsx veya .xls) yükleyin.' }, { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const data = new Uint8Array(arrayBuffer);
    const workbook = XLSX.read(data, { type: 'array' });
    
    if (workbook.SheetNames.length === 0) {
      return NextResponse.json({ error: 'Excel dosyası boş veya geçersiz.' }, { status: 400 });
    }

    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];
    const json = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

    // Formdan gelen hasta bilgileri
    const formPatientInfo: PatientInfo = {
      firstName: (formData.get('firstName') as string) || '',
      lastName: (formData.get('lastName') as string) || '',
      tcNo: (formData.get('tcNo') as string) || '',
      birthDate: (formData.get('birthDate') as string) || '',
      height: (formData.get('height') as string) || '',
      weight: (formData.get('weight') as string) || '',
      bloodType: (formData.get('bloodType') as string) || '',
      gender: (formData.get('gender') as string) || '',
      chronicDiseases: ((formData.get('chronicDiseases') as string) || '').split(',').map((d: string) => d.trim()),
      allergies: ((formData.get('allergies') as string) || '').split(',').map((a: string) => a.trim()),
      medications: (formData.get('medications') as string) || '',
      recentIllnesses: (formData.get('recentIllnesses') as string) || ''
    };

    let patientInfo: PatientInfo = formPatientInfo;
    let testResults: TestResult[] = [];

    if (json.length >= 2) {
      // Başlık satırını al
      const headers = json[0] as string[];
      const requiredHeaders = ['Ad', 'Soyad', 'TC', 'DoğumTarihi', 'Boy', 'Kilo', 'KanGrubu', 'Cinsiyet', 'KronikHastalıklar', 'Alerjiler', 'İlaçlar', 'SonHastalıklar'];
      const missingHeaders = requiredHeaders.filter(header => !headers.includes(header));
      if (missingHeaders.length === 0) {
        // Excel'den hasta bilgilerini başlıklara göre al
        const patientRow = json[1] as any[];
        patientInfo = {
          firstName: patientRow[headers.indexOf('Ad')] || formPatientInfo.firstName,
          lastName: patientRow[headers.indexOf('Soyad')] || formPatientInfo.lastName,
          tcNo: patientRow[headers.indexOf('TC')] || formPatientInfo.tcNo,
          birthDate: patientRow[headers.indexOf('DoğumTarihi')] || formPatientInfo.birthDate,
          height: patientRow[headers.indexOf('Boy')] || formPatientInfo.height,
          weight: patientRow[headers.indexOf('Kilo')] || formPatientInfo.weight,
          bloodType: patientRow[headers.indexOf('KanGrubu')] || formPatientInfo.bloodType,
          gender: patientRow[headers.indexOf('Cinsiyet')] || formPatientInfo.gender,
          chronicDiseases: (patientRow[headers.indexOf('KronikHastalıklar')] || formPatientInfo.chronicDiseases.join(',')).split(',').map((d: string) => d.trim()),
          allergies: (patientRow[headers.indexOf('Alerjiler')] || formPatientInfo.allergies.join(',')).split(',').map((a: string) => a.trim()),
          medications: patientRow[headers.indexOf('İlaçlar')] || formPatientInfo.medications,
          recentIllnesses: patientRow[headers.indexOf('SonHastalıklar')] || formPatientInfo.recentIllnesses
        };
        // Test sonuçlarını al (3. satırdan itibaren)
        testResults = (json.slice(2) as any[][]).map((row: any[]) => {
          const value = parseFloat(row[1]);
          const [min, max] = (row[2] || '').split('-').map(Number);
          let status: 'normal' | 'warning' | 'danger' = 'normal';
          if (value < min) {
            status = 'danger';
          } else if (value > max) {
            status = 'warning';
          }
          return {
            test: row[0],
            value: row[1],
            normalRange: row[2],
            status
          };
        });
      }
    }
    // Eğer testResults boşsa, hata döndür
    if (!testResults.length) {
      return NextResponse.json({ error: 'Excel dosyası uygun formatta değil veya test sonuçları bulunamadı.' }, { status: 400 });
    }
    // Analiz sonucunu oluştur
    const analysisResult: AnalysisResult = {
      patientInfo,
      testResults,
      aiComment: generateAIComment(testResults),
      recommendations: generateRecommendations(testResults)
    };
    return NextResponse.json(analysisResult);
  } catch (error) {
    console.error('Excel analiz hatası:', error);
    return NextResponse.json({ 
      error: 'Excel dosyası analiz edilirken bir hata oluştu. Lütfen dosya formatını kontrol edin.' 
    }, { status: 500 });
  }
}

function generateAIComment(testResults: TestResult[]): string {
  const abnormalResults = testResults.filter(result => result.status !== 'normal');
  
  if (abnormalResults.length === 0) {
    return 'Tüm değerleriniz normal aralıkta. Sağlıklı bir yaşam için düzenli kontrollerinize devam edin.';
  }

  const comments = abnormalResults.map(result => {
    if (result.status === 'danger') {
      return `${result.test} değeriniz normal aralığın altında.`;
    } else {
      return `${result.test} değeriniz normal aralığın üzerinde.`;
    }
  });

  return `Kan değerlerinizde bazı anormallikler tespit edildi: ${comments.join(' ')} Bu durumlar hakkında doktorunuza danışmanızı öneririz.`;
}

function generateRecommendations(testResults: TestResult[]): string[] {
  const recommendations = [
    'Düzenli doktor kontrolüne gidin',
    'Sağlıklı beslenin',
    'Düzenli egzersiz yapın',
    'Bol su tüketin'
  ];

  const abnormalResults = testResults.filter(result => result.status !== 'normal');
  
  if (abnormalResults.some(result => result.test.toLowerCase().includes('glukoz'))) {
    recommendations.push('Şekerli gıdalardan kaçının');
  }
  
  if (abnormalResults.some(result => result.test.toLowerCase().includes('kolesterol'))) {
    recommendations.push('Yağlı gıdaları azaltın');
    recommendations.push('Lifli gıdalar tüketin');
  }

  return recommendations;
} 