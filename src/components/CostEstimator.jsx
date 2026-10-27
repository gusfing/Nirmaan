import React, { useState, useMemo } from 'react';
import { Calculator, ArrowRight, ShieldCheck, Clock, Check, Sparkles } from 'lucide-react';
import { playTactileClick } from './AudioAmbience';

const TYPOLOGIES = [
  { id: 'healthcare', label: 'Specialized Healthcare / Hospital', baseRate: 3800, leadTimeMonths: 5 },
  { id: 'residential', label: 'Luxury Residence / Penthouse', baseRate: 3200, leadTimeMonths: 4 },
  { id: 'corporate', label: 'Corporate & Experience Centre', baseRate: 2600, leadTimeMonths: 3 },
  { id: 'institutional', label: 'Institutional / Academy', baseRate: 2200, leadTimeMonths: 4 },
];

const TIERS = [
  { id: 'executive', label: 'Executive Architectural', multiplier: 1.0, desc: 'Premium branded materials, smart infrastructure' },
  { id: 'bespoke', label: 'Bespoke High-Craft', multiplier: 1.35, desc: 'Italian marble, custom millwork, advanced automation' },
  { id: 'monolithic', label: 'Ultra-Luxury Masterpiece', multiplier: 1.75, desc: 'Museum-grade stone, acoustic isolation, zero-compromise' },
];

export default function CostEstimator({ onOpenConsultation, onCursorEnter, onCursorLeave }) {
  const [selectedTypology, setSelectedTypology] = useState(TYPOLOGIES[0]);
  const [areaSqFt, setAreaSqFt] = useState(4500);
  const [selectedTier, setSelectedTier] = useState(TIERS[1]);

  const calculation = useMemo(() => {
    const ratePerSqFt = Math.round(selectedTypology.baseRate * selectedTier.multiplier);
    const totalCost = areaSqFt * ratePerSqFt;
    
    // Breakdown
    const civil = Math.round(totalCost * 0.22);
    const mepHvac = Math.round(totalCost * 0.28);
    const stoneMillwork = Math.round(totalCost * 0.35);
    const pmcCompliance = Math.round(totalCost * 0.15);

    // Timeline calculation based on area
    const estimatedDays = Math.round(selectedTypology.leadTimeMonths * 30 + (areaSqFt / 2000) * 15);

    return {
      ratePerSqFt,
      totalCost,
      civil,
      mepHvac,
      stoneMillwork,
      pmcCompliance,
      estimatedDays,
    };
  }, [selectedTypology, areaSqFt, selectedTier]);

  const formatCurrency = (amount) => {
    if (amount >= 10000000) {
      return `₹ ${(amount / 10000000).toFixed(2)} Cr`;
    }
    return `₹ ${(amount / 100000).toFixed(2)} Lakhs`;
  };

  const handleHandover = () => {
    playTactileClick();
    onOpenConsultation(
      `Estimator: ${selectedTypology.label} (${areaSqFt.toLocaleString()} sq.ft, ${selectedTier.label}, Est. ${formatCurrency(calculation.totalCost)})`
    );
  };

  return (
    <section
      id="calculator"
      style={{
        padding: '120px 24px',
        position: 'relative',
        background: 'var(--bg-deep)',
        borderTop: '1px solid var(--border-subtle)',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        
        {/* Section Header */}
        <div style={{ maxWidth: '800px', marginBottom: '50px' }}>
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
            <Calculator size={16} />
            <span>[ 04 // REAL-TIME SPATIAL ESTIMATOR ]</span>
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
            Predictable Budgets.
            <br />
            <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 300, color: 'var(--gold-light)' }}>
              Transparent Engineering.
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
            Configure your project parameters to receive immediate, transparent capital expenditure benchmarks based on real 2026 material and turnkey construction indices across India.
          </p>
        </div>

        {/* Estimator Main Console */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: '30px',
          }}
        >
          {/* Left Controls: Typology + Area + Tier */}
          <div
            style={{
              gridColumn: 'span 7',
              display: 'flex',
              flexDirection: 'column',
              gap: '32px',
            }}
            className="estimator-controls"
          >
            {/* 1. Typology Selector */}
            <div className="glass-panel" style={{ padding: '24px' }}>
              <label
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: 'var(--gold-primary)',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  marginBottom: '16px',
                }}
              >
                1. Select Architectural Typology
              </label>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                  gap: '12px',
                }}
              >
                {TYPOLOGIES.map((typ) => {
                  const isSelected = selectedTypology.id === typ.id;
                  return (
                    <div
                      key={typ.id}
                      onClick={() => {
                        playTactileClick();
                        setSelectedTypology(typ);
                      }}
                      style={{
                        padding: '14px 18px',
                        borderRadius: '10px',
                        border: `1px solid ${isSelected ? 'var(--gold-primary)' : 'var(--border-subtle)'}`,
                        background: isSelected ? 'rgba(200, 169, 126, 0.14)' : 'rgba(255, 255, 255, 0.02)',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <div
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.9rem',
                          fontWeight: 600,
                          color: isSelected ? 'var(--gold-light)' : 'var(--text-main)',
                        }}
                      >
                        {typ.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 2. Carpet Area Slider */}
            <div className="glass-panel" style={{ padding: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <label
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: 'var(--gold-primary)',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                  }}
                >
                  2. Carpet Area (Square Feet)
                </label>
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.4rem',
                    fontWeight: 700,
                    color: '#fff',
                  }}
                >
                  {areaSqFt.toLocaleString()} <span style={{ fontSize: '0.8rem', color: 'var(--gold-primary)' }}>SQ.FT</span>
                </span>
              </div>

              <input
                type="range"
                min="800"
                max="35000"
                step="200"
                value={areaSqFt}
                onChange={(e) => setAreaSqFt(Number(e.target.value))}
                style={{
                  width: '100%',
                  accentColor: 'var(--gold-primary)',
                  cursor: 'pointer',
                  height: '8px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '4px',
                }}
              />

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  color: 'var(--text-muted)',
                  marginTop: '10px',
                }}
              >
                <span>800 sq.ft (Boutique Suite)</span>
                <span>15,000 sq.ft</span>
                <span>35,000+ sq.ft (Mega Facility)</span>
              </div>
            </div>

            {/* 3. Specification Tier */}
            <div className="glass-panel" style={{ padding: '24px' }}>
              <label
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  color: 'var(--gold-primary)',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  marginBottom: '16px',
                }}
              >
                3. Quality & Specification Tier
              </label>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {TIERS.map((tier) => {
                  const isSelected = selectedTier.id === tier.id;
                  return (
                    <div
                      key={tier.id}
                      onClick={() => {
                        playTactileClick();
                        setSelectedTier(tier);
                      }}
                      style={{
                        padding: '14px 18px',
                        borderRadius: '10px',
                        border: `1px solid ${isSelected ? 'var(--gold-primary)' : 'var(--border-subtle)'}`,
                        background: isSelected ? 'rgba(200, 169, 126, 0.14)' : 'rgba(255, 255, 255, 0.02)',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                      }}
                    >
                      <div>
                        <div
                          style={{
                            fontFamily: 'var(--font-body)',
                            fontSize: '0.92rem',
                            fontWeight: 600,
                            color: isSelected ? 'var(--gold-light)' : 'var(--text-main)',
                          }}
                        >
                          {tier.label}
                        </div>
                        <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                          {tier.desc}
                        </div>
                      </div>
                      {isSelected && <Check size={18} color="var(--gold-primary)" />}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Summary Card (Breakdown & Handover) */}
          <div
            style={{
              gridColumn: 'span 5',
              display: 'flex',
              flexDirection: 'column',
            }}
            className="estimator-summary"
          >
            <div
              className="glass-panel"
              style={{
                padding: '36px 30px',
                borderRadius: '20px',
                border: '1px solid var(--border-gold)',
                background: 'rgba(23, 21, 19, 0.95)',
                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8)',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: 'var(--gold-primary)',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  marginBottom: '6px',
                }}
              >
                ESTIMATED CAPITAL OUTLAY
              </div>

              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2.2rem, 3.5vw, 3.4rem)',
                  fontWeight: 800,
                  color: '#fff',
                  lineHeight: 1,
                  marginBottom: '6px',
                }}
              >
                {formatCurrency(calculation.totalCost)}
              </div>

              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  color: 'var(--text-muted)',
                  marginBottom: '28px',
                }}
              >
                Approx. ₹ {calculation.ratePerSqFt.toLocaleString()} / sq.ft (All-Inclusive Turnkey)
              </div>

              {/* Execution Line Items */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.86rem', color: 'var(--text-soft)' }}>
                  <span>Civil & Structural Modifications (22%)</span>
                  <span style={{ fontFamily: 'var(--font-mono)', color: '#fff' }}>{formatCurrency(calculation.civil)}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.86rem', color: 'var(--text-soft)' }}>
                  <span>MEP, Radiation Shielding / HVAC (28%)</span>
                  <span style={{ fontFamily: 'var(--font-mono)', color: '#fff' }}>{formatCurrency(calculation.mepHvac)}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.86rem', color: 'var(--text-soft)' }}>
                  <span>Fine Stone, Millwork & Finishes (35%)</span>
                  <span style={{ fontFamily: 'var(--font-mono)', color: '#fff' }}>{formatCurrency(calculation.stoneMillwork)}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.86rem', color: 'var(--text-soft)' }}>
                  <span>PMC, Regulatory Audits & QA (15%)</span>
                  <span style={{ fontFamily: 'var(--font-mono)', color: '#fff' }}>{formatCurrency(calculation.pmcCompliance)}</span>
                </div>
              </div>

              {/* Estimated Timeline */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '16px',
                  borderRadius: '10px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--border-subtle)',
                  marginBottom: '32px',
                }}
              >
                <Clock size={20} color="var(--gold-primary)" />
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                    ESTIMATED TURNKEY TIMELINE
                  </div>
                  <div style={{ fontFamily: 'var(--font-body)', fontWeight: 600, color: '#fff', fontSize: '0.92rem' }}>
                    {calculation.estimatedDays} Calendar Days to Handover
                  </div>
                </div>
              </div>

              {/* Handover CTA */}
              <button
                onClick={handleHandover}
                onMouseEnter={() => onCursorEnter?.('CONFIRM')}
                onMouseLeave={onCursorLeave}
                className="btn-gold"
                style={{
                  width: '100%',
                  padding: '18px',
                  fontSize: '0.85rem',
                  marginTop: 'auto',
                }}
              >
                <Sparkles size={16} />
                <span>Lock in Estimate & Book Consultation</span>
              </button>

              <div
                style={{
                  textAlign: 'center',
                  marginTop: '12px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  color: 'var(--text-muted)',
                }}
              >
                Includes detailed BOQ, site assessment & structural verification.
              </div>
            </div>
          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 960px) {
          .estimator-controls { grid-column: span 12 !important; }
          .estimator-summary { grid-column: span 12 !important; margin-top: 20px; }
        }
      `}</style>
    </section>
  );
}
