'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function AnalysisResult() {
  const searchParams = useSearchParams();
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    birthDate: '',
    height: '',
    weight: '',
  });

  const [bmi, setBmi] = useState<number>(0);

  useEffect(() => {
    // URL'den kullanıcı verilerini al
    const data = {
      firstName: searchParams.get('firstName') || '',
      lastName: searchParams.get('lastName') || '',
      gender: searchParams.get('gender') || '',
      birthDate: searchParams.get('birthDate') || '',
      height: searchParams.get('height') || '',
      weight: searchParams.get('weight') || '',
    };
    setUserData(data);

    // VKİ hesaplama
    const heightInMeters = parseFloat(data.height) / 100;
    const weightInKg = parseFloat(data.weight);
    const calculatedBmi = weightInKg / (heightInMeters * heightInMeters);
    setBmi(calculatedBmi);
  }, [searchParams]);

  return (
    <main>
      <div className="modern-background"></div>
      <div className="page-content">
        <div className="analysis-result-page">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="user-info-card" data-aos="fade-right">
                  <h3 className="card-title">Kullanıcı Bilgileri</h3>
                  <div className="user-info-content">
                    <div className="info-item">
                      <span className="label">Ad Soyad:</span>
                      <span className="value">{userData.firstName} {userData.lastName}</span>
                    </div>
                    <div className="info-item">
                      <span className="label">Cinsiyet:</span>
                      <span className="value">{userData.gender === 'male' ? 'Erkek' : userData.gender === 'female' ? 'Kadın' : 'Diğer'}</span>
                    </div>
                    <div className="info-item">
                      <span className="label">Doğum Tarihi:</span>
                      <span className="value">{userData.birthDate}</span>
                    </div>
                    <div className="info-item">
                      <span className="label">Boy:</span>
                      <span className="value">{userData.height} cm</span>
                    </div>
                    <div className="info-item">
                      <span className="label">Kilo:</span>
                      <span className="value">{userData.weight} kg</span>
                    </div>
                  </div>
                  <div className="bmi-section">
                    <h4>Vücut Kitle Endeksi Hesaplama</h4>
                    <div className="bmi-formula">
                      VKİ = kg / (m)²
                    </div>
                    <div className="bmi-result">
                      <span className="bmi-value">{bmi.toFixed(2)}</span>
                      <span className="bmi-unit">kg/m²</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-8">
                {/* Buraya analiz sonuçları gelecek */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 