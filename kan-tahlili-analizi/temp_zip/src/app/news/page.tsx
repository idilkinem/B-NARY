'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function NewsPage() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  // Örnek haber verileri
  const newsItems = [
    {
      id: 1,
      category: 'general',
      title: 'Düzenli Kan Tahlili Yaptırmanın Önemi',
      summary: 'Uzmanlar, yılda en az bir kez kan tahlili yaptırmanın sağlık açısından önemini vurguluyor.',
      image: 'https://placehold.co/600x400',
      date: '2024-03-15'
    },
    {
      id: 2,
      category: 'research',
      title: 'Yeni Kan Testi Teknolojisi Geliştirildi',
      summary: 'Bilim insanları, daha hızlı ve doğru sonuçlar veren yeni bir kan testi teknolojisi geliştirdi.',
      image: 'https://placehold.co/600x400',
      date: '2024-03-14'
    },
    {
      id: 3,
      category: 'technology',
      title: 'Yapay Zeka Destekli Kan Analizi',
      summary: 'Yapay zeka teknolojisi, kan tahlili sonuçlarının yorumlanmasında devrim yaratıyor.',
      image: 'https://placehold.co/600x400',
      date: '2024-03-13'
    },
    {
      id: 4,
      category: 'nutrition',
      title: 'Kan Değerlerinizi İyileştiren Besinler',
      summary: 'Beslenme uzmanları, kan değerlerini dengede tutmak için tüketilmesi gereken besinleri açıkladı.',
      image: 'https://placehold.co/600x400',
      date: '2024-03-12'
    }
  ];

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
      {/* Arka plan resmi */}
      <div 
        className="fixed inset-0 z-0" 
        style={{
          backgroundImage: 'url("/sağlıkhaber.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.4
        }}
      />
      
      <div className="relative z-10 pt-20 pb-10">
        <div className="container mx-auto px-4">
          {/* Modern Hero Section */}
          <section className="text-center py-5 mb-8" data-aos="fade-up">
            <h1 className="modern-title">Güncel Sağlık Haberleri</h1>
            <p className="text-xl text-gray-600 mb-8">
              Sağlık dünyasındaki en son gelişmeler, araştırmalar ve öneriler burada!
            </p>
          </section>

          {/* Content Box */}
          <div className="bg-white bg-opacity-90 rounded-2xl shadow-xl p-8" data-aos="fade-up">
            {/* News Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newsItems.map(news => (
                <div key={news.id} className="bg-white rounded-lg shadow-lg overflow-hidden" data-aos="fade-up">
                  <img src={news.image} className="w-full h-48 object-cover" alt={news.title} />
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                        {news.category}
                      </span>
                      <span className="text-sm text-gray-500">{news.date}</span>
                    </div>
                    <h5 className="text-xl font-semibold text-gray-800 mb-3">{news.title}</h5>
                    <p className="text-gray-600 mb-4">{news.summary}</p>
                    <Link 
                      href={`/news/${news.category}/${news.id}`} 
                      className="inline-block px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                    >
                      Devamını Oku
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter Section */}
          <section className="newsletter-section py-12 my-8" data-aos="fade-up">
            <div className="bg-white bg-opacity-90 rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Sağlık Bültenimize Abone Olun</h2>
              <p className="text-gray-600 mb-6 text-center">
                En güncel sağlık haberlerini ve önerilerini e-posta kutunuzda alın.
              </p>
              <div className="max-w-md mx-auto">
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <div className="relative">
                    <input 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500" 
                      placeholder="E-posta adresiniz"
                      required 
                    />
                  </div>
                  <button 
                    type="submit" 
                    disabled={isLoading}
                    className={`w-full px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
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