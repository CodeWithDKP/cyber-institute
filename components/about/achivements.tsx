"use client";

import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';

// Separate Counter Component for logic
const Counter = ({ value, duration = 2 }: { value: string; duration?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Trigger once when in view
  
  // Clean the string (e.g., "1000+" -> 1000)
  const numericValue = parseInt(value.replace(/[^0-9]/g, ""), 10);
  const suffix = value.replace(/[0-9]/g, "");

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 100,
  });

  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(numericValue);
    }
  }, [isInView, numericValue, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplayValue(Math.floor(latest));
    });
  }, [springValue]);

  return (
    <span ref={ref}>
      {displayValue}{suffix}
    </span>
  );
};

const Achievements = () => {
  const stats = [
    { value: "1000+", label: "Students Trained" },
    { value: "100+", label: "Successful Placements" },
    { value: "15+", label: "Years of Excellence" },
    { value: "50+", label: "Industry Partners" },
  ];

  return (
    <section className="bg-[#1a1a1a] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Our Achievements
          </h2>
          <p className="text-foreground/50 font-medium">
            Numbers that speak for themselves
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="card !py-12 !px-6 !cursor-default !transform-none !transition-none hover:!shadow-none hover:!border-white/5 hover:!after:w-0"
            >
              <h3 className="text-5xl font-extrabold text-brand-primary mb-4 tracking-tight">
                <Counter value={stat.value} />
              </h3>
              <p className="text-foreground/60 text-sm font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;