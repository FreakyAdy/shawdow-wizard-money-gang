import React, { useState } from 'react';
import { ShieldAlert, FileText, Lock, Scroll, Sparkles } from 'lucide-react';
import { soundFx } from '../utils/audio';

export default function Footer() {
  const [activeModal, setActiveModal] = useState(null);

  const openPopup = (type) => {
    soundFx.playGlitch();
    setActiveModal(type);
  };

  const modalContent = {
    classified: {
      title: 'CLASSIFIED ASTRAL DOSSIER #404',
      badge: 'TOP SECRET // EYES ONLY',
      text: 'Operation Unlimited Attendance: Historical records indicate that between 2022 and 2026, over 4,000 proxies were successfully conjured in Room 304 using quantum cloaking mirrors. All documentation has been eaten by the Goblin Intern.'
    },
    shadowGov: {
      title: 'NOTICE FROM THE SHADOW GOVERNMENT',
      badge: 'OFFICIAL COMMUNIQUE',
      text: 'Greetings mortal. The Shadow Government acknowledges receipt of your psychic frequencies. Due to ongoing campus canteen inflation, subsidies for radioactive neon potions have been reduced by 14%. Please do not call our hotline during exam season.'
    },
    terms: {
      title: 'TERMS OF WIZARDRY (ACT OF 1337)',
      badge: 'LEGALLY BINDING IN ASTRAL REALM',
      text: '1. All imaginary money created by Money Wizards remains property of the void.\n2. In the event of accidental polymorph into a toad or frog, the college medical room supplies only basic band-aids.\n3. Attendance proxies are subject to spiritual audit at any moment.'
    }
  };

  return (
    <footer className="bg-[#030006] border-t border-purple-950/80 pt-16 pb-12 relative z-10 text-zinc-400 font-display">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-purple-950/80">
          
          {/* Logo & Slogan */}
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="w-10 h-10 rounded-lg bg-purple-950 border border-purple-700/60 flex items-center justify-center text-xl">
              🧙‍♂️
            </div>
            <div>
              <div className="font-medieval font-bold text-white text-base tracking-wide text-glow-purple">
                SHADOW WIZARD MONEY GANG © 2026
              </div>
              <div className="text-xs text-[#00ff66] font-mono">
                “We cast spells. We make money. We recruit.”
              </div>
            </div>
          </div>

          {/* Links requested in prompt */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs uppercase font-mono tracking-widest">
            <a 
              href="#apply" 
              onClick={() => soundFx.playSpell()}
              className="hover:text-[#00ff66] transition-colors"
            >
              Recruitment
            </a>
            <button 
              onClick={() => openPopup('classified')}
              className="hover:text-[#00ff66] transition-colors cursor-pointer"
            >
              Classified Documents
            </button>
            <button 
              onClick={() => openPopup('shadowGov')}
              className="hover:text-[#00ff66] transition-colors cursor-pointer"
            >
              Shadow Government
            </button>
            <button 
              onClick={() => openPopup('terms')}
              className="hover:text-[#00ff66] transition-colors cursor-pointer"
            >
              Terms of Wizardry
            </button>
          </div>

        </div>

        {/* Prompt Required Mandatory Disclaimer */}
        <div className="pt-8 text-center max-w-3xl mx-auto">
          <p className="text-xs text-zinc-500 leading-relaxed font-mono">
            This website is a parody. It is not affiliated with, endorsed by, or operated by Dhole Patil College of Engineering or any real organization.
          </p>
          <div className="mt-4 flex items-center justify-center gap-4 text-[10px] font-mono text-zinc-600">
            <span>ASTRAL ENCRYPTION: 4096-BIT</span>
            <span>•</span>
            <span>NO ACTUAL CASH INVOLVED</span>
            <span>•</span>
            <span>ALL RIGHTS RESERVED IN THE 4TH DIMENSION</span>
          </div>
        </div>

      </div>

      {/* Interactive Modal for Footer Links */}
      {activeModal && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="max-w-md w-full rounded-2xl bg-[#0c041a] border-2 border-purple-600 p-6 shadow-2xl relative animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-between pb-3 border-b border-purple-950 mb-4">
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950 text-[#00ff66] border border-purple-800">
                {modalContent[activeModal].badge}
              </span>
              <button
                onClick={() => setActiveModal(null)}
                className="text-zinc-500 hover:text-white font-mono text-xs px-2 py-1 rounded bg-black/60"
              >
                ✕ CLOSE
              </button>
            </div>

            <h4 className="font-cinzel font-bold text-white text-lg mb-3">
              {modalContent[activeModal].title}
            </h4>

            <p className="text-xs text-zinc-300 font-display leading-relaxed whitespace-pre-line bg-[#070110] p-4 rounded-xl border border-purple-950">
              {modalContent[activeModal].text}
            </p>

            <button
              onClick={() => setActiveModal(null)}
              className="mt-5 w-full py-2.5 rounded-xl font-display font-bold text-xs uppercase bg-[#00ff66] text-black hover:shadow-[0_0_20px_rgba(0,255,102,0.8)] transition-all cursor-pointer"
            >
              Acknowledge & Close
            </button>
          </div>
        </div>
      )}

    </footer>
  );
}
