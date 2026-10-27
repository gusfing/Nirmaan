import React, { useState, useEffect } from 'react';
import { ArrowUp, Phone, Mail, Clock, MapPin, Compass } from 'lucide-react';
import { STUDIO_META } from '../data/studioData';
import { playTactileClick } from './AudioAmbience';

export default function Footer({ onOpenConsultation, onCursorEnter, onCursorLeave }) {
  const [localTime, setLocalTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format to Indian Standard Time (New Delhi)
      const istTime = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      setLocalTime(istTime);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    playTactileClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        position: 'relative',
        background: '#060504',
        borderTop: '1px solid var(--border-subtle)',
        padding: '100px 24px 40px',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        
        {/* Top Studio Callout Strip */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px',
            paddingBottom: '60px',
            borderBottom: '1px solid var(--border-subtle)',
            marginBottom: '60px',
          }}
        >
          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--gold-primary)',
                letterSpacing: '0.14em',
                marginBottom: '10px',
              }}
            >
              DIRECT STUDIO HOTLINE
            </div>
            <a
              href={`tel:${STUDIO_META.phone}`}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.6rem',
                fontWeight: 700,
                color: '#fff',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                transition: 'color 0.25s',
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = 'var(--gold-primary)')}
              onMouseOut={(e) => (e.currentTarget.style.color = '#fff')}
            >
              <Phone size={22} color="var(--gold-primary)" />
              <span>{STUDIO_META.phone}</span>
            </a>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '6px' }}>
              {STUDIO_META.hours}
            </div>
          </div>

          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--gold-primary)',
                letterSpacing: '0.14em',
                marginBottom: '10px',
              }}
            >
              COMMISSIONS & ENQUIRIES
            </div>
            <a
              href={`mailto:${STUDIO_META.email}`}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.4rem',
                fontWeight: 700,
                color: '#fff',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                transition: 'color 0.25s',
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = 'var(--gold-primary)')}
              onMouseOut={(e) => (e.currentTarget.style.color = '#fff')}
            >
              <Mail size={20} color="var(--gold-primary)" />
              <span>{STUDIO_META.email}</span>
            </a>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '6px' }}>
              Immediate NDA & Technical Review
            </div>
          </div>

          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--gold-primary)',
                letterSpacing: '0.14em',
                marginBottom: '10px',
              }}
            >
              STUDIO LOCAL TIME & BASE
            </div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '1.4rem',
                fontWeight: 700,
                color: 'var(--gold-light)',
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
              }}
            >
              <Clock size={20} color="var(--gold-primary)" />
              <span>{localTime || '14:32:00'} IST</span>
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '6px' }}>
              New Delhi Studio (UTC+05:30) • Pan-India Delivery
            </div>
          </div>
        </div>

        {/* Massive Signature Monolithic Title */}
        <div style={{ margin: '40px 0 60px', textAlign: 'center', userSelect: 'none' }}>
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3.5rem, 15vw, 15rem)',
              fontWeight: 800,
              letterSpacing: '0.06em',
              lineHeight: 0.85,
              color: 'rgba(255, 255, 255, 0.05)',
              textTransform: 'uppercase',
            }}
          >
            NIRMAAN
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '20px',
            paddingTop: '30px',
            borderTop: '1px solid var(--border-subtle)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: 'var(--text-muted)',
          }}
        >
          <div>
            © 2007–2026 Nirmaan Interior Design Studio. All rights reserved.
            <span style={{ margin: '0 8px', color: 'var(--border-subtle)' }}>|</span>
            Project Management Consultancy (PMC) & Healthcare Architecture
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <button
              onClick={scrollToTop}
              onMouseEnter={() => onCursorEnter?.('TOP')}
              onMouseLeave={onCursorLeave}
              aria-label="Scroll back to top"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                borderRadius: '20px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid var(--border-subtle)',
                color: 'var(--gold-light)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                cursor: 'pointer',
                transition: 'all 0.25s',
              }}
              onMouseOver={(e) => (e.currentTarget.style.borderColor = 'var(--gold-primary)')}
              onMouseOut={(e) => (e.currentTarget.style.borderColor = 'var(--border-subtle)')}
            >
              <span>Back to Top</span>
              <ArrowUp size={14} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
