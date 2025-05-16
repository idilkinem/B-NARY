'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const router = useRouter();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        <Link href="/" className="navbar-brand">
          <i className="fas fa-flask me-2"></i>
          Kan Analizi
        </Link>
        <div className="d-flex align-items-center">
          <button 
            onClick={() => scrollToSection('about')} 
            className="nav-link me-4"
            style={{
              background: 'none',
              border: 'none',
              color: '#666',
              fontSize: '0.95rem',
              padding: '0.4rem 0.8rem',
              fontWeight: '500',
              letterSpacing: '0.3px',
              transition: 'all 0.2s ease'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.color = '#333';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.color = '#666';
            }}
          >
            <i className="fas fa-info-circle me-1"></i>
            Hakkımızda
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="nav-link me-4"
          >
            <i className="fas fa-envelope me-1"></i>
            Bize Ulaşın
          </button>
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
  );
}
