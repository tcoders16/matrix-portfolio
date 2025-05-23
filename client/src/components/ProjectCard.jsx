import React from "react";

// Badge rendering helper
const Badge = ({ text }) => (
  <span
    className="bg-[#111]/70 border border-green-500 text-green-200 text-xs px-2 py-1 rounded mr-2 mb-1 shadow-sm tracking-wide inline-block"
    style={{ fontFamily: "Share Tech Mono, monospace" }}
  >
    {text}
  </span>
);

export default function ProjectCard({
  image,
  title,
  date,
  description,
  tech = [],
  liveUrl,
  githubUrl,
}) {
  return (
    <div className="bg-black/85 border border-green-500 rounded-xl overflow-hidden shadow-lg hover:shadow-green-500/40 backdrop-blur-md transition-all duration-300 group flex flex-col h-full">
      {/* Project image */}
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-44 md:h-48 object-cover border-b border-green-800 group-hover:scale-[1.03] transition-transform duration-300"
        />
      )}
      <div className="p-5 flex-1 flex flex-col">
        {/* Title & date */}
        <div className="flex flex-col md:flex-row md:justify-between items-center">
          <h3
            className="text-green-300 text-lg md:text-xl font-bold tracking-wide mb-1 text-left w-full"
            style={{
              fontFamily: "Orbitron, sans-serif",
              letterSpacing: "1.5px",
            }}
          >
            {title}
          </h3>
          <span
            className="text-green-500 text-xs md:text-sm mb-2 md:mb-0 text-left w-full md:w-auto"
            style={{ fontFamily: "Share Tech Mono, monospace" }}
          >
            {date}
          </span>
        </div>
        {/* Description */}
        <p
          className="text-green-200 text-sm md:text-base font-light mb-3 mt-1"
          style={{
            minHeight: "60px",
            fontFamily: "Share Tech Mono, monospace",
          }}
        >
          {description}
        </p>
        {/* Tech badges */}
        <div className="flex flex-wrap mb-3">
          {tech.map((t, i) => (
            <Badge text={t} key={i} />
          ))}
        </div>
        {/* Links */}
        <div className="flex gap-3 mt-auto">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 bg-green-800/40 hover:bg-green-700 text-green-100 border border-green-400 rounded px-3 py-1 text-xs transition hover:scale-105"
              style={{ fontFamily: "Share Tech Mono, monospace" }}
            >
              <span>🔗</span> Live URL
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 bg-green-800/40 hover:bg-green-700 text-green-100 border border-green-400 rounded px-3 py-1 text-xs transition hover:scale-105"
              style={{ fontFamily: "Share Tech Mono, monospace" }}
            >
              <span>💻</span> Codebase
            </a>
          )}
        </div>
      </div>
    </div>
  );
}