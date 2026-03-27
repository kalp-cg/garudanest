"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { teamMembers } from '@/lib/constants';

export default function NestPage() {
  const router = useRouter();
  const [teamFilter, setTeamFilter] = useState("All");
  const [shuffledMembers, setShuffledMembers] = useState([]);
  const [isReady, setIsReady] = useState(false);

  // Elite Fisher-Yates Shuffle for Uniform Randomness
  const shuffle = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  useEffect(() => {
    setShuffledMembers(shuffle(teamMembers));
    setTimeout(() => setIsReady(true), 150);
  }, []);

  const membersToDisplay = shuffledMembers.length > 0 ? shuffledMembers : teamMembers;

  const visibleTeam = teamFilter === "All"
    ? membersToDisplay
    : membersToDisplay.filter((member) => member.role === teamFilter);

  const handleNodeClick = (slug) => {
      // Navigate to the ultra-unique dedicated terminal page for the node
      router.push(`/nest/${slug}`);
  };

  return (
    <div className="pt-32 pb-20 px-6 font-space">
      <div className="max-w-7xl mx-auto px-4 md:px-0 relative z-10">
        <div className="relative group mb-14 md:mb-20 pt-12 md:pt-16">
          <span className="absolute -top-3 left-0 text-[#FF6B00] opacity-[0.06] font-sync font-bold text-4xl md:text-8xl uppercase tracking-tighter select-none pointer-events-none whitespace-nowrap">
            Human Capital
          </span>

          <h2 className="relative z-10 text-4xl md:text-7xl font-sync font-bold uppercase tracking-tighter text-white leading-none">
            Meet the <span className="text-[#FF6B00]">Elite.</span>
          </h2>
          
          <p className="max-w-2xl mt-6 text-slate-400 text-xs md:text-sm uppercase tracking-widest leading-relaxed font-medium">
            8 Senior architects, Zero overhead. Direct access to mastery.
          </p>

          <div className="h-[2px] w-16 bg-[#FF6B00] mt-8 opacity-40"></div>
        </div>

        {/* Filter Section */}
        <div className="flex flex-wrap gap-2 md:gap-3 mb-10 text-[10px] md:text-xs uppercase font-bold tracking-[0.2em] md:tracking-widest">
          {['All', 'Frontend', 'Backend', 'AI', 'DevOps'].map((role) => (
            <button
              key={role}
              onClick={() => setTeamFilter(role)}
              className={`px-4 py-2 border transition-all ${teamFilter === role ? 'border-[#00E5FF] bg-[#00E5FF]/10 text-[#00E5FF]' : 'border-white/10 text-white/40 hover:text-white hover:border-white/30'}`}
            >
              {role}
            </button>
          ))}
        </div>

        {/* Team Grid */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 transition-opacity duration-1000 ${isReady ? 'opacity-100' : 'opacity-0'}`}>
          {visibleTeam.map((member, index) => (
            <div 
              key={member.name} 
              onClick={() => handleNodeClick(member.slug)}
              className="cursor-pointer group relative aspect-[4/5] overflow-hidden bg-[#050505] border border-white/5 hover:border-[#00E5FF]/40 transition-all duration-500"
            >
              {/* Profile Image */}
              <img
                src={member.image}
                alt={member.name}
                className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />

              {/* Status Badge */}
              <div className="absolute top-4 right-4 z-20">
                <span className="text-[8px] font-mono px-2 py-1 bg-black/60 backdrop-blur-md border border-white/10 text-[#00E5FF] uppercase tracking-[0.2em]">
                  Node_0x{index + 1}
                </span>
              </div>

              {/* Info Content */}
              <div className="absolute inset-x-0 bottom-0 p-6 z-20 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="h-[2px] w-12 bg-[#FF6B00] mb-4 group-hover:w-full transition-all duration-700" />

                <h3 className="text-2xl font-sync font-bold uppercase text-white mb-1 tracking-tighter">
                  {member.name}
                </h3>

                <p className="text-[10px] font-bold text-[#FF6B00] uppercase tracking-[0.2em] mb-4">
                  {member.role}
                </p>

                <div className="max-h-0 group-hover:max-h-48 overflow-hidden transition-all duration-700 opacity-0 group-hover:opacity-100">
                  <p className="text-[10px] text-slate-300 uppercase leading-relaxed mb-4 tracking-wide font-medium">
                    {member.bio}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {member.tags.map((tag) => (
                      <span key={tag} className="text-[8px] font-mono border border-white/10 px-2 py-1 text-[#00E5FF]/80 uppercase tracking-widest bg-white/[0.02]">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* <span className="text-[9px] font-mono text-[#00FF57] uppercase tracking-widest flex items-center gap-2">
                     <span className="w-1 h-1 bg-[#00FF57] rounded-full animate-pulse shadow-[0_0_8px_#00FF57]"></span>
                     Access_Profile
                  </span> */}
                </div>
              </div>

              {/* Glass Reflection Effect */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-[1500ms]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
