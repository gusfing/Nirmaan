import React, { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

let audioCtx = null;
let masterGain = null;
let oscillator1 = null;
let oscillator2 = null;

export const playTactileClick = () => {
  try {
    if (!audioCtx || audioCtx.state !== 'running') return;
    const osc = audioCtx.createOscillator();
    const clickGain = audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(120, audioCtx.currentTime + 0.04);
    clickGain.gain.setValueAtTime(0.04, audioCtx.currentTime);
    clickGain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.04);
    osc.connect(clickGain);
    clickGain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.05);
  } catch (err) {
    // Graceful silent fallback
  }
};

export default function AudioAmbience({ isPlaying, onToggle }) {
  useEffect(() => {
    if (isPlaying) {
      if (!audioCtx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        audioCtx = new AudioContext();
      }
      if (audioCtx.state === 'suspended') {
        audioCtx.resume();
      }

      if (!masterGain) {
        masterGain = audioCtx.createGain();
        masterGain.gain.setValueAtTime(0.015, audioCtx.currentTime);
        masterGain.connect(audioCtx.destination);

        // Low warm ambient frequency (55Hz Root + 110Hz Harmonic)
        oscillator1 = audioCtx.createOscillator();
        oscillator1.type = 'sine';
        oscillator1.frequency.setValueAtTime(55, audioCtx.currentTime);
        oscillator1.connect(masterGain);
        oscillator1.start();

        oscillator2 = audioCtx.createOscillator();
        oscillator2.type = 'triangle';
        oscillator2.frequency.setValueAtTime(110, audioCtx.currentTime);
        const filter = audioCtx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(180, audioCtx.currentTime);
        oscillator2.connect(filter);
        filter.connect(masterGain);
        oscillator2.start();
      } else {
        masterGain.gain.linearRampToValueAtTime(0.015, audioCtx.currentTime + 1);
      }
    } else {
      if (masterGain && audioCtx) {
        masterGain.gain.linearRampToValueAtTime(0.0001, audioCtx.currentTime + 0.8);
      }
    }
  }, [isPlaying]);

  return (
    <button
      onClick={() => {
        onToggle();
        playTactileClick();
      }}
      aria-label="Toggle ambient architecture audio"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        padding: '6px 12px',
        background: isPlaying ? 'rgba(200, 169, 126, 0.15)' : 'rgba(255, 255, 255, 0.04)',
        border: `1px solid ${isPlaying ? 'var(--gold-primary)' : 'var(--border-subtle)'}`,
        borderRadius: '20px',
        color: isPlaying ? 'var(--gold-primary)' : 'var(--text-muted)',
        fontFamily: 'var(--font-mono)',
        fontSize: '11px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
      }}
      title="Synthesized Studio Ambience"
    >
      {isPlaying ? <Volume2 size={13} /> : <VolumeX size={13} />}
      <span>{isPlaying ? 'SOUND ON' : 'AMBIENCE'}</span>
    </button>
  );
}
