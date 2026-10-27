import React, { useState } from 'react';
import { ArrowUpRight, Sliders, Layers, X, Shield, Award, MapPin, Maximize2 } from 'lucide-react';
import { PROJECTS_DATA } from '../data/studioData';
import { playTactileClick } from './AudioAmbience';

export default function ProjectShowcase({ onOpenConsultation, onCursorEnter, onCursorLeave }) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [sliderPos, setSliderPos] = useState(50); // For Before/After interactive slider
  const [activeTabInModal, setActiveTabInModal] = useState('overview'); // 'overview' | 'blueprint'

  const categories = ['All', 'Healthcare', 'Residential', 'Commercial', 'Turnkey'];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  const activeBeforeAfterProject = PROJECTS_DATA[0]; // Allengers Healthcare

  return (
    <section
      id="works"
      style={{
        padding: '120px 24px',
        position: 'relative',
        background: 'var(--bg-obsidian)',
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
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <span>[ 01 // SELECTED ARCHITECTURE ]</span>
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
              Curated Portfolio.
              <br />
              <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--gold-light)' }}>
                Zero Compromise.
              </span>
            </h2>
          </div>

          <p
            style={{
              maxWidth: '460px',
              fontFamily: 'var(--font-body)',
              fontSize: '0.98rem',
              color: 'var(--text-muted)',
              lineHeight: 1.6,
            }}
          >
            From high-containment linear accelerator bunkers for Varian to sculptural penthouses on Golf Course Road, each environment is an uncompromising exercise in structural clarity.
          </p>
        </div>

        {/* Interactive Before & After Transformation Feature */}
        <div
          style={{
            marginBottom: '70px',
            borderRadius: '20px',
            overflow: 'hidden',
            border: '1px solid var(--border-gold)',
            background: 'var(--bg-charcoal)',
            position: 'relative',
          }}
        >
          <div
            style={{
              padding: '18px 24px',
              background: 'rgba(23, 21, 19, 0.95)',
              borderBottom: '1px solid var(--border-subtle)',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '12px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Sliders size={16} color="var(--gold-primary)" />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-main)' }}>
                INTERACTIVE TRANSFORMATION // BEFORE & AFTER
              </span>
            </div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--gold-light)' }}>
              DRAG OR MOVE SLIDER TO REVEAL EXECUTION
            </span>
          </div>

          <div
            style={{
              position: 'relative',
              height: 'clamp(320px, 48vh, 520px)',
              overflow: 'hidden',
              userSelect: 'none',
              cursor: 'ew-resize',
            }}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const percent = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
              setSliderPos(percent);
            }}
            onTouchMove={(e) => {
              const touch = e.touches[0];
              const rect = e.currentTarget.getBoundingClientRect();
              const percent = Math.max(0, Math.min(100, ((touch.clientX - rect.left) / rect.width) * 100));
              setSliderPos(percent);
            }}
            onMouseEnter={() => onCursorEnter?.('DRAG')}
            onMouseLeave={onCursorLeave}
          >
            {/* Background: Completed Interior */}
            <img
              src={activeBeforeAfterProject.image}
              alt="After Architecture"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                position: 'absolute',
                inset: 0,
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'rgba(9, 8, 7, 0.8)',
                padding: '6px 14px',
                borderRadius: '6px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: 'var(--gold-primary)',
                border: '1px solid var(--border-gold)',
                zIndex: 2,
              }}
            >
              COMPLETED ARCHITECTURE
            </div>

            {/* Foreground: Raw Construction / Before Image clipped */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                bottom: 0,
                width: `${sliderPos}%`,
                overflow: 'hidden',
                zIndex: 3,
                borderRight: '2px solid var(--gold-light)',
                boxShadow: '4px 0 20px rgba(0,0,0,0.5)',
              }}
            >
              <img
                src={activeBeforeAfterProject.beforeImage}
                alt="Before Raw Structure"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  minWidth: '1000px',
                  objectFit: 'cover',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '20px',
                  left: '20px',
                  background: 'rgba(9, 8, 7, 0.8)',
                  padding: '6px 14px',
                  borderRadius: '6px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: '#fff',
                  border: '1px solid var(--border-subtle)',
                }}
              >
                RAW CIVIL SHELL
              </div>
            </div>

            {/* Center Drag Handle */}
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: `${sliderPos}%`,
                transform: 'translate(-50%, -50%)',
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: 'var(--gold-primary)',
                border: '2px solid #fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 4,
                boxShadow: '0 0 20px rgba(200, 169, 126, 0.8)',
                color: '#000',
              }}
            >
              <Sliders size={18} />
            </div>
          </div>
        </div>

        {/* Filter Category Tabs */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px',
            marginBottom: '40px',
            paddingBottom: '20px',
            borderBottom: '1px solid var(--border-subtle)',
          }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                playTactileClick();
                setActiveCategory(cat);
              }}
              onMouseEnter={() => onCursorEnter?.(cat.toUpperCase())}
              onMouseLeave={onCursorLeave}
              style={{
                padding: '10px 22px',
                borderRadius: '30px',
                border: `1px solid ${activeCategory === cat ? 'var(--gold-primary)' : 'var(--border-subtle)'}`,
                background: activeCategory === cat ? 'var(--gold-primary)' : 'rgba(255, 255, 255, 0.03)',
                color: activeCategory === cat ? '#0b0a09' : 'var(--text-soft)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                fontWeight: activeCategory === cat ? 700 : 500,
                letterSpacing: '0.08em',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            >
              {cat === 'All' ? 'ALL COMMISSIONS' : cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))',
            gap: '30px',
          }}
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => {
                playTactileClick();
                setSelectedProject(project);
              }}
              onMouseEnter={() => onCursorEnter?.('INSPECT')}
              onMouseLeave={onCursorLeave}
              className="glass-panel"
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {/* Project Card Image */}
              <div
                style={{
                  position: 'relative',
                  height: '280px',
                  width: '100%',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.08)')}
                  onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                />
                
                {/* Category & Area Floating Badges */}
                <div
                  style={{
                    position: 'absolute',
                    top: '16px',
                    left: '16px',
                    right: '16px',
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  <span
                    style={{
                      background: 'rgba(9, 8, 7, 0.85)',
                      backdropFilter: 'blur(8px)',
                      color: 'var(--gold-light)',
                      border: '1px solid var(--border-gold)',
                      padding: '4px 10px',
                      borderRadius: '4px',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.68rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {project.categoryLabel}
                  </span>
                  <span
                    style={{
                      background: 'rgba(9, 8, 7, 0.85)',
                      backdropFilter: 'blur(8px)',
                      color: '#fff',
                      padding: '4px 10px',
                      borderRadius: '4px',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.68rem',
                    }}
                  >
                    {project.area}
                  </span>
                </div>
              </div>

              {/* Card Meta Content */}
              <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: 'var(--text-muted)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    marginBottom: '8px',
                  }}
                >
                  <MapPin size={12} color="var(--gold-primary)" />
                  <span>{project.location}</span>
                  <span>•</span>
                  <span>{project.client}</span>
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: 'var(--text-main)',
                    lineHeight: 1.3,
                    marginBottom: '12px',
                  }}
                >
                  {project.title}
                </h3>

                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.86rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.5,
                    marginBottom: '20px',
                    flexGrow: 1,
                  }}
                >
                  {project.summary}
                </p>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '16px',
                    borderTop: '1px solid var(--border-subtle)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: 'var(--gold-primary)',
                  }}
                >
                  <span>INSPECT BLUEPRINT & SPECS</span>
                  <ArrowUpRight size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Fullscreen Architectural Detail Modal */}
      {selectedProject && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(9, 8, 7, 0.92)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            zIndex: 10000,
            overflowY: 'auto',
            padding: '40px 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={() => setSelectedProject(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="glass-panel animate-modal"
            style={{
              maxWidth: '1000px',
              width: '100%',
              background: 'var(--bg-charcoal)',
              border: '1px solid var(--border-gold)',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 30px 80px rgba(0, 0, 0, 0.9)',
              position: 'relative',
            }}
          >
            {/* Modal Top Bar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '20px 28px',
                borderBottom: '1px solid var(--border-subtle)',
                background: 'rgba(23, 21, 19, 0.9)',
              }}
            >
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: 'var(--gold-primary)',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                  }}
                >
                  ARCHITECTURAL DOSSIER // {selectedProject.categoryLabel}
                </span>
                <h2
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.45rem',
                    fontWeight: 700,
                    color: '#fff',
                    marginTop: '2px',
                  }}
                >
                  {selectedProject.title}
                </h2>
              </div>

              <button
                onClick={() => setSelectedProject(null)}
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  cursor: 'pointer',
                }}
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Image / Blueprint Viewer */}
            <div style={{ position: 'relative', height: '380px', width: '100%', background: '#000' }}>
              <img
                src={activeTabInModal === 'overview' ? selectedProject.image : selectedProject.blueprint}
                alt="Project visual"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />

              {/* View Selector Tabs */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '16px',
                  left: '20px',
                  display: 'flex',
                  gap: '8px',
                }}
              >
                <button
                  onClick={() => setActiveTabInModal('overview')}
                  style={{
                    padding: '6px 14px',
                    borderRadius: '6px',
                    background: activeTabInModal === 'overview' ? 'var(--gold-primary)' : 'rgba(9, 8, 7, 0.8)',
                    color: activeTabInModal === 'overview' ? '#000' : '#fff',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    border: '1px solid var(--border-subtle)',
                    cursor: 'pointer',
                  }}
                >
                  Completed Photography
                </button>
                <button
                  onClick={() => setActiveTabInModal('blueprint')}
                  style={{
                    padding: '6px 14px',
                    borderRadius: '6px',
                    background: activeTabInModal === 'blueprint' ? 'var(--gold-primary)' : 'rgba(9, 8, 7, 0.8)',
                    color: activeTabInModal === 'blueprint' ? '#000' : '#fff',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    border: '1px solid var(--border-subtle)',
                    cursor: 'pointer',
                  }}
                >
                  Structural Schematics
                </button>
              </div>

              {selectedProject.awards && (
                <div
                  style={{
                    position: 'absolute',
                    top: '16px',
                    right: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: 'rgba(9, 8, 7, 0.85)',
                    padding: '6px 12px',
                    borderRadius: '6px',
                    border: '1px solid var(--border-gold)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: 'var(--gold-primary)',
                  }}
                >
                  <Award size={14} />
                  <span>{selectedProject.awards}</span>
                </div>
              )}
            </div>

            {/* Modal Details Body */}
            <div style={{ padding: '32px' }}>
              {/* Technical Specifications Grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                  gap: '16px',
                  marginBottom: '28px',
                  padding: '20px',
                  background: 'rgba(255, 255, 255, 0.02)',
                  borderRadius: '12px',
                  border: '1px solid var(--border-subtle)',
                }}
              >
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text-muted)' }}>CLIENT</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontWeight: 600, color: '#fff', fontSize: '0.9rem' }}>{selectedProject.client}</div>
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text-muted)' }}>LOCATION</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontWeight: 600, color: '#fff', fontSize: '0.9rem' }}>{selectedProject.location}</div>
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text-muted)' }}>GROSS AREA</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontWeight: 600, color: 'var(--gold-primary)', fontSize: '0.9rem' }}>{selectedProject.area}</div>
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text-muted)' }}>COMPLETION YEAR</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontWeight: 600, color: '#fff', fontSize: '0.9rem' }}>{selectedProject.year}</div>
                </div>
              </div>

              {/* Execution Summary & Scope */}
              <div style={{ marginBottom: '24px' }}>
                <h4 style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--gold-primary)', textTransform: 'uppercase', marginBottom: '8px' }}>
                  Execution Scope & Compliance
                </h4>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.92rem', color: 'var(--text-soft)', lineHeight: 1.6 }}>
                  {selectedProject.summary}
                </p>
                <div
                  style={{
                    marginTop: '12px',
                    padding: '10px 14px',
                    borderRadius: '6px',
                    background: 'rgba(200, 169, 126, 0.08)',
                    border: '1px solid var(--border-gold)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78rem',
                    color: 'var(--gold-light)',
                  }}
                >
                  <strong>Key Deliverables: </strong> {selectedProject.scope}
                </div>
              </div>

              {/* Modal CTA Bar */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '16px',
                  paddingTop: '20px',
                  borderTop: '1px solid var(--border-subtle)',
                }}
              >
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                  Interested in an equivalent architectural scope?
                </div>
                <button
                  onClick={() => {
                    setSelectedProject(null);
                    onOpenConsultation(selectedProject.title);
                  }}
                  className="btn-gold"
                  style={{ padding: '12px 24px', fontSize: '0.78rem' }}
                >
                  <span>Request Project Technical Brief</span>
                  <ArrowUpRight size={14} />
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
