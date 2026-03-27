"use client";

import React from 'react';
import { Zap, Cpu, Globe, Shield, ArrowRight, Users, Terminal } from 'lucide-react';
import { teamMembers } from '@/lib/constants';
import Link from 'next/link';
import { BentoCard } from '@/components/ui/BentoCard';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export default function AboutPage() {
  return (
    <div className="relative pt-32 pb-20 px-6 bg-black min-h-screen font-space">
      <div className="max-w-7xl mx-auto relative z-10 px-4 md:px-0">
        
        <div className="relative group mb-16 md:mb-24 pt-12 md:pt-16 overflow-hidden md:overflow-visible">
          <ScrollReveal type="slide-right" delay={0} className="absolute -top-3 left-0 select-none pointer-events-none whitespace-nowrap w-full">
            <span className="text-[#FF6B00] opacity-[0.06] font-sync font-bold text-4xl md:text-8xl uppercase tracking-tighter">
              Legacy Protocol
            </span>
          </ScrollReveal>

          <ScrollReveal type="slide-right" delay={150} className="relative z-10">
            <h2 className="text-4xl md:text-7xl font-sync font-bold uppercase tracking-tighter text-white leading-[0.9]">
              The <span className="text-[#FF6B00]">GarudaNest</span> <br />
              Collective
            </h2>
          </ScrollReveal>
          
          <ScrollReveal type="slide-right" delay={300} className="max-w-2xl mt-6">
            <p className="text-slate-400 text-xs md:text-sm uppercase tracking-widest leading-relaxed font-medium">
              Radical transparency meets architectural grit. Documenting the origins of the collective.
            </p>
          </ScrollReveal>

          <ScrollReveal type="slide-right" delay={450} className="mt-8">
            <div className="h-[2px] w-16 bg-[#FF6B00] opacity-40"></div>
          </ScrollReveal>
        </div>

        {/* SPECIALIZATION MATRIX */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {[
            { 
              icon: <Cpu className="text-[#00E5FF]" size={20} />, 
              title: "Hard_Logic", 
              tag: "SYSTEMS",
              desc: "Building mission-critical architectures at the intersection of silicon and software logic." 
            },
            { 
              icon: <Globe className="text-[#FF6B00]" size={20} />, 
              title: "Synapse", 
              tag: "SYNERGY",
              desc: "Zero-friction collaboration. Direct-to-engineer communication eliminates all interpretive drift." 
            },
            { 
              icon: <Shield className="text-[#00FF57]" size={20} />, 
              title: "Sovereign", 
              tag: "INDEPENDENCE",
              desc: "Establishing permanent technical independence. Systems you own, controlled by your rules." 
            }
          ].map((item, i) => (
            <ScrollReveal key={i} delay={i * 200} type="scale-up">
              <BentoCard className="group p-10 bg-white/[0.02] border-white/5 hover:border-[#FF6B00]/30 transition-all duration-500 relative overflow-hidden h-full block">
                <div className="relative z-10">
                  <div className="mb-6 opacity-60 group-hover:opacity-100 transition-opacity">{item.icon}</div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-[8px] font-mono text-[#FF6B00] border border-[#FF6B00]/30 px-2 py-0.5 rounded-full">{item.tag}</span>
                  </div>
                  <h3 className="text-xl font-sync font-bold uppercase text-white mb-4 tracking-tight">{item.title}</h3>
                  <p className="text-[10px] text-slate-500 uppercase leading-relaxed tracking-widest font-medium opacity-80">{item.desc}</p>
                </div>
                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#FF6B00] group-hover:w-full transition-all duration-700"></div>
              </BentoCard>
            </ScrollReveal>
          ))}
        </div>

        {/* IMMERSIVE TEAM PHOTO BREAK */}
        <ScrollReveal type="blur-in">
          <div className="mb-32 relative h-[400px] md:h-[600px] w-full border border-white/5 rounded-sm overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                alt="Engineering Team Discussion" 
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black via-black/80 to-transparent z-10"></div>
              
              <div className="absolute bottom-10 left-10 z-20">
                 <div className="flex items-center gap-3 mb-4">
                   <div className="w-1.5 h-1.5 bg-[#FF6B00] rounded-full animate-pulse"></div>
                   <span className="text-[10px] font-mono text-white/50 uppercase tracking-[0.4em]">Visual_Log // 0xAF_Discussion</span>
                 </div>
                 <h3 className="text-2xl md:text-4xl font-sync font-bold text-white tracking-widest uppercase mb-2">Architectural Alignment</h3>
                 <p className="text-[11px] text-slate-400 uppercase tracking-widest max-w-xl leading-relaxed">Cross-validating system logic before committing to production repositories. Elite engineering requires consensus, not hierarchy.</p>
              </div>
          </div>
        </ScrollReveal>

        {/* GENESIS PROTOCOL (STORY) */}
        <div className="mb-40 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start border-l border-white/5 pl-8 md:pl-16 relative z-10">
            <div className="sticky top-40 pt-4">
              <ScrollReveal type="fade-up">
                <div className="flex items-center gap-3 mb-8">
                  <Terminal size={16} className="text-[#00E5FF]" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#00E5FF]">Terminal_Briefing // Genesis</span>
                </div>
                <h3 className="text-4xl md:text-6xl font-sync font-bold uppercase text-white tracking-tighter leading-none mb-10">
                  The <span className="text-[#FF6B00]">Genesis</span> <br /> Protocol.
                </h3>
                <div className="h-[1px] w-20 bg-[#FF6B00] opacity-40"></div>
              </ScrollReveal>
            </div>

            <div className="space-y-10 text-slate-400 text-xs md:text-sm uppercase leading-loose tracking-widest font-medium">
              <ScrollReveal delay={200} type="slide-right">
                <p className="pb-10 border-b border-white/5 opacity-90">
                  GarudaNest was born from a frustration with "Good Enough." We watched a landscape filled with bloated agencies, junior developer churn, and technical debt that stifled innovation. We saw the gap between ambitious visions and the architectural grit required to build them.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={400} type="slide-right">
                <p className="pb-10 border-b border-white/5 opacity-90">
                  The thought was simple but radical: Assemble a curated collective of <span className="text-[#FF6B00]">elite freelance architects.</span> No junior staff to manage, no account managers to translate requirements, and zero friction. Just pure, direct-to-engineer mastery from independent experts operating at the highest level.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={600} type="slide-right">
                <p className="opacity-90">
                  We built this decentralized network to be the special operations unit of the web. We don't just ship products; we establish technical sovereignty for our partners. Every system we build is a testament to our belief that in the digital age, <span className="text-white font-bold">The Code Is Law.</span>
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>

        {/* HUMAN CAPITAL MATRIX (THE NODES) */}
        <div className="mb-40 relative">
          <div className="flex justify-between items-end mb-16 px-4 md:px-0 relative z-10">
            <ScrollReveal>
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Users size={18} className="text-[#00E5FF]" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#00E5FF]">Diagnostic_Matrix // Active_Nodes</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-sync font-bold uppercase text-white tracking-tighter">
                  The <span className="text-[#FF6B00]">Nodes</span>
                </h2>
              </div>
            </ScrollReveal>
            <Link href="/nest" className="hidden md:flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-white/40 hover:text-[#00E5FF] transition-all group">
              Deep Diagnostic <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {teamMembers.map((member, i) => (
              <ScrollReveal key={i} delay={i * 100} type="fade-up">
                <div className="group relative aspect-[3/4] overflow-hidden bg-white/[0.02] border border-white/5 hover:border-[#00E5FF]/30 transition-all duration-500 p-8 flex flex-col justify-end rounded-sm h-full block">
                  {/* ID OVERLAY */}
                  <div className="absolute top-6 left-6 z-20 opacity-20 group-hover:opacity-100 transition-opacity">
                      <span className="text-[8px] font-mono text-white tracking-widest uppercase">Node_0x0{i+1}</span>
                  </div>
                  
                  {/* INFO CONTAINER */}
                  <div className="relative z-20">
                      <h4 className="text-xl font-sync font-bold text-white uppercase tracking-tighter mb-1">{member.name}</h4>
                      <p className="text-[9px] font-bold font-mono text-[#FF6B00] uppercase tracking-widest mb-4 opacity-80 group-hover:opacity-100">{member.role} // FREELANCE NODE</p>
                      <div className="h-[1px] w-0 bg-[#00E5FF] group-hover:w-full transition-all duration-700"></div>
                  </div>

                  {/* VISUAL EFFECTS */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 z-10"></div>
                  <div className="absolute inset-0 bg-[#00E5FF]/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-10"></div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          
          <div className="mt-12 md:hidden text-center">
            <Link href="/nest" className="text-[10px] font-bold uppercase tracking-widest text-[#00E5FF]">Deep Diagnostic</Link>
          </div>
        </div>

        {/* SECONDARY IMMERSIVE PHOTO */}
        <ScrollReveal type="blur-in">
          <div className="mb-32 relative h-[300px] w-full border border-white/5 rounded-sm overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
                alt="Elite Development Focus" 
                className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 scale-105 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-[#00E5FF]/10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-700"></div>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                 <p className="text-white/20 font-sync font-bold text-5xl md:text-8xl tracking-tighter uppercase blur-[2px]">Focus_Mode</p>
              </div>
          </div>
        </ScrollReveal>

        {/* FINAL COMMAND INTERFACE */}
        <ScrollReveal type="fade-up">
          <div className="bg-white/[0.02] border border-white/5 p-12 md:p-24 text-center rounded-sm">
              <div className="relative z-10">
                  <p className="text-[10px] text-white/40 uppercase tracking-[0.5em] mb-10">Transmission Terminal Ready</p>
                  <h2 className="text-3xl md:text-6xl font-sync font-bold uppercase text-white tracking-tighter mb-12">
                    Ready to <span className="text-[#FF6B00]">Build</span> Your <span className="text-[#00E5FF]">Empire?</span>
                  </h2>
                  
                  <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                      <a href="/manifesto" className="bg-[#FF6B00] text-black px-12 py-5 font-black text-xs uppercase hover:bg-white transition-all shadow-[0_10px_30px_rgba(255,107,0,0.15)] group flex items-center justify-center gap-3">
                          Initialize Gateway <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </a>
                      <a href="/work" className="border border-white/20 px-12 py-5 font-bold text-xs uppercase text-white hover:border-[#00E5FF] hover:text-[#00E5FF] transition-all">
                          Review Protocol Logs
                      </a>
                  </div>
              </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
