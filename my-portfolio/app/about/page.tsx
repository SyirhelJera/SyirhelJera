"use client";

import { useEffect } from "react";

export default function AboutPage() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <main className="flex flex-col min-h-screen text-white bg-[#0a0a0a]">
{/* Hero Section - Video Background */}
<section className="relative h-screen overflow-hidden border-b-2 border-red-500/50">
  <div className="absolute inset-0 z-0">
    <video 
      autoPlay
      muted
      loop
      playsInline
      className="w-full h-full object-cover opacity-90"
    >
      <source src="/hero-bg-video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
    <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-transparent mix-blend-overlay" />
  </div>

  <div className="relative flex flex-col items-center justify-center h-full text-center px-6">
    <div className="relative z-10 max-w-4xl">
      <h1 className="text-6xl md:text-8xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-amber-500 uppercase tracking-tighter">
        Vincent The Aviator
      </h1>
      
      <div className="inline-block border-2 border-red-500/50 p-4 backdrop-blur-lg bg-black/30">
        <img 
          src="/profile.jpg"
          alt="Vincent"
          className="w-48 h-48 rounded-full mx-auto mb-6 border-4 border-red-500/80 shadow-2xl"
        />
        <p className="text-xl md:text-2xl text-gray-300 font-medium leading-relaxed">
          <span className="text-red-500">24 y/o Code Mercenary</span> | 
          <span className="text-amber-400"> Aviation Tactician</span> | 
          <span className="text-blue-400"> Systems Architect</span>
        </p>
      </div>
    </div>
  </div>
</section>

      {/* Passions Section - Cyberpunk Grid */}
      <section className="py-32 px-6 bg-[#111111] border-y-2 border-red-500/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-20 text-red-500 uppercase tracking-wide">
            Operational Domains
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-gradient-to-br from-black via-[#1a1a1a] to-black border-2 border-red-500/30 hover:border-red-500/60 transition-all group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-red-500/20 flex items-center justify-center rounded-lg">
                  <span className="text-2xl">✈️</span>
                </div>
                <h3 className="text-3xl font-bold text-red-500">Flight Systems</h3>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed">
                Commanding air superiority through advanced aviation tech and aerodynamic mastery.
                Certified in multi-engine operations with 500+ flight hours logged.
              </p>
              <div className="mt-6 border-t-2 border-red-500/20 pt-4">
                <span className="text-red-500/80 text-sm font-mono">CURRENT MISSION: Commercial Certification</span>
              </div>
            </div>

            <div className="p-8 bg-gradient-to-br from-black via-[#1a1a1a] to-black border-2 border-blue-500/30 hover:border-blue-500/60 transition-all group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-500/20 flex items-center justify-center rounded-lg">
                  <span className="text-2xl">💻</span>
                </div>
                <h3 className="text-3xl font-bold text-blue-500">Cyber Warfare</h3>
              </div>
              <p className="text-gray-400 text-lg leading-relaxed">
                Specializing in full-stack penetration and system architecture design.
                Primary arsenal includes React/Next.js artillery and TypeScript encryption protocols.
              </p>
              <div className="mt-6 border-t-2 border-blue-500/20 pt-4">
                <span className="text-blue-500/80 text-sm font-mono">ACTIVE PROJECT: AI Combat Systems</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section - Military-grade Deployment */}
      <section className="py-32 px-6 bg-black border-b-2 border-red-500/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-20 text-amber-400 uppercase">Combat Deployment History</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-center">
            {[
              { year: "2020", code: "OPERATION PYTHON", detail: "Initial code engagement" },
              { year: "2021", code: "WINGS INITIATED", detail: "Air superiority training" },
              { year: "2022", code: "STACK WARFARE", detail: "MERN specialization" },
              { year: "2023", code: "CONTENT ASSAULT", detail: "5k+ recruits trained" },
              { year: "2024", code: "AI TAKEOVER", detail: "Next-gen systems" },
            ].map((item, idx) => (
              <div key={idx} className="p-6 border-2 border-red-500/20 hover:border-red-500/50 bg-gradient-to-b from-black/50 to-transparent transition-all">
                <div className="text-red-500 text-sm font-mono mb-2">YEAR {item.year}</div>
                <div className="text-2xl font-bold text-white mb-2">{item.code}</div>
                <div className="text-gray-400 text-sm">{item.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manifesto Section - Command Console */}
      <section className="relative py-40 px-6 bg-[url('/circuit-board.jpg')] bg-cover">
        <div className="absolute inset-0 bg-black/90" />
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-block border-2 border-red-500/50 p-8 bg-black/70 backdrop-blur-lg">
            <h2 className="text-4xl font-black text-red-500 uppercase mb-8 tracking-widest">Directive Manifesto</h2>
            <div className="text-xl text-gray-300 leading-relaxed mb-12 border-l-4 border-red-500 pl-6 italic">
              "In the theater of technology and airspace dominance, precision is my payload, innovation my targeting system. 
              Every algorithm optimized is territory claimed."
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <button className="bg-red-500 text-black py-4 px-8 font-bold uppercase tracking-wide hover:bg-red-600 transition-all border-2 border-transparent hover:border-white/30">
                Engage Protocol
              </button>
              <button className="bg-transparent border-2 border-red-500 py-4 px-8 font-bold uppercase tracking-wide hover:bg-red-500/10 transition-all">
                Download Dossier
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}