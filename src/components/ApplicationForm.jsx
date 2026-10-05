import React, { useState, useEffect } from 'react';
import { 
  Wand2, Sparkles, Upload, CheckCircle2, ShieldAlert, 
  HelpCircle, Copy, Check, Download, AlertTriangle, ArrowRight, Loader2
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundFx } from '../utils/audio';

export default function ApplicationForm({ selectedClass, onClassChange }) {
  const [formData, setFormData] = useState({
    fullName: '',
    department: 'Dept. of Hexadecimal Sorcery & CS',
    year: 'Year 2 (Perpetually Exhausted)',
    division: 'Division C (The Astral Void)',
    role: selectedClass || 'Shadow Wizard',
    specialSkill: 'Sleeping with eyes open during 8 AM lecture',
    auraLevel: '+9,001 (Over 9000)',
    pendingAssignments: '42 (The Answer to the Universe)',
    whyRecruit: '',
    examSpells: 'Yes, definitely during finals',
    photoUrl: '/swmg_hero_wizard.jpg',
  });

  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('Consulting the elders…');
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [applicationId, setApplicationId] = useState('SWMG-7F9C-2026');
  const [copiedId, setCopiedId] = useState(false);

  // Sync selectedClass if updated from outside
  useEffect(() => {
    if (selectedClass) {
      setFormData((prev) => ({ ...prev, role: selectedClass }));
    }
  }, [selectedClass]);

  const loadingMessagesList = [
    'Consulting the elders…',
    'Counting imaginary money…',
    'Summoning HR…',
    'Contacting the shadow government…',
    'Checking your aura…',
    'Sacrificing canteen attendance percentages…',
    'Nuking the college servers…'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setFormData((prev) => ({ ...prev, photoUrl: url }));
      soundFx.playMoney();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    soundFx.playSpell();
    setLoading(true);

    // Generate random hex code ID
    const randomHex = Math.random().toString(16).substring(2, 6).toUpperCase();
    const newId = `SWMG-${randomHex}-2026`;
    setApplicationId(newId);

    // Cycle through funny loading messages
    let msgIndex = 0;
    const interval = setInterval(() => {
      msgIndex = (msgIndex + 1) % loadingMessagesList.length;
      setLoadingMessage(loadingMessagesList[msgIndex]);
    }, 380);

    // Wait ~1.8 seconds then show modal
    setTimeout(() => {
      clearInterval(interval);
      setLoading(false);
      setShowSuccessModal(true);
      soundFx.playNukeSiren();

      // Confetti burst
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#00ff66', '#a855f7', '#ffd700']
        });
      } catch (err) {
        // Safe fallback
      }
    }, 1800);
  };

  const handleCopyId = () => {
    navigator.clipboard.writeText(applicationId);
    setCopiedId(true);
    soundFx.playMoney();
    setTimeout(() => setCopiedId(false), 2000);
  };

  return (
    <section id="apply" className="py-24 relative z-10 bg-[#06010d] border-t border-purple-950/60">
      
      {/* Background ambient orbs */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[400px] bg-purple-900/15 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[300px] bg-[#00ff66]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-600/40 text-xs font-mono text-[#00ff66] mb-3">
            <Wand2 className="w-3.5 h-3.5" />
            <span>CONFIDENTIAL RECRUITMENT PETITION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-cinzel font-bold text-white uppercase text-glow-purple">
            APPLICATION FORM
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400 font-display">
            Fill in your mortal credentials. No real data will be stored or leaked (except to the Shadow Government).
          </p>
        </div>

        {/* Polished Form Card */}
        <div className="rounded-3xl p-6 sm:p-10 bg-[#0c0419]/90 border-2 border-purple-800/60 shadow-[0_0_50px_rgba(147,51,234,0.15)] backdrop-blur-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Row 1: Full Name & Department */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-purple-200 mb-2">
                  Full Name <span className="text-[#00ff66]">*</span>
                </label>
                <input
                  type="text"
                  required
                  name="fullName"
                  placeholder="e.g. Grand Apprentice Aryan"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl bg-[#070110] border border-purple-900 text-white placeholder-zinc-600 focus:outline-none focus:border-[#00ff66] focus:ring-1 focus:ring-[#00ff66] font-display text-sm transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-purple-200 mb-2">
                  Department <span className="text-[#00ff66]">*</span>
                </label>
                <select
                  name="department"
                  value={formData.department}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl bg-[#070110] border border-purple-900 text-white focus:outline-none focus:border-[#00ff66] focus:ring-1 focus:ring-[#00ff66] font-display text-sm transition-all"
                >
                  <option>Dept. of Hexadecimal Sorcery & CS</option>
                  <option>Mechanical Pyromancy & Gear Alchemy</option>
                  <option>Civil Levitation & Bridge Illusions</option>
                  <option>Dark Frequencies & Electromagnetic Hexes</option>
                  <option>Goblin Management & Cafeteria Diplomacy</option>
                  <option>Undeclared / Wandering the Astral Plane</option>
                </select>
              </div>
            </div>

            {/* Row 2: Year & Division */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-purple-200 mb-2">
                  Year of Study <span className="text-[#00ff66]">*</span>
                </label>
                <select
                  name="year"
                  value={formData.year}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl bg-[#070110] border border-purple-900 text-white focus:outline-none focus:border-[#00ff66] focus:ring-1 focus:ring-[#00ff66] font-display text-sm transition-all"
                >
                  <option>Year 1 (Novice Spellcaster / Wide Eyed)</option>
                  <option>Year 2 (Perpetually Exhausted)</option>
                  <option>Year 3 (Attendance Deficit Wizard)</option>
                  <option>Year 4 (Ghost Student / Mythical Legend)</option>
                  <option>Year 7 of a 4-Year Engineering Degree</option>
                  <option>Time is a construct created by the faculty</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-purple-200 mb-2">
                  Division <span className="text-[#00ff66]">*</span>
                </label>
                <select
                  name="division"
                  value={formData.division}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl bg-[#070110] border border-purple-900 text-white focus:outline-none focus:border-[#00ff66] focus:ring-1 focus:ring-[#00ff66] font-display text-sm transition-all"
                >
                  <option>Division A (The Teachers' Pets)</option>
                  <option>Division B (Under High Surveillance)</option>
                  <option>Division C (The Astral Void)</option>
                  <option>Basement Dungeon Division</option>
                  <option>Canteen Back Bench Section</option>
                  <option>Academic Probation Realm</option>
                </select>
              </div>
            </div>

            {/* Row 3: Preferred Role & Special Skill */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-purple-200 mb-2">
                  Preferred Role <span className="text-[#00ff66]">*</span>
                </label>
                <select
                  name="role"
                  value={formData.role}
                  onChange={(e) => {
                    handleInputChange(e);
                    if (onClassChange) onClassChange(e.target.value);
                  }}
                  className="w-full px-4 py-3 rounded-xl bg-[#070110] border border-purple-900 text-[#00ff66] font-bold focus:outline-none focus:border-[#00ff66] focus:ring-1 focus:ring-[#00ff66] font-display text-sm transition-all"
                >
                  <option value="Shadow Wizard">🧙 Shadow Wizard</option>
                  <option value="Money Wizard">💰 Money Wizard</option>
                  <option value="Arcane Operations">🌀 Arcane Operations</option>
                  <option value="Spell Engineer">🖥️ Spell Engineer</option>
                  <option value="Dark Media Division">📸 Dark Media Division</option>
                  <option value="Goblin Intern">🧌 Goblin Intern</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-purple-200 mb-2">
                  Special Skill <span className="text-[#00ff66]">*</span>
                </label>
                <select
                  name="specialSkill"
                  value={formData.specialSkill}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl bg-[#070110] border border-purple-900 text-white focus:outline-none focus:border-[#00ff66] focus:ring-1 focus:ring-[#00ff66] font-display text-sm transition-all"
                >
                  <option>Sleeping with eyes open during 8 AM lecture</option>
                  <option>Conjuring proxy attendance in multiple classrooms at once</option>
                  <option>Making ₹0 appear like a balanced financial budget</option>
                  <option>Submitting blank PDFs at 11:59 PM to buy time</option>
                  <option>Making maggi in electric kettle without triggering alarms</option>
                  <option>Summoning WiFi from dead campus zones</option>
                </select>
              </div>
            </div>

            {/* Row 4: Current Aura Level & Number of Pending Assignments */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-purple-200 mb-2">
                  Current Aura Level <span className="text-[#00ff66]">*</span>
                </label>
                <select
                  name="auraLevel"
                  value={formData.auraLevel}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl bg-[#070110] border border-purple-900 text-white focus:outline-none focus:border-[#00ff66] focus:ring-1 focus:ring-[#00ff66] font-display text-sm transition-all"
                >
                  <option>-10,000 (Completely Cooked)</option>
                  <option>0 (Campus Background NPC)</option>
                  <option>+420 (Low-tier spellcaster)</option>
                  <option>+9,001 (Over 9000)</option>
                  <option>Infinite Aura (Delusional delusion)</option>
                  <option>Fluctuates based on hair volume</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-purple-200 mb-2">
                  Number of Pending Assignments <span className="text-[#00ff66]">*</span>
                </label>
                <select
                  name="pendingAssignments"
                  value={formData.pendingAssignments}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl bg-[#070110] border border-purple-900 text-white focus:outline-none focus:border-[#00ff66] focus:ring-1 focus:ring-[#00ff66] font-display text-sm transition-all"
                >
                  <option>0 (Glaring falsehood / Liar)</option>
                  <option>1 to 5 (Rookie numbers)</option>
                  <option>42 (The Answer to the Universe)</option>
                  <option>More than stars in the visible cosmos</option>
                  <option>The dog ate my laptop motherboard</option>
                </select>
              </div>
            </div>

            {/* Exam Season Spells Willingness */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-purple-200 mb-2">
                Are you willing to cast spells during exam season? <span className="text-[#00ff66]">*</span>
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { value: 'Yes, definitely during finals', label: 'Yes, absolutely' },
                  { value: 'Only if invigilator looks away', label: 'Only if unmonitored' },
                  { value: 'I cast spells instead of studying', label: 'I study zero, cast 100%' }
                ].map((opt) => (
                  <label
                    key={opt.value}
                    className={`flex items-center gap-2 p-3 rounded-xl border cursor-pointer transition-all text-xs font-mono ${
                      formData.examSpells === opt.value
                        ? 'bg-purple-950/80 border-[#00ff66] text-[#00ff66]'
                        : 'bg-[#080214] border-purple-950 text-zinc-400 hover:border-purple-800'
                    }`}
                  >
                    <input
                      type="radio"
                      name="examSpells"
                      value={opt.value}
                      checked={formData.examSpells === opt.value}
                      onChange={handleInputChange}
                      className="accent-[#00ff66]"
                    />
                    <span>{opt.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Why should the Shadow Wizard Money Gang recruit you? */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-purple-200 mb-2">
                Why should the Shadow Wizard Money Gang recruit you? <span className="text-[#00ff66]">*</span>
              </label>
              <textarea
                required
                rows={3}
                name="whyRecruit"
                placeholder="Declare your devotion to forbidden arts, imaginary finances, or avoiding class..."
                value={formData.whyRecruit}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-xl bg-[#070110] border border-purple-900 text-white placeholder-zinc-600 focus:outline-none focus:border-[#00ff66] focus:ring-1 focus:ring-[#00ff66] font-display text-sm transition-all resize-none"
              />
            </div>

            {/* Upload Strongest Wizard Photograph */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-purple-200 mb-2">
                Upload your strongest wizard photograph <span className="text-zinc-500">(Optional)</span>
              </label>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 p-4 rounded-2xl bg-[#070112] border-2 border-dashed border-purple-900 hover:border-[#00ff66] transition-colors">
                <div className="w-16 h-16 rounded-xl overflow-hidden bg-purple-950 border border-purple-700 shrink-0">
                  <img src={formData.photoUrl} alt="Wizard Preview" className="w-full h-full object-cover" />
                </div>
                
                <div className="flex-1 text-center sm:text-left">
                  <p className="text-xs font-display text-zinc-300">
                    Provide an astral portrait or use default High Council robes.
                  </p>
                  <p className="text-[10px] font-mono text-zinc-500 mt-0.5">
                    Accepted formats: .jpg, .png, or parchment scrolls.
                  </p>
                </div>

                <label className="px-4 py-2 rounded-xl bg-purple-950 hover:bg-purple-900 border border-purple-700/80 text-xs font-mono text-purple-200 hover:text-[#00ff66] transition-colors cursor-pointer flex items-center gap-2">
                  <Upload className="w-4 h-4" />
                  <span>Choose Image</span>
                  <input type="file" accept="image/*" onChange={handleFileUpload} className="hidden" />
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                disabled={loading}
                className="w-full py-5 rounded-2xl font-cinzel font-bold text-lg uppercase tracking-widest text-black bg-gradient-to-r from-[#00ff66] via-[#10b981] to-[#39ff14] shadow-[0_0_40px_rgba(0,255,102,0.6)] hover:shadow-[0_0_60px_rgba(0,255,102,0.9)] hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-6 h-6 animate-spin text-black" />
                    <span>CHANNELLING SPELL...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5 text-black" />
                    <span>CAST APPLICATION SPELL</span>
                    <Sparkles className="w-5 h-5 text-black" />
                  </>
                )}
              </button>
            </div>

          </form>
        </div>

      </div>

      {/* Fake Loading Overlay with Cycling Messages */}
      {loading && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex flex-col items-center justify-center p-4">
          <div className="p-8 rounded-3xl bg-[#0f0422] border-2 border-[#00ff66] shadow-[0_0_60px_rgba(0,255,102,0.4)] max-w-md w-full text-center">
            <div className="relative w-20 h-20 mx-auto mb-6">
              <div className="absolute inset-0 rounded-full border-4 border-purple-800 animate-ping opacity-50" />
              <div className="w-full h-full rounded-full border-4 border-t-[#00ff66] border-r-purple-500 border-b-[#00ff66] border-l-purple-500 animate-spin flex items-center justify-center text-3xl">
                🧙‍♂️
              </div>
            </div>
            
            <h3 className="text-xl font-cinzel font-bold text-white mb-2 text-glow-green">
              TRANSMITTING TO THE VOID
            </h3>
            
            {/* The cycling funny message */}
            <p className="text-sm font-mono text-[#00ff66] h-8 flex items-center justify-center animate-pulse">
              “{loadingMessage}”
            </p>

            <div className="mt-4 w-full bg-purple-950 rounded-full h-1.5 overflow-hidden">
              <div className="bg-[#00ff66] h-full animate-[progress_1.8s_ease-in-out_infinite]" style={{ width: '80%' }} />
            </div>
          </div>
        </div>
      )}

      {/* Fake Animated Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-lg flex items-center justify-center p-4 overflow-y-auto">
          <div className="my-8 max-w-lg w-full rounded-3xl bg-[#0c031c] border-2 border-[#00ff66] shadow-[0_0_80px_rgba(0,255,102,0.5)] p-6 sm:p-8 text-center relative overflow-hidden animate-in fade-in zoom-in duration-300">
            
            {/* Top Close / Dismiss button */}
            <button
              onClick={() => setShowSuccessModal(false)}
              className="absolute top-4 right-4 text-zinc-500 hover:text-white font-mono text-sm px-2 py-1 rounded bg-purple-950/80"
            >
              ✕ CLOSE
            </button>

            {/* Glowing Icon */}
            <div className="w-16 h-16 rounded-2xl bg-[#051c0e] border border-[#00ff66] flex items-center justify-center text-[#00ff66] mx-auto mb-4 shadow-[0_0_30px_rgba(0,255,102,0.5)]">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            {/* Prompt Required Heading */}
            <h3 className="text-2xl sm:text-3xl font-cinzel font-black text-white uppercase text-glow-green">
              APPLICATION SUCCESSFUL
            </h3>

            {/* Prompt Required Copy */}
            <div className="mt-4 p-4 rounded-xl bg-purple-950/40 border border-purple-800/60 text-purple-200 font-medieval text-base sm:text-lg leading-relaxed">
              <p>Congratulations, Apprentice.</p>
              <p className="mt-2 text-zinc-300 text-sm font-display">
                Your application has been forwarded to the <strong className="text-[#00ff66]">Shadow Government</strong> for evaluation.
              </p>
            </div>

            {/* Prompt Required Info: Application ID & Processing Time */}
            <div className="mt-6 space-y-3 font-mono text-xs text-left">
              <div className="p-3 rounded-xl bg-[#06010d] border border-purple-900 flex items-center justify-between">
                <div>
                  <span className="text-zinc-500 block text-[10px] uppercase">Application ID:</span>
                  <span className="text-[#00ff66] font-bold text-sm tracking-wider">{applicationId}</span>
                </div>
                <button
                  onClick={handleCopyId}
                  className="px-3 py-1.5 rounded-lg bg-purple-950 border border-purple-700 text-purple-200 hover:text-[#00ff66] flex items-center gap-1.5 text-xs transition-colors"
                >
                  {copiedId ? <Check className="w-3.5 h-3.5 text-[#00ff66]" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedId ? 'COPIED' : 'COPY'}</span>
                </button>
              </div>

              <div className="p-3 rounded-xl bg-[#06010d] border border-purple-900">
                <span className="text-zinc-500 block text-[10px] uppercase">Estimated Processing Time:</span>
                <span className="text-amber-400 font-bold text-sm">3–5 business centuries</span>
              </div>
            </div>

            {/* Generated Official Apprentice ID Card */}
            <div className="mt-6 p-4 rounded-2xl bg-gradient-to-br from-[#120526] to-[#070110] border border-purple-500/60 text-left relative overflow-hidden">
              <div className="absolute top-0 right-0 px-3 py-1 bg-[#00ff66] text-black font-bold font-mono text-[9px] uppercase tracking-widest rounded-bl-xl">
                PROVISIONAL APPRENTICE PASS
              </div>

              <div className="flex items-center gap-3">
                <img src={formData.photoUrl} alt="Apprentice" className="w-12 h-12 rounded-xl object-cover border border-purple-600" />
                <div>
                  <div className="text-white font-medieval font-bold text-base truncate">
                    {formData.fullName || 'Anonymous Spellcaster'}
                  </div>
                  <div className="text-[#00ff66] font-mono text-xs">
                    Class: {formData.role}
                  </div>
                  <div className="text-zinc-400 font-mono text-[10px]">
                    Aura: {formData.auraLevel}
                  </div>
                </div>
              </div>
            </div>

            {/* Dismiss CTA */}
            <button
              onClick={() => setShowSuccessModal(false)}
              className="mt-6 w-full py-3 rounded-xl font-display font-bold text-xs uppercase tracking-wider bg-purple-950 border border-purple-700 hover:border-[#00ff66] text-purple-200 hover:text-[#00ff66] transition-all cursor-pointer"
            >
              Return to Mortal Realm
            </button>

          </div>
        </div>
      )}

    </section>
  );
}
