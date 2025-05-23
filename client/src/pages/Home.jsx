import React from 'react';
import MouseFollower from '../components/MouseFollower';
import MatrixBackground from '../components/MatrixBackground';
import Hero from '../components/Hero';

import ProjectGrid from '../components/ProjectGrid';
import ContactMe from '../components/ContactMe';

export default function Home() {
  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black/10 text-white">
      <MatrixBackground />
      <MouseFollower />
      <div className="absolute inset-0 z-10 flex flex-col items-center overflow-y-auto [&::-webkit-scrollbar]:hidden scrollbar-thin scrollbar-thumb-transparent py-10">
        <Hero />
        


        <div className="w-full flex flex-col items-center mt-20">
          <ProjectGrid />
          {/* Add some margin before contact card for nice spacing */}
          <div className="mt-20 w-full flex justify-center">
            <ContactMe />
          </div>
        </div>
      </div>
    </div>
  );
}