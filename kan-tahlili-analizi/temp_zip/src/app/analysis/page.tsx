'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Analysis() {
  const [formData, setFormData] = useState({
    // Kişisel Bilgiler
    firstName: '',
    lastName: '',
    tcNo: '',
    birthDate: '',
    
    // Fiziksel Bilgiler
    height: '',
    weight: '',
    bloodType: '',
    gender: '',
    
    // Sağlık Bilgileri
    chronicDiseases: [] as string[],
    allergies: [] as string[],
    medications: '',
    recentIllnesses: ''
  });

  const [isFormValid, setIsFormValid] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    validateForm();
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target;
    if (value === 'yok') {
      setFormData(prev => ({
        ...prev,
        [name]: checked ? ['yok'] : []
      }));
    } else {
      setFormData(prev => {
        const currentValues = prev[name as keyof typeof prev] as string[];
        const withoutNone = currentValues.filter(item => item !== 'yok');
        
        if (checked) {
          return {
            ...prev,
            [name]: [...withoutNone, value]
          };
        } else {
          return {
            ...prev,
            [name]: withoutNone.filter(item => item !== value)
          };
        }
      });
    }
    validateForm();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    } else {
      setSelectedFile(null);
    }
    validateForm();
  };

  const validateForm = () => {
    // Kişisel bilgilerin kontrolü
    const isPersonalInfoValid = 
      formData.firstName.trim() !== '' &&
      formData.lastName.trim() !== '' &&
      formData.tcNo.trim() !== '' &&
      formData.tcNo.length === 11 &&
      formData.birthDate !== '';

    // Fiziksel bilgilerin kontrolü
    const isPhysicalInfoValid = 
      formData.height !== '' &&
      formData.weight !== '' &&
      formData.bloodType !== '' &&
      formData.gender !== '';

    // Sağlık bilgilerinin kontrolü
    const isHealthInfoValid = 
      (formData.chronicDiseases.length > 0 || formData.chronicDiseases.includes('yok')) &&
      (formData.allergies.length > 0 || formData.allergies.includes('yok'));

    // Dosya kontrolü
    const isFileValid = selectedFile !== null;

    // Tüm kontrollerin birleştirilmesi
    const isValid = 
      isPersonalInfoValid &&
      isPhysicalInfoValid &&
      isHealthInfoValid &&
      isFileValid;
    
    setIsFormValid(isValid);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form verilerini kontrol et
    if (!isFormValid) {
      return;
    }

    // Form verilerini URL parametrelerine dönüştür
    const params = new URLSearchParams({
      firstName: formData.firstName,
      lastName: formData.lastName,
      tcNo: formData.tcNo,
      birthDate: formData.birthDate,
      height: formData.height,
      weight: formData.weight,
      bloodType: formData.bloodType,
      gender: formData.gender,
      chronicDiseases: formData.chronicDiseases.join(','),
      allergies: formData.allergies.join(','),
      medications: formData.medications,
      recentIllnesses: formData.recentIllnesses
    });

    // Yeni sayfaya yönlendir
    router.push(`/analysis/result?${params.toString()}`);
  };

  const referenceRanges = [
    { name: 'WBC (Lökosit)', range: '4.5-11.0 10^3/µL', description: 'Enfeksiyon ve bağışıklık durumu göstergesi' },
    { name: 'RBC (Eritrosit)', range: '4.2-6.1 10^6/µL', description: 'Oksijen taşıma kapasitesi göstergesi' },
    { name: 'HGB (Hemoglobin)', range: '12.0-17.5 g/dL', description: 'Kansızlık durumu göstergesi' },
    { name: 'HCT (Hematokrit)', range: '36-50%', description: 'Kan yoğunluğu göstergesi' },
    { name: 'MCV', range: '80-100 fL', description: 'Kırmızı kan hücresi boyutu' },
    { name: 'PLT (Trombosit)', range: '150-450 10^3/µL', description: 'Pıhtılaşma faktörü' }
  ];

  const diseases = [
    {
      category: 'Anemi (Kansızlık)',
      conditions: [
        { name: 'Demir Eksikliği Anemisi', indicators: ['Düşük HGB', 'Düşük MCV'] },
        { name: 'B12 Eksikliği Anemisi', indicators: ['Düşük HGB', 'Yüksek MCV'] },
        { name: 'Kronik Hastalık Anemisi', indicators: ['Düşük HGB', 'Normal MCV'] }
      ]
    },
    {
      category: 'Enfeksiyonlar',
      conditions: [
        { name: 'Bakteriyel Enfeksiyon', indicators: ['Yüksek WBC', 'Yüksek Nötrofil'] },
        { name: 'Viral Enfeksiyon', indicators: ['Normal/Düşük WBC', 'Yüksek Lenfosit'] }
      ]
    },
    {
      category: 'Kanama Bozuklukları',
      conditions: [
        { name: 'Trombositopeni', indicators: ['Düşük PLT'] },
        { name: 'Trombositoz', indicators: ['Yüksek PLT'] }
      ]
    }
  ];

  return (
    <main>
      <div className="modern-background"></div>
      <div className="page-content">
        <div className="analysis-page">
          <div className="container position-relative">
            <Link href="/" className="back-button-blue">
              <i className="fas fa-arrow-left me-2"></i>
              Ana Sayfa
            </Link>
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="analysis-form-container" data-aos="fade-up">
                  <h2 className="section-title text-center mb-4">Kan Tahlili Analizi</h2>
                  <form onSubmit={handleSubmit} className="analysis-form">
                    {/* Kişisel Bilgiler */}
                    <div className="form-section">
                      <h3 className="section-subtitle">Kişisel Bilgiler</h3>
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
                          <label htmlFor="tcNo" className="form-label">TC Kimlik No</label>
                          <input
                            type="text"
                            className="form-control"
                            id="tcNo"
                            name="tcNo"
                            value={formData.tcNo}
                            onChange={handleInputChange}
                            required
                            pattern="[0-9]{11}"
                            maxLength={11}
                          />
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
                    </div>

                    {/* Fiziksel Bilgiler */}
                    <div className="form-section">
                      <h3 className="section-subtitle">Fiziksel Bilgiler</h3>
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
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label htmlFor="bloodType" className="form-label">Kan Grubu</label>
                          <select
                            className="form-select"
                            id="bloodType"
                            name="bloodType"
                            value={formData.bloodType}
                            onChange={handleInputChange}
                            required
                          >
                            <option value="">Seçiniz</option>
                            <option value="A+">A Rh+</option>
                            <option value="A-">A Rh-</option>
                            <option value="B+">B Rh+</option>
                            <option value="B-">B Rh-</option>
                            <option value="AB+">AB Rh+</option>
                            <option value="AB-">AB Rh-</option>
                            <option value="0+">0 Rh+</option>
                            <option value="0-">0 Rh-</option>
                          </select>
                        </div>
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
                      </div>
                    </div>

                    {/* Sağlık Bilgileri */}
                    <div className="form-section">
                      <h3 className="section-subtitle">Sağlık Bilgileri</h3>
                      
                      <div className="health-info-section">
                        {/* Kronik Hastalıklar */}
                        <div className="health-info-box">
                          <h4 className="subsection-title">Kronik Hastalıklar</h4>
                          <div className="checkbox-group">
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="diabetes"
                                name="chronicDiseases"
                                value="diyabet"
                                checked={formData.chronicDiseases.includes('diyabet')}
                                onChange={handleCheckboxChange}
                              />
                              <label className="form-check-label" htmlFor="diabetes">Diyabet</label>
                            </div>
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="hypertension"
                                name="chronicDiseases"
                                value="hipertansiyon"
                                checked={formData.chronicDiseases.includes('hipertansiyon')}
                                onChange={handleCheckboxChange}
                              />
                              <label className="form-check-label" htmlFor="hypertension">Hipertansiyon</label>
                            </div>
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="heartDisease"
                                name="chronicDiseases"
                                value="kalp-hastaligi"
                                checked={formData.chronicDiseases.includes('kalp-hastaligi')}
                                onChange={handleCheckboxChange}
                              />
                              <label className="form-check-label" htmlFor="heartDisease">Kalp Hastalığı</label>
                            </div>
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="asthma"
                                name="chronicDiseases"
                                value="astim"
                                checked={formData.chronicDiseases.includes('astim')}
                                onChange={handleCheckboxChange}
                              />
                              <label className="form-check-label" htmlFor="asthma">Astım</label>
                            </div>
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="koah"
                                name="chronicDiseases"
                                value="koah"
                                checked={formData.chronicDiseases.includes('koah')}
                                onChange={handleCheckboxChange}
                              />
                              <label className="form-check-label" htmlFor="koah">KOAH</label>
                            </div>
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="noChronic"
                                name="chronicDiseases"
                                value="yok"
                                checked={formData.chronicDiseases.includes('yok')}
                                onChange={handleCheckboxChange}
                              />
                              <label className="form-check-label" htmlFor="noChronic">Yok</label>
                            </div>
                          </div>
                        </div>

                        {/* Alerjiler */}
                        <div className="health-info-box">
                          <h4 className="subsection-title">Alerjiler</h4>
                          <div className="checkbox-group">
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="foodAllergy"
                                name="allergies"
                                value="gida-alerjisi"
                                checked={formData.allergies.includes('gida-alerjisi')}
                                onChange={handleCheckboxChange}
                              />
                              <label className="form-check-label" htmlFor="foodAllergy">Gıda Alerjisi</label>
                            </div>
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="medicationAllergy"
                                name="allergies"
                                value="ilac-alerjisi"
                                checked={formData.allergies.includes('ilac-alerjisi')}
                                onChange={handleCheckboxChange}
                              />
                              <label className="form-check-label" htmlFor="medicationAllergy">İlaç Alerjisi</label>
                            </div>
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="pollenAllergy"
                                name="allergies"
                                value="polen-alerjisi"
                                checked={formData.allergies.includes('polen-alerjisi')}
                                onChange={handleCheckboxChange}
                              />
                              <label className="form-check-label" htmlFor="pollenAllergy">Polen Alerjisi</label>
                            </div>
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="dustAllergy"
                                name="allergies"
                                value="toz-alerjisi"
                                checked={formData.allergies.includes('toz-alerjisi')}
                                onChange={handleCheckboxChange}
                              />
                              <label className="form-check-label" htmlFor="dustAllergy">Toz Alerjisi</label>
                            </div>
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="noAllergy"
                                name="allergies"
                                value="yok"
                                checked={formData.allergies.includes('yok')}
                                onChange={handleCheckboxChange}
                              />
                              <label className="form-check-label" htmlFor="noAllergy">Yok</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Düzenli Kullanılan İlaçlar ve Son 6 Ayda Geçirilen Hastalıklar */}
                    <div className="form-row">
                      {/* Düzenli Kullanılan İlaçlar */}
                      <div className="form-group">
                        <h4 className="subsection-title">Düzenli Kullanılan İlaçlar</h4>
                        <textarea
                          className="form-control"
                          id="medications"
                          name="medications"
                          value={formData.medications}
                          onChange={handleInputChange}
                          placeholder="Varsa yazınız"
                          rows={3}
                        />
                      </div>

                      {/* Son 6 Ayda Geçirilen Önemli Hastalıklar */}
                      <div className="form-group">
                        <h4 className="subsection-title">Son 6 Ayda Geçirilen Önemli Hastalıklar</h4>
                        <textarea
                          className="form-control"
                          id="recentIllnesses"
                          name="recentIllnesses"
                          value={formData.recentIllnesses}
                          onChange={handleInputChange}
                          placeholder="Varsa yazınız"
                          rows={3}
                        />
                      </div>
                    </div>

                    {/* Kan Tahlili Sonuçları */}
                    <div className="blood-test-section">
                      <h4 className="section-subtitle">Kan Tahlili Sonuçları</h4>
                      <div className="file-upload-container">
                        <input
                          type="file"
                          className="form-control"
                          id="bloodTestResults"
                          accept=".pdf,.jpg,.png"
                          onChange={handleFileChange}
                          required
                        />
                        <small className="text-muted">PDF, JPG veya PNG formatında yükleyiniz</small>
                      </div>
                    </div>

                    <div className="text-center mt-4">
                      <button 
                        type="submit"
                        className={`btn-analyze ${!isFormValid ? 'disabled' : ''}`}
                        disabled={!isFormValid}
                      >
                        <i className="fas fa-flask me-2"></i>
                        {isFormValid ? 'Analize Başla' : 'Analize Başla'}
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