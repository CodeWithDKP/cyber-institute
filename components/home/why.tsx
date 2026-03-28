"use client";
import React from 'react';
import { Award } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Real-Time Projects",
      description: "Work on actual industry projects to gain practical experience",
    },
    {
      title: "Industry Experts",
      description: "Learn from certified professionals with 10+ years of experience",
    },
    {
      title: "Certification Support",
      description: "Preparation for CEH, CISSP, and other top certifications",
    },
    {
      title: "Placement Assistance",
      description: "100% placement support with interview preparation",
    },
  ];

  return (
    <section className="bg-background py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Why Choose Us
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            We offer comprehensive training with real-world applications.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item, index) => (
            <div 
              key={index} 
              className={`
                card 
                !items-start !text-left !p-8 
                !cursor-default !transform-none !transition-none 
                /* Force-disable all global hover styles */
                hover:!shadow-none 
                hover:!border-border 
                hover:!bg-[#121214] 
                hover:!after:w-0
              `}
            >
              {/* Icon Box: Static Dark Maroon Tint */}
              <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center mb-6 border border-brand-primary/20">
                <Award size={24} className="text-brand-primary" />
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-bold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-foreground/50 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;