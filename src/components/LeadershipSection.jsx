import React from 'react';
import { Eye, Shield, Terminal, Music, Sparkles, Volume2 } from 'lucide-react';
import { soundFx } from '../utils/audio';

export default function LeadershipSection() {
  const leaders = [
    {
      title: 'Grand Wizard of Finance',
      alias: 'Archmage Greedus',
      image: '/swmg_wizard_finance.jpg',
      quote: 'Has never seen a finance textbook.',
      clearance: 'TREASURY ABNORMAL',
      icon: Shield,
      specialty: 'Turning college canteen change into cosmic debt',
      sound: () => {
        soundFx.playMoney();
        soundFx.speakMeme('Gains.');
      }
    },
    {
      title: 'Chief Shadow Officer',
      alias: 'Phantom X',
      image: '/swmg_shadow_officer.jpg',
      quote: 'Last seen somewhere on campus.',
      clearance: 'INVISIBLE LVL 9',
      icon: Eye,
      specialty: 'Vanishing whenever questions about attendance arise',
      sound: () => {
        soundFx.playSpell();
        soundFx.speakMeme('Shadow government.');
      }
    },
    {
      title: 'Director of Arcane Engineering',
      alias: 'Hexmaster Null',
      image: '/swmg_wizard_engineer.jpg',
      quote: 'Claims their code works on their machine.',
      clearance: 'ROOT / SUDO VOID',
      icon: Terminal,
      specialty: 'Pushing broken spells to production at 3:00 AM',
      sound: () => {
        soundFx.playGlitch();
        soundFx.speakMeme('It works on my machine.');
      }
    },
    {
      title: 'Minister of Vibes',
      alias: 'Lord Chillout',
      image: '/swmg_minister_vibes.jpg',
      quote: 'Responsible for absolutely nothing.',
      clearance: 'EXEMPT FROM EVERYTHING',
      icon: Music,
      specialty: 'Maintaining immaculate frequencies during campus panic',
      sound: () => {
        soundFx.play808Bass();
        soundFx.speakMeme('Vibe check passed.');
      }
    },
  ];

  return (
    <section id="leadership" className="py-24 relative z-10 bg-[#05010b] border-t border-purple-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-600/40 text-xs font-mono text-[#00ff66] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>THE SUPREME HIGH COUNCIL</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-cinzel font-bold text-white uppercase text-glow-purple">
            MEET THE LEADERSHIP
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400 font-display">
            The mysterious silhouettes behind every catastrophic strategic decree.
          </p>
        </div>

        {/* 4 Leader Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {leaders.map((leader, i) => {
            const Icon = leader.icon;
            return (
              <div
                key={i}
                className="rounded-2xl bg-[#0c0418] border-2 border-purple-900/50 hover:border-[#00ff66] transition-all duration-300 overflow-hidden shadow-2xl flex flex-col justify-between group hover:-translate-y-1.5"
              >
                <div>
                  {/* Avatar Container */}
                  <div className="relative aspect-square w-full bg-purple-950/40 overflow-hidden">
                    <img
                      src={leader.image}
                      alt={leader.title}
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c0418] via-transparent to-transparent" />
                    
                    {/* Clearance Badge */}
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/85 backdrop-blur-md border border-purple-500/40 text-[10px] font-mono text-purple-300">
                      {leader.clearance}
                    </div>

                    {/* Sound Trigger */}
                    <button
                      onClick={leader.sound}
                      title="Play Voice Audio"
                      className="absolute bottom-3 right-3 p-2 rounded-full bg-[#00ff66] text-black shadow-lg hover:scale-110 active:scale-95 transition-transform cursor-pointer"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Info Content */}
                  <div className="p-5">
                    <div className="text-[11px] font-mono text-[#00ff66] uppercase tracking-wider mb-1">
                      {leader.alias}
                    </div>
                    <h3 className="font-medieval font-bold text-lg text-white group-hover:text-[#00ff66] transition-colors">
                      {leader.title}
                    </h3>
                    
                    {/* Prompt Required Quote */}
                    <blockquote className="mt-3 p-3 rounded-xl bg-purple-950/30 border-l-2 border-purple-500 text-xs italic text-zinc-300 font-display">
                      “{leader.quote}”
                    </blockquote>
                  </div>
                </div>

                {/* Footer Specialty */}
                <div className="px-5 pb-5 pt-2 border-t border-purple-950 text-[11px] font-mono text-zinc-400">
                  <span className="text-zinc-500 uppercase block text-[9px]">Primary Responsibility:</span>
                  <span className="text-zinc-300">{leader.specialty}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
