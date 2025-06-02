'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { NewsService } from '../services/NewsService';

export default function NewsPage() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [newsItems, setNewsItems] = useState<any[]>([]);
  const [newsLoading, setNewsLoading] = useState(true);
  const [newsError, setNewsError] = useState('');

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  useEffect(() => {
    const fetchNews = async () => {
      setNewsLoading(true);
      setNewsError('');
      try {
        const service = new NewsService();
        const articles = await service.getHealthNews(10, 1);
        setNewsItems(articles);
      } catch (err) {
        setNewsError('Haberler alınırken bir hata oluştu.');
      } finally {
        setNewsLoading(false);
      }
    };
    fetchNews();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage('');
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();
      if (response.ok) {
        setMessage('Abone olduğunuz için teşekkür ederiz!');
        setEmail('');
      } else {
        setMessage(data.error || 'Bir hata oluştu. Lütfen tekrar deneyin.');
      }
    } catch (error) {
      setMessage('Bir hata oluştu. Lütfen tekrar deneyin.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen relative">
      {/* Animasyonlu Arka Plan */}
      <div className="animated-bg fixed inset-0 -z-10">
        <div className="animated-bg-dot dot1"></div>
        <div className="animated-bg-dot dot2"></div>
        <div className="animated-bg-dot dot3"></div>
        <div className="animated-bg-dot dot4"></div>
        <div className="animated-bg-dot dot5"></div>
        <div className="animated-bg-dot dot6"></div>
        <div className="animated-bg-dot dot7"></div>
        <div className="animated-bg-dot dot8"></div>
        <div className="animated-bg-dot dot9"></div>
        <div className="animated-bg-dot dot10"></div>
        <div className="animated-bg-dot dot11"></div>
        <div className="animated-bg-dot dot12"></div>
        <div className="animated-bg-dot dot13"></div>
        <div className="animated-bg-dot dot14"></div>
        <div className="animated-bg-dot dot15"></div>
        <div className="animated-bg-dot dot16"></div>
        <div className="animated-bg-dot dot17"></div>
        <div className="animated-bg-dot dot18"></div>
        <div className="animated-bg-dot dot19"></div>
        <div className="animated-bg-dot dot20"></div>
      </div>
      
      <div className="relative z-10 pt-20 pb-10">
        <div className="container mx-auto max-w-4xl px-4">
          {/* Hero Section */}
          <section className="hero-section z-20 relative">
            <div className="container">
              <div className="hero-content" data-aos="fade-up">
                <h1 className="hero-title text-gray-900"
                    style={{
                      color: '#1a237e',
                      background: 'none',
                      fontFamily: 'Poppins, Montserrat, Segoe UI, sans-serif',
                      fontWeight: 900,
                      fontSize: '3.2rem',
                      letterSpacing: '2px',
                      textShadow: '0 4px 24px rgba(26,35,126,0.18), 0 1px 0 #fff',
                      lineHeight: 1.1,
                      zIndex: 20,
                      position: 'relative',
                      marginBottom: '0.5rem',
                    }}>
                  Güncel Sağlık Haberleri
                  <span style={{
                    display: 'block',
                    width: '120px',
                    height: '4px',
                    background: 'linear-gradient(90deg, #1a237e 0%, #43e97b 100%)',
                    borderRadius: '2px',
                    margin: '18px auto 0',
                    boxShadow: '0 2px 8px rgba(26,35,126,0.18)'
                  }}></span>
                </h1>
                <p className="hero-subtitle text-gray-800 mb-6" style={{color:'#222', zIndex:20, position:'relative'}}>
                  Sağlık dünyasındaki en yeni gelişmeleri, bilimsel araştırmaları ve önerileri burada bulabilirsiniz. 
                  Güvenilir kaynaklardan alınan, uzmanlar tarafından incelenen içeriklerle bilinçli bir yaşam için güncel kalın!
                </p>

                {/* Özellikler */}
                <div className="row justify-content-center mb-6 g-4">
                  <div className="col-md-4" data-aos="fade-up" data-aos-delay="200">
                    <div className="feature-item" style={{
                      minHeight: '180px',
                      background: '#fff',
                      borderRadius: '1rem',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '1.5rem 1rem',
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '56px',
                        height: '56px',
                        borderRadius: '50%',
                        background: 'rgba(76,175,80,0.08)',
                        marginBottom: '1rem',
                      }}>
                        <i className="fas fa-check-circle" style={{ fontSize: '2rem', color: '#4CAF50' }}></i>
                      </div>
                      <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#1a237e', marginBottom: '0.5rem', textAlign: 'center' }}>Güvenilir Kaynaklar</h4>
                      <p style={{ fontSize: '0.97rem', color: '#444', textAlign: 'center', margin: 0 }}>Doğruluğu teyit edilmiş, güvenilir kaynaklardan alınan haberler</p>
                    </div>
                  </div>
                  <div className="col-md-4" data-aos="fade-up" data-aos-delay="300">
                    <div className="feature-item" style={{
                      minHeight: '180px',
                      background: '#fff',
                      borderRadius: '1rem',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '1.5rem 1rem',
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '56px',
                        height: '56px',
                        borderRadius: '50%',
                        background: 'rgba(129,199,132,0.10)',
                        marginBottom: '1rem',
                      }}>
                        <i className="fas fa-clock" style={{ fontSize: '2rem', color: '#81C784' }}></i>
                      </div>
                      <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#1a237e', marginBottom: '0.5rem', textAlign: 'center' }}>Günlük Güncelleme</h4>
                      <p style={{ fontSize: '0.97rem', color: '#444', textAlign: 'center', margin: 0 }}>24 saat içinde güncellenen en son sağlık haberleri</p>
                    </div>
                  </div>
                  <div className="col-md-4" data-aos="fade-up" data-aos-delay="400">
                    <div className="feature-item" style={{
                      minHeight: '180px',
                      background: '#fff',
                      borderRadius: '1rem',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '1.5rem 1rem',
                    }}>
                      <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '56px',
                        height: '56px',
                        borderRadius: '50%',
                        background: 'rgba(102,187,106,0.10)',
                        marginBottom: '1rem',
                      }}>
                        <i className="fas fa-user-md" style={{ fontSize: '2rem', color: '#66BB6A' }}></i>
                      </div>
                      <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#1a237e', marginBottom: '0.5rem', textAlign: 'center' }}>Uzman Kontrolü</h4>
                      <p style={{ fontSize: '0.97rem', color: '#444', textAlign: 'center', margin: 0 }}>Uzman doktorlar tarafından incelenen içerikler</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Content Box */}
          <div className="bg-white bg-opacity-95 rounded-2xl shadow-xl p-8 z-20 relative" data-aos="fade-up">
            {/* News Grid */}
            {newsLoading ? (
              <div className="text-center text-lg text-gray-500">Haberler yükleniyor...</div>
            ) : newsError ? (
              <div className="text-center text-red-600">{newsError}</div>
            ) : (
              <div className="news-page">
                {newsItems.map((news, idx) => (
                  <div key={idx} className="news-card z-20 relative">
                    <div className="news-image">
                      <img 
                        src={news.urlToImage || 'https://placehold.co/600x400'} 
                        alt={news.title} 
                      />
                    </div>
                    <div className="news-content">
                      <div className="flex justify-between items-center mb-2">
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">
                          {news.source?.name || 'Sağlık'}
                        </span>
                        <span className="text-xs text-gray-700">{news.publishedAt?.slice(0, 10)}</span>
                      </div>
                      <h3 className="text-gray-900" style={{color:'#1a1a1a'}}>{news.title}</h3>
                      <p className="text-gray-800" style={{color:'#222'}}>{news.description || ''}</p>
                      <a 
                        href={news.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="read-more-btn"
                      >
                        Haberi Oku
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Newsletter Section */}
          <section className="newsletter-section py-12 my-8" data-aos="fade-up">
            <div className="contact-form">
              <h2 
                className="newsletter-title mb-2"
                style={{
                  fontSize: '2.2rem',
                  fontWeight: 800,
                  color: '#1a237e',
                  letterSpacing: '1px',
                  textAlign: 'center',
                  textShadow: '0 2px 8px rgba(26,35,126,0.10)',
                  position: 'relative',
                  marginBottom: '0.7rem',
                  fontFamily: 'Poppins, Montserrat, Segoe UI, sans-serif',
                }}
              >
                Sağlık Bültenimize Abone Olun
                <span style={{
                  display: 'block',
                  width: '80px',
                  height: '4px',
                  background: 'linear-gradient(90deg, #4CAF50 0%, #43e97b 100%)',
                  borderRadius: '2px',
                  margin: '14px auto 0',
                  boxShadow: '0 2px 8px rgba(76,175,80,0.18)'
                }}></span>
              </h2>
              <div className="newsletter-subtitle text-gray-700 mb-6" style={{fontSize:'1.08rem',textAlign:'center',maxWidth:'420px',margin:'0 auto 1.5rem auto',color:'#333',fontWeight:500}}>
                En güncel sağlık haberlerini ve önerilerini e-posta kutunuzda almak için hemen abone olun.
              </div>
              <div className="max-w-md mx-auto">
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <div className="form-group">
                    <input 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control" 
                      placeholder="E-posta adresiniz"
                      required 
                    />
                  </div>
                  <button 
                    type="submit" 
                    disabled={isLoading}
                    className="btn-send flex items-center justify-center gap-2"
                  >
                    <i className="fas fa-envelope"></i>
                    {isLoading ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Gönderiliyor...
                      </span>
                    ) : 'Abone Ol'}
                  </button>
                  {message && (
                    <div className={`text-center mt-3 ${message.includes('teşekkür') ? 'text-green-600' : 'text-red-600'}`}>
                      {message}
                    </div>
                  )}
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
} 