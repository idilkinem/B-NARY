'use client';

import Link from 'next/link';

export default function NewsNavbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top" style={{ 
      backgroundColor: '#1a237e',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <div className="container">
        <Link href="/news" className="navbar-brand d-flex align-items-center">
          <div className="d-flex align-items-center">
            <div className="news-logo me-2">
              <i className="fas fa-newspaper" style={{ 
                fontSize: '1.8rem',
                color: '#fff',
                background: 'linear-gradient(45deg, #ff4081, #7c4dff)',
                padding: '8px',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
              }}></i>
            </div>
            <div className="d-flex flex-column">
              <span style={{ 
                color: '#ff4081',
                fontSize: '1.2rem',
                fontWeight: '700',
                letterSpacing: '0.5px',
                textShadow: '1px 1px 2px rgba(0,0,0,0.2)'
              }}>Sağlık Haberleri</span>
              <span style={{ 
                color: '#7c4dff',
                fontSize: '0.8rem',
                fontWeight: '600',
                letterSpacing: '1px',
                textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
              }}>GÜNCEL BİLGİLER</span>
            </div>
          </div>
        </Link>
        <div className="d-flex align-items-center">
          <Link href="/" className="nav-link me-4" style={{ 
            color: '#ff4081',
            fontWeight: '600',
            fontSize: '1rem',
            transition: 'color 0.3s ease',
            textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
          }}>
            <i className="fas fa-home me-1"></i>
            Ana Sayfa
          </Link>
          <div className="dropdown">
            <button 
              className="btn btn-link nav-link dropdown-toggle me-4" 
              type="button" 
              data-bs-toggle="dropdown" 
              aria-expanded="false"
              style={{ 
                color: '#ff4081',
                fontWeight: '600',
                fontSize: '1rem',
                textDecoration: 'none',
                transition: 'color 0.3s ease',
                textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
              }}
            >
              <i className="fas fa-newspaper me-1"></i>
              Kategoriler
            </button>
            <ul className="dropdown-menu" style={{
              backgroundColor: '#fff',
              border: 'none',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              borderRadius: '8px'
            }}>
              <li>
                <Link href="/news/general" className="dropdown-item py-2" style={{
                  color: '#1a237e',
                  fontWeight: '500',
                  transition: 'all 0.3s ease'
                }}>
                  <i className="fas fa-globe me-2"></i>
                  Genel Sağlık
                </Link>
              </li>
              <li>
                <Link href="/news/research" className="dropdown-item py-2" style={{
                  color: '#1a237e',
                  fontWeight: '500',
                  transition: 'all 0.3s ease'
                }}>
                  <i className="fas fa-microscope me-2"></i>
                  Araştırmalar
                </Link>
              </li>
              <li>
                <Link href="/news/technology" className="dropdown-item py-2" style={{
                  color: '#1a237e',
                  fontWeight: '500',
                  transition: 'all 0.3s ease'
                }}>
                  <i className="fas fa-laptop-medical me-2"></i>
                  Sağlık Teknolojileri
                </Link>
              </li>
              <li>
                <Link href="/news/nutrition" className="dropdown-item py-2" style={{
                  color: '#1a237e',
                  fontWeight: '500',
                  transition: 'all 0.3s ease'
                }}>
                  <i className="fas fa-apple-alt me-2"></i>
                  Beslenme
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
} 