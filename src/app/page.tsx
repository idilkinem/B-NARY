'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

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
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link href="/news" className="nav-link">
                    <i className="fas fa-newspaper me-1"></i>
                    Güncel Sağlık Haberleri
                  </Link>
                </li>
              </ul>
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
                      <h4>Sodyum <span className="element-symbol">Na</span> <img src="/stock-vector-sodium-molecule-models-silver-chemical-formulas-scientific-element-ecology-biochemistry.jpeg" alt="Sodyum elementi" className="element-image" /></h4>
                      <p>Sodyum, vücuttaki sıvı dengesini ve kan basıncını düzenler. Sinir ve kas fonksiyonları için kritik öneme sahiptir. Normal sodyum seviyeleri 135-145 mEq/L arasındadır.</p>
                    </div>
                    <div className="electrolyte-item" data-aos="fade-up" data-aos-delay="200">
                      <h4>Potasyum <span className="element-symbol">K</span> <img src="/download.png" alt="Potasyum elementi" className="element-image" /></h4>
                      <p>Potasyum, hücre içi sıvılardaki en önemli elektrolitlerden biridir ve kalp ritmi, kas kasılması ve sinir iletimi üzerinde doğrudan etkiye sahiptir. Düşük potasyum seviyeleri (hipokalemi) kas güçsüzlüğü, düzensiz kalp atışı ve metabolik asidoza sebep olabilirken, yüksek potasyum seviyeleri (hiperkalemi) ise kalp durmasına kadar ilerleyebilecek ciddi komplikasyonlara neden olabilir.</p>
                    </div>
                    <div className="electrolyte-item" data-aos="fade-up" data-aos-delay="300">
                      <h4>Kalsiyum <span className="element-symbol">Ca</span> <img src="/download2.png" alt="Kalsiyum elementi" className="element-image" /></h4>
                      <p>Kalsiyum, kemik ve diş sağlığı için en önemli minerallerden biridir. Bunun yanı sıra kas kasılması, sinir iletimi, kan pıhtılaşması ve hormonal düzenlemelerde önemli bir rol oynar. Düşük kalsiyum seviyeleri (hipokalsemi) kas krampları ve nörolojik sorunlara yol açabilirken, yüksek seviyeleri (hiperkalsemi) böbrek taşları ve kalp ritim bozuklukları gibi ciddi sağlık sorunlarına neden olabilir.</p>
                    </div>
                    <div className="electrolyte-item" data-aos="fade-up" data-aos-delay="400">
                      <h4>Magnezyum <span className="element-symbol">Mg</span></h4>
                      <p>Magnezyum, enzim fonksiyonları, enerji üretimi ve kas- sinir sisteminin düzenlenmesi için gereklidir. Eksikliği, kas krampları, yorgunluk ve sinir sistemi bozukluklarına sebep olabilir. Aşırı yüksek magnezyum seviyeleri ise tansiyon düşüklüğü, solunum depresyonu ve kalp durmasına yol açabilir.</p>
                    </div>
                    <div className="electrolyte-item" data-aos="fade-up" data-aos-delay="500">
                      <h4>Klor <span className="element-symbol">Cl</span></h4>
                      <p>Klor, vücut sıvılarının asit-baz dengesini koruyan ve mide asidinin üretiminde görev alan önemli bir elektrolittir. Eksikliği, mide sorunları ve asit-baz dengesizliğine yol açabilir. Fazla klor alımı ise yüksek tansiyon ve sıvı dengesizliği gibi problemlere neden olabilir.</p>
                    </div>
                    <div className="electrolyte-item" data-aos="fade-up" data-aos-delay="600">
                      <h4>Fosfat <span className="element-symbol">P</span></h4>
                      <p>Fosfat, enerji üretimi, DNA ve RNA sentezi gibi hücresel süreçlerde temel bir bileşendir. Kas ve sinir fonksiyonlarını destekler ve kemik sağlığı için kalsiyum ile birlikte çalışır. Düşük fosfat seviyeleri yorgunluk, kas zayıflığı ve kemik deformasyonlarına neden olabilirken, yüksek seviyeler böbrek hastalıkları ile ilişkilendirilebilir.</p>
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
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center" data-aos="fade-up">
                <h2 className="section-title">Hakkımızda</h2>
                <p className="section-text">
                  KanAnaliz olarak, modern tıp teknolojilerini kullanarak kan değerlerinizi 
                  detaylı şekilde analiz ediyoruz. Uzman kadromuz ve son teknoloji 
                  ekipmanlarımızla size en doğru sonuçları sunuyoruz.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="contact-section">
          <div className="container">
            <h2 className="section-title text-center mb-5" data-aos="fade-up">İletişim</h2>
            <div className="row">
              <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
                <div className="contact-info">
                  <i className="fas fa-map-marker-alt mb-3"></i>
                  <h5>Adres</h5>
                  <p>Üniversite, 23200 Elazığ Merkez/Elazığ</p>
                </div>
              </div>
              <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
                <div className="contact-info">
                  <i className="fas fa-phone mb-3"></i>
                  <h5>Telefon</h5>
                  <p>+90 (212) 123 45 67<br />+90 (532) 987 65 43</p>
                </div>
              </div>
              <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
                <div className="contact-info">
                  <i className="fas fa-envelope mb-3"></i>
                  <h5>E-posta</h5>
                  <p>info@kananaliz.com<br />destek@kananaliz.com</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        </div>
      </main>
  );
}
