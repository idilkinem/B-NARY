'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function AnalysisResult() {
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const [analysisResults, setAnalysisResults] = useState<any>(null);

  const handlePrint = () => {
    window.print();
  };

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
      <div className="container py-5 position-relative">
        <Link href="/analysis" className="back-button result-back-button">
          <i className="fas fa-arrow-left me-2"></i>
          Geri Dön
        </Link>
        <div className="analysis-form-container">
          <div className="text-center mb-5">
            <h1 className="section-title">Analiz Sonuçları</h1>
          </div>

          {/* Hasta Bilgileri */}
          <div className="form-section">
            <h3 className="section-subtitle">Hasta Bilgileri</h3>
            
            {/* Kişisel Bilgiler */}
            <div className="patient-info-section">
              <div className="patient-info-group">
                <h4 className="patient-info-group-title">Kişisel Bilgiler</h4>
                <div className="patient-info-grid">
                  <div className="patient-info-item">
                    <div className="patient-info-label">Ad Soyad</div>
                    <div className="patient-info-value">{analysisResults.patientInfo.firstName} {analysisResults.patientInfo.lastName}</div>
                  </div>
                  <div className="patient-info-item">
                    <div className="patient-info-label">TC Kimlik No</div>
                    <div className="patient-info-value">{analysisResults.patientInfo.tcNo}</div>
                  </div>
                  <div className="patient-info-item">
                    <div className="patient-info-label">Doğum Tarihi</div>
                    <div className="patient-info-value">{new Date(analysisResults.patientInfo.birthDate).toLocaleDateString('tr-TR')}</div>
                  </div>
                  <div className="patient-info-item">
                    <div className="patient-info-label">Cinsiyet</div>
                    <div className="patient-info-value">{analysisResults.patientInfo.gender === 'male' ? 'Erkek' : 'Kadın'}</div>
                  </div>
                </div>
              </div>

              {/* Fiziksel Bilgiler */}
              <div className="patient-info-group">
                <h4 className="patient-info-group-title">Fiziksel Bilgiler</h4>
                <div className="patient-info-grid">
                  <div className="patient-info-item">
                    <div className="patient-info-label">Boy</div>
                    <div className="patient-info-value">{analysisResults.patientInfo.height} cm</div>
                  </div>
                  <div className="patient-info-item">
                    <div className="patient-info-label">Kilo</div>
                    <div className="patient-info-value">{analysisResults.patientInfo.weight} kg</div>
                  </div>
                  <div className="patient-info-item">
                    <div className="patient-info-label">Vücut Kitle İndeksi (BMI)</div>
                    <div className="patient-info-value">
                      {((Number(analysisResults.patientInfo.weight) / Math.pow(Number(analysisResults.patientInfo.height) / 100, 2)).toFixed(1))} kg/m²
                    </div>
                  </div>
                  <div className="patient-info-item">
                    <div className="patient-info-label">Kan Grubu</div>
                    <div className="patient-info-value">{analysisResults.patientInfo.bloodType}</div>
                  </div>
                </div>
              </div>

              {/* Sağlık Bilgileri */}
              <div className="patient-info-group">
                <h4 className="patient-info-group-title">Sağlık Bilgileri</h4>
                <div className="patient-info-grid">
                  {Array.isArray(analysisResults.patientInfo.chronicDiseases) && 
                   analysisResults.patientInfo.chronicDiseases.length > 0 && 
                   analysisResults.patientInfo.chronicDiseases[0] !== 'yok' && (
                    <div className="patient-info-item full-width">
                      <div className="patient-info-label">Kronik Hastalıklar</div>
                      <div className="patient-info-list-container">
                        {analysisResults.patientInfo.chronicDiseases.map((disease: string, index: number) => (
                          <div key={index} className="patient-info-list-item">
                            <i className="fas fa-circle-dot me-2"></i>
                            {disease}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {Array.isArray(analysisResults.patientInfo.allergies) && 
                   analysisResults.patientInfo.allergies.length > 0 && 
                   analysisResults.patientInfo.allergies[0] !== 'yok' && (
                    <div className="patient-info-item full-width">
                      <div className="patient-info-label">Alerjiler</div>
                      <div className="patient-info-list-container">
                        {analysisResults.patientInfo.allergies.map((allergy: string, index: number) => (
                          <div key={index} className="patient-info-list-item">
                            <i className="fas fa-circle-dot me-2"></i>
                            {allergy}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="patient-info-item full-width">
                    <div className="patient-info-label">Düzenli Kullanılan İlaçlar</div>
                    <div className="patient-info-value">
                      {analysisResults.patientInfo.medications ? (
                        <div className="patient-info-list-container">
                          {analysisResults.patientInfo.medications.split('\n').map((med: string, index: number) => (
                            <div key={index} className="patient-info-list-item">
                              <i className="fas fa-pills me-2"></i>
                              {med}
                            </div>
                          ))}
                        </div>
                      ) : (
                        <span className="text-muted">Belirtilmemiş</span>
                      )}
                    </div>
                  </div>

                  <div className="patient-info-item full-width">
                    <div className="patient-info-label">Son 6 Ayda Geçirilen Önemli Hastalıklar</div>
                    <div className="patient-info-value">
                      {analysisResults.patientInfo.recentIllnesses ? (
                        <div className="patient-info-list-container">
                          {analysisResults.patientInfo.recentIllnesses.split('\n').map((illness: string, index: number) => (
                            <div key={index} className="patient-info-list-item">
                              <i className="fas fa-notes-medical me-2"></i>
                              {illness}
                            </div>
                          ))}
                        </div>
                      ) : (
                        <span className="text-muted">Belirtilmemiş</span>
                      )}
                    </div>
                  </div>
                </div>
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
            <button className="btn-analyze" onClick={handlePrint}>
              <i className="fas fa-download me-2"></i>
              PDF İndir
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 