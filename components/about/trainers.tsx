"use client";

import React from 'react';

const Trainers = () => {
  const trainers = [
    {
      name: "Sunil Kumar",
      experience: "20 years experience",
      bio: "A veteran in cybersecurity and ethical hacking, Sunil has led security audits for Fortune 500 companies and pioneered advanced threat detection frameworks.",
    },
    {
      name: "Vinay",
      experience: "20 years experience",
      bio: "Vinay specializes in enterprise-grade network architecture and cloud defense. He has mentored over 5,000 students in mastering complex infrastructure security.",
    },
  ];

  return (
    <section className="bg-background py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white tracking-tight border-l-4 border-primary pl-4">
            Meet Our Expert Trainers
          </h2>
        </div>

        {/* Horizontal Text-Only List */}
        <div className="flex flex-col gap-8">
          {trainers.map((trainer, index) => (
            <div 
              key={index} 
              className="p-8 border border-border/50 rounded-xl bg-card/30 hover:border-primary/30 transition-colors group"
            >
              {/* Content Section */}
              <div className="space-y-3">
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
                  <h3 className="text-2xl font-bold text-white uppercase tracking-wide group-hover:text-primary transition-colors">
                    {trainer.name}
                  </h3>
                  <span className="text-primary font-semibold text-sm uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full">
                    {trainer.experience}
                  </span>
                </div>
                
                {/* Separator line */}
                <div className="w-16 h-px bg-border group-hover:w-full group-hover:bg-primary/30 transition-all duration-500"></div>
                
                <p className="text-foreground/70 leading-relaxed max-w-none pt-2">
                  {trainer.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;