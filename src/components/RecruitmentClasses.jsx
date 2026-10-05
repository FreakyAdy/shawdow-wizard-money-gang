import React, { useState } from 'react';
import { Wand2, Coins, Compass, Terminal, Camera, ShieldAlert, Sparkles, CheckCircle2 } from 'lucide-react';
import { soundFx } from '../utils/audio';

export const CLASSES_DATA = [
  {
    id: 'shadow-wizard',
    name: 'Shadow Wizard',
    emoji: '🧙',
    icon: Wand2,
    image: '/swmg_hero_wizard.jpg',
    tagline: 'Masters of forbidden knowledge, questionable decisions and extremely unnecessary meetings.',
    stats: {
      manaCost: '9,999 MP',
      meetingHours: '14 hrs/day',
      survivalRate: '18%',
      stipend: '₹0 (Astral IOUs)'
    },
    accent: 'from-purple-600 to-indigo-900',
    borderGlow: 'hover:border-purple-400 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]'
  },
  {
    id: 'money-wizard',
    name: 'Money Wizard',
    emoji: '💰',
    icon: Coins,
    image: '/swmg_wizard_finance.jpg',
    tagline: 'Responsible for financial magic, imaginary budgets and turning ₹0 into somehow even less.',
    stats: {
      manaCost: '₹420/cast',
      mathSkill: '-10 / 10',
      budgetLeak: '100%',
      stipend: 'Monopoly Cash'
    },
    accent: 'from-amber-500 to-emerald-900',
    borderGlow: 'hover:border-amber-400 hover:shadow-[0_0_30px_rgba(245,158,11,0.4)]'
  },
  {
    id: 'arcane-ops',
    name: 'Arcane Operations',
    emoji: '🌀',
    icon: Compass,
    image: '/swmg_arcane_ops.jpg',
    tagline: 'Handles classified operations nobody understands.',
    stats: {
      clearance: 'Redacted',
      purpose: 'Unknown',
      paperwork: 'Over 9,000',
      stipend: 'Redacted'
    },
    accent: 'from-cyan-600 to-blue-950',
    borderGlow: 'hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)]'
  },
  {
    id: 'spell-engineer',
    name: 'Spell Engineer',
    emoji: '🖥️',
    icon: Terminal,
    image: '/swmg_wizard_engineer.jpg',
    tagline: 'Writes code until something works. Then refuses to touch it again.',
    stats: {
      stackOverflow: '100% Copy',
      compilesOn: 'My Machine',
      coffeeLevel: 'Fatal',
      stipend: 'GitHub Stars'
    },
    accent: 'from-emerald-500 to-teal-950',
    borderGlow: 'hover:border-[#00ff66] hover:shadow-[0_0_30px_rgba(0,255,102,0.4)]'
  },
  {
    id: 'dark-media',
    name: 'Dark Media Division',
    emoji: '📸',
    icon: Camera,
    image: '/swmg_dark_media.jpg',
    tagline: 'Photographs every event except the event itself.',
    stats: {
      blurLevel: 'Maximum',
      storageUsed: '2.4 TB dust photos',
      captionSkill: 'Cryptic runes',
      stipend: 'Exposure'
    },
    accent: 'from-fuchsia-600 to-purple-950',
    borderGlow: 'hover:border-fuchsia-400 hover:shadow-[0_0_30px_rgba(217,70,239,0.4)]'
  },
  {
    id: 'goblin-intern',
    name: 'Goblin Intern',
    emoji: '🧌',
    icon: ShieldAlert,
    image: '/swmg_goblin_intern.jpg',
    tagline: 'No experience required. No dignity guaranteed.',
    stats: {
      lifeExpectancy: '3 semesters',
      canteenErrands: 'Infinite',
      respectLevel: '0%',
      stipend: 'Soggy Samosa'
    },
    accent: 'from-lime-600 to-emerald-950',
    borderGlow: 'hover:border-lime-400 hover:shadow-[0_0_30px_rgba(163,230,53,0.4)]'
  }
];

export default function RecruitmentClasses({ selectedClass, onSelectClass }) {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleSelect = (cls) => {
    soundFx.playSpell();
    onSelectClass(cls.name);

    // Scroll to form smoothly
    const formElement = document.getElementById('apply');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="classes" className="py-24 relative z-10 border-t border-purple-950/60 bg-[#070111]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-600/40 text-xs font-mono text-[#00ff66] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SPECIALIZED CORPS ALLOCATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-cinzel font-bold text-white uppercase text-glow-purple tracking-wider">
            CHOOSE YOUR CLASS
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400 font-display">
            Select the specialization where your total lack of qualifications will inflict the most damage on the mundane world.
          </p>
        </div>

        {/* 6 Interactive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CLASSES_DATA.map((cls) => {
            const isSelected = selectedClass === cls.name;
            const Icon = cls.icon;

            return (
              <div
                key={cls.id}
                onMouseEnter={() => setHoveredCard(cls.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`relative flex flex-col rounded-2xl bg-[#0c0418] border-2 transition-all duration-300 overflow-hidden group ${
                  isSelected 
                    ? 'border-[#00ff66] shadow-[0_0_35px_rgba(0,255,102,0.5)] scale-[1.02]' 
                    : 'border-purple-900/60 ' + cls.borderGlow
                }`}
              >
                {/* Selected Indicator Ribbon */}
                {isSelected && (
                  <div className="absolute top-3 right-3 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00ff66] text-black font-bold font-mono text-xs shadow-lg">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>SELECTED</span>
                  </div>
                )}

                {/* Card Top: Artwork Image Container */}
                <div className="relative h-60 w-full overflow-hidden bg-purple-950/50">
                  <img
                    src={cls.image}
                    alt={cls.name}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0418] via-transparent to-transparent" />
                  
                  {/* Floating Class Icon Pill */}
                  <div className="absolute bottom-3 left-4 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-black/85 backdrop-blur-md border border-purple-500/50 shadow-md">
                    <span className="text-xl">{cls.emoji}</span>
                    <span className="font-medieval font-bold text-white text-sm">{cls.name}</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Tagline / Prompt Description */}
                    <p className="text-zinc-300 text-sm italic font-display leading-relaxed border-l-2 border-purple-600 pl-3">
                      “{cls.tagline}”
                    </p>

                    {/* Stat Matrix */}
                    <div className="mt-5 grid grid-cols-2 gap-2.5 p-3 rounded-xl bg-[#080212] border border-purple-950 text-xs font-mono">
                      {Object.entries(cls.stats).map(([k, v]) => (
                        <div key={k} className="flex flex-col">
                          <span className="text-zinc-500 uppercase text-[10px] tracking-wider">
                            {k.replace(/([A-Z])/g, ' $1')}
                          </span>
                          <span className="font-bold text-[#00ff66] truncate">{v}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Card Action Button */}
                  <div className="mt-6 pt-4 border-t border-purple-950/80">
                    <button
                      onClick={() => handleSelect(cls)}
                      className={`w-full py-3 px-4 rounded-xl font-display font-bold text-xs uppercase tracking-widest transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                        isSelected
                          ? 'bg-[#00ff66] text-black shadow-[0_0_20px_rgba(0,255,102,0.8)]'
                          : 'bg-purple-950/70 hover:bg-[#00ff66] text-purple-200 hover:text-black border border-purple-700/60 hover:border-[#00ff66]'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span>{isSelected ? 'SELECTED FOR ENLISTMENT' : 'SELECT CLASS'}</span>
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
