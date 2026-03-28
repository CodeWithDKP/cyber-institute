"use client";

import React from 'react';
import { Briefcase, TrendingUp, Award } from 'lucide-react';

const Different = () => {
  const items = [
    {
      title: "Industry-Aligned Curriculum",
      description: "Our courses are constantly updated to match current industry requirements and emerging cyber threats.",
      icon: <Briefcase size={24} className="text-brand-primary" />,
    },
    {
      title: "Practical Focus",
      description: "70% hands-on training in live environments to ensure you're job-ready from day one.",
      icon: <TrendingUp size={24} className="text-brand-primary" />,
    },
    {
      title: "Certification Support",
      description: "Dedicated preparation support for globally recognized certifications like CEH, CISSP, and CompTIA Security+.",
      icon: <Award size={24} className="text-brand-primary" />,
    },
  ];

  return (
    <section className="bg-[#1a1a1a] py-20 px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            What Makes Us Different
          </h2>
        </div>

        {/* Vertical Items */}
        <div className="space-y-6">
          {items.map((item, index) => (
            <div 
              key={index} 
              /* Overriding global card styles to be horizontal and static */
              className="card !flex-row !items-center !justify-start !p-8 !cursor-default !transform-none !transition-none hover:!shadow-none hover:!border-white/5 hover:!after:w-0"
            >
              {/* Icon Container with dark maroon tint */}
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-brand-primary/10 flex items-center justify-center border border-brand-primary/20 mr-6">
                {item.icon}
              </div>

              {/* Text Content */}
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white">
                  {item.title}
                </h3>
                <p className="text-foreground/50 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Different;