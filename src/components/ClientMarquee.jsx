import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, ShieldCheck } from 'lucide-react';
import { CLIENT_LOGOS, TESTIMONIALS_DATA } from '../data/studioData';
import { playTactileClick } from './AudioAmbience';

export default function ClientMarquee({ onCursorEnter, onCursorLeave }) {
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);

  const nextTestimonial = () => {
    playTactileClick();
    setActiveTestimonialIdx((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const prevTestimonial = () => {
    playTactileClick();
    setActiveTestimonialIdx((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  const activeTestimonial = TESTIMONIALS_DATA[activeTestimonialIdx];

  return (
    <section
      style={{
        padding: '100px 0',
        position: 'relative',
        background: 'var(--bg-deep)',
        borderTop: '1px solid var(--border-subtle)',
        overflow: 'hidden',
      }}
    >
      {/* Client Monogram Infinite Marquee */}
      <div style={{ marginBottom: '80px' }}>
        <div
          style={{
            textAlign: 'center',
            marginBottom: '32px',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.74rem',
            color: 'var(--gold-primary)',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
          }}
        >
          TRUSTED BY GLOBAL HEALTHCARE & ENTERPRISE LEADERS
        </div>

        {/* Marquee Track */}
        <div
          style={{
            width: '100%',
            overflow: 'hidden',
            display: 'flex',
            position: 'relative',
            maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
          }}
        >
          <div className="animate-marquee" style={{ gap: '60px', padding: '10px 0' }}>
            {[...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS].map((item, idx) => (
              <div
                key={idx}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)',
                  fontWeight: 800,
                  letterSpacing: '0.15em',
                  color: 'rgba(255, 255, 255, 0.25)',
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                  transition: 'color 0.3s ease',
                  cursor: 'default',
                }}
                onMouseOver={(e) => (e.currentTarget.style.color = 'var(--gold-light)')}
                onMouseOut={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.25)')}
              >
                {item.logoText}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Verified Enterprise Client Testimonial Stage */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px' }}>
        <div
          className="glass-panel"
          style={{
            padding: '48px 40px',
            borderRadius: '24px',
            border: '1px solid var(--border-gold)',
            background: 'rgba(23, 21, 19, 0.95)',
            position: 'relative',
            boxShadow: '0 30px 80px rgba(0, 0, 0, 0.6)',
          }}
        >
          {/* Top Testimonial Accents */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '32px',
            }}
          >
            <div style={{ display: 'flex', gap: '4px' }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="var(--gold-primary)" color="var(--gold-primary)" />
              ))}
            </div>

            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--gold-light)',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <ShieldCheck size={14} color="var(--gold-primary)" />
              <span>VERIFIED INSTITUTIONAL RECORD</span>
            </div>
          </div>

          {/* Testimonial Quote */}
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.2rem, 2.4vw, 1.9rem)',
              fontStyle: 'italic',
              fontWeight: 300,
              color: '#fff',
              lineHeight: 1.5,
              marginBottom: '36px',
            }}
          >
            "{activeTestimonial.quote}"
          </p>

          {/* Author Meta & Carousel Nav */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '20px',
              paddingTop: '24px',
              borderTop: '1px solid var(--border-subtle)',
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  color: 'var(--text-main)',
                }}
              >
                {activeTestimonial.author}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  color: 'var(--gold-primary)',
                  marginTop: '2px',
                }}
              >
                {activeTestimonial.role} — {activeTestimonial.company}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: 'var(--text-muted)',
                  marginTop: '2px',
                }}
              >
                Commission: {activeTestimonial.project}
              </div>
            </div>

            {/* Prev / Next Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-muted)', marginRight: '8px' }}>
                0{activeTestimonialIdx + 1} / 0{TESTIMONIALS_DATA.length}
              </span>
              <button
                onClick={prevTestimonial}
                aria-label="Previous testimonial"
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid var(--border-subtle)',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.25s',
                }}
                onMouseOver={(e) => (e.currentTarget.style.borderColor = 'var(--gold-primary)')}
                onMouseOut={(e) => (e.currentTarget.style.borderColor = 'var(--border-subtle)')}
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={nextTestimonial}
                aria-label="Next testimonial"
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid var(--border-subtle)',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.25s',
                }}
                onMouseOver={(e) => (e.currentTarget.style.borderColor = 'var(--gold-primary)')}
                onMouseOut={(e) => (e.currentTarget.style.borderColor = 'var(--border-subtle)')}
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
