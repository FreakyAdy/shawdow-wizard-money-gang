import React, { useEffect } from 'react';
import { Skull, Zap, Flame, Sparkles } from 'lucide-react';
import { soundFx } from '../utils/audio';

export default function AwakenedModal({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      soundFx.playNukeSiren();
      soundFx.speakMeme('The wizard has awakened.');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-center p-4 text-center overflow-hidden animate-in fade-in zoom-in duration-300">
      
      {/* Glitch & scanline background */}
      <div className="absolute inset-0 crt-overlay pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#00ff66]/20 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-purple-700/30 rounded-full blur-[140px] pointer-events-none" />

      {/* Floating Occult Runes */}
      <div className="absolute inset-0 flex items-center justify-around pointer-events-none opacity-20 text-6xl font-medieval text-[#00ff66]">
        <span className="animate-spin-slow">ᛝ</span>
        <span className="animate-bounce">⚡</span>
        <span className="animate-pulse">ᚲ</span>
        <span className="animate-spin-slow">👁️</span>
        <span className="animate-bounce">ᚹ</span>
      </div>

      <div className="relative z-10 max-w-2xl w-full p-8 rounded-3xl bg-[#090214] border-4 border-[#00ff66] shadow-[0_0_100px_rgba(0,255,102,0.8)]">
        
        {/* Animated Skull / Wizard Emblem */}
        <div className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-black border-2 border-[#00ff66] flex items-center justify-center text-5xl shadow-[0_0_40px_rgba(0,255,102,0.9)] animate-bounce">
          🧙‍♂️
        </div>

        {/* Prompt Required Mandatory Easter Egg Message */}
        <h2 
          data-text="THE WIZARD HAS AWAKENED."
          className="glitch-text text-3xl sm:text-5xl md:text-6xl font-black font-cinzel text-[#00ff66] text-glow-green uppercase tracking-wider mb-4 leading-tight"
        >
          THE WIZARD HAS AWAKENED.
        </h2>

        {/* Comedic Lore */}
        <div className="p-4 rounded-xl bg-purple-950/60 border border-purple-600/60 my-6 text-purple-200 font-medieval text-base sm:text-lg leading-relaxed">
          <p>
            You have spoken the ancient shortcut of the Shadow Government.
          </p>
          <p className="mt-2 text-zinc-300 font-display text-sm">
            All pending assignments have been magically dissolved into the astral plane. Canteen debt has been multiplied by 10. The elders are now spectating your screen.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <button
            onClick={() => {
              soundFx.playSpell();
              onClose();
            }}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-display font-bold text-xs uppercase tracking-widest text-black bg-[#00ff66] shadow-[0_0_30px_rgba(0,255,102,0.8)] hover:scale-105 transition-transform cursor-pointer"
          >
            Return to Mortal Realm
          </button>
          
          <button
            onClick={() => soundFx.playNukeSiren()}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-display font-bold text-xs uppercase tracking-widest text-purple-300 bg-purple-950 border border-purple-700 hover:border-[#00ff66] hover:text-[#00ff66] transition-colors cursor-pointer"
          >
            Sound Astral Alarm
          </button>
        </div>

        <div className="mt-6 text-[11px] font-mono text-zinc-500">
          SHORTCUT DETECTED: [CTRL + SHIFT + W] // EMERGENCY HEX ACTIVE
        </div>

      </div>
    </div>
  );
}
