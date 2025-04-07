'use client';

import React from 'react';
import Link from 'next/link';

export default function NewsPage() {
  return (
    <div className="news-page">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="section-title text-center mb-5">Güncel Sağlık Haberleri</h1>
          </div>
        </div>
        
        <div className="row">
          {/* Haber Kartı 1 */}
          <div className="col-md-4 mb-4">
            <div className="news-card">
              <div className="news-image">
                <img src="/news1.jpg" alt="Sağlık Haberi" className="img-fluid" />
              </div>
              <div className="news-content">
                <h3>Düzenli Kan Testi Yaptırmanın Önemi</h3>
                <p>Düzenli kan testleri, hastalıkların erken teşhisinde ve sağlığınızın takibinde kritik rol oynar...</p>
                <Link href="#" className="read-more">Devamını Oku</Link>
              </div>
            </div>
          </div>

          {/* Haber Kartı 2 */}
          <div className="col-md-4 mb-4">
            <div className="news-card">
              <div className="news-image">
                <img src="/news2.jpg" alt="Sağlık Haberi" className="img-fluid" />
              </div>
              <div className="news-content">
                <h3>Yeni Nesil Kan Analiz Teknolojileri</h3>
                <p>Modern tıp teknolojileri, kan analizlerini daha hızlı ve hassas hale getiriyor...</p>
                <Link href="#" className="read-more">Devamını Oku</Link>
              </div>
            </div>
          </div>

          {/* Haber Kartı 3 */}
          <div className="col-md-4 mb-4">
            <div className="news-card">
              <div className="news-image">
                <img src="/news3.jpg" alt="Sağlık Haberi" className="img-fluid" />
              </div>
              <div className="news-content">
                <h3>Sağlıklı Yaşam İçin Beslenme Önerileri</h3>
                <p>Doğru beslenme alışkanlıkları, kan değerlerinizi olumlu yönde etkiler...</p>
                <Link href="#" className="read-more">Devamını Oku</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 