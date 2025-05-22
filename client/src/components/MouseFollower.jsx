import React, { useEffect, useRef } from 'react';

export default function MouseFollower() {
  const dotRef = useRef(null);
  const pos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const target = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };

    document.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      const dx = target.current.x - pos.current.x;
      const dy = target.current.y - pos.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // Use a smaller factor for slower, smoother movement
      const factor = 0.07;

      if (distance < 0.5) {
        pos.current.x = target.current.x;
        pos.current.y = target.current.y;
      } else {
        pos.current.x += dx * factor;
        pos.current.y += dy * factor;
      }

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
      style={{
        width: '25px',
        height: '25px',
        backgroundColor: 'rgba(255, 255, 255, 0.5)', // white, semi-transparent
        borderRadius: '50%', // makes it a circle
        boxShadow: '0 0 10px rgba(255, 255, 255, 0.3)',
        filter: 'blur(1px)',
        transition: 'background 0.2s',
      }}
    />
  );
}