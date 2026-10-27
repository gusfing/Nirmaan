import React from 'react';
import { Award, GraduationCap, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { FOUNDERS_DATA } from '../data/studioData';

export default function LeadershipSection({ onOpenConsultation, onCursorEnter, onCursorLeave }) {
  return (
    <section
      id="leadership"
      style={{
        padding: '120px 24px',
        position: 'relative',
        background: 'var(--bg-obsidian)',
        borderTop: '1px solid var(--border-subtle)',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        
        {/* Section Header */}
        <div style={{ maxWidth: '820px', marginBottom: '60px' }}>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              color: 'var(--gold-primary)',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              marginBottom: '12px',
            }}
          >
            [ 05 // PRINCIPAL LEADERSHIP ]
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.4rem, 4.5vw, 4.2rem)',
              fontWeight: 700,
              color: 'var(--text-main)',
              lineHeight: 1.05,
              marginBottom: '20px',
            }}
          >
            Visionary Direction.
            <br />
            <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--gold-light)' }}>
              Mastery of the Discipline.
            </span>
          </h2>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1.05rem',
              color: 'var(--text-muted)',
              lineHeight: 1.6,
            }}
          >
            Backed by elite architectural training at Jamia Millia Islamia and over two collective decades of rigorous field execution, the studio principals personally oversee every commission from initial conceptual sketch to critical clinical commissioning.
          </p>
        </div>

        {/* Founders Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '36px',
          }}
        >
          {FOUNDERS_DATA.map((founder, idx) => (
            <div
              key={idx}
              className="glass-panel"
              style={{
                borderRadius: '20px',
                overflow: 'hidden',
                background: 'rgba(23, 21, 19, 0.85)',
                display: 'flex',
                flexDirection: 'column',
              }}
              onMouseEnter={() => onCursorEnter?.('DIRECTOR')}
              onMouseLeave={onCursorLeave}
            >
              {/* Leader Portrait */}
              <div
                style={{
                  position: 'relative',
                  height: '380px',
                  width: '100%',
                  overflow: 'hidden',
                  background: '#151412',
                }}
              >
                <img
                  src={founder.image}
                  alt={founder.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: 'grayscale(25%) contrast(1.1)',
                    transition: 'transform 0.8s ease, filter 0.8s ease',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                    e.currentTarget.style.filter = 'grayscale(0%) contrast(1.05)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.filter = 'grayscale(25%) contrast(1.1)';
                  }}
                />

                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, transparent 50%, rgba(9, 8, 7, 0.95) 100%)',
                    pointerEvents: 'none',
                  }}
                />

                <div
                  style={{
                    position: 'absolute',
                    bottom: '20px',
                    left: '24px',
                    right: '24px',
                  }}
                >
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.7rem',
                      fontWeight: 700,
                      color: '#fff',
                      marginBottom: '4px',
                    }}
                  >
                    {founder.name}
                  </h3>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8rem',
                      color: 'var(--gold-primary)',
                      letterSpacing: '0.08em',
                    }}
                  >
                    {founder.role}
                  </div>
                </div>
              </div>

              {/* Leader Bio & Accreditations */}
              <div style={{ padding: '30px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                
                {/* Academic & Experience Pill */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '10px 14px',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--border-subtle)',
                    marginBottom: '20px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.74rem',
                    color: 'var(--gold-light)',
                  }}
                >
                  <GraduationCap size={16} color="var(--gold-primary)" />
                  <span>{founder.qualification}</span>
                </div>

                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.92rem',
                    color: 'var(--text-soft)',
                    lineHeight: 1.6,
                    marginBottom: '24px',
                    flexGrow: 1,
                  }}
                >
                  {founder.bio}
                </p>

                <div
                  style={{
                    paddingTop: '16px',
                    borderTop: '1px solid var(--border-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.74rem',
                    color: 'var(--text-muted)',
                  }}
                >
                  <Award size={14} color="var(--gold-primary)" />
                  <span>Key Domain: {founder.specialty}</span>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Studio Philosophy Banner */}
        <div
          className="glass-panel"
          style={{
            marginTop: '50px',
            padding: '40px',
            borderRadius: '20px',
            border: '1px solid var(--border-gold)',
            background: 'radial-gradient(ellipse at center, rgba(200, 169, 126, 0.08) 0%, rgba(23, 21, 19, 0.95) 100%)',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.2rem, 2.2vw, 1.8rem)',
              fontStyle: 'italic',
              fontWeight: 300,
              color: 'var(--gold-light)',
              maxWidth: '920px',
              margin: '0 auto 20px',
              lineHeight: 1.5,
            }}
          >
            "Each of our commissions begins without preconceived notions. We balance political, clinical, cultural, and structural realities to create environments that stand as timeless benchmarks."
          </div>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.78rem',
              color: 'var(--text-muted)',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
            }}
          >
            — NIRMAAN ARCHITECTURAL ETHOS
          </div>
        </div>

      </div>
    </section>
  );
}
