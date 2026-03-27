"use client";
import React, { useState, useEffect, useRef } from 'react';

export const ScrollReveal = ({ children, className = "", delay = 0, type = "fade-up", threshold = 0.15 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold, rootMargin: '0px 0px -50px 0px' });
    
    if (domRef.current) observer.observe(domRef.current);
    
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      if (domRef.current) observer.unobserve(domRef.current);
    };
  }, [threshold]);

  let baseStyle = "transition-all duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)]";
  let hiddenStyle = "opacity-0 translate-y-24";
  let visibleStyle = "opacity-100 translate-y-0";

  switch (type) {
    case "scale-up":
      hiddenStyle = "opacity-0 scale-90";
      visibleStyle = "opacity-100 scale-100";
      break;
    case "blur-in":
      hiddenStyle = "opacity-0 blur-xl translate-y-10 scale-[0.98]";
      visibleStyle = "opacity-100 blur-none translate-y-0 scale-100";
      break;
    case "slide-right":
      hiddenStyle = "opacity-0 -translate-x-20";
      visibleStyle = "opacity-100 translate-x-0";
      break;
    case "slide-left":
      hiddenStyle = "opacity-0 translate-x-20";
      visibleStyle = "opacity-100 translate-x-0";
      break;
    case "glitch-in":
      hiddenStyle = "opacity-0 scale-110 blur-xl text-[#00E5FF]";
      visibleStyle = "opacity-100 scale-100 blur-none text-[#FF6B00]";
      baseStyle = "transition-all duration-[2s] ease-out";
      break;
  }

  return (
    <div 
      ref={domRef} 
      className={`${className} ${baseStyle} ${isVisible ? visibleStyle : hiddenStyle}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};
