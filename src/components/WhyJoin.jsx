import React from 'react';
import { Skull, AlertTriangle, Infinity as InfinityIcon, Sparkles, Check, Flame } from 'lucide-react';
import { soundFx } from '../utils/audio';

export default function WhyJoin() {
  const stats = [
    {
      value: '100%',
      label: 'COMPLETELY UNNECESSARY',
      sub: 'Zero measurable academic utility or curriculum alignment.',
      icon: AlertTriangle,
      color: 'text-[#00ff66]',
      border: 'border-[#00ff66]/30',
      bgGlow: 'group-hover:bg-[#00ff66]/10'
    },
    {
      value: '0',
      label: 'CONFIRMED PROFESSORS',
      sub: 'Faculty members deny our existence under sworn astral oath.',
      icon: Skull,
      color: 'text-purple-400',
      border: 'border-purple-500/30',
      bgGlow: 'group-hover:bg-purple-600/10'
    },
    {
      value: '∞',
      label: 'AURA',
      sub: 'Radiating unearned confidence down every college corridor.',
      icon: InfinityIcon,
      color: 'text-amber-400',
      border: 'border-amber-500/30',
      bgGlow: 'group-hover:bg-amber-500/10'
    },
    {
      value: '404',
      label: 'WORK-LIFE BALANCE NOT FOUND',
      sub: 'Sleep is a myth propagated by mortals who cannot cast spells.',
      icon: Flame,
      color: 'text-rose-400',
      border: 'border-rose-500/30',
      bgGlow: 'group-hover:bg-rose-500/10'
    },
  ];

  const perks = [
    'Unchecked access to the 3rd floor water cooler during midnight rituals',
    'Forged astral certificates of attendance recognized only by parallel universes',
    'Complimentary microwave popcorn conjured at precisely 3:33 AM',
    'Unlimited supply of imaginary budget spreadsheets with negative balances',
    'Automatic immunity from being asked questions in 8:00 AM lectures',
    'Custom gold-plated SWMG medallion (subject to availability of aluminum foil)'
  ];

  return (
    <section id="why-join" className="py-24 relative z-10 bg-[#05010c] border-t border-purple-950/60 overflow-hidden">
      
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-purple-950/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-600/40 text-xs font-mono text-[#00ff66] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>UNMATCHED VALUE PROPOSITION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-cinzel font-bold text-white uppercase text-glow-purple">
            WHY JOIN?
          </h2>
          
          {/* Requested copy */}
          <div className="mt-6 p-4 rounded-xl bg-purple-950/30 border border-purple-800/40 backdrop-blur-sm">
            <blockquote className="text-lg sm:text-xl font-medieval text-purple-200 leading-relaxed italic">
              “Join a community dedicated to the pursuit of knowledge, power, wealth, and somehow getting free attendance.”
            </blockquote>
          </div>
        </div>

        {/* 4 Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                onClick={() => soundFx.playMoney()}
                className={`group relative p-6 rounded-2xl bg-[#0b0317] border ${s.border} hover:border-[#00ff66] transition-all duration-300 shadow-xl cursor-pointer hover:-translate-y-1.5`}
              >
                <div className={`absolute inset-0 rounded-2xl transition-all duration-500 ${s.bgGlow} opacity-0 group-hover:opacity-100`} />
                
                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div className="flex items-center justify-between mb-4">
                    <Icon className={`w-6 h-6 ${s.color}`} />
                    <span className="text-[10px] font-mono text-zinc-500 uppercase">STAT #{idx + 1}</span>
                  </div>

                  <div>
                    <div className={`text-4xl sm:text-5xl font-black font-cinzel tracking-tight ${s.color} drop-shadow-md mb-2`}>
                      {s.value}
                    </div>
                    <div className="font-display font-bold text-sm sm:text-base text-white tracking-wide uppercase mb-2">
                      {s.label}
                    </div>
                    <p className="text-xs text-zinc-400 font-display leading-relaxed">
                      {s.sub}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Exclusive Benefits & Perks checklist */}
        <div className="rounded-2xl p-8 bg-[#090214] border border-purple-900/60 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#00ff66]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 border-b border-purple-950 pb-6">
            <div>
              <span className="text-xs font-mono uppercase text-[#00ff66] tracking-widest">ENLISTMENT PRIVILEGES</span>
              <h3 className="text-xl sm:text-2xl font-bold font-medieval text-white mt-1">
                What Our Apprentices Actually Receive
              </h3>
            </div>
            <div className="text-xs font-mono text-purple-300 bg-purple-950/80 px-3 py-1.5 rounded-lg border border-purple-700/40">
              VALUE: ₹ - ∞
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {perks.map((perk, i) => (
              <div 
                key={i} 
                className="flex items-start gap-3 p-3 rounded-xl bg-purple-950/20 border border-purple-950 hover:border-purple-800 transition-colors"
              >
                <div className="p-1 rounded-md bg-[#00ff66]/10 text-[#00ff66] mt-0.5">
                  <Check className="w-4 h-4" />
                </div>
                <span className="text-xs sm:text-sm text-zinc-300 font-display">
                  {perk}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
