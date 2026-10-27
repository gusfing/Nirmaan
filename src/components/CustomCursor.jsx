import React, { useEffect, useState } from 'react';

export default function CustomCursor({ cursorText, isHovering }) {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [dotPos, setDotPos] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let animationFrameId;

    const handleMouseMove = (e) => {
      setIsVisible(true);
      setDotPos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Smooth trailing ring
    const render = () => {
      setPos((prev) => ({
        x: prev.x + (dotPos.x - prev.x) * 0.18,
        y: prev.y + (dotPos.y - prev.y) * 0.18,
      }));
      animationFrameId = requestAnimationFrame(render);
    };
    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [dotPos.x, dotPos.y]);

  if (!isVisible) return null;

  return (
    <>
      {/* Precision Center Dot */}
      <div
        className="cursor-dot"
        style={{
          left: `${dotPos.x}px`,
          top: `${dotPos.y}px`,
          opacity: isHovering ? 0 : 1,
        }}
      />
      {/* Trailing Architectural Ring */}
      <div
        className="custom-cursor"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          width: cursorText ? '84px' : isHovering ? '54px' : '32px',
          height: cursorText ? '84px' : isHovering ? '54px' : '32px',
          backgroundColor: cursorText
            ? 'rgba(200, 169, 126, 0.95)'
            : isHovering
            ? 'rgba(200, 169, 126, 0.15)'
            : 'transparent',
          borderColor: cursorText
            ? 'transparent'
            : isHovering
            ? 'var(--gold-primary)'
            : 'rgba(200, 169, 126, 0.4)',
          borderWidth: cursorText ? '0px' : '1px',
          borderStyle: 'solid',
          color: '#090807',
          backdropFilter: cursorText ? 'blur(4px)' : 'none',
        }}
      >
        {cursorText && (
          <span style={{ fontWeight: 700, fontSize: '10px', letterSpacing: '0.12em' }}>
            {cursorText}
          </span>
        )}
      </div>
    </>
  );
}
