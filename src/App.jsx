import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectShowcase from './components/ProjectShowcase';
import MaterialExplorer from './components/MaterialExplorer';
import ServicesArchitect from './components/ServicesArchitect';
import CostEstimator from './components/CostEstimator';
import LeadershipSection from './components/LeadershipSection';
import ClientMarquee from './components/ClientMarquee';
import PanIndiaMap from './components/PanIndiaMap';
import ConsultationModal from './components/ConsultationModal';
import Footer from './components/Footer';

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationInitialNote, setConsultationInitialNote] = useState('');
  const [cursorText, setCursorText] = useState('');
  const [isHovering, setIsHovering] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  // Initialize Lenis Smooth Inertia Scroll (Awwwards Style)
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
    });

    let animationFrameId;
    function raf(time) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }
    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  const handleOpenConsultation = (note = '') => {
    setConsultationInitialNote(typeof note === 'string' ? note : '');
    setIsConsultationOpen(true);
  };

  const handleCursorEnter = (text = '') => {
    setCursorText(text);
    setIsHovering(true);
  };

  const handleCursorLeave = () => {
    setCursorText('');
    setIsHovering(false);
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', background: 'var(--bg-obsidian)' }}>
      {/* Cinematic Film Grain & Blueprint Grid Overlays */}
      <div className="grain-overlay" />
      <div className="blueprint-grid" />

      {/* Awwwards Interactive Trailing Cursor */}
      <CustomCursor cursorText={cursorText} isHovering={isHovering} />

      {/* Floating Glassmorphic Navigation */}
      <Navbar
        onOpenConsultation={() => handleOpenConsultation()}
        isAudioPlaying={isAudioPlaying}
        onToggleAudio={() => setIsAudioPlaying(!isAudioPlaying)}
        onCursorEnter={handleCursorEnter}
        onCursorLeave={handleCursorLeave}
      />

      {/* Main Architectural Content */}
      <main>
        {/* 1. Hero Thesis & Monolithic Title */}
        <Hero
          onOpenConsultation={() => handleOpenConsultation()}
          onCursorEnter={handleCursorEnter}
          onCursorLeave={handleCursorLeave}
        />

        {/* 2. Interactive Project Showcase with Before/After Slider & Blueprint Dossier */}
        <ProjectShowcase
          onOpenConsultation={handleOpenConsultation}
          onCursorEnter={handleCursorEnter}
          onCursorLeave={handleCursorLeave}
        />

        {/* 3. Tactile Material Lab & Lighting Simulation */}
        <MaterialExplorer
          onCursorEnter={handleCursorEnter}
          onCursorLeave={handleCursorLeave}
        />

        {/* 4. Core Disciplines & Technical Deliverables */}
        <ServicesArchitect
          onOpenConsultation={handleOpenConsultation}
          onCursorEnter={handleCursorEnter}
          onCursorLeave={handleCursorLeave}
        />

        {/* 5. Real-Time Spatial & Budget Estimator */}
        <CostEstimator
          onOpenConsultation={handleOpenConsultation}
          onCursorEnter={handleCursorEnter}
          onCursorLeave={handleCursorLeave}
        />

        {/* 6. Principal Leadership & Credentials */}
        <LeadershipSection
          onOpenConsultation={handleOpenConsultation}
          onCursorEnter={handleCursorEnter}
          onCursorLeave={handleCursorLeave}
        />

        {/* 7. Client Roster & Verified Institutional Testimonials */}
        <ClientMarquee
          onCursorEnter={handleCursorEnter}
          onCursorLeave={handleCursorLeave}
        />

        {/* 8. Pan-India Nationwide Footprint */}
        <PanIndiaMap
          onCursorEnter={handleCursorEnter}
          onCursorLeave={handleCursorLeave}
        />
      </main>

      {/* Architectural Dossier & Consultation Booking Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        initialNote={consultationInitialNote}
      />

      {/* Editorial Footer */}
      <Footer
        onOpenConsultation={() => handleOpenConsultation()}
        onCursorEnter={handleCursorEnter}
        onCursorLeave={handleCursorLeave}
      />
    </div>
  );
}
