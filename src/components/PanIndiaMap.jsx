import React, { useState } from 'react';
import { MapPin, Navigation, Compass, CheckCircle } from 'lucide-react';
import { playTactileClick } from './AudioAmbience';

const REGIONS = [
  {
    id: 'north',
    name: 'Northern Territory',
    hubs: 'Kashmir, Delhi NCR, Dehradun, Punjab',
    activeCount: '480+ Projects',
    focus: 'Oncology Bunkers, Multi-Speciality Clinics & Luxury Villas',
    highlight: 'Kashmir Valley to NCR Belt',
  },
  {
    id: 'south',
    name: 'Southern Corridor',
    hubs: 'Bengaluru, Hyderabad, Chennai, Kanyakumari',
    activeCount: '240+ Projects',
    focus: 'Medical Diagnostics, Corporate R&D Parks & Turnkey Fit-Outs',
    highlight: 'Down to Kanyakumari',
  },
  {
    id: 'west',
    name: 'Western Industrial Hub',
    hubs: 'Gujarat (Ahmedabad, Surat), Mumbai, Pune',
    activeCount: '210+ Projects',
    focus: 'Pharma Cleanrooms, Industrial Architecture & Penthouse Interiors',
    highlight: 'Gujarat Coastline & MMR',
  },
  {
    id: 'east',
    name: 'Eastern & North-Eastern Frontier',
    hubs: 'Kolkata, Guwahati, Nagaland',
    activeCount: '120+ Projects',
    focus: 'Remote Healthcare Outposts & Institutional Academies',
    highlight: 'Hills of Nagaland to Bay of Bengal',
  },
];

export default function PanIndiaMap({ onCursorEnter, onCursorLeave }) {
  const [activeRegion, setActiveRegion] = useState(REGIONS[0]);

  return (
    <section
      id="footprint"
      style={{
        padding: '120px 24px',
        position: 'relative',
        background: 'var(--bg-obsidian)',
        borderTop: '1px solid var(--border-subtle)',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        
        {/* Section Header */}
        <div style={{ maxWidth: '820px', marginBottom: '50px' }}>
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
            <Navigation size={16} />
            <span>[ 06 // PAN-INDIA EXECUTION FOOTPRINT ]</span>
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
            From Kashmir to Kanyakumari.
            <br />
            <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--gold-light)' }}>
              From Gujarat to Nagaland.
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
            Our turnkey teams deploy across diverse topographies, climate zones, and logistical corridors. We deliver unified architectural standards and regulatory approvals anywhere in India.
          </p>
        </div>

        {/* Region Cards Grid & Territory Dossier */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
            marginBottom: '36px',
          }}
        >
          {REGIONS.map((region) => {
            const isSelected = activeRegion.id === region.id;
            return (
              <div
                key={region.id}
                onClick={() => {
                  playTactileClick();
                  setActiveRegion(region);
                }}
                onMouseEnter={() => onCursorEnter?.('INSPECT')}
                onMouseLeave={onCursorLeave}
                className="glass-panel"
                style={{
                  padding: '24px',
                  borderRadius: '16px',
                  border: `1px solid ${isSelected ? 'var(--gold-primary)' : 'var(--border-subtle)'}`,
                  background: isSelected ? 'rgba(200, 169, 126, 0.12)' : 'var(--bg-card)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      color: 'var(--gold-primary)',
                      letterSpacing: '0.1em',
                    }}
                  >
                    {region.highlight}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: isSelected ? 'var(--gold-light)' : '#fff',
                    }}
                  >
                    {region.activeCount}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    color: '#fff',
                    marginBottom: '8px',
                  }}
                >
                  {region.name}
                </h3>

                <div
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.85rem',
                    color: 'var(--text-soft)',
                    marginBottom: '10px',
                  }}
                >
                  {region.hubs}
                </div>

                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: 'var(--text-muted)',
                  }}
                >
                  Scope: {region.focus}
                </div>
              </div>
            );
          })}
        </div>

        {/* Territory Logistics Capability Strip */}
        <div
          className="glass-panel"
          style={{
            padding: '28px 36px',
            borderRadius: '16px',
            border: '1px solid var(--border-gold)',
            background: 'rgba(23, 21, 19, 0.95)',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '20px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: 'rgba(200, 169, 126, 0.15)',
                color: 'var(--gold-primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <MapPin size={20} />
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700, color: '#fff' }}>
                Centralized Logistics & Pan-India PMC Supervision
              </div>
              <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                Equipped with mobile site engineering teams and direct manufacturer supply lines for quick mobilization.
              </div>
            </div>
          </div>

          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.78rem',
              color: 'var(--gold-light)',
              padding: '8px 18px',
              borderRadius: '20px',
              border: '1px solid var(--border-gold)',
              background: 'rgba(200, 169, 126, 0.1)',
            }}
          >
            28 STATES & UNION TERRITORIES REACHED
          </div>
        </div>

      </div>
    </section>
  );
}
