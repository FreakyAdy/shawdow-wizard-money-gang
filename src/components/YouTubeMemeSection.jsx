import React, { useState } from 'react';
import { Play, Volume2, Radio, Sparkles, Disc, Flame, ShieldAlert, Zap, ExternalLink } from 'lucide-react';
import { soundFx } from '../utils/audio';

export default function YouTubeMemeSection() {
  const [selectedVideo, setSelectedVideo] = useState('oseM5Zxgg78');
  const [activeMemeSound, setActiveMemeSound] = useState(null);

  const videoPlaylist = [
    {
      id: 'oseM5Zxgg78',
      title: 'Shadow Wizard Money Gang (We Love Casting Spells)',
      subtitle: 'The sacred meme anthem & legendary vocal chops',
      duration: 'Official Cut',
      url: 'https://youtu.be/oseM5Zxgg78'
    },
    {
      id: 'RWnaWpBCAC0',
      title: 'Shadow Wizard Money Gang — Extended Theme',
      subtitle: 'Phonk beats, nuclear sirens, and arcane bass drops',
      duration: 'Full Edit',
      url: 'https://youtu.be/RWnaWpBCAC0'
    },
    {
      id: '04N9ZnYtmO8',
      title: 'Shadow Wizard Money Gang — Lore & Animation',
      subtitle: 'Certified astral broadcast from the shadow government',
      duration: 'Animation Cut',
      url: 'https://youtu.be/04N9ZnYtmO8'
    }
  ];

  const currentVideoData = videoPlaylist.find((v) => v.id === selectedVideo) || videoPlaylist[0];

  const memeSounds = [
    {
      label: 'WE LOVE CASTING SPELLS',
      sub: 'Iconic Vocal Chant',
      emoji: '🧙‍♂️',
      action: () => {
        soundFx.speakMeme('Shadow Wizard Money Gang. We love casting spells.');
        soundFx.playSpell();
      }
    },
    {
      label: 'LEGALIZE NUCLEAR BOMBS',
      sub: 'DJ Smokey Voice Tag',
      emoji: '☢️',
      action: () => {
        soundFx.speakMeme('Legalize nuclear bombs.');
        soundFx.playNukeSiren();
      }
    },
    {
      label: 'SWAG MESSIAH',
      sub: 'Trap Sub Drop',
      emoji: '👑',
      action: () => {
        soundFx.speakMeme('Swag messiah.');
        soundFx.play808Bass();
      }
    },
    {
      label: 'BEES MAKE HONEY',
      sub: 'Arcane Wisdom',
      emoji: '🐝',
      action: () => {
        soundFx.speakMeme('Bees make honey.');
        soundFx.playGlitch();
      }
    },
    {
      label: 'THE SHADOW GOVERNMENT',
      sub: 'Sponsor Tag',
      emoji: '👁️',
      action: () => {
        soundFx.speakMeme('This song is sponsored by the shadow government.');
        soundFx.playMoney();
      }
    },
    {
      label: 'CALL FIRE DEPARTMENT',
      sub: 'We Nuked the Building',
      emoji: '🚨',
      action: () => {
        soundFx.speakMeme('Call the fire department, we just nuked the building.');
        soundFx.playNukeSiren();
      }
    }
  ];

  const handleMemeTrigger = (sound, idx) => {
    setActiveMemeSound(idx);
    sound.action();
    setTimeout(() => setActiveMemeSound(null), 1200);
  };

  return (
    <section id="anthem" className="py-24 relative z-10 bg-[#06010e] border-t border-purple-950/60 overflow-hidden">
      
      {/* Background glow effects */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-purple-900/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#00ff66]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-600/40 text-xs font-mono text-[#00ff66] mb-3">
            <Radio className="w-3.5 h-3.5 animate-pulse" />
            <span>ASTRAL SOUND FREQUENCY</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-cinzel font-bold text-white uppercase text-glow-green">
            THE SACRED ANTHEM & MEME ARCHIVES
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400 font-display">
            Immerse yourself in the radioactive trap-frequencies that fuel our questionable nocturnal activities.
          </p>
        </div>

        {/* Cartoon Gang Banner Artwork with Neon Stickers */}
        <div className="relative mb-12 rounded-2xl overflow-hidden border-2 border-purple-600/50 shadow-2xl bg-[#0d041e] group">
          <img 
            src="/swmg_gang_banner.jpg" 
            alt="Shadow Wizard Laboratory Gang Meme"
            className="w-full h-auto max-h-[380px] object-cover group-hover:scale-102 transition-transform duration-700" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent pointer-events-none" />
          
          <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-[#00ff66]/50 text-xs font-mono text-[#00ff66]">
              <Disc className="w-4 h-4 animate-spin-slow text-[#00ff66]" />
              <span>OFFICIAL BROADCAST ARCHIVE: LAB 4</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-purple-300 bg-purple-950/80 px-3 py-1.5 rounded-lg border border-purple-700/50">
              <span>INTERN SAFETY RATING: 0.0%</span>
            </div>
          </div>
        </div>

        {/* Video Player & Playlist Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Main YouTube Embedded Video */}
          <div className="lg:col-span-8 rounded-2xl overflow-hidden border-2 border-purple-500/50 bg-black shadow-[0_0_40px_rgba(147,51,234,0.3)]">
            <div className="relative aspect-video w-full bg-black">
              <iframe
                key={selectedVideo}
                src={`https://www.youtube.com/embed/${selectedVideo}?rel=0&modestbranding=1&enablejsapi=1`}
                title="Shadow Wizard Money Gang YouTube Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>
            
            {/* Video Controls & Info Bar */}
            <div className="p-4 bg-[#0a0316] flex flex-wrap items-center justify-between gap-3 border-t border-purple-900/60">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00ff66] animate-ping" />
                <span className="text-xs font-mono text-zinc-300">
                  Playing: <strong className="text-[#00ff66] font-medieval">{currentVideoData.title}</strong>
                </span>
              </div>
              
              <div className="flex items-center gap-4">
                <a
                  href={currentVideoData.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-mono text-purple-300 hover:text-[#00ff66] transition-colors"
                >
                  <span>Open in YouTube</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <div className="flex items-center gap-1.5">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <span
                      key={i}
                      className="w-1 bg-[#00ff66] rounded-full animate-pulse"
                      style={{
                        height: `${(i % 3 + 1) * 8}px`,
                        animationDelay: `${i * 150}ms`
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Video Selector List */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs uppercase font-mono tracking-widest text-[#00ff66] mb-2 flex items-center gap-2">
              <Zap className="w-4 h-4" />
              <span>ARCANE BROADCAST CHANNELS</span>
            </div>

            {videoPlaylist.map((vid) => {
              const isCurrent = selectedVideo === vid.id;
              return (
                <div
                  key={vid.id}
                  onClick={() => {
                    soundFx.playGlitch();
                    setSelectedVideo(vid.id);
                  }}
                  className={`p-4 rounded-xl border transition-all duration-200 cursor-pointer ${
                    isCurrent
                      ? 'bg-purple-950/80 border-[#00ff66] shadow-[0_0_20px_rgba(0,255,102,0.3)]'
                      : 'bg-[#0d041c] border-purple-950 hover:border-purple-700 hover:bg-purple-950/40'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="font-medieval font-bold text-sm text-white flex items-center gap-2">
                      <Play className={`w-3.5 h-3.5 shrink-0 ${isCurrent ? 'text-[#00ff66] fill-[#00ff66]' : 'text-purple-400'}`} />
                      <span className="line-clamp-1">{vid.title}</span>
                    </h4>
                    <span className="text-[10px] font-mono text-[#00ff66] bg-black/60 px-2 py-0.5 rounded shrink-0 border border-purple-900">
                      {vid.duration}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 font-display mt-1.5 pl-5">
                    {vid.subtitle}
                  </p>
                </div>
              );
            })}

            {/* Warning Note */}
            <div className="p-3 rounded-xl bg-purple-950/30 border border-purple-900/40 text-[11px] font-mono text-purple-300">
              ⚠️ If audio invokes sudden desire to buy oversized purple wizard robes, the Shadow Government accepts no liability.
            </div>
          </div>

        </div>

        {/* Interactive Meme Soundboard Grid */}
        <div className="rounded-2xl p-6 sm:p-8 bg-[#090214] border-2 border-purple-800/60 shadow-2xl relative">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-purple-950">
            <div>
              <span className="text-xs font-mono uppercase text-[#00ff66] tracking-widest">TACTICAL AUDIO DEPLOYMENT</span>
              <h3 className="text-xl sm:text-2xl font-cinzel font-bold text-white mt-1">
                SHADOW SOUNDBOARD 3000
              </h3>
            </div>
            <span className="text-xs font-mono text-zinc-400 bg-black/60 px-3 py-1.5 rounded-lg border border-purple-900">
              CLICK BUTTON TO BROADCAST SPELL
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {memeSounds.map((snd, idx) => {
              const isTriggered = activeMemeSound === idx;
              return (
                <button
                  key={idx}
                  onClick={() => handleMemeTrigger(snd, idx)}
                  className={`p-4 rounded-xl border text-left transition-all duration-200 flex items-center gap-4 cursor-pointer group ${
                    isTriggered
                      ? 'bg-[#00ff66] text-black border-[#00ff66] scale-105 shadow-[0_0_25px_rgba(0,255,102,0.9)]'
                      : 'bg-[#0d041c] border-purple-900/60 hover:border-[#00ff66] hover:bg-purple-950/60'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl transition-transform duration-200 group-hover:scale-125 ${
                    isTriggered ? 'bg-black text-white' : 'bg-purple-950/80 border border-purple-700/50'
                  }`}>
                    {snd.emoji}
                  </div>
                  <div>
                    <div className={`font-medieval font-bold text-sm tracking-wide transition-colors ${
                      isTriggered ? 'text-black' : 'text-white group-hover:text-[#00ff66]'
                    }`}>
                      {snd.label}
                    </div>
                    <div className={`text-xs font-mono ${
                      isTriggered ? 'text-black/80 font-semibold' : 'text-zinc-400'
                    }`}>
                      {snd.sub}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
