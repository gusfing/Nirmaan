import React, { useState } from 'react';
import { ChevronDown, CheckCircle2, ArrowRight, Activity, Home, Building2, HardHat } from 'lucide-react';
import { SERVICES_DATA } from '../data/studioData';
import { playTactileClick } from './AudioAmbience';

const ICONS = {
  'HLT-ARCH': Activity,
  'RES-ARCH': Home,
  'COM-INST': Building2,
  'TRN-PMC': HardHat,
};

export default function ServicesArchitect({ onOpenConsultation, onCursorEnter, onCursorLeave }) {
  const [expandedId, setExpandedId] = useState('01');

  const toggleExpand = (id) => {
    playTactileClick();
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="services"
      style={{
        padding: '120px 24px',
        position: 'relative',
        background: 'var(--bg-obsidian)',
        borderTop: '1px solid var(--border-subtle)',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        
        {/* Section Header */}
        <div style={{ maxWidth: '800px', marginBottom: '60px' }}>
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
            [ 03 // CORE ARCHITECTURAL DISCIPLINES ]
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
            Integrated Precision.
            <br />
            <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--gold-light)' }}>
              From Blueprint to Handover.
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
            Nirmaan Interior Design Studio unifies architectural consultancy, clinical compliance, interior detailing, and turnkey Project Management Consultancy (PMC) within a transparent, single-point accountability workflow.
          </p>
        </div>

        {/* Disciplines Accordion List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {SERVICES_DATA.map((srv) => {
            const isExpanded = expandedId === srv.id;
            const IconComponent = ICONS[srv.code] || Activity;

            return (
              <div
                key={srv.id}
                className="glass-panel"
                style={{
                  borderRadius: '16px',
                  overflow: 'hidden',
                  borderColor: isExpanded ? 'var(--gold-primary)' : 'var(--border-subtle)',
                  background: isExpanded ? 'rgba(32, 29, 26, 0.95)' : 'var(--bg-card)',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                {/* Accordion Trigger Header */}
                <div
                  onClick={() => toggleExpand(srv.id)}
                  onMouseEnter={() => onCursorEnter?.('SCOPE')}
                  onMouseLeave={onCursorLeave}
                  style={{
                    padding: '28px 32px',
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '20px',
                    cursor: 'pointer',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '1rem',
                        fontWeight: 700,
                        color: isExpanded ? 'var(--gold-primary)' : 'var(--text-muted)',
                        padding: '8px 12px',
                        borderRadius: '8px',
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid var(--border-subtle)',
                      }}
                    >
                      {srv.id}
                    </div>

                    <div
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '10px',
                        background: isExpanded ? 'var(--gold-primary)' : 'rgba(255, 255, 255, 0.04)',
                        color: isExpanded ? '#000' : 'var(--gold-primary)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <IconComponent size={20} />
                    </div>

                    <div>
                      <div
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.68rem',
                          color: 'var(--gold-primary)',
                          letterSpacing: '0.12em',
                        }}
                      >
                        CODE: {srv.code}
                      </div>
                      <h3
                        style={{
                          fontFamily: 'var(--font-display)',
                          fontSize: 'clamp(1.2rem, 2.2vw, 1.7rem)',
                          fontWeight: 700,
                          color: '#fff',
                        }}
                      >
                        {srv.title}
                      </h3>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.78rem',
                        color: 'var(--gold-light)',
                        padding: '6px 14px',
                        borderRadius: '20px',
                        background: 'rgba(200, 169, 126, 0.1)',
                        border: '1px solid var(--border-gold)',
                      }}
                    >
                      {srv.metric}
                    </div>

                    <div
                      style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '50%',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid var(--border-subtle)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: isExpanded ? 'var(--gold-primary)' : 'var(--text-soft)',
                        transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s ease',
                      }}
                    >
                      <ChevronDown size={18} />
                    </div>
                  </div>
                </div>

                {/* Expandable Body */}
                {isExpanded && (
                  <div
                    style={{
                      padding: '0 32px 32px 32px',
                      borderTop: '1px solid var(--border-subtle)',
                      paddingTop: '24px',
                      animation: 'modalFadeIn 0.35s ease forwards',
                    }}
                  >
                    <p
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '1rem',
                        color: 'var(--text-soft)',
                        lineHeight: 1.6,
                        maxWidth: '850px',
                        marginBottom: '24px',
                      }}
                    >
                      {srv.desc}
                    </p>

                    <div style={{ marginBottom: '28px' }}>
                      <div
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.72rem',
                          color: 'var(--gold-primary)',
                          letterSpacing: '0.12em',
                          textTransform: 'uppercase',
                          marginBottom: '14px',
                        }}
                      >
                        TECHNICAL SCOPE & AUDITABLE DELIVERABLES
                      </div>

                      <div
                        style={{
                          display: 'grid',
                          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                          gap: '12px',
                        }}
                      >
                        {srv.deliverables.map((item, idx) => (
                          <div
                            key={idx}
                            style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: '10px',
                              padding: '12px 16px',
                              borderRadius: '8px',
                              background: 'rgba(255, 255, 255, 0.02)',
                              border: '1px solid var(--border-subtle)',
                              fontFamily: 'var(--font-body)',
                              fontSize: '0.88rem',
                              color: 'var(--text-main)',
                            }}
                          >
                            <CheckCircle2 size={16} color="var(--gold-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                      <button
                        onClick={() => onOpenConsultation(srv.title)}
                        className="btn-gold"
                        style={{ padding: '12px 24px', fontSize: '0.78rem' }}
                      >
                        <span>Commission {srv.title}</span>
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
