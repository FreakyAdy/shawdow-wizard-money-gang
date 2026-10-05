import React from 'react';
import { ArrowRight, Sparkles, Wand2, ShieldAlert, Coins, Skull, Flame } from 'lucide-react';
import { soundFx } from '../utils/audio';

export default function Hero({ onSelectClass }) {
  const handleJoinClick = () => {
    soundFx.playSpell();
    const target = document.getElementById('apply');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClassesClick = () => {
    soundFx.play808Bass();
    const target = document.getElementById('classes');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-purple-900/30 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[250px] bg-[#00ff66]/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Top Arcane Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/70 border border-purple-600/50 mb-6 backdrop-blur-md shadow-lg shadow-purple-950/60 animate-bounce">
          <Sparkles className="w-4 h-4 text-[#00ff66]" />
          <span className="text-xs uppercase tracking-widest font-mono text-purple-200">
            OFFICIAL STUDENT RECRUITMENT PORTAL
          </span>
          <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#00ff66]/20 text-[#00ff66] font-bold">2026</span>
        </div>

        {/* Dramatic Main Heading with Glitch effect */}
        <h1 
          data-text="SHADOW WIZARD MONEY GANG"
          className="glitch-text text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-cinzel tracking-tight text-white uppercase text-glow-purple drop-shadow-2xl leading-[1.05]"
        >
          SHADOW WIZARD <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00ff66] via-purple-300 to-[#10b981] text-glow-green">
            MONEY GANG
          </span>
        </h1>

        {/* Famous Meme Quote */}
        <div className="mt-6 mb-6">
          <blockquote className="inline-block relative">
            <span className="text-2xl sm:text-3xl md:text-4xl font-medieval text-[#00ff66] tracking-wide text-glow-green font-bold">
              “WE LOVE CASTING SPELLS.”
            </span>
            <div className="text-xs sm:text-sm font-mono text-purple-300/80 mt-1 uppercase tracking-widest">
              [ Sponsored by the Shadow Government ]
            </div>
          </blockquote>
        </div>

        {/* Hero Cartoon Character & Magical Artifacts Display */}
        <div className="relative my-8 max-w-sm sm:max-w-md mx-auto group">
          {/* Outer glowing ring */}
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 to-[#00ff66] rounded-3xl blur-2xl opacity-40 group-hover:opacity-75 transition-opacity duration-700 animate-glow-pulse" />
          
          <div className="relative rounded-2xl overflow-hidden border-2 border-purple-500/60 group-hover:border-[#00ff66] transition-colors duration-500 bg-[#090214] shadow-2xl">
            <img 
              src="/swmg_hero_wizard.jpg" 
              alt="Shadow Wizard Money Gang Mascot" 
              className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            {/* Overlay badges on the image */}
            <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/80 border border-purple-500/60 backdrop-blur-md flex items-center gap-1.5 text-[11px] font-mono text-purple-300">
              <span className="w-2 h-2 rounded-full bg-[#00ff66] animate-ping" />
              <span>CAUTION: HIGH VOLTAGE MANA</span>
            </div>
            <div className="absolute bottom-3 right-3 px-3 py-1 rounded bg-black/85 border border-[#00ff66]/60 backdrop-blur-md text-[11px] font-mono text-[#00ff66]">
              ₹ 0.00 / IMAGINARY REVENUE
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <button
            onClick={handleJoinClick}
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-display font-bold text-base tracking-wider uppercase text-black bg-gradient-to-r from-[#00ff66] via-[#10b981] to-[#39ff14] shadow-[0_0_35px_rgba(0,255,102,0.6)] hover:shadow-[0_0_55px_rgba(0,255,102,0.9)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer group"
          >
            <span>JOIN THE GANG</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
          </button>

          <button
            onClick={handleClassesClick}
            className="w-full sm:w-auto px-7 py-4 rounded-xl font-display font-bold text-base tracking-wider uppercase text-purple-200 bg-purple-950/60 border border-purple-500/60 hover:border-[#00ff66] hover:text-[#00ff66] hover:bg-purple-900/40 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
          >
            <Wand2 className="w-4 h-4 text-[#00ff66]" />
            <span>EXPLORE CLASSES (6)</span>
          </button>
        </div>

        {/* Status indicator & Meme Soundboard mini triggers */}
        <div className="mt-8 flex flex-col items-center gap-3">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#081a0e]/90 border border-[#00ff66]/50 text-sm font-mono text-[#00ff66]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff66] opacity-80"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#00ff66]"></span>
            </span>
            <span>Recruitment Status: <strong>OPEN</strong></span>
          </div>

          {/* Quick Sound effect spell bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest mr-1">Cast Instant Audio:</span>
            
            <button
              onClick={() => soundFx.playSpell()}
              className="px-2.5 py-1 text-xs font-mono rounded bg-purple-950/60 border border-purple-800 text-purple-300 hover:text-[#00ff66] hover:border-[#00ff66] transition-colors"
            >
              ✨ Mystic Zap
            </button>
            <button
              onClick={() => soundFx.playMoney()}
              className="px-2.5 py-1 text-xs font-mono rounded bg-purple-950/60 border border-purple-800 text-purple-300 hover:text-amber-400 hover:border-amber-400 transition-colors"
            >
              💰 Cash Register
            </button>
            <button
              onClick={() => soundFx.playNukeSiren()}
              className="px-2.5 py-1 text-xs font-mono rounded bg-purple-950/60 border border-purple-800 text-purple-300 hover:text-red-400 hover:border-red-400 transition-colors"
            >
              ☢️ Legalize Nukes
            </button>
            <button
              onClick={() => soundFx.speakMeme('Shadow Wizard Money Gang. We love casting spells.')}
              className="px-2.5 py-1 text-xs font-mono rounded bg-purple-950/60 border border-purple-800 text-purple-300 hover:text-[#00ff66] hover:border-[#00ff66] transition-colors"
            >
              🗣️ Chant Anthem
            </button>
          </div>

          {/* Prompt Required Tiny Disclaimer */}
          <p className="text-xs text-zinc-500 max-w-md mx-auto italic mt-2">
            A completely fictional student-club parody. No actual college authority involved.
          </p>
        </div>

      </div>
    </section>
  );
}
