'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function AnalysisResult() {
  const searchParams = useSearchParams();
  const [analysisResults, setAnalysisResults] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // URL'den parametreleri al
    const params = {
      firstName: searchParams.get('firstName'),
      lastName: searchParams.get('lastName'),
      tcNo: searchParams.get('tcNo'),
      birthDate: searchParams.get('birthDate'),
      height: searchParams.get('height'),
      weight: searchParams.get('weight'),
      bloodType: searchParams.get('bloodType'),
      gender: searchParams.get('gender'),
      chronicDiseases: searchParams.get('chronicDiseases')?.split(','),
      allergies: searchParams.get('allergies')?.split(','),
      medications: searchParams.get('medications'),
      recentIllnesses: searchParams.get('recentIllnesses')
    };

    // Burada backend'den analiz sonuçlarını alacağız
    // Şimdilik örnek veri kullanıyoruz
    setTimeout(() => {
      setAnalysisResults({
        patientInfo: params,
        testResults: [
          { test: 'Hemoglobin', value: '14.2', normalRange: '12-16', status: 'normal' },
          { test: 'Lökosit', value: '11.5', normalRange: '4-10', status: 'warning' },
          { test: 'Trombosit', value: '250', normalRange: '150-450', status: 'normal' },
          { test: 'Glukoz', value: '110', normalRange: '70-100', status: 'danger' },
          { test: 'Kolesterol', value: '220', normalRange: '0-200', status: 'warning' },
          { test: 'HDL', value: '45', normalRange: '40-60', status: 'normal' },
          { test: 'LDL', value: '130', normalRange: '0-100', status: 'danger' },
          { test: 'Triglisert', value: '150', normalRange: '0-150', status: 'normal' }
        ],
        aiComment: 'Kan değerlerinizde bazı anormallikler tespit edildi. Lökosit seviyeniz yüksek ve glukoz değeriniz normal aralığın üzerinde. Bu durum enfeksiyon veya diyabet riski gösterebilir. Ayrıca kolesterol ve LDL değerleriniz yüksek seviyede. Bu durum kalp-damar hastalıkları riskini artırabilir. Doktorunuza başvurmanızı öneririz.',
        recommendations: [
          'Doktor kontrolüne başvurun',
          'Şekerli gıdalardan kaçının',
          'Düzenli egzersiz yapın',
          'Bol su tüketin',
          'Yağlı gıdaları azaltın',
          'Lifli gıdalar tüketin',
          'Stresten uzak durun',
          'Düzenli uyku uyuyun'
        ]
      });
      setIsLoading(false);
    }, 2000);
  }, [searchParams]);

  if (isLoading) {
    return (
      <div className="analysis-page">
        <div className="container py-5">
          <div className="analysis-form-container text-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Yükleniyor...</span>
            </div>
            <p className="mt-3">Analiz sonuçları yükleniyor...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="analysis-page">
      <div className="container py-5">
        <div className="analysis-form-container">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <Link href="/analysis" className="back-button">
              <i className="fas fa-arrow-left me-2"></i>
              Geri Dön
            </Link>
            <h1 className="section-title">Analiz Sonuçları</h1>
          </div>

          {/* Hasta Bilgileri */}
          <div className="form-section">
            <h3 className="section-subtitle">Hasta Bilgileri</h3>
            <div className="row">
              <div className="col-md-6">
                <p><strong>Ad Soyad:</strong> {analysisResults.patientInfo.firstName} {analysisResults.patientInfo.lastName}</p>
                <p><strong>TC Kimlik No:</strong> {analysisResults.patientInfo.tcNo}</p>
                <p><strong>Doğum Tarihi:</strong> {analysisResults.patientInfo.birthDate}</p>
                <p><strong>Cinsiyet:</strong> {analysisResults.patientInfo.gender === 'male' ? 'Erkek' : 'Kadın'}</p>
              </div>
              <div className="col-md-6">
                <p><strong>Boy:</strong> {analysisResults.patientInfo.height} cm</p>
                <p><strong>Kilo:</strong> {analysisResults.patientInfo.weight} kg</p>
                <p><strong>Kan Grubu:</strong> {analysisResults.patientInfo.bloodType}</p>
                <p><strong>BMI:</strong> {((Number(analysisResults.patientInfo.weight) / Math.pow(Number(analysisResults.patientInfo.height) / 100, 2)).toFixed(1))}</p>
              </div>
            </div>
          </div>

          {/* Test Sonuçları */}
          <div className="form-section">
            <h3 className="section-subtitle">Test Sonuçları</h3>
            <div className="table-responsive">
              <table className="results-table">
                <thead>
                  <tr>
                    <th>Test</th>
                    <th>Değer</th>
                    <th>Normal Aralık</th>
                    <th>Durum</th>
                  </tr>
                </thead>
                <tbody>
                  {analysisResults.testResults.map((item: any, index: number) => (
                    <tr key={index}>
                      <td>{item.test}</td>
                      <td>{item.value}</td>
                      <td>{item.normalRange}</td>
                      <td>
                        <span className={`status-${item.status}`}>
                          {item.status === 'normal' ? 'Normal' : 
                           item.status === 'warning' ? 'Dikkat' : 'Yüksek'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Yapay Zeka Yorumu */}
          <div className="form-section">
            <h3 className="section-subtitle">Yapay Zeka Yorumu</h3>
            <div className="ai-comment">
              <p>{analysisResults.aiComment}</p>
            </div>
          </div>

          {/* Öneriler */}
          <div className="form-section">
            <h3 className="section-subtitle">Öneriler</h3>
            <div className="recommendations">
              <ul className="list-unstyled">
                {analysisResults.recommendations.map((item: string, index: number) => (
                  <li key={index} className="mb-2">
                    <i className="fas fa-check-circle text-success me-2"></i>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Çıktı Butonları */}
          <div className="text-center mt-4">
            <button className="btn-analyze me-3">
              <i className="fas fa-download me-2"></i>
              PDF İndir
            </button>
            <button className="btn-analyze">
              <i className="fas fa-share-alt me-2"></i>
              Paylaş
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 