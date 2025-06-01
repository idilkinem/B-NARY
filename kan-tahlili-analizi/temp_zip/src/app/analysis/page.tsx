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
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
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
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      // Sadece Excel dosyalarını kabul et
      if (selectedFile.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' || 
          selectedFile.type === 'application/vnd.ms-excel') {
        setFile(selectedFile);
        setIsFormValid(true);
        setError(null);
      } else {
        setError('Lütfen sadece Excel dosyası (.xlsx veya .xls) yükleyin.');
        setFile(null);
        setIsFormValid(false);
      }
    }
  };

  useEffect(() => {
    const isPersonalInfoValid = 
      formData.firstName.trim() !== '' &&
      formData.lastName.trim() !== '' &&
      formData.tcNo.trim() !== '' &&
      formData.tcNo.length === 11 &&
      formData.birthDate !== '';
    const isPhysicalInfoValid = 
      formData.height !== '' &&
      formData.weight !== '' &&
      formData.bloodType !== '' &&
      formData.gender !== '';
    const isHealthInfoValid = 
      (formData.chronicDiseases.length > 0 || formData.chronicDiseases.includes('yok')) &&
      (formData.allergies.length > 0 || formData.allergies.includes('yok'));
    const isFileValid = file !== null;
    setIsFormValid(
      isPersonalInfoValid &&
      isPhysicalInfoValid &&
      isHealthInfoValid &&
      isFileValid
    );
  }, [formData, file]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!file) {
      setError('Lütfen bir Excel dosyası seçin.');
      return;
    }
    setIsLoading(true);
    const form = new FormData();
    form.append('file', file);
    // Kişisel bilgileri de ekle
    Object.entries(formData).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        form.append(key, value.join(','));
      } else {
        form.append(key, value);
      }
    });
    try {
      const res = await fetch('/api/analyze-excel', {
        method: 'POST',
        body: form
      });
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || 'Analiz sırasında hata oluştu.');
      }
      const data = await res.json();
      if (typeof window !== 'undefined') {
        sessionStorage.setItem('analysisResult', JSON.stringify(data));
        router.push('/analysis/result');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Analiz sırasında hata oluştu.');
    } finally {
      setIsLoading(false);
    }
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
                    <div className="mb-3">
                      <label htmlFor="excelFile" className="form-label">Excel Dosyası Yükle</label>
                      <input
                        type="file"
                        className="form-control"
                        id="excelFile"
                        accept=".xlsx,.xls"
                        onChange={handleFileChange}
                        disabled={isLoading}
                      />
                      <small className="text-muted">Sadece .xlsx veya .xls formatında dosya yükleyin</small>
                    </div>
                    {error && (
                      <div className="alert alert-danger" role="alert">
                        <i className="fas fa-exclamation-circle me-2"></i>
                        {error}
                      </div>
                    )}
                    <div className="text-center mt-4">
                      <button 
                        type="submit"
                        className="btn-analyze"
                        disabled={!isFormValid || isLoading}
                      >
                        {isLoading ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                            Analiz Ediliyor...
                          </>
                        ) : (
                          <>
                            <i className="fas fa-flask me-2"></i>
                            Analiz Et
                          </>
                        )}
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