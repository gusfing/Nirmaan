import React, { useState } from 'react';
import { X, Send, Sparkles, Phone, MessageSquare, CheckCircle2, Clock } from 'lucide-react';
import confetti from 'canvas-confetti';
import { STUDIO_META } from '../data/studioData';
import { playTactileClick } from './AudioAmbience';

export default function ConsultationModal({ isOpen, onClose, initialNote }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    typology: 'Specialized Healthcare (AERB/ICU)',
    area: '',
    notes: initialNote || '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    playTactileClick();

    // Trigger celebratory architectural confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#c8a97e', '#dfbf95', '#ffffff'],
      });
    } catch (err) {
      // fallback
    }

    setSubmitted(true);
  };

  const openWhatsApp = () => {
    playTactileClick();
    const text = encodeURIComponent(
      `Hello Nirmaan Interior Design Studio,\nI would like to schedule an architectural consultation.\n\nName: ${formData.name || 'Inquirer'}\nTypology: ${formData.typology}\nArea: ${formData.area || 'TBD'} sq.ft\nBrief: ${formData.notes || initialNote || 'Discussing new project'}`
    );
    window.open(`https://wa.me/919369769646?text=${text}`, '_blank');
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(9, 8, 7, 0.94)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        zIndex: 11000,
        overflowY: 'auto',
        padding: '30px 16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="glass-panel animate-modal"
        style={{
          maxWidth: '680px',
          width: '100%',
          background: 'rgba(23, 21, 19, 0.98)',
          border: '1px solid var(--border-gold)',
          borderRadius: '24px',
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
            padding: '24px 30px',
            borderBottom: '1px solid var(--border-subtle)',
            background: 'rgba(15, 14, 13, 0.95)',
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
              COMMISSIONS & PMC ENGAGEMENT
            </span>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.4rem',
                fontWeight: 700,
                color: '#fff',
                marginTop: '2px',
              }}
            >
              Schedule Studio Consultation
            </h3>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
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

        {/* Modal Content */}
        <div style={{ padding: '32px' }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '30px 10px' }}>
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'rgba(200, 169, 126, 0.15)',
                  border: '1px solid var(--gold-primary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  color: 'var(--gold-primary)',
                }}
              >
                <CheckCircle2 size={32} />
              </div>

              <h4
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.7rem',
                  fontWeight: 700,
                  color: '#fff',
                  marginBottom: '10px',
                }}
              >
                Brief Received & Logged.
              </h4>

              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.95rem',
                  color: 'var(--text-soft)',
                  maxWidth: '460px',
                  margin: '0 auto 28px',
                  lineHeight: 1.6,
                }}
              >
                Thank you, <strong>{formData.name}</strong>. Mr. Anil Tripathi & our senior architectural team will review your specifications and contact you within 24 hours.
              </p>

              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  maxWidth: '380px',
                  margin: '0 auto',
                }}
              >
                <button onClick={openWhatsApp} className="btn-gold" style={{ width: '100%' }}>
                  <MessageSquare size={16} />
                  <span>Connect Instantly on WhatsApp</span>
                </button>
                <button onClick={onClose} className="btn-outline" style={{ width: '100%' }}>
                  <span>Return to Studio Portfolio</span>
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '18px', marginBottom: '18px' }}>
                <div>
                  <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)', marginBottom: '6px' }}>
                    YOUR FULL NAME / ENTERPRISE *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Dr. Rajesh Khanna / Fortis Healthcare"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid var(--border-subtle)',
                      color: '#fff',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.9rem',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)', marginBottom: '6px' }}>
                    PHONE / WHATSAPP NUMBER *
                  </label>
                  <input
                    required
                    type="tel"
                    placeholder="+91-9876543210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid var(--border-subtle)',
                      color: '#fff',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.9rem',
                    }}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '18px', marginBottom: '18px' }}>
                <div>
                  <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)', marginBottom: '6px' }}>
                    OFFICIAL EMAIL ADDRESS *
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="name@enterprise.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid var(--border-subtle)',
                      color: '#fff',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.9rem',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)', marginBottom: '6px' }}>
                    PROJECT TYPOLOGY
                  </label>
                  <select
                    value={formData.typology}
                    onChange={(e) => setFormData({ ...formData, typology: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      borderRadius: '8px',
                      background: '#151412',
                      border: '1px solid var(--border-subtle)',
                      color: '#fff',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.9rem',
                    }}
                  >
                    <option value="Specialized Healthcare (AERB/ICU)">Specialized Healthcare (AERB/ICU)</option>
                    <option value="Luxury Residential / Penthouse">Luxury Residential / Penthouse</option>
                    <option value="Commercial HQ & Experience Center">Commercial HQ & Experience Center</option>
                    <option value="Turnkey PMC & Civil Execution">Turnkey PMC & Civil Execution</option>
                    <option value="Institutional / Academy Campus">Institutional / Academy Campus</option>
                  </select>
                </div>
              </div>

              <div style={{ marginBottom: '18px' }}>
                <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)', marginBottom: '6px' }}>
                  PROJECT LOCATION & ESTIMATED AREA (SQ.FT)
                </label>
                <input
                  type="text"
                  placeholder="e.g. New Delhi / 6,500 sq.ft"
                  value={formData.area}
                  onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--border-subtle)',
                    color: '#fff',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9rem',
                  }}
                />
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)', marginBottom: '6px' }}>
                  ARCHITECTURAL REQUIREMENTS / SPECIAL NOTES
                </label>
                <textarea
                  rows={3}
                  placeholder="Details regarding site handover dates, regulatory requirements, medical equipment specifications, or preferred finishes..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--border-subtle)',
                    color: '#fff',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9rem',
                    resize: 'vertical',
                  }}
                />
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', alignItems: 'center', justifyContent: 'space-between' }}>
                <button
                  type="button"
                  onClick={openWhatsApp}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#25D366',
                    background: 'rgba(37, 211, 102, 0.1)',
                    border: '1px solid rgba(37, 211, 102, 0.3)',
                    padding: '12px 20px',
                    borderRadius: '8px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78rem',
                    cursor: 'pointer',
                  }}
                >
                  <MessageSquare size={16} />
                  <span>Chat Direct on WhatsApp</span>
                </button>

                <button type="submit" className="btn-gold" style={{ padding: '14px 28px' }}>
                  <Send size={15} />
                  <span>Submit Architectural Brief</span>
                </button>
              </div>

              <div
                style={{
                  marginTop: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  color: 'var(--text-muted)',
                }}
              >
                <Clock size={12} color="var(--gold-primary)" />
                <span>Immediate NDA & 24-Hour Studio Callback Guaranteed. Direct Hotline: {STUDIO_META.phone}</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
