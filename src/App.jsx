import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import RecruitmentClasses from './components/RecruitmentClasses';
import WhyJoin from './components/WhyJoin';
import YouTubeMemeSection from './components/YouTubeMemeSection';
import DashboardStats from './components/DashboardStats';
import LeadershipSection from './components/LeadershipSection';
import ApplicationForm from './components/ApplicationForm';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import ParticleCanvas from './components/ParticleCanvas';
import AwakenedModal from './components/AwakenedModal';
import { soundFx } from './utils/audio';
import { Wand2, Radio } from 'lucide-react';

export default function App() {
  const [selectedClass, setSelectedClass] = useState('Shadow Wizard');
  const [isAwakenedOpen, setIsAwakenedOpen] = useState(false);

  // Global hotkey listener for Ctrl + Shift + W
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Check for Ctrl + Shift + W (case-insensitive)
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'W' || e.key === 'w')) {
        e.preventDefault();
        setIsAwakenedOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#05010a] text-zinc-100 overflow-x-hidden">
      
      {/* Background Magical Particle & Rune Canvas */}
      <ParticleCanvas />

      {/* CRT / VHS Subtle Scanline Overlay */}
      <div className="fixed inset-0 crt-overlay pointer-events-none z-40 opacity-40" />

      {/* Navigation Bar */}
      <Navbar onTriggerAwakened={() => setIsAwakenedOpen(true)} />

      {/* Main Content Layout */}
      <main className="relative z-10">
        
        {/* Hero Section */}
        <Hero onSelectClass={(clsName) => setSelectedClass(clsName)} />

        {/* Recruitment / Choose Your Class Section */}
        <RecruitmentClasses
          selectedClass={selectedClass}
          onSelectClass={(clsName) => setSelectedClass(clsName)}
        />

        {/* Why Join Section */}
        <WhyJoin />

        {/* YouTube Video Meme Section & Soundboard */}
        <YouTubeMemeSection />

        {/* Live Recruitment Statistics / Dashboard */}
        <DashboardStats />

        {/* Meet the Leadership Section */}
        <LeadershipSection />

        {/* Application Form */}
        <ApplicationForm
          selectedClass={selectedClass}
          onClassChange={(clsName) => setSelectedClass(clsName)}
        />

        {/* Final CTA */}
        <FinalCTA />

      </main>

      {/* Footer */}
      <Footer />

      {/* Easter Egg Modal */}
      <AwakenedModal
        isOpen={isAwakenedOpen}
        onClose={() => setIsAwakenedOpen(false)}
      />

      {/* Floating Spell Cast Quick Trigger Button (Mobile & Desktop) */}
      <div className="fixed bottom-5 right-5 z-40">
        <button
          onClick={() => {
            soundFx.playSpell();
            soundFx.speakMeme('Shadow wizard money gang.');
          }}
          title="Cast Spell Audio"
          className="p-3.5 rounded-full bg-gradient-to-r from-purple-800 to-[#00ff66] text-black shadow-[0_0_25px_rgba(0,255,102,0.7)] hover:scale-110 active:scale-95 transition-all flex items-center justify-center cursor-pointer border-2 border-white/20"
        >
          <Wand2 className="w-5 h-5 text-black" />
        </button>
      </div>

    </div>
  );
}
