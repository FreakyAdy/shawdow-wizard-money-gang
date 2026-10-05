import React from 'react';
import { Sparkles, ArrowRight, Wand2 } from 'lucide-react';
import { soundFx } from '../utils/audio';

export default function FinalCTA() {
  const handleScrollToForm = () => {
    soundFx.playSpell();
    const formElement = document.getElementById('apply');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-28 relative z-10 bg-gradient-to-b from-[#06010d] via-[#100322] to-[#040008] border-t border-purple-950/60 overflow-hidden text-center">
      
      {/* Background glow and rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-purple-900/30 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-[#00ff66]/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Mystic icon */}
        <div className="inline-flex p-3 rounded-2xl bg-purple-950/80 border border-purple-600/50 mb-6 shadow-lg shadow-purple-950/80 animate-glow-pulse">
          <Wand2 className="w-8 h-8 text-[#00ff66]" />
        </div>

        {/* Large dramatic heading */}
        <h2 className="text-4xl sm:text-6xl md:text-7xl font-black font-cinzel tracking-tight text-white uppercase text-glow-purple drop-shadow-2xl">
          ENTER THE SHADOWS
        </h2>

        {/* Prompt Required Text */}
        <div className="mt-6 mb-8 max-w-xl mx-auto">
          <blockquote className="text-xl sm:text-2xl font-medieval text-purple-200 leading-relaxed font-bold">
            The ordinary clubs are hiring. <br />
            <span className="text-[#00ff66] text-glow-green">We are recruiting.</span>
          </blockquote>
        </div>

        {/* Action Button */}
        <div>
          <button
            onClick={handleScrollToForm}
            className="px-10 py-5 rounded-2xl font-cinzel font-bold text-lg uppercase tracking-widest text-black bg-gradient-to-r from-[#00ff66] via-[#10b981] to-[#39ff14] shadow-[0_0_40px_rgba(0,255,102,0.6)] hover:shadow-[0_0_70px_rgba(0,255,102,0.9)] hover:scale-105 active:scale-95 transition-all duration-300 inline-flex items-center gap-3 cursor-pointer group"
          >
            <span>BECOME A SHADOW WIZARD</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>

        {/* Prompt Required Notice Under It */}
        <p className="mt-8 text-xs sm:text-sm text-zinc-500 font-display italic">
          *Recruitment is fictional and exists purely for entertainment.*
        </p>

      </div>
    </section>
  );
}
