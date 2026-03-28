"use client";

import React from 'react';

interface PageHeroProps {
  title: string;
  highlightText?: string;
  description: string;
}

const PageHero = ({ title, highlightText, description }: PageHeroProps) => {
  return (
    <section className="relative w-full py-20 md:py-32 overflow-hidden bg-background border-b border-white/5">
      {/* 1. Grid Background Layer */}
      <div 
        className="absolute inset-0 opacity-50 pointer-events-none" 
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff10 1px, transparent 1px), 
                            linear-gradient(to bottom, #ffffff10 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* 2. Red Radial Glow Layer */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--brand-primary)_0%,_transparent_70%)] opacity-10 pointer-events-none" />

      {/* 3. Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
          {title} <span className="text-brand-primary">{highlightText}</span>
        </h1>
        
        <p className="text-foreground/60 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  );
};

export default PageHero;