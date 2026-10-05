import React, { useState } from 'react';
import { Volume2, VolumeX, Sparkles, Terminal, Menu, X, Wand2 } from 'lucide-react';
import { soundFx } from '../utils/audio';

export default function Navbar({ onTriggerAwakened }) {
  const [muted, setMuted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleSound = () => {
    const isMuted = soundFx.toggleMute();
    setMuted(isMuted);
    if (!isMuted) {
      soundFx.playMoney();
    }
  };

  const navLinks = [
    { label: 'Classes', href: '#classes' },
    { label: 'Why Join?', href: '#why-join' },
    { label: 'Anthem & Lore', href: '#anthem' },
    { label: 'Gang Status', href: '#dashboard' },
    { label: 'Leadership', href: '#leadership' },
    { label: 'Application', href: '#apply' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#070210]/85 backdrop-blur-md border-b border-purple-900/50 shadow-[0_4px_30px_rgba(0,0,0,0.8)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo / Brand */}
          <a 
            href="#" 
            onClick={() => soundFx.playSpell()}
            className="flex items-center gap-3 group text-left cursor-pointer"
          >
            <div className="relative w-11 h-11 rounded-lg bg-gradient-to-br from-purple-800 to-black p-0.5 border border-purple-500/50 group-hover:border-[#00ff66] transition-colors shadow-lg shadow-purple-950/50">
              <div className="w-full h-full bg-[#0d051c] rounded-[7px] flex items-center justify-center text-xl relative overflow-hidden">
                <span className="group-hover:scale-125 transition-transform duration-300">🧙‍♂️</span>
                <span className="absolute -bottom-1 -right-1 text-[10px] text-[#00ff66] font-pixel">$$</span>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-medieval font-bold text-lg sm:text-xl tracking-wider text-white group-hover:text-[#00ff66] transition-colors text-glow-purple">
                  S.W.M.G.
                </span>
                <span className="hidden md:inline-block px-2 py-0.5 text-[10px] uppercase font-mono tracking-widest bg-purple-950/80 text-[#00ff66] rounded border border-purple-600/40">
                  EST. ANCIENT ERA
                </span>
              </div>
              <p className="text-[11px] text-zinc-400 font-display -mt-0.5 hidden sm:block">
                Shadow Wizard Money Gang
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => soundFx.playGlitch()}
                className="text-xs uppercase tracking-widest font-semibold text-zinc-300 hover:text-[#00ff66] transition-colors duration-200 relative group py-1"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00ff66] group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* Actions & Recruitment Status */}
          <div className="flex items-center gap-3 sm:gap-4">
            
            {/* Status Pill */}
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#051c0f]/80 border border-[#00ff66]/40 text-xs font-mono text-[#00ff66]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff66] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00ff66]"></span>
              </span>
              <span>RECRUITMENT: <strong className="font-bold">OPEN</strong></span>
            </div>

            {/* Sound Toggle */}
            <button
              onClick={toggleSound}
              title={muted ? "Unmute Spell Audio" : "Mute Spell Audio"}
              className="p-2 rounded-lg bg-purple-950/40 border border-purple-800/60 text-purple-300 hover:text-[#00ff66] hover:border-[#00ff66]/60 transition-all cursor-pointer"
            >
              {muted ? <VolumeX className="w-5 h-5 text-zinc-500" /> : <Volume2 className="w-5 h-5 text-[#00ff66] animate-pulse" />}
            </button>

            {/* Easter Egg Trigger / Secret Button */}
            <button
              onClick={onTriggerAwakened}
              title="Summon Awakened Wizard State (Ctrl + Shift + W)"
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-purple-950 to-black border border-purple-600/50 text-xs font-mono text-purple-300 hover:border-[#00ff66] hover:text-[#00ff66] transition-all"
            >
              <Wand2 className="w-3.5 h-3.5" />
              <span>[Ctrl+Shift+W]</span>
            </button>

            {/* CTA in Nav */}
            <a
              href="#apply"
              onClick={() => soundFx.play808Bass()}
              className="px-4 py-2 text-xs uppercase font-bold tracking-wider rounded-lg bg-gradient-to-r from-[#00ff66] to-[#10b981] text-black hover:shadow-[0_0_20px_rgba(0,255,102,0.6)] hover:scale-105 transition-all duration-200"
            >
              Enlist Now
            </a>

            {/* Mobile menu trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-purple-950/40 border border-purple-800 text-purple-200"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#090317] border-b border-purple-900/80 px-4 pt-3 pb-6 space-y-3">
          <div className="flex items-center justify-between pb-3 border-b border-purple-950">
            <span className="text-xs font-mono text-[#00ff66]">● STATUS: RECRUITING APPRENTICES</span>
            <button
              onClick={onTriggerAwakened}
              className="text-xs font-mono text-purple-400 underline"
            >
              Awaken Wizard State
            </button>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => {
                soundFx.playGlitch();
                setMobileMenuOpen(false);
              }}
              className="block text-sm uppercase tracking-wider font-semibold text-zinc-200 hover:text-[#00ff66] py-2"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
