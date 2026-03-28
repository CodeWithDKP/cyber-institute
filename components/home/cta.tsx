"use client";

import React from 'react';

const CTA = () => {
  return (
    <section className="bg-background py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main CTA Container with deep maroon gradient */}
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#4a0404] to-[#1a0101] border border-brand-primary/20 px-8 py-16 md:py-20 text-center shadow-2xl">
          
          {/* Subtle Inner Radial Glow */}
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--brand-primary)_0%,_transparent_70%)] opacity-10 pointer-events-none" />

          {/* Content Wrapper */}
          <div className="relative z-10 flex flex-col items-center space-y-6">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1]">
              Start Your Cyber Security Career Today
            </h2>
            
            <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Join thousands of successful cybersecurity professionals who started their journey with us.
            </p>

            <div className="pt-6">
              {/* Enrollment Button using the bright red from your screenshot */}
              <button className="bg-[#ef4444] hover:bg-[#dc2626] text-white px-10 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-black/20">
                Enroll Now
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default CTA;