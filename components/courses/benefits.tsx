"use client";

import React from 'react';
import { Check } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      title: "Live Instructor-Led Sessions",
      description: "Interactive classes with industry experts",
    },
    {
      title: "Hands-on Lab Access",
      description: "24/7 access to virtual lab environment",
    },
    {
      title: "Course Completion Certificate",
      description: "Industry-recognized certification",
    },
    {
      title: "Lifetime Access to Materials",
      description: "All course content and updates",
    },
    {
      title: "Placement Assistance",
      description: "Resume building and interview prep",
    },
    {
      title: "Community Access",
      description: "Join our alumni network",
    },
  ];

  return (
    <section className="bg-background py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white tracking-tight">
            What You Get With Every Course
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              /* Overriding global .card styles to be static and left-aligned */
              className="card !flex-row !items-start !justify-start !p-8 !cursor-default !transform-none !transition-none hover:!shadow-none hover:!border-border hover:!after:w-0"
            >
              {/* Checkmark Icon */}
              <div className="mr-4 mt-1">
                <Check size={20} className="text-white" strokeWidth={3} />
              </div>

              {/* Text Content */}
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-white leading-tight">
                  {benefit.title}
                </h3>
                <p className="text-foreground/50 text-sm">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;