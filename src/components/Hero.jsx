import React, { useState, useEffect } from 'react';
import { ArrowDown, Sparkles, Compass, ShieldCheck, Layers, Play } from 'lucide-react';
import { STUDIO_META } from '../data/studioData';
import { playTactileClick } from './AudioAmbience';

export default function Hero({ onOpenConsultation, onCursorEnter, onCursorLeave }) {
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  };

  const scrollToWorks = (e) => {
    e.preventDefault();
    playTactileClick();
    document.querySelector('#works')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '140px 24px 60px',
        overflow: 'hidden',
        background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, rgba(200, 169, 126, 0.12) 0%, rgba(11, 10, 9, 0.98) 55%)`,
      }}
    >
      {/* Ambient background glow & architectural blueprint grid */}
      <div className="glow-orb glow-gold" style={{ top: '15%', right: '10%', width: '500px', height: '500px' }} />
      <div className="glow-orb glow-teal" style={{ bottom: '10%', left: '5%', width: '450px', height: '450px' }} />

      <div style={{ maxWidth: '1400px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 10 }}>
        
        {/* Top Architectural Meta Strip */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            paddingBottom: '24px',
            borderBottom: '1px solid var(--border-subtle)',
            marginBottom: '40px',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.78rem',
            color: 'var(--text-muted)',
            letterSpacing: '0.1em',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#10b981',
                boxShadow: '0 0 10px #10b981',
                display: 'inline-block',
              }}
            />
            <span style={{ color: 'var(--text-main)', fontWeight: 600 }}>COMMISSIONS OPEN 2026</span>
            <span style={{ color: 'var(--border-subtle)' }}>|</span>
            <span>DELHI NCR & PAN-INDIA</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <span>LAT: 28.6139° N, 77.2090° E</span>
            <span style={{ color: 'var(--border-subtle)' }}>|</span>
            <span style={{ color: 'var(--gold-primary)' }}>17 YEARS OF ARCHITECTURAL MASTERY</span>
          </div>
        </div>

        {/* Main Monolithic Headline */}
        <div style={{ marginBottom: '40px' }}>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.85rem',
              color: 'var(--gold-primary)',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              marginBottom: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <Compass size={16} />
            <span>Project Management Consultancy & High-Craft Interior Architecture</span>
          </div>

          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.8rem, 7.5vw, 6.8rem)',
              fontWeight: 800,
              lineHeight: 0.95,
              letterSpacing: '-0.03em',
              color: 'var(--text-main)',
              textTransform: 'uppercase',
              marginBottom: '28px',
            }}
          >
            Engineering Rigor.
            <br />
            <span
              style={{
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontWeight: 300,
                color: 'var(--gold-light)',
                textTransform: 'none',
              }}
            >
              Architectural Soul.
            </span>
          </h1>

          <p
            style={{
              maxWidth: '720px',
              fontSize: 'clamp(1.05rem, 1.4vw, 1.25rem)',
              lineHeight: 1.6,
              color: 'var(--text-soft)',
              fontFamily: 'var(--font-body)',
              fontWeight: 300,
              marginBottom: '42px',
            }}
          >
            We sculpt high-containment healthcare suites (AERB/NABH compliant), bespoke private residences, and transformative commercial hubs across India. Delivering uncompromised design backed by 17 years of turnkey precision.
          </p>

          {/* Action CTAs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '18px', alignItems: 'center' }}>
            <button
              onClick={() => {
                playTactileClick();
                onOpenConsultation();
              }}
              onMouseEnter={() => onCursorEnter?.('RESERVE')}
              onMouseLeave={onCursorLeave}
              className="btn-gold"
              style={{ padding: '18px 36px', fontSize: '0.86rem' }}
            >
              <Sparkles size={16} />
              <span>Book Architectural Consultation</span>
            </button>

            <a
              href="#works"
              onClick={scrollToWorks}
              onMouseEnter={() => onCursorEnter?.('EXPLORE')}
              onMouseLeave={onCursorLeave}
              className="btn-outline"
              style={{ padding: '18px 32px', fontSize: '0.86rem' }}
            >
              <span>Explore Landmark Works</span>
              <ArrowDown size={16} />
            </a>

            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                marginLeft: '8px',
                padding: '8px 16px',
                borderRadius: '30px',
                background: 'rgba(255, 255, 255, 0.03)',
                border: '1px solid var(--border-subtle)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--text-muted)',
              }}
            >
              <ShieldCheck size={14} color="var(--gold-primary)" />
              <span>Trusted by Philips, GE & Varian</span>
            </div>
          </div>
        </div>

        {/* Hero Visual Showcase Strip */}
        <div
          style={{
            position: 'relative',
            marginTop: '30px',
            borderRadius: '20px',
            overflow: 'hidden',
            border: '1px solid var(--border-subtle)',
            background: 'var(--bg-charcoal)',
            boxShadow: '0 30px 60px -20px rgba(0, 0, 0, 0.8)',
          }}
          onMouseEnter={() => onCursorEnter?.('SHOWCASE')}
          onMouseLeave={onCursorLeave}
        >
          <div
            style={{
              position: 'relative',
              height: 'clamp(280px, 45vh, 520px)',
              width: '100%',
              overflow: 'hidden',
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=85"
              alt="Nirmaan Interior Architecture"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                filter: 'brightness(0.85) contrast(1.05)',
                transition: 'transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.04)')}
              onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            />
            {/* Cinematic Gradient Vignette */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, rgba(9,8,7,0.2) 0%, rgba(9,8,7,0.85) 100%)',
                pointerEvents: 'none',
              }}
            />

            {/* In-Image Floating Architectural Stamp */}
            <div
              style={{
                position: 'absolute',
                bottom: '24px',
                left: '24px',
                right: '24px',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'flex-end',
                justifyContent: 'space-between',
                gap: '16px',
                pointerEvents: 'none',
              }}
            >
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: 'var(--gold-primary)',
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                  }}
                >
                  FEATURED COMMISSION // LUXURY RESIDENCE
                </span>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.2rem, 2.5vw, 2rem)',
                    fontWeight: 700,
                    color: '#fff',
                    marginTop: '4px',
                  }}
                >
                  The Lumina Sky Duplex Residence — Gurgaon
                </h3>
              </div>

              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  background: 'rgba(9, 8, 7, 0.75)',
                  backdropFilter: 'blur(12px)',
                  padding: '10px 18px',
                  borderRadius: '10px',
                  border: '1px solid var(--border-gold)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                }}
              >
                <div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.65rem' }}>CARPET AREA</div>
                  <div style={{ color: '#fff', fontWeight: 600 }}>8,400 SQ.FT</div>
                </div>
                <div style={{ width: '1px', height: '24px', background: 'var(--border-subtle)' }} />
                <div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.65rem' }}>MATERIAL SPEC</div>
                  <div style={{ color: 'var(--gold-primary)', fontWeight: 600 }}>CALACATTA & BRASS</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Real-Time Studio Key Metrics */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '24px',
            marginTop: '50px',
            paddingTop: '32px',
            borderTop: '1px solid var(--border-subtle)',
          }}
        >
          {[
            { value: '17+', label: 'Years Architectural Legacy', sub: 'Established 2007' },
            { value: '1,000+', label: 'Completed Spatial Designs', sub: 'High-End Deliveries' },
            { value: '110+', label: 'Turnkey Healthcare Suites', sub: 'AERB & NABH Certified' },
            { value: 'Pan-India', label: 'Nationwide Footprint', sub: 'Kashmir to Kanyakumari' },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="glass-panel"
              style={{
                padding: '24px',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2rem, 3.2vw, 3rem)',
                  fontWeight: 800,
                  color: 'var(--gold-light)',
                  lineHeight: 1,
                  marginBottom: '8px',
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: 'var(--text-main)',
                  marginBottom: '4px',
                }}
              >
                {stat.label}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: 'var(--text-muted)',
                  letterSpacing: '0.05em',
                }}
              >
                {stat.sub}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
