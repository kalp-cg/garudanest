"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export function GlobalAudio() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef(null);

  // Initialize audio and strict browser autoplay handling
  useEffect(() => {
    const audio = new Audio('/audio/bgm.mpeg');
    audio.loop = true; // Ensures the audio repeats infinitely when finished
    audio.volume = 0.3;
    audioRef.current = audio;

    // Attempt aggressive immediate autoplay when the component mounts
    const attemptAutoplay = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
        setHasInteracted(true);
      } catch (err) {
        console.warn('Browser blocked immediate autoplay. Waiting for user interaction.');
      }
    };
    attemptAutoplay();

    // Fallback: Listen for the absolute first click anywhere on the document if autoplay was blocked
    const handleFirstInteraction = () => {
      if (!hasInteracted) {
        setHasInteracted(true);
        setIsPlaying(true);
        audio.play().catch((err) => console.warn('Audio auto-play blocked by browser:', err));
        document.removeEventListener('click', handleFirstInteraction);
      }
    };

    document.addEventListener('click', handleFirstInteraction);

    return () => {
      document.removeEventListener('click', handleFirstInteraction);
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // Handle manual toggle
  useEffect(() => {
    if (!audioRef.current || !hasInteracted) return;

    if (isPlaying) {
      audioRef.current.play().catch(e => console.warn('Audio blocked:', e));
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, hasInteracted]);

  const toggleMute = (e) => {
    e.stopPropagation(); // Prevent document click handler if they specifically click the button
    if (!hasInteracted) {
      setHasInteracted(true);
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] group">
      <button 
        onClick={toggleMute}
        className="flex items-center gap-3 bg-black/60 backdrop-blur-md border border-white/10 hover:border-[#FF6B00]/40 px-4 py-3 rounded-full transition-all duration-300 pointer-events-auto"
      >
        <div className="flex items-end gap-[2px] h-4 w-4">
          {/* Animated Equalizer Bars */}
          <div className={`w-1 bg-[#FF6B00] rounded-t-sm transition-all duration-150 ${isPlaying ? 'animate-[equalizer_0.8s_ease-in-out_infinite] h-full' : 'h-1'}`}></div>
          <div className={`w-1 bg-[#FF6B00] rounded-t-sm transition-all duration-150 ${isPlaying ? 'animate-[equalizer_1.2s_ease-in-out_infinite_animation-delay-200] h-full' : 'h-1'}`}></div>
          <div className={`w-1 bg-[#FF6B00] rounded-t-sm transition-all duration-150 ${isPlaying ? 'animate-[equalizer_1.0s_ease-in-out_infinite_animation-delay-400] h-full' : 'h-1'}`}></div>
        </div>

        <span className="text-[10px] font-mono tracking-widest uppercase text-white/60 group-hover:text-white transition-colors">
          {isPlaying ? 'AUDIO_SYNC' : 'AUDIO_MUTED'}
        </span>
      </button>

      {/* Global Equalizer Keyframes */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes equalizer {
          0%, 100% { transform: scaleY(0.3); transform-origin: bottom; }
          50% { transform: scaleY(1); transform-origin: bottom; }
        }
      `}} />
    </div>
  );
}
