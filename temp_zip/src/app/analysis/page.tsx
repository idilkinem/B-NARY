'use client';

import { useState, useEffect } from 'react';
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

  const [otherChronicText, setOtherChronicText] = useState('');
  const [otherAllergyText, setOtherAllergyText] = useState('');

  const [fileSuccess, setFileSuccess] = useState(false);

  useEffect(() => {
    validateForm();
  }, []);

  useEffect(() => {
    const { medications, recentIllnesses, ...requiredFields } = formData;
    validateForm();
  }, [formData.firstName, formData.lastName, formData.tcNo, formData.birthDate,
      formData.height, formData.weight, formData.bloodType, formData.gender,
      formData.chronicDiseases, formData.allergies, selectedFile]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === 'medications' || name === 'recentIllnesses') {
      setFormData(prev => ({ ...prev, [name]: value }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
      validateForm();
    }
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
      setFileSuccess(true);
    } else {
      setSelectedFile(null);
      setFileSuccess(false);
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

    // Sağlık bilgilerinin kontrolü (sadece kronik hastalıklar ve alerjiler)
    const isHealthInfoValid = 
      (formData.chronicDiseases.length > 0 || formData.chronicDiseases.includes('yok')) &&
      (formData.allergies.length > 0 || formData.allergies.includes('yok'));

    // Dosya kontrolü
    const isFileValid = selectedFile !== null;

    // Sadece zorunlu alanların kontrolü
    const isValid = isPersonalInfoValid && isPhysicalInfoValid && isHealthInfoValid && isFileValid;

    // Debug için konsola yazdır
    console.log('Form Validation:', {
      isPersonalInfoValid,
      isPhysicalInfoValid,
      isHealthInfoValid,
      isFileValid,
      isValid
    });

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
                            onChange={e => {
                              // Sadece rakam girilsin
                              const value = e.target.value.replace(/[^0-9]/g, '');
                              if (value.length <= 11) {
                                setFormData(prev => ({ ...prev, tcNo: value }));
                                validateForm();
                              }
                            }}
                            required
                            inputMode="numeric"
                            pattern="[0-9]*"
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
                                id="thyroid"
                                name="chronicDiseases"
                                value="tiroid"
                                checked={formData.chronicDiseases.includes('tiroid')}
                                onChange={handleCheckboxChange}
                              />
                              <label className="form-check-label" htmlFor="thyroid">Tiroid</label>
                            </div>
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="arthritis"
                                name="chronicDiseases"
                                value="artrit"
                                checked={formData.chronicDiseases.includes('artrit')}
                                onChange={handleCheckboxChange}
                              />
                              <label className="form-check-label" htmlFor="arthritis">Artrit</label>
                            </div>
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="migraine"
                                name="chronicDiseases"
                                value="migren"
                                checked={formData.chronicDiseases.includes('migren')}
                                onChange={handleCheckboxChange}
                              />
                              <label className="form-check-label" htmlFor="migraine">Migren</label>
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
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="otherChronic"
                                name="chronicDiseases"
                                value="diger"
                                checked={formData.chronicDiseases.includes('diger')}
                                onChange={handleCheckboxChange}
                              />
                              <label className="form-check-label" htmlFor="otherChronic">Diğer</label>
                            </div>
                            {/* Diğer kutucuğu seçiliyse input göster */}
                            {formData.chronicDiseases.includes('diger') && (
                              <input
                                type="text"
                                className="form-control mt-2"
                                placeholder="Lütfen belirtiniz"
                                value={otherChronicText}
                                onChange={e => setOtherChronicText(e.target.value)}
                                style={{fontSize: '1rem'}}
                              />
                            )}
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
                                id="animalAllergy"
                                name="allergies"
                                value="hayvan-alerjisi"
                                checked={formData.allergies.includes('hayvan-alerjisi')}
                                onChange={handleCheckboxChange}
                              />
                              <label className="form-check-label" htmlFor="animalAllergy">Hayvan Alerjisi</label>
                            </div>
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="moldAllergy"
                                name="allergies"
                                value="kuf-alerjisi"
                                checked={formData.allergies.includes('kuf-alerjisi')}
                                onChange={handleCheckboxChange}
                              />
                              <label className="form-check-label" htmlFor="moldAllergy">Küf Alerjisi</label>
                            </div>
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="latexAllergy"
                                name="allergies"
                                value="lateks-alerjisi"
                                checked={formData.allergies.includes('lateks-alerjisi')}
                                onChange={handleCheckboxChange}
                              />
                              <label className="form-check-label" htmlFor="latexAllergy">Lateks Alerjisi</label>
                            </div>
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="insectAllergy"
                                name="allergies"
                                value="bocek-alerjisi"
                                checked={formData.allergies.includes('bocek-alerjisi')}
                                onChange={handleCheckboxChange}
                              />
                              <label className="form-check-label" htmlFor="insectAllergy">Böcek Alerjisi</label>
                            </div>
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="metalAllergy"
                                name="allergies"
                                value="metal-alerjisi"
                                checked={formData.allergies.includes('metal-alerjisi')}
                                onChange={handleCheckboxChange}
                              />
                              <label className="form-check-label" htmlFor="metalAllergy">Metal Alerjisi</label>
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
                            <div className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id="otherAllergy"
                                name="allergies"
                                value="diger"
                                checked={formData.allergies.includes('diger')}
                                onChange={handleCheckboxChange}
                              />
                              <label className="form-check-label" htmlFor="otherAllergy">Diğer</label>
                            </div>
                            {/* Diğer kutucuğu seçiliyse input göster */}
                            {formData.allergies.includes('diger') && (
                              <input
                                type="text"
                                className="form-control mt-2"
                                placeholder="Lütfen belirtiniz"
                                value={otherAllergyText}
                                onChange={e => setOtherAllergyText(e.target.value)}
                                style={{fontSize: '1rem'}}
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Düzenli Kullanılan İlaçlar ve Son 6 Ayda Geçirilen Hastalıklar */}
                    <div className="health-info-section-single">
                      <div>
                        <div className="subsection-title">Düzenli Kullanılan İlaçlar</div>
                        <div className="health-info-box">
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
                      </div>
                      <div>
                        <div className="subsection-title">Son 6 Ayda Geçirilen Önemli Hastalıklar</div>
                        <div className="health-info-box">
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
                    </div>

                    {/* Kan Tahlili Sonuçları */}
                    <div className="blood-test-section">
                      <h4 className="section-subtitle">Kan Tahlili Sonuçları</h4>
                      <div className="file-upload-container excel-upload-modern" onClick={() => {
                        const input = document.getElementById('bloodTestResults') as HTMLInputElement | null;
                        if (input) input.click();
                      }} style={{cursor: 'pointer'}}>
                        <div className="excel-icon-circle">
                          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                            <defs>
                              <linearGradient id="excelGradient" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#4CAF50"/>
                                <stop offset="1" stopColor="#2196F3"/>
                              </linearGradient>
                            </defs>
                            <circle cx="24" cy="24" r="22" fill="url(#excelGradient)" />
                            <rect x="14" y="14" width="20" height="20" rx="4" fill="#fff"/>
                            <text x="24" y="30" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#4CAF50">X</text>
                          </svg>
                        </div>
                        <div className="excel-upload-title">Excel Dosyanızı Seçin veya Sürükleyin</div>
                        <div className="excel-upload-desc">Sadece .xlsx veya .xls formatında dosya yükleyebilirsiniz</div>
                        <input
                          type="file"
                          className="form-control"
                          id="bloodTestResults"
                          accept=".xlsx,.xls,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel"
                          onChange={handleFileChange}
                          required
                          style={{display: 'none'}}
                        />
                      </div>
                    </div>

                    {fileSuccess && (
                      <div style={{color:'#219653', background:'#eafaf1', borderRadius:'8px', padding:'10px 0', marginTop:'10px', fontWeight:600, fontSize:'1.05rem', textAlign:'center'}}>
                        Dosya başarıyla yüklendi.
                      </div>
                    )}

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