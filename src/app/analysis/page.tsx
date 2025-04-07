'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Analysis() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    birthDate: '',
    height: '',
    weight: '',
    file: null as File | null
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    validateForm();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      // CSV dosyası kontrolü
      if (file.type === 'text/csv' || file.name.endsWith('.csv')) {
        setFormData(prev => ({
          ...prev,
          file: file
        }));
        validateForm();
      } else {
        alert('Lütfen sadece CSV dosyası yükleyin.');
        e.target.value = '';
      }
    }
  };

  const validateForm = () => {
    const isValid = 
      formData.firstName.trim() !== '' &&
      formData.lastName.trim() !== '' &&
      formData.gender !== '' &&
      formData.birthDate !== '' &&
      formData.height !== '' &&
      formData.weight !== '' &&
      formData.file !== null;
    
    setIsFormValid(isValid);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // URL parametrelerini oluştur
    const params = new URLSearchParams({
      firstName: formData.firstName,
      lastName: formData.lastName,
      gender: formData.gender,
      birthDate: formData.birthDate,
      height: formData.height,
      weight: formData.weight,
    });

    // Sonuç sayfasına yönlendir
    router.push(`/analysis/result?${params.toString()}`);
  };

  return (
    <main>
      <div className="modern-background"></div>
      <div className="page-content">
        <div className="analysis-page">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="analysis-form-container" data-aos="fade-up">
                  <h2 className="section-title text-center mb-4">Analiz Formu</h2>
                  <form onSubmit={handleSubmit} className="analysis-form">
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="firstName" className="form-label">Ad</label>
                        <input
                          type="text"
                          className="form-control"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="lastName" className="form-label">Soyad</label>
                        <input
                          type="text"
                          className="form-control"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="gender" className="form-label">Cinsiyet</label>
                        <select
                          className="form-select"
                          id="gender"
                          name="gender"
                          value={formData.gender}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="">Seçiniz</option>
                          <option value="male">Erkek</option>
                          <option value="female">Kadın</option>
                          <option value="other">Diğer</option>
                        </select>
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="birthDate" className="form-label">Doğum Tarihi</label>
                        <input
                          type="date"
                          className="form-control"
                          id="birthDate"
                          name="birthDate"
                          value={formData.birthDate}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="height" className="form-label">Boy (cm)</label>
                        <input
                          type="number"
                          className="form-control"
                          id="height"
                          name="height"
                          value={formData.height}
                          onChange={handleInputChange}
                          required
                          min="100"
                          max="250"
                        />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="weight" className="form-label">Kilo (kg)</label>
                        <input
                          type="number"
                          className="form-control"
                          id="weight"
                          name="weight"
                          value={formData.weight}
                          onChange={handleInputChange}
                          required
                          min="30"
                          max="300"
                        />
                      </div>
                    </div>

                    <div className="mb-4">
                      <label htmlFor="file" className="form-label">CSV Dosyası Yükle</label>
                      <input
                        type="file"
                        className="form-control"
                        id="file"
                        name="file"
                        accept=".csv"
                        onChange={handleFileChange}
                        required
                      />
                      <small className="text-muted">Lütfen sadece CSV formatında dosya yükleyin.</small>
                    </div>

                    <div className="text-center">
                      <button
                        type="submit"
                        className={`btn-analyze ${!isFormValid ? 'disabled' : ''}`}
                        disabled={!isFormValid}
                      >
                        <i className="fas fa-flask"></i>
                        Analize Başla
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 