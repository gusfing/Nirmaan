import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Compass, ArrowUpRight } from 'lucide-react';
import AudioAmbience, { playTactileClick } from './AudioAmbience';
import { STUDIO_META } from '../data/studioData';

export default function Navbar({ onOpenConsultation, isAudioPlaying, onToggleAudio, onCursorEnter, onCursorLeave }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Works', href: '#works' },
    { label: 'Disciplines', href: '#services' },
    { label: 'Material Lab', href: '#materials' },
    { label: 'Estimator', href: '#calculator' },
    { label: 'Leadership', href: '#leadership' },
    { label: 'Pan-India', href: '#footprint' },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    playTactileClick();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 1000,
          padding: scrolled ? '12px 24px' : '20px 32px',
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      >
        <div
          style={{
            maxWidth: '1440px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: scrolled ? 'rgba(15, 14, 13, 0.82)' : 'rgba(15, 14, 13, 0.5)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: `1px solid ${scrolled ? 'rgba(200, 169, 126, 0.25)' : 'rgba(255, 255, 255, 0.08)'}`,
            borderRadius: '16px',
            padding: '10px 24px',
            boxShadow: scrolled ? '0 20px 40px -15px rgba(0, 0, 0, 0.7)' : 'none',
          }}
        >
          {/* Brand Identity & Monogram */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            onMouseEnter={() => onCursorEnter?.('HOME')}
            onMouseLeave={onCursorLeave}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              textDecoration: 'none',
              color: 'var(--text-main)',
            }}
          >
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #1b1916 0%, #0b0a09 100%)',
                border: '1px solid rgba(200, 169, 126, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 15px rgba(200, 169, 126, 0.2)',
              }}
            >
              <svg width="22" height="22" viewBox="0 0 100 100" fill="none">
                <path
                  d="M22 80 V20 L50 60 L78 20 V80"
                  stroke="#C8A97E"
                  strokeWidth="9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  lineHeight: 1.1,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <span>NIRMAAN</span>
                <span
                  style={{
                    fontSize: '0.55rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--gold-primary)',
                    padding: '2px 5px',
                    border: '1px solid var(--border-gold)',
                    borderRadius: '3px',
                    letterSpacing: '0.08em',
                  }}
                >
                  STUDIO
                </span>
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.62rem',
                  color: 'var(--text-muted)',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                }}
              >
                PMC & Spatial Architecture
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '28px',
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                onMouseEnter={() => onCursorEnter?.(link.label.toUpperCase())}
                onMouseLeave={onCursorLeave}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  fontWeight: 500,
                  color: 'var(--text-soft)',
                  textDecoration: 'none',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  position: 'relative',
                  padding: '4px 0',
                  transition: 'color 0.25s',
                }}
                onMouseOver={(e) => (e.currentTarget.style.color = 'var(--gold-primary)')}
                onMouseOut={(e) => (e.currentTarget.style.color = 'var(--text-soft)')}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Controls: Audio + Hotline + Studio CTA */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div className="audio-wrapper" style={{ display: 'none' }}>
              <AudioAmbience isPlaying={isAudioPlaying} onToggle={onToggleAudio} />
            </div>

            <a
              href={`tel:${STUDIO_META.phone}`}
              className="phone-quick"
              style={{
                display: 'none',
                alignItems: 'center',
                gap: '6px',
                color: 'var(--text-soft)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                textDecoration: 'none',
                padding: '6px 12px',
                borderRadius: '6px',
                border: '1px solid var(--border-subtle)',
                background: 'rgba(255, 255, 255, 0.02)',
              }}
            >
              <Phone size={12} color="var(--gold-primary)" />
              <span>+91-9369769646</span>
            </a>

            <button
              onClick={() => {
                playTactileClick();
                onOpenConsultation();
              }}
              onMouseEnter={() => onCursorEnter?.('INQUIRE')}
              onMouseLeave={onCursorLeave}
              className="btn-gold"
              style={{
                padding: '10px 18px',
                fontSize: '0.75rem',
                borderRadius: '8px',
              }}
            >
              <span>Book Consultation</span>
              <ArrowUpRight size={14} />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => {
                playTactileClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              aria-label="Toggle mobile menu"
              className="mobile-toggle"
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '8px',
                padding: '8px',
                color: 'var(--text-main)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(9, 8, 7, 0.95)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            zIndex: 999,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '32px',
            animation: 'modalFadeIn 0.3s ease forwards',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '32px' }}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.8rem',
                  fontWeight: 600,
                  color: 'var(--text-main)',
                  textDecoration: 'none',
                  letterSpacing: '0.04em',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  borderBottom: '1px solid var(--border-subtle)',
                  paddingBottom: '14px',
                }}
              >
                <span>{link.label}</span>
                <ArrowUpRight size={20} color="var(--gold-primary)" />
              </a>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div style={{ display: 'flex', gap: '10px' }}>
              <AudioAmbience isPlaying={isAudioPlaying} onToggle={onToggleAudio} />
              <a
                href={`tel:${STUDIO_META.phone}`}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: 'var(--text-main)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  textDecoration: 'none',
                  padding: '8px 14px',
                  borderRadius: '20px',
                  border: '1px solid var(--border-subtle)',
                }}
              >
                <Phone size={14} color="var(--gold-primary)" />
                <span>+91-9369769646</span>
              </a>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="btn-gold"
              style={{ width: '100%', marginTop: '12px' }}
            >
              <span>Book Studio Consultation</span>
            </button>
          </div>
        </div>
      )}

      {/* Desktop Responsive CSS */}
      <style>{`
        @media (min-width: 992px) {
          .desktop-nav { display: flex !important; }
          .phone-quick { display: flex !important; }
          .audio-wrapper { display: block !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </>
  );
}
