"use client";

import React, { useState } from 'react';
import { ArrowRight, Briefcase, User } from 'lucide-react';
import { BentoCard } from '@/components/ui/BentoCard';

export default function JoinPage() {
  const [hireStatus, setHireStatus] = useState({ type: "idle", message: "" });
  const [joinStatus, setJoinStatus] = useState({ type: "idle", message: "" });

  const handleHireSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    setHireStatus({ type: 'loading', message: 'Establishing Uplink...' });
    const formData = new FormData(form);
    const payload = {
      companyName: String(formData.get('companyName') || ''),
      workEmail: String(formData.get('workEmail') || ''),
      projectScope: String(formData.get('projectScope') || ''),
    };

    try {
      const response = await fetch('/api/hire', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'UPLINK_FAILURE');
      setHireStatus({ type: 'success', message: `Protocol Initiated. RefID: ${data.referenceId}` });
      form.reset();
    } catch (error) {
      setHireStatus({ type: 'error', message: error.message || 'NODE_OFFLINE' });
    }
  };

  const handleJoinSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    setJoinStatus({ type: 'loading', message: 'Syncing Credentials...' });
    const formData = new FormData(form);
    const payload = {
      fullName: String(formData.get('fullName') || ''),
      email: String(formData.get('email') || ''),
      role: String(formData.get('role') || ''),
      portfolio: String(formData.get('portfolio') || ''),
    };

    try {
      const response = await fetch('/api/join', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'UPLINK_FAILURE');
      setJoinStatus({ type: 'success', message: `Profile Synced. RefID: ${data.referenceId}` });
      form.reset();
    } catch (error) {
      setJoinStatus({ type: 'error', message: error.message || 'NODE_OFFLINE' });
    }
  };

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto px-4 md:px-0">
        <div className="relative group mb-16 md:mb-24 pt-12 md:pt-16">
          <span className="absolute -top-3 left-0 text-[#FF6B00] opacity-[0.06] font-sync font-bold text-4xl md:text-8xl uppercase tracking-tighter select-none pointer-events-none whitespace-nowrap">
            Talent Acquisition
          </span>

          <h2 className="relative z-10 text-4xl md:text-7xl font-sync font-bold uppercase tracking-tighter text-white leading-none">
            Recruitment <span className="text-[#FF6B00]">Protocol</span>
          </h2>
          
          <p className="max-w-2xl mt-6 text-slate-400 text-xs md:text-sm uppercase tracking-widest leading-relaxed font-medium">
            We only hire the top 1%. Join the high-velocity node.
          </p>

          <div className="h-[2px] w-16 bg-[#FF6B00] mt-8 opacity-40"></div>
        </div>

        <div className="space-y-12">
          {/* Recruitment Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="p-6 border border-white/5 bg-white/[0.02]">
                <span className="text-[9px] font-bold text-[#00E5FF] uppercase tracking-[0.4em] block mb-3">01 // The Bar</span>
                <p className="text-[10px] text-slate-300 uppercase leading-relaxed font-medium">No junior roles. We only hire senior architects who can own entire systems from Day 1.</p>
             </div>
             <div className="p-6 border border-white/5 bg-white/[0.02]">
                <span className="text-[9px] font-bold text-[#FF6B00] uppercase tracking-[0.4em] block mb-3">02 // The Mission</span>
                <p className="text-[10px] text-slate-300 uppercase leading-relaxed font-medium">Build mission-critical AI and infrastructure for the world's most ambitious entities.</p>
             </div>
          </div>

          {/* Join Form */}
          <form onSubmit={handleJoinSubmit}>
            <BentoCard className="p-8 md:p-12">
              <div className="flex items-center gap-3 mb-8">
                <User size={20} className="text-[#FF6B00]" />
                <span className="text-xs font-bold uppercase tracking-widest">Candidate Profile // Apply Now</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-2">
                  <label className="text-[9px] font-bold text-white/40 uppercase tracking-widest ml-1">Full Name</label>
                  <input name="fullName" required type="text" placeholder="ELITE_DEV" className="w-full bg-transparent border-b border-white/10 p-3 text-xs uppercase outline-none focus:border-[#00E5FF] transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] font-bold text-white/40 uppercase tracking-widest ml-1">Secure Email</label>
                  <input name="email" required type="email" placeholder="DEV@DOMAIN.COM" className="w-full bg-transparent border-b border-white/10 p-3 text-xs uppercase outline-none focus:border-[#00E5FF] transition-colors" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <div className="space-y-2">
                  <label className="text-[9px] font-bold text-white/40 uppercase tracking-widest ml-1">Primary Stack / Role</label>
                  <input name="role" required type="text" placeholder="E.G. RUST / NEXT.JS / AI" className="w-full bg-transparent border-b border-white/10 p-3 text-xs uppercase outline-none focus:border-[#00E5FF] transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-[9px] font-bold text-white/40 uppercase tracking-widest ml-1">Portfolio / Source Code</label>
                  <input name="portfolio" type="url" placeholder="GITHUB.COM/USER" className="w-full bg-transparent border-b border-white/10 p-3 text-xs uppercase outline-none focus:border-[#00E5FF] transition-colors" />
                </div>
              </div>

              <button disabled={joinStatus.type === 'loading'} className="w-full bg-[#00E5FF] text-black py-5 font-black text-xs uppercase hover:bg-[#FF6B00] transition-all shadow-[0_0_20px_rgba(0,229,255,0.2)] disabled:opacity-60">
                {joinStatus.type === 'loading' ? 'Establishing Connection...' : 'Submit Credentials'}
              </button>
              
              {joinStatus.type !== 'idle' && (
                <p className={`mt-6 text-[10px] font-bold text-center uppercase tracking-widest ${joinStatus.type === 'success' ? 'text-[#22C55E]' : 'text-red-400'}`}>
                  {joinStatus.message}
                </p>
              )}
            </BentoCard>
          </form>

          {/* Client Link */}
          <div className="pt-10 border-t border-white/5 text-center">
            <p className="text-[10px] text-white/30 uppercase tracking-[0.3em] mb-4">Are you a client looking to hire a team?</p>
            <a href="/hire" className="inline-flex items-center gap-2 text-[#FF6B00] text-xs font-bold uppercase tracking-widest hover:text-white transition-colors">
              Request Elite Consultation <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
