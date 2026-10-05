import React, { useState, useEffect, useRef } from 'react';
import { Activity, ShieldAlert, AlertOctagon, Terminal, Flame, DollarSign, Users, Sparkles } from 'lucide-react';
import { soundFx } from '../utils/audio';

export default function DashboardStats() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [activeWizards, setActiveWizards] = useState(0);
  const [moneyGen, setMoneyGen] = useState(0);
  const [spellsCast, setSpellsCast] = useState(0);
  const [appsPending, setAppsPending] = useState(0);
  const sectionRef = useRef(null);

  // Live fake terminal logs
  const [logs, setLogs] = useState([
    { time: '19:42:01', text: 'System initialized. Shadow Government clearance verified.' },
    { time: '19:42:09', text: 'Goblin Intern spilled Unstable Goo in Basement Laboratory 3.' },
    { time: '19:42:15', text: 'Proxy attendance conjured for 14 Mechanical Engineering students.' },
    { time: '19:42:22', text: 'Campus security approached perimeter. Invisibility hex deployed.' },
  ]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          soundFx.playMoney();

          // Animate counters
          const duration = 1800; // ms
          const startTime = performance.now();

          const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const ease = 1 - Math.pow(1 - progress, 3);

            setActiveWizards(Math.floor(ease * 69));
            setMoneyGen(0); // ₹0 remains 0!
            setSpellsCast(Math.floor(ease * 420));
            setAppsPending(Math.floor(ease * 999));

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  // Periodic new fake log generator
  useEffect(() => {
    const newLogOptions = [
      'Financial wizard turned canteen ₹10 coin into negative balance.',
      'Professor approached with syllabus. Arcane smoke bomb detonated.',
      '404 Error: Motivation to attend morning lab not found.',
      'Classified astral communication received from Dean of the Void.',
      'Canteen vendor demanding settlement of ₹42,069 magical tab.',
      'Dark Media wizard captured 4,000 photos of empty staircase.',
      'Nuclear hex spell temporarily postponed due to midterm exam.'
    ];

    const interval = setInterval(() => {
      const randomMsg = newLogOptions[Math.floor(Math.random() * newLogOptions.length)];
      const now = new Date();
      const timeStr = now.toTimeString().split(' ')[0];

      setLogs((prev) => [
        { time: timeStr, text: randomMsg },
        ...prev.slice(0, 5) // Keep last 6
      ]);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="dashboard" 
      ref={sectionRef}
      className="py-24 relative z-10 bg-[#070110] border-t border-purple-950/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-600/40 text-xs font-mono text-[#00ff66] mb-3">
            <Activity className="w-3.5 h-3.5 animate-pulse text-[#00ff66]" />
            <span>REAL-TIME TELEMETRY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-cinzel font-bold text-white uppercase text-glow-purple">
            CURRENT GANG STATUS
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400 font-display">
            Direct feed from the astral mainframe. All figures audited by non-existent accountants.
          </p>
        </div>

        {/* Dashboard 6 Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          
          {/* Active Wizards */}
          <div className="p-6 rounded-2xl bg-[#0c031a] border border-purple-800/50 hover:border-[#00ff66] transition-all shadow-xl group">
            <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-2">
              <span className="flex items-center gap-1.5 text-purple-300">
                <Users className="w-4 h-4 text-[#00ff66]" />
                ACTIVE WIZARDS
              </span>
              <span className="text-[#00ff66] font-mono">STATUS: ROAMING</span>
            </div>
            <div className="text-5xl font-black font-cinzel text-white group-hover:text-[#00ff66] transition-colors">
              {activeWizards}
            </div>
            <p className="text-xs text-zinc-400 font-display mt-2">
              Currently hiding in libraries, canteens, and the astral void.
            </p>
          </div>

          {/* Money Generated */}
          <div className="p-6 rounded-2xl bg-[#0c031a] border border-purple-800/50 hover:border-amber-400 transition-all shadow-xl group">
            <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-2">
              <span className="flex items-center gap-1.5 text-amber-300">
                <DollarSign className="w-4 h-4 text-amber-400" />
                MONEY GENERATED
              </span>
              <span className="text-amber-400 font-mono">AUDITED: NO</span>
            </div>
            <div className="text-5xl font-black font-cinzel text-amber-300">
              ₹ {moneyGen}
            </div>
            <p className="text-xs text-zinc-400 font-display mt-2">
              Unshakable financial consistency since club inception.
            </p>
          </div>

          {/* Spells Cast Today */}
          <div className="p-6 rounded-2xl bg-[#0c031a] border border-purple-800/50 hover:border-[#00ff66] transition-all shadow-xl group">
            <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-2">
              <span className="flex items-center gap-1.5 text-emerald-300">
                <Sparkles className="w-4 h-4 text-[#00ff66]" />
                SPELLS CAST TODAY
              </span>
              <span className="text-[#00ff66] font-mono">INTENSITY: HIGH</span>
            </div>
            <div className="text-5xl font-black font-cinzel text-[#00ff66] text-glow-green">
              {spellsCast}
            </div>
            <p className="text-xs text-zinc-400 font-display mt-2">
              Including proxy attendance, instant snooze, and microwave summoning.
            </p>
          </div>

          {/* Applications Pending */}
          <div className="p-6 rounded-2xl bg-[#0c031a] border border-purple-800/50 hover:border-purple-400 transition-all shadow-xl group">
            <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-2">
              <span className="flex items-center gap-1.5 text-purple-300">
                <Activity className="w-4 h-4 text-purple-400" />
                APPLICATIONS PENDING
              </span>
              <span className="text-purple-400 font-mono">BACKLOG: CHRONIC</span>
            </div>
            <div className="text-5xl font-black font-cinzel text-purple-300">
              {appsPending}+
            </div>
            <p className="text-xs text-zinc-400 font-display mt-2">
              Submissions currently submerged in review dimension.
            </p>
          </div>

          {/* Government Approval */}
          <div className="p-6 rounded-2xl bg-[#14020c] border-2 border-red-700/60 shadow-[0_0_30px_rgba(239,68,68,0.2)] group relative overflow-hidden">
            <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-2">
              <span className="flex items-center gap-1.5 text-red-400">
                <ShieldAlert className="w-4 h-4 text-red-500" />
                GOVERNMENT APPROVAL
              </span>
              <span className="text-red-400 font-mono">SEAL: VOID</span>
            </div>
            <div className="inline-block mt-1 px-4 py-2 rounded-lg bg-red-950/80 border-2 border-red-500 text-red-500 font-black font-mono tracking-widest text-3xl sm:text-4xl uppercase animate-pulse">
              DECLINED
            </div>
            <p className="text-xs text-zinc-400 font-display mt-3">
              Ministry rejected application on grounds of "Too much magical swagger."
            </p>
          </div>

          {/* Canteen Credit */}
          <div className="p-6 rounded-2xl bg-[#13031f] border-2 border-amber-600/60 shadow-[0_0_30px_rgba(245,158,11,0.2)] group">
            <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-2">
              <span className="flex items-center gap-1.5 text-amber-300">
                <AlertOctagon className="w-4 h-4 text-amber-500" />
                CANTEEN CREDIT
              </span>
              <span className="text-amber-400 font-mono">ARREARS: LIFETIME</span>
            </div>
            <div className="inline-block mt-1 px-4 py-2 rounded-lg bg-amber-950/70 border-2 border-amber-500 text-amber-400 font-black font-mono tracking-widest text-3xl sm:text-4xl uppercase">
              NEGATIVE
            </div>
            <p className="text-xs text-zinc-400 font-display mt-3">
              Current tab: -₹42,069 across tea, samosas, and radioactive energy drinks.
            </p>
          </div>

        </div>

        {/* Live Arcane Mainframe Terminal Feed */}
        <div className="rounded-2xl bg-black/90 border border-purple-900/80 overflow-hidden shadow-2xl font-mono text-xs">
          <div className="px-4 py-3 bg-[#0d051c] border-b border-purple-950 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-[#00ff66]" />
              <span className="font-bold text-zinc-200">SHADOW_NET_MAINFRAME // EVENT_STREAM.LOG</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-500 text-[11px]">
              <span className="w-2 h-2 rounded-full bg-[#00ff66] animate-ping" />
              <span>LIVE TRANSMISSION</span>
            </div>
          </div>
          
          <div className="p-4 space-y-2 text-zinc-300 font-mono">
            {logs.map((log, i) => (
              <div key={i} className="flex items-start gap-3 border-l-2 border-purple-800 pl-2 py-0.5">
                <span className="text-purple-400 font-bold select-none">[{log.time}]</span>
                <span className="text-[#00ff66] select-none">&gt;&gt;</span>
                <span className="text-zinc-200">{log.text}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
