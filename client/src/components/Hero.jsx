import React from 'react';
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import { FaCog } from 'react-icons/fa';
import Me from './Me';

export default function Hero() {
  return (
    <div className="text-center px-4 ">
      {/* Animated heading with glitch and fade-in */}
      <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-7xl font-light cyberblast mb-4 mt-10 sm:mt-16 md:mt-20 animate-fade-in leading-tight">
        <span className="relative inline-block animate-glitch">
          Hi, I'm Omkumar Solanki <span className="inline-block animate-wiggle">👋</span>
        </span>
      </h1>
              {/* Your Profile Card (just below Hero/your name) */}
        <Me />

      {/* Animated paragraph with fade-in-up and 3D hover effect */}
      <p className="text-green-600 glitch max-w-4xl text-base sm:text-lg md:text-3xl lg:text-2xl xl:text-3xl mx-auto mt-20 animate-fade-in-up">
        <span className="text-green-300 italic inline-block animate-fade-in-left hover:animate-3d-pop cursor-pointer transition-transform duration-300 text-base sm:text-lg md:text-3xl lg:text-2xl xl:text-3xl">
          MERN & iOS (SwiftUI + Storyboard) Developer with hands-on experience in AI Agent workflows, LLM fine-tuning, and RAG-based chatbot systems.
          <br /><br />
        </span>
        <style>{`
          @keyframes fade-in-left {
            from { opacity: 0; transform: translateX(-40px);}
            to { opacity: 1; transform: translateX(0);}
          }
          .animate-fade-in-left {
            animation: fade-in-left 1.2s cubic-bezier(.4,0,.2,1) both;
          }
          @keyframes pop3d {
            0% { transform: scale(1) perspective(400px) rotateY(0deg);}
            40% { transform: scale(1.07) perspective(400px) rotateY(8deg);}
            60% { transform: scale(1.07) perspective(400px) rotateY(-8deg);}
            100% { transform: scale(1) perspective(400px) rotateY(0deg);}
          }
          .hover\\:animate-3d-pop:hover {
            animation: pop3d 0.7s cubic-bezier(.4,0,.2,1);
          }
        `}</style>
        Skilled in building scalable apps using&nbsp;
        <span className="italic text-green-300 text-base sm:text-lg md:text-3xl lg:text-2xl xl:text-3xl hover:animate-3d-tilt inline-block transition-transform duration-300 cursor-pointer">
          Docker, AWS, and CI/CD pipelines
        </span>.
        Currently learning&nbsp;
        <span className="italic text-green-300 underline text-base sm:text-lg md:text-3xl lg:text-2xl xl:text-3xl hover:animate-3d-tilt inline-block transition-transform duration-300 cursor-pointer">
          Web3
        </span>
       &nbsp;and&nbsp;
        <span className="italic text-green-300 underline text-base sm:text-lg md:text-3xl lg:text-2xl xl:text-3xl hover:animate-3d-tilt inline-block transition-transform duration-300 cursor-pointer">
          smart contract development
        </span>.
        <br /><br />
        Successfully delivered&nbsp;
        <span className="text-green-200 kapiler font-extrabold text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl animate-pulse hover:animate-3d-tilt inline-block transition-transform duration-300 cursor-pointer">
           &nbsp;$8000+&nbsp;
        </span>
        in freelance projects with real&nbsp;AI+full-stack integrations.
        <style>{`
          @keyframes tilt3d {
            0% { transform: perspective(400px) rotateY(0deg) scale(1);}
            30% { transform: perspective(400px) rotateY(8deg) scale(1.05);}
            60% { transform: perspective(400px) rotateY(-8deg) scale(1.05);}
            100% { transform: perspective(400px) rotateY(0deg) scale(1);}
          }
          .hover\\:animate-3d-tilt:hover {
            animation: tilt3d 0.7s cubic-bezier(.4,0,.2,1);
          }
        `}</style>
      </p>

      {/* Social icons with bounce animation */}
      <div className="flex justify-center items-center gap-6 mt-8 animate-fade-in-up delay-200">
        <a
          href="https://github.com/tcoders16?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-400 hover:text-green-300 transition-transform transform hover:scale-250 hover:rotate-20 p-3 border border-green-500 rounded-full shadow-lg hover:shadow-green-500/40 animate-bounce-slow"
          title="GitHub"
        >
          <FaGithub size={32} />
        </a>
        <a
          href="https://www.linkedin.com/in/omkumar-solanki-atluxuarywxtchbusinessmandeveloper2/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-400 hover:text-green-300 transition-transform transform hover:scale-250 hover:-rotate-20 p-3 border border-green-500 rounded-full shadow-lg hover:shadow-green-500/40 animate-bounce-slow delay-100"
          title="LinkedIn"
        >
          <FaLinkedin size={32} />
        </a>
        <a
          href="https://x.com/ceo_hsd?s=21"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-400 hover:text-green-300 transition-transform transform hover:scale-250 hover:rotate-20 p-3 border border-green-500 rounded-full shadow-lg hover:shadow-green-500/40 animate-bounce-slow delay-200"
          title="X (Twitter)"
        >
          <FaXTwitter size={32} />
        </a>
      </div>

      {/* Centered button with pulse, glow, and shake PROJECT BUTTON*/}
      <div className="flex justify-center mt-6 animate-fade-in-up delay-300">
        <button
          className="px-6 py-2 border border-green-400 text-green-300 hover:border-green-500 hover:text-green-100 hover:shadow-lg hover:shadow-green-400/60 rounded-md text-lg sm:text-xl md:text-2xl font-bold kapiler transition-all duration-300 flex items-center justify-center gap-2 animate-pulse animate-glow hover:animate-shake active:animate-press-3d"
          style={{ boxShadow: '0 0 16px 2px #22d3ee55' }}
        >
          Projects <FaCog className="animate-spin-slow text-green-400" />
        </button>
        <style>{`
          @keyframes glow {
            0%, 100% { box-shadow: 0 0 16px 2px #22d3ee55; }
            50% { box-shadow: 0 0 32px 8px #22d3eecc; }
          }
          .animate-glow { animation: glow 2s infinite alternate; }
          @keyframes shake {
            0%, 100% { transform: translateX(0); }
            20%, 60% { transform: translateX(-4px); }
            40%, 80% { transform: translateX(4px); }
          }
          .hover\\:animate-shake:hover { animation: shake 0.4s; }
          @keyframes press-3d {
            0% { transform: perspective(400px) scale(1) rotateX(0deg);}
            50% { transform: perspective(400px) scale(0.93) rotateX(12deg);}
            100% { transform: perspective(400px) scale(1) rotateX(0deg);}
          }
          .active\\:animate-press-3d:active {
            animation: press-3d 0.28s cubic-bezier(.4,0,.2,1);
          }
        `}</style>
      </div>

    {/* Contact Me Button */}
      <div className="flex justify-center mt-6 animate-fade-in-up delay-300">
        <button
          className="px-6 py-2 border border-green-400 text-green-300 hover:border-green-500 hover:text-green-100 hover:shadow-lg hover:shadow-green-400/60 rounded-md text-lg sm:text-xl md:text-2xl font-bold kapiler transition-all duration-300 flex items-center justify-center gap-2 animate-pulse animate-glow hover:animate-shake active:animate-press-3d"
          style={{ boxShadow: '0 0 16px 2px #22d3ee55' }}
        >
          Contact Me <FaCog className="animate-spin-slow text-green-400" />
        </button>
        <style>{`
          @keyframes glow {
            0%, 100% { box-shadow: 0 0 16px 2px #22d3ee55; }
            50% { box-shadow: 0 0 32px 8px #22d3eecc; }
          }
          .animate-glow { animation: glow 2s infinite alternate; }
          @keyframes shake {
            0%, 100% { transform: translateX(0); }
            20%, 60% { transform: translateX(-4px); }
            40%, 80% { transform: translateX(4px); }
          }
          .hover\\:animate-shake:hover { animation: shake 0.4s; }
          @keyframes press-3d {
            0% { transform: perspective(400px) scale(1) rotateX(0deg);}
            50% { transform: perspective(400px) scale(0.93) rotateX(12deg);}
            100% { transform: perspective(400px) scale(1) rotateX(0deg);}
          }
          .active\\:animate-press-3d:active {
            animation: press-3d 0.28s cubic-bezier(.4,0,.2,1);
          }
        `}</style>
      </div>






      {/* Animated tech stack links */}
      <div className="text-green-400 italic text-xs sm:text-md md:text-lg lg:text-md font-light max-w-4xl mx-auto tracking-wide flex flex-wrap justify-center gap-x-4 gap-y-2 mt-20 animate-fade-in-up delay-500">
        {[
          { name: 'JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
          { name: 'TypeScript', url: 'https://www.typescriptlang.org/' },
          { name: 'React', url: 'https://react.dev/' },
          { name: 'Node.js', url: 'https://nodejs.org/' },
          { name: 'Express', url: 'https://expressjs.com/' },
          { name: 'MongoDB', url: 'https://www.mongodb.com/' },
          { name: 'PostgreSQL', url: 'https://www.postgresql.org/' },
          { name: 'Swift', url: 'https://developer.apple.com/swift/' },
          { name: 'SwiftUI', url: 'https://developer.apple.com/xcode/swiftui/' },
          { name: 'Storyboard', url: 'https://developer.apple.com/documentation/xcode/using-storyboards-to-design-user-interfaces' },
          { name: 'Firebase', url: 'https://firebase.google.com/' },
          { name: 'Git/GitHub', url: 'https://github.com/' },
          { name: 'Vite', url: 'https://vitejs.dev/' },
          { name: 'Tailwind CSS', url: 'https://tailwindcss.com/' },
          { name: 'Redux Toolkit', url: 'https://redux-toolkit.js.org/' },
          { name: 'Recoil', url: 'https://recoiljs.org/' },
          { name: 'Docker', url: 'https://www.docker.com/' },
          { name: 'AWS', url: 'https://aws.amazon.com/' },
          { name: 'CI/CD', url: 'https://www.redhat.com/en/topics/devops/what-is-ci-cd' },
          { name: 'OpenAI', url: 'https://openai.com/' },
          { name: 'Langchain', url: 'https://www.langchain.com/' },
          { name: 'Pinecone', url: 'https://www.pinecone.io/' },
          { name: 'RAG', url: 'https://www.pinecone.io/learn/retrieval-augmented-generation/' },
          { name: 'Shopify + Liquid', url: 'https://shopify.dev/docs/themes/liquid/reference' },
          { name: 'Solana', url: 'https://solana.com/' },
          { name: 'Ethers.js', url: 'https://docs.ethers.org/' },
          { name: 'Wallet Connection', url: 'https://docs.metamask.io/' },
          { name: 'ORM', url: 'https://www.prisma.io/' },
          { name: 'Middleware', url: 'https://expressjs.com/en/guide/using-middleware.html' },
        ].map((tech, index) => (
          <a
            key={index}
            href={tech.url}
            target="_blank"
            rel="noopener noreferrer"
            className="italic transition-transform duration-300 hover:scale-110 hover:rotate-1 hover:text-green-300 underline underline-offset-2"
            title={tech.url}
          >
            {tech.name}
          </a>
        ))}
      </div>

      {/* Custom animations (add to your global CSS or Tailwind config) */}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px);}
          to { opacity: 1; transform: translateY(0);}
        }
        .animate-fade-in { animation: fade-in 1.2s cubic-bezier(.4,0,.2,1) both; }
        .animate-fade-in-up { animation: fade-in 1.2s cubic-bezier(.4,0,.2,1) both; }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-500 { animation-delay: 0.5s; }
        @keyframes wiggle {
          0%, 100% { transform: rotate(-10deg);}
          50% { transform: rotate(10deg);}
        }
        .animate-wiggle { animation: wiggle 1.2s infinite; display: inline-block;}
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0);}
          50% { transform: translateY(-8px);}
        }
        .animate-bounce-slow { animation: bounce-slow 2.2s infinite; }
        @keyframes glitch {
          0% { text-shadow: 2px 0 red, -2px 0 blue; }
          20% { text-shadow: -2px 0 red, 2px 0 blue; }
          40% { text-shadow: 2px 2px red, -2px -2px blue; }
          60% { text-shadow: -2px -2px red, 2px 2px blue; }
          80% { text-shadow: 2px 0 red, -2px 0 blue; }
          100% { text-shadow: none; }
        }
        .animate-glitch { animation: glitch 1.1s infinite alternate-reverse; }
        @keyframes spin-slow {
          100% { transform: rotate(360deg);}
        }
        .animate-spin-slow { animation: spin-slow 2.5s linear infinite; }
      `}</style>
    </div>
  );
}