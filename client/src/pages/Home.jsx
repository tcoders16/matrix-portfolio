import React from 'react';
import MouseFollower from '../components/MouseFollower';
import MatrixBackground from '../components/MatrixBackground';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black/10 text-white">
      {/* Background Matrix canvas (z-[-1]) */}
      <MatrixBackground />

      {/* Mouse follower */}
      <MouseFollower />

      {/* Hero centered on top */}
      <div className="absolute inset-0 z-10   flex items-center justify-center">
        <Hero />
      </div>
    </div>
  );
}