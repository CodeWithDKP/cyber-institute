"use client";

import React from 'react';
import { Target, ShieldCheck, Users } from 'lucide-react';

const Mission = () => {
  const data = [
    {
      title: "Our Mission",
      description: "To build skilled cybersecurity professionals who can protect organizations from evolving cyber threats.",
      icon: <Target size={28} className="text-brand-primary" />,
    },
    {
      title: "Our Vision",
      description: "To become a leading cyber training institute recognized globally for excellence in cybersecurity education.",
      icon: <ShieldCheck size={28} className="text-brand-primary" />,
    },
    {
      title: "Our Approach",
      description: "Hands-on, practical training combined with theoretical knowledge to ensure complete understanding.",
      icon: <Users size={28} className="text-brand-primary" />,
    },
  ];

  return (
    <section className="bg-background py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {data.map((item, index) => (
          <div 
            key={index} 
            /* Overriding global card styles to be static and left-aligned */
            className="card !items-start !text-left !p-10 !transform-none !transition-none !cursor-default hover:!shadow-none hover:!border-white/5 hover:!after:w-0"
          >
            {/* Icon Box with the dark maroon tint from screenshot */}
            <div className="w-14 h-14 rounded-xl bg-brand-primary/10 flex items-center justify-center mb-8 border border-brand-primary/20">
              {item.icon}
            </div>

            {/* Content */}
            <h3 className="text-2xl font-bold text-white mb-4">
              {item.title}
            </h3>
            <p className="text-foreground/50 leading-relaxed text-[15px]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Mission;