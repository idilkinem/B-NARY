'use client';

import {useState, useEffect} from 'react';
import {useRouter} from 'next/navigation';
import Link from 'next/link';

export default function Analysis() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        tcNo: '',
        birthDate: '',
        height: '',
        weight: '',
        bloodType: '',
        gender: '',
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

    const [otherChronicText, setOtherChronicText] = useState('');
    const [otherAllergyText, setOtherAllergyText] = useState('');
    const [fileSuccess, setFileSuccess] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const data = sessionStorage.getItem('analysisFormData');
            if (data) {
                setFormData(JSON.parse(data));
            }
        }
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value, checked} = e.target;
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
            const selected = e.target.files[0];
            if (
                selected.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' ||
                selected.type === 'application/vnd.ms-excel'
            ) {
                setFile(selected);
                setFileSuccess(true);
                setError(null);
            } else {
                setError('Lütfen sadece Excel dosyası (.xlsx veya .xls) yükleyin.');
                setFile(null);
                setFileSuccess(false);
            }
        } else {
            setFile(null);
            setFileSuccess(false);
        }
    };

    const handleTcNoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/[^0-9]/g, '');
        if (value.length <= 11) {
            setFormData(prev => ({...prev, tcNo: value}));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        sessionStorage.setItem('analysisFormData', JSON.stringify({
            ...formData,
            fileName: file ? file.name : ''
        }));
        router.push('/analysis/result');
    };

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
                                                        onChange={handleTcNoChange}
                                                        required
                                                        inputMode="numeric"
                                                        pattern="[0-9]*"
                                                        maxLength={11}
                                                    />
                                                </div>
                                                <div className="col-md-6 mb-3">
                                                    <label htmlFor="birthDate" className="form-label">Doğum
                                                        Tarihi</label>
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
                                        {/* ... (keep your health info, allergies, and other sections as in your original code) ... */}

                                        {/* Kan Tahlili Sonuçları */}
                                        <div className="blood-test-section">
                                            <h4 className="section-subtitle">Kan Tahlili Sonuçları</h4>
                                            <div className="file-upload-container excel-upload-modern" onClick={() => {
                                                const input = document.getElementById('bloodTestResults') as HTMLInputElement | null;
                                                if (input) input.click();
                                            }} style={{cursor: 'pointer'}} tabIndex={0} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { const input = document.getElementById('bloodTestResults') as HTMLInputElement | null; if (input) input.click(); } }}>
                                                <div className="excel-icon-circle">
                                                    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <circle cx="18" cy="18" r="18" fill="#217346"/>
                                                        <g>
                                                            <rect x="10" y="10" width="16" height="16" rx="2" fill="#fff"/>
                                                            <path d="M14 14L22 22M22 14L14 22" stroke="#217346" strokeWidth="2" strokeLinecap="round"/>
                                                            <text x="18" y="20.5" textAnchor="middle" fontSize="8" fill="#217346" fontWeight="bold" fontFamily="Arial">X</text>
                                                        </g>
                                                    </svg>
                                                </div>
                                                <div className="excel-upload-title">Excel Dosyanızı Seçin veya
                                                    Sürükleyin
                                                </div>
                                                <div className="excel-upload-desc">Sadece .xlsx veya .xls formatında
                                                    dosya yükleyebilirsiniz
                                                </div>
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
                                            <div style={{
                                                color: '#219653',
                                                background: '#eafaf1',
                                                borderRadius: '8px',
                                                padding: '10px 0',
                                                marginTop: '10px',
                                                fontWeight: 600,
                                                fontSize: '1.05rem',
                                                textAlign: 'center'
                                            }}>
                                                Dosya başarıyla yüklendi.
                                            </div>
                                        )}

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
                                            >
                                                {isLoading ? (
                                                    <>
                                                        <span className="spinner-border spinner-border-sm me-2"
                                                              role="status" aria-hidden="true"></span>
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