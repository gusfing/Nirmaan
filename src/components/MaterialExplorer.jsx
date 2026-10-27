import React, { useState } from 'react';
import { Sun, Moon, Sparkles, Layers, Box } from 'lucide-react';
import { MATERIALS_DATA } from '../data/studioData';
import { playTactileClick } from './AudioAmbience';

export default function MaterialExplorer({ onCursorEnter, onCursorLeave }) {
  const [selectedMaterial, setSelectedMaterial] = useState(MATERIALS_DATA[0]);
  const [lightingMode, setLightingMode] = useState('twilight'); // 'daylight' | 'twilight'

  const isDaylight = lightingMode === 'daylight';

  return (
    <section
      id="materials"
      style={{
        padding: '120px 24px',
        position: 'relative',
        background: 'var(--bg-deep)',
        borderTop: '1px solid var(--border-subtle)',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        
        {/* Section Header */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: '24px',
            marginBottom: '48px',
          }}
        >
          <div>
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
              [ 02 // TACTILE MATERIAL LAB ]
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.4rem, 4.5vw, 4.2rem)',
                fontWeight: 700,
                color: 'var(--text-main)',
                lineHeight: 1.05,
              }}
            >
              Authentic Materiality.
              <br />
              <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--gold-light)' }}>
                Choreographed by Light.
              </span>
            </h2>
          </div>

          {/* Lighting Mode Switcher */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              background: 'rgba(23, 21, 19, 0.8)',
              padding: '6px',
              borderRadius: '30px',
              border: '1px solid var(--border-subtle)',
            }}
          >
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)', marginLeft: '12px' }}>
              SIMULATED LIGHT:
            </span>
            <button
              onClick={() => {
                playTactileClick();
                setLightingMode('daylight');
              }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 16px',
                borderRadius: '20px',
                background: isDaylight ? '#fff' : 'transparent',
                color: isDaylight ? '#0b0a09' : 'var(--text-soft)',
                border: 'none',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                fontWeight: isDaylight ? 700 : 500,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            >
              <Sun size={14} color={isDaylight ? '#d97706' : 'currentColor'} />
              <span>Daylight (5500K)</span>
            </button>

            <button
              onClick={() => {
                playTactileClick();
                setLightingMode('twilight');
              }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 16px',
                borderRadius: '20px',
                background: !isDaylight ? 'var(--gold-primary)' : 'transparent',
                color: !isDaylight ? '#0b0a09' : 'var(--text-soft)',
                border: 'none',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                fontWeight: !isDaylight ? 700 : 500,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            >
              <Moon size={14} />
              <span>Twilight Gold (2700K)</span>
            </button>
          </div>
        </div>

        {/* Interactive Material Grid & Live Inspection Board */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '30px',
            alignItems: 'center',
          }}
        >
          {/* Material Selection Buttons (Left side) */}
          <div
            style={{
              gridColumn: 'span 5',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
            className="material-left"
          >
            {MATERIALS_DATA.map((mat) => {
              const isSelected = selectedMaterial.id === mat.id;
              return (
                <div
                  key={mat.id}
                  onClick={() => {
                    playTactileClick();
                    setSelectedMaterial(mat);
                  }}
                  onMouseEnter={() => onCursorEnter?.('FEEL')}
                  onMouseLeave={onCursorLeave}
                  style={{
                    padding: '20px 24px',
                    borderRadius: '12px',
                    border: `1px solid ${isSelected ? 'var(--gold-primary)' : 'var(--border-subtle)'}`,
                    background: isSelected ? 'rgba(200, 169, 126, 0.12)' : 'rgba(255, 255, 255, 0.02)',
                    cursor: 'pointer',
                    transition: 'all 0.35s ease',
                    position: 'relative',
                    transform: isSelected ? 'translateX(8px)' : 'none',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginBottom: '6px',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.15rem',
                        fontWeight: 700,
                        color: isSelected ? 'var(--gold-light)' : 'var(--text-main)',
                      }}
                    >
                      {mat.name}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.7rem',
                        color: 'var(--text-muted)',
                      }}
                    >
                      {mat.origin}
                    </span>
                  </div>
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.84rem',
                      color: 'var(--text-muted)',
                      lineHeight: 1.4,
                    }}
                  >
                    {mat.idealFor}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Interactive Material Vignette Viewport (Right side) */}
          <div
            style={{
              gridColumn: 'span 7',
              borderRadius: '20px',
              overflow: 'hidden',
              border: `1px solid ${isDaylight ? 'rgba(255,255,255,0.2)' : 'var(--border-gold)'}`,
              background: '#090807',
              position: 'relative',
              boxShadow: isDaylight
                ? '0 25px 60px rgba(0, 0, 0, 0.6)'
                : '0 25px 60px rgba(200, 169, 126, 0.15)',
              transition: 'all 0.6s ease',
            }}
            className="material-right"
            onMouseEnter={() => onCursorEnter?.('TEXTURE')}
            onMouseLeave={onCursorLeave}
          >
            <div
              style={{
                position: 'relative',
                height: '460px',
                width: '100%',
                overflow: 'hidden',
              }}
            >
              <img
                src={selectedMaterial.textureUrl}
                alt={selectedMaterial.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: isDaylight
                    ? 'brightness(1.05) contrast(1.08) saturate(0.95)'
                    : 'brightness(0.85) contrast(1.15) sepia(0.2) saturate(1.2)',
                  transition: 'filter 0.6s ease, transform 0.8s ease',
                }}
              />

              {/* Dynamic Lighting Tint Overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: isDaylight
                    ? 'linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(0,0,0,0.4) 100%)'
                    : 'linear-gradient(135deg, rgba(200, 169, 126, 0.22) 0%, rgba(11, 10, 9, 0.65) 100%)',
                  mixBlendMode: 'overlay',
                  pointerEvents: 'none',
                }}
              />

              {/* Material Detail Overlay Card */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '24px',
                  left: '24px',
                  right: '24px',
                  background: 'rgba(9, 8, 7, 0.88)',
                  backdropFilter: 'blur(16px)',
                  padding: '20px 24px',
                  borderRadius: '12px',
                  border: '1px solid var(--border-gold)',
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '16px',
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.68rem',
                      color: 'var(--gold-primary)',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                    }}
                  >
                    CURATED SPECIFICATION // {selectedMaterial.origin}
                  </div>
                  <h4
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.2rem',
                      fontWeight: 700,
                      color: '#fff',
                      marginTop: '2px',
                    }}
                  >
                    {selectedMaterial.name}
                  </h4>
                  <div
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.8rem',
                      color: 'var(--text-soft)',
                      marginTop: '4px',
                    }}
                  >
                    Tone: {selectedMaterial.tone}
                  </div>
                </div>

                <div
                  style={{
                    background: 'rgba(255, 255, 255, 0.04)',
                    padding: '8px 14px',
                    borderRadius: '8px',
                    border: '1px solid var(--border-subtle)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: 'var(--gold-light)',
                    textAlign: 'right',
                  }}
                >
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.62rem' }}>TACTILE PROFILE</div>
                  <div>{selectedMaterial.tactileScore}</div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 900px) {
          .material-left { grid-column: span 12 !important; }
          .material-right { grid-column: span 12 !important; margin-top: 20px; }
        }
      `}</style>
    </section>
  );
}
