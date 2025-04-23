'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function NewsPage() {
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
          {/* Hero Section */}
          <section className="text-center py-5" data-aos="fade-up">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Güncel Sağlık Haberleri</h1>
            <p className="text-xl text-gray-600 mb-4">
              Sağlık dünyasındaki en son gelişmeler, araştırmalar ve öneriler burada!
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <Link href="/news/general" className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                Genel Sağlık
              </Link>
              <Link href="/news/research" className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                Araştırmalar
              </Link>
              <Link href="/news/technology" className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                Sağlık Teknolojileri
              </Link>
              <Link href="/news/nutrition" className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                Beslenme
              </Link>
            </div>
          </section>

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

          {/* Newsletter Section */}
          <section className="mt-16" data-aos="fade-up">
            <div className="bg-white bg-opacity-90 rounded-xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Sağlık Bültenimize Abone Olun</h2>
              <p className="text-gray-600 mb-6 text-center">
                En güncel sağlık haberlerini ve önerilerini e-posta kutunuzda alın.
              </p>
              <div className="max-w-md mx-auto">
                <form className="flex gap-3">
                  <input 
                    type="email" 
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    placeholder="E-posta adresiniz" 
                  />
                  <button 
                    type="submit" 
                    className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                  >
                    Abone Ol
                  </button>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
} 