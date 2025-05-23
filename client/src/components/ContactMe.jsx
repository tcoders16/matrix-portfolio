import React, { useState } from "react";

export default function ContactMe() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("emailtosolankiom@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <div className="animate-fade-in-up bg-black/85 border border-green-500 rounded-2xl shadow-lg hover:shadow-green-500/40 backdrop-blur-md transition-all duration-300 w-full max-w-md mx-auto p-8 mt-10 flex flex-col items-center gap-4">
      {/* Title with Orbitron Light */}
      <h3
        className="text-green-300 text-2xl font-light tracking-wider text-center mb-2 drop-shadow-glow"
        style={{ fontFamily: "Orbitron, sans-serif", fontWeight: 400, letterSpacing: "1.5px" }}
      >
        Contact Me!
      </h3>
      {/* Description with Share Tech Mono */}
      <p
        className="text-green-200 text-base font-light mb-2 text-center"
        style={{ fontFamily: "Share Tech Mono, monospace" }}
      >
        Interested in collaborating, hiring, or just want to say hi?<br />
        Reach out to me!
      </p>
      <div className="w-full flex flex-col gap-4">
        <div className="flex w-full gap-2 items-center">
          <div className="flex-1 flex items-center">
            <span
              className="bg-green-900/40 border border-green-400 rounded-l px-3 py-2 text-green-100 text-sm w-full select-all transition-shadow focus:shadow-green-400/40 shadow-[0_0_8px_#00ff90]"
              style={{ fontFamily: "Share Tech Mono, monospace" }}
            >
              <span role="img" aria-label="email" className="mr-2">📧</span>
              emailtosolankiom@gmail.com
            </span>
          </div>
          <button
            onClick={handleCopy}
            className="px-4 py-2 rounded-r border border-green-400 bg-black/80 text-green-300 text-sm transition-all duration-200 hover:bg-green-700/60 hover:text-green-50 shadow-[0_0_8px_#00ff90] active:scale-95 focus:outline-none"
            style={{ fontFamily: "Share Tech Mono, monospace" }}
            title="Copy Email"
          >
            {copied ? (
              <span className="animate-fade-in text-green-300">Copied!</span>
            ) : (
              "Copy"
            )}
          </button>
        </div>
        <a
          href="https://www.linkedin.com/in/omkumar-solanki-atluxuarywxtchbusinessmandeveloper2/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded border border-green-400 bg-black/80 text-green-100 text-base transition-all duration-200 hover:bg-green-900/50 hover:text-green-200 shadow-[0_0_8px_#00ff90] focus:outline-none"
          style={{ fontFamily: "Share Tech Mono, monospace" }}
        >
          <span role="img" aria-label="linkedin" className="text-lg">🔗</span> LinkedIn
        </a>
        <a
          href="https://github.com/tcoders16"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded border border-green-400 bg-black/80 text-green-100 text-base transition-all duration-200 hover:bg-green-900/50 hover:text-green-200 shadow-[0_0_8px_#00ff90] focus:outline-none"
          style={{ fontFamily: "Share Tech Mono, monospace" }}
        >
          <span role="img" aria-label="github" className="text-lg">💻</span> GitHub
        </a>
      </div>
      <style>{`
        .drop-shadow-glow { text-shadow: 0 0 16px #00ff90, 0 0 2px #00ff90; }
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(32px);}
          to { opacity: 1; transform: translateY(0);}
        }
        .animate-fade-in-up { animation: fade-in-up 1.2s cubic-bezier(.4,0,.2,1) both; }
        @keyframes fade-in {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        .animate-fade-in { animation: fade-in 0.5s; }
      `}</style>
    </div>
  );
}