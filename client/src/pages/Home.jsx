import React from 'react';
import MouseFollower from '../components/MouseFollower';
import MatrixBackground from '../components/MatrixBackground';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black/10 text-white pt-60">
      {/* Background Matrix canvas (z-[-1]) */}
      <MatrixBackground />

      {/* Mouse follower */}
      <MouseFollower />

      {/* Hero centered on top with scrollable area */}
      <div className="absolute inset-0 z-10 flex items-center justify-center overflow-y-auto [&::-webkit-scrollbar]:hidden scrollbar-thin scrollbar-thumb-transparent">
        <Hero />
      </div>
    </div>
  );
}