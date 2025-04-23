'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: `${formData.name} ${formData.surname}`,
          email: formData.email,
          subject: 'Yeni İletişim Formu Mesajı',
          message: formData.message
        }),
      });

      if (response.ok) {
        alert('Mesajınız başarıyla gönderildi!');
        setFormData({ name: '', surname: '', email: '', message: '' });
      } else {
        alert('Mesaj gönderilirken bir hata oluştu. Lütfen tekrar deneyin.');
      }
    } catch (error) {
      alert('Bir hata oluştu. Lütfen tekrar deneyin.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <main>
      <div className="modern-background"></div>
      <div className="page-content">
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg fixed-top">
          <div className="container">
            <Link href="/" className="navbar-brand">
              <i className="fas fa-flask me-2"></i>
              Kan Analizi
            </Link>
            <div className="d-flex align-items-center">
              <Link href="/news" className="nav-link me-4">
                <i className="fas fa-newspaper me-1"></i>
                Güncel Sağlık Haberleri
              </Link>
              <Link href="/analysis" className="btn-analyze">
                <i className="fas fa-flask me-1"></i>
                Analiz Et
              </Link>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="hero-section">
          <div className="container">
            <div className="hero-content" data-aos="fade-up">
              <h1 className="hero-title">Kan Analizi ile Sağlığınızı Keşfedin</h1>
              <p className="hero-subtitle">
                Modern teknoloji ve uzman kadromuzla kan değerlerinizi analiz ediyor, 
                sağlığınız hakkında detaylı bilgi sunuyoruz.
              </p>
              <Link href="/analysis" className="btn-analyze mt-4">
                <i className="fas fa-flask"></i>
                Analize Başla
              </Link>
            </div>
          </div>
        </section>

        {/* Electrolytes Section */}
        <section className="electrolytes-section">
          <div className="container">
            <h2 className="section-title text-center mb-5" data-aos="fade-up">Elektrolitler ve Minerallerin Vücuttaki Önemi</h2>
            <div className="row">
              <div className="col-lg-12" data-aos="fade-up">
                <div className="electrolytes-content">
                  <p className="section-text">
                    Elektrolitler ve mineraller, vücut sıvılarında çözünerek elektrik yükü taşıyan ve temel biyokimyasal süreçlerde kritik rol oynayan bileşiklerdir. Bunlar, sinir iletimi, kas kasılması, hücresel metabolizma ve sıvı dengesinin korunması gibi yaşamsal işlevlerde hayati öneme sahiptir. Kan testiyle ölçülen başlıca elektrolitler arasında sodyum (Na⁺), potasyum (K⁺), kalsiyum (Ca²⁺), magnezyum (Mg²⁺), klor (Cl⁻) ve fosfat (PO₄³⁻) bulunur.
                  </p>
                  <div className="electrolytes-grid">
                    <div className="electrolyte-item" data-aos="fade-up" data-aos-delay="100">
                      <h4>Sodyum <span className="element-symbol">Na</span></h4>
                      <p>Sıvı dengesi ve kan basıncı kontrolü için temel elektrolit. Normal değer: 135-145 mEq/L.</p>
                    </div>
                    <div className="electrolyte-item" data-aos="fade-up" data-aos-delay="200">
                      <h4>Potasyum <span className="element-symbol">K</span></h4>
                      <p>Kalp ritmi ve kas fonksiyonları için hayati. Düşüklüğü kas güçsüzlüğüne, yüksekliği kalp sorunlarına neden olabilir.</p>
                    </div>
                    <div className="electrolyte-item" data-aos="fade-up" data-aos-delay="300">
                      <h4>Kalsiyum <span className="element-symbol">Ca</span></h4>
                      <p>Kemik sağlığı, kas kasılması ve sinir iletimi için gerekli. Dengesi hormonal sistemle yakından ilişkili.</p>
                    </div>
                    <div className="electrolyte-item" data-aos="fade-up" data-aos-delay="400">
                      <h4>Magnezyum <span className="element-symbol">Mg</span></h4>
                      <p>Enerji üretimi ve sinir-kas sistemi için önemli. Eksikliği yorgunluk ve kas kramplarına yol açar.</p>
                    </div>
                    <div className="electrolyte-item" data-aos="fade-up" data-aos-delay="500">
                      <h4>Klor <span className="element-symbol">Cl</span></h4>
                      <p>Asit-baz dengesi ve mide asidi üretiminde kritik rol oynar. Vücut sıvılarının dengesini sağlar.</p>
                    </div>
                    <div className="electrolyte-item" data-aos="fade-up" data-aos-delay="600">
                      <h4>Fosfat <span className="element-symbol">P</span></h4>
                      <p>Enerji metabolizması ve kemik yapısı için temel mineral. DNA sentezi ve hücre yenilenmesinde görevli.</p>
                    </div>
                  </div>
                  <p className="section-text mt-4">
                    Elektrolit dengesizlikleri, çeşitli metabolik hastalıkların ve sistemik bozuklukların erken teşhisinde kritik bir göstergedir. Bu nedenle, düzenli kan testleri ile elektrolit seviyelerinin kontrol edilmesi ve uzman hekim tarafından değerlendirilmesi büyük önem taşımaktadır.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="feature-section">
          <div className="container">
            <h2 className="section-title text-center mb-5" data-aos="fade-up">Özelliklerimiz</h2>
            <div className="row">
              <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
                <div className="feature-item">
                  <div className="feature-icon">
                    <i className="fas fa-microscope"></i>
                  </div>
                  <div className="feature-content">
                    <h4>Detaylı Analiz</h4>
                    <p>En son teknoloji ile kan değerlerinizi detaylı şekilde analiz ediyoruz.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
                <div className="feature-item">
                  <div className="feature-icon">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div className="feature-content">
                    <h4>Hızlı Sonuç</h4>
                    <p>Test sonuçlarınızı anında yorumlayabilirsiniz.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
                <div className="feature-item">
                  <div className="feature-icon">
                    <i className="fas fa-user-md"></i>
                  </div>
                  <div className="feature-content">
                    <h4>Uzman Kadro</h4>
                    <p>Uzman kişilerce geliştirilen bu siteyle sonuçlarınızı en doğru şekilde değerlendirebilirsiniz.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="about-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 text-start" data-aos="fade-up">
                <h2 className="section-title">Hakkımızda</h2>
                <p className="section-text" style={{ color: '#1a1a1a', fontWeight: '500' }}>
                  Kan değerlerinizi anlamak ve yorumlamak artık çok daha kolay!<br />
                  Kan Analiz platformu olarak, sağlık verilerinizi anlaşılır ve kullanışlı bir şekilde analiz etmeyi hedefliyoruz. Uzman ekibimiz ve gelişmiş algoritmamız sayesinde:
                </p>
                <div className="feature-list">
                  <div className="feature-item">
                    <div className="feature-icon">
                      <i className="fas fa-check"></i>
                    </div>
                    <p style={{ color: '#1a1a1a', fontWeight: '500' }}>Kan değerlerinizi profesyonelce analiz eder.</p>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">
                      <i className="fas fa-check"></i>
                    </div>
                    <p style={{ color: '#1a1a1a', fontWeight: '500' }}>Anormallikleri hızlıca tespit eder.</p>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">
                      <i className="fas fa-check"></i>
                    </div>
                    <p style={{ color: '#1a1a1a', fontWeight: '500' }}>Kişiselleştirilmiş öneriler sunar.</p>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">
                      <i className="fas fa-check"></i>
                    </div>
                    <p style={{ color: '#1a1a1a', fontWeight: '500' }}>Sağlık geçmişinizi takip eder.</p>
                  </div>
                </div>
                <p className="section-text mt-4" style={{ color: '#1a1a1a', fontWeight: '500' }}>
                  Sizler için en iyi hizmeti sunmak için sürekli kendimizi geliştiriyor ve teknolojilerimizi güncelliyoruz.
                </p>
              </div>
              <div className="col-lg-6 d-flex align-items-center" data-aos="fade-up">
                <div className="row w-100">
                  <div className="col-6 mb-4">
                    <div className="stat-item text-center">
                      <h3 className="stat-number" style={{ color: 'var(--accent-color)', fontSize: '2.5rem', fontWeight: '700' }}>10K+</h3>
                      <p className="stat-label" style={{ color: '#1a1a1a', fontSize: '1.1rem' }}>Analiz Edilen Kan Tahlili</p>
                    </div>
                  </div>
                  <div className="col-6 mb-4">
                    <div className="stat-item text-center">
                      <h3 className="stat-number" style={{ color: 'var(--accent-color)', fontSize: '2.5rem', fontWeight: '700' }}>%99</h3>
                      <p className="stat-label" style={{ color: '#1a1a1a', fontSize: '1.1rem' }}>Doğruluk Oranı</p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="stat-item text-center">
                      <h3 className="stat-number" style={{ color: 'var(--accent-color)', fontSize: '2.5rem', fontWeight: '700' }}>24/7</h3>
                      <p className="stat-label" style={{ color: '#1a1a1a', fontSize: '1.1rem' }}>Kesintisiz Hizmet</p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="stat-item text-center">
                      <h3 className="stat-number" style={{ color: 'var(--accent-color)', fontSize: '2.5rem', fontWeight: '700' }}>100%</h3>
                      <p className="stat-label" style={{ color: '#1a1a1a', fontSize: '1.1rem' }}>Güvenli Veri</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact-section">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h2 className="contact-title" data-aos="fade-up">Bize Ulaşın</h2>
                <div className="contact-info">
                  <div className="contact-item" data-aos="fade-up" data-aos-delay="100">
                    <i className="fas fa-map-marker-alt"></i>
                    <div>
                      <h5>Adres</h5>
                      <p>Üniversite, 23200 Elazığ Merkez/Elazığ</p>
                    </div>
                  </div>
                  <div className="contact-item" data-aos="fade-up" data-aos-delay="200">
                    <i className="fas fa-phone"></i>
                    <div>
                      <h5>Telefon</h5>
                      <p>+90 (212) 123 45 67<br />+90 (532) 987 65 43</p>
                    </div>
                  </div>
                  <div className="contact-item" data-aos="fade-up" data-aos-delay="300">
                    <i className="fas fa-envelope"></i>
                    <div>
                      <h5>E-posta</h5>
                      <p>info@kananaliz.com<br />destek@kananaliz.com</p>
                    </div>
                  </div>
                  <div className="contact-item" data-aos="fade-up" data-aos-delay="400">
                    <i className="fas fa-clock"></i>
                    <div>
                      <h5>Çalışma Saatleri</h5>
                      <p>Pazartesi - Cuma: 09:00 - 18:00<br />Cumartesi: 10:00 - 14:00</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                <div className="contact-form">
                  <h3>Mesaj Gönderin</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group">
                      <input 
                        type="text" 
                        name="name"
                        className="form-control" 
                        placeholder="Adınız" 
                        value={formData.name}
                        onChange={handleChange}
                        required 
                      />
                    </div>
                    <div className="form-group">
                      <input 
                        type="text" 
                        name="surname"
                        className="form-control" 
                        placeholder="Soyadınız" 
                        value={formData.surname}
                        onChange={handleChange}
                        required 
                      />
                    </div>
                    <div className="form-group">
                      <input 
                        type="email" 
                        name="email"
                        className="form-control" 
                        placeholder="E-posta Adresiniz" 
                        value={formData.email}
                        onChange={handleChange}
                        required 
                      />
                    </div>
                    <div className="form-group">
                      <textarea 
                        name="message"
                        className="form-control" 
                        rows={5} 
                        placeholder="Mesajınız" 
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                    </div>
                    <button 
                      type="submit" 
                      className="btn-send" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <i className="fas fa-spinner fa-spin me-2"></i>
                          Gönderiliyor...
                        </>
                      ) : (
                        <>
                      <i className="fas fa-paper-plane me-2"></i>
                      Mesaj Gönder
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        </div>
      </main>
  );
}
