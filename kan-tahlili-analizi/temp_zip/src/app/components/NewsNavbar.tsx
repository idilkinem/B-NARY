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
            <div className="news-logo me-3" style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 16px rgba(56, 249, 215, 0.15)',
              border: '2px solid #fff',
            }}>
              <i className="fas fa-heartbeat" style={{
                fontSize: '2rem',
                color: '#fff',
                textShadow: '0 2px 8px rgba(67, 233, 123, 0.3)',
              }}></i>
              <i className="fas fa-newspaper" style={{
                fontSize: '1.2rem',
                color: '#fff',
                marginLeft: '-10px',
                opacity: 0.7,
                textShadow: '0 2px 8px rgba(56, 249, 215, 0.2)',
              }}></i>
            </div>
            <div className="d-flex flex-column ms-2">
              <span style={{
                color: '#1a237e',
                fontSize: '1.3rem',
                fontWeight: '800',
                letterSpacing: '0.5px',
                textShadow: '1px 1px 2px rgba(56,249,215,0.12)',
                textTransform: 'uppercase',
                fontFamily: 'Segoe UI, sans-serif',
              }}>Sağlık Haberleri</span>
              <span style={{
                color: '#43e97b',
                fontSize: '0.9rem',
                fontWeight: '700',
                letterSpacing: '1px',
                textShadow: '1px 1px 2px rgba(67,233,123,0.08)',
                textTransform: 'uppercase',
                fontFamily: 'Segoe UI, sans-serif',
              }}>Güncel Bilgiler</span>
            </div>
          </div>
        </Link>
        <div className="d-flex align-items-center">
          <Link href="/" className="nav-link me-4" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'linear-gradient(90deg, #43e97b 0%, #38f9d7 100%)',
            color: '#fff',
            fontWeight: 700,
            fontSize: '1rem',
            borderRadius: '999px',
            padding: '0.6rem 1.4rem',
            boxShadow: '0 2px 8px rgba(56,249,215,0.15)',
            border: 'none',
            textShadow: '1px 1px 2px rgba(56,249,215,0.12)',
            transition: 'all 0.2s',
            textDecoration: 'none',
            outline: 'none',
          }}
          onMouseOver={e => e.currentTarget.style.background = 'linear-gradient(90deg, #38f9d7 0%, #43e97b 100%)'}
          onMouseOut={e => e.currentTarget.style.background = 'linear-gradient(90deg, #43e97b 0%, #38f9d7 100%)'}
          >
            <i className="fas fa-home" style={{ fontSize: '1.2rem', color: '#fff', filter: 'drop-shadow(0 1px 2px #38f9d7)' }}></i>
            Ana Sayfa
          </Link>
        </div>
      </div>
    </nav>
  );
} 