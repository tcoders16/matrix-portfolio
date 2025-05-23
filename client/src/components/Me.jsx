import React from "react";

export default function Me() {
  return (
    <div className="flex flex-col items-center justify-center p-8 mt-8 bg-black/80 rounded-2xl shadow-[0_0_32px_#00ff9080] border-2 border-green-400 max-w-xs mx-auto">
      <img
        src="/images/profile.jpeg"
        alt="Omkumar Solanki"
        className="w-40 h-40 object-cover rounded-full border-4 border-green-400 shadow-[0_0_36px_#00ff90b0] mb-4 transition-transform hover:scale-105"
        draggable="false"
      />
      {/* Name - Orbitron Font */}
      <h2
        className="text-green-400 text-2xl font-bold mb-1 drop-shadow-[0_0_6px_#00ff90c0] text-center"
        style={{ fontFamily: "Orbitron, sans-serif", letterSpacing: "1.5px" }}
      >
        Omkumar Solanki
      </h2>
      {/* Subtitle - Orbitron */}
      <p
        className="text-green-300 text-base text-center mb-2 font-semibold"
        style={{ fontFamily: "Orbitron, sans-serif", letterSpacing: "1.5px" }}
      >
        MERN Stack & iOS (Swift/Storyboard) Developer
      </p>
      {/* Tech Description - Share Tech Mono */}
      <p
        className="text-green-200 text-xs text-center opacity-90 mb-2"
        style={{ fontFamily: "Share Tech Mono, monospace" }}
      >
        • AI Agents & RAG-Based Chatbots<br />
        • AI Model Training & Automation<br />
        • Web3 Enthusiast • Toronto
      </p>
      {/* Badges */}
      <div className="flex flex-wrap gap-2 justify-center mt-2">
        {[
          "AI Agents",
          "RAG Chatbots",
          "Model Training",
          "SwiftUI/Storyboard",
          "MERN Stack",
        ].map((tag) => (
          <span
            key={tag}
            className="bg-green-900/60 border border-green-400 text-green-200 px-2 py-1 rounded-md text-xs shadow hover:bg-green-700 transition-all"
            style={{ fontFamily: "Share Tech Mono, monospace" }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}