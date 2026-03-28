"use client";
import React from 'react';
import { Users, Code2, Briefcase } from 'lucide-react';

const About = () => {
  const features = [
    {
      title: "Expert Trainers",
      description: "Learn from industry professionals with years of real-world experience",
      icon: <Users size={24} className="text-brand-primary" />,
    },
    {
      title: "Hands-on Labs",
      description: "Practice on real-world scenarios in our state-of-the-art lab environment",
      icon: <Code2 size={24} className="text-brand-primary" />,
    },
    {
      title: "Career Support",
      description: "Get placement assistance and career guidance throughout your journey",
      icon: <Briefcase size={24} className="text-brand-primary" />,
    },
  ];

  return (
    <section className="bg-background py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            About Our Institute
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto leading-relaxed">
            We provide industry-focused cybersecurity training with hands-on experience.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div 
              key={index} 
              className="card !items-start !text-left group"
            >
              {/* Icon Box */}
              <div className="w-14 h-14 rounded-xl bg-brand-primary/10 flex items-center justify-center mb-6 border border-brand-primary/20 group-hover:bg-brand-primary/20 transition-colors">
                {item.icon}
              </div>

              {/* Text Content */}
              <h3 className="text-xl font-bold text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-foreground/50 text-sm leading-relaxed leading-6">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;