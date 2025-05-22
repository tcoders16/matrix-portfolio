import React, { useEffect, useRef } from 'react';


export default function MatrixBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Setup canvas for full screen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();

    const letters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    const fontSize = 16;
    let columns = Math.floor(window.innerWidth / fontSize);
    let drops = Array(columns).fill(1);

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#00ff00';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);

    // Resize handler for responsiveness
    const handleResize = () => {
      resizeCanvas();
      columns = Math.floor(window.innerWidth / fontSize);
      drops = Array(columns).fill(1);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
        <canvas
          ref={canvasRef}
          className="fixed top-0 left-0 w-full h-full z-[-1] pointer-events-none select-none"
        />
  
    </div>
  );
}