"use client";
import React from 'react';

const Stats = () => {
  const statData = [
    { value: "100+", label: "Students" },
    { value: "05+", label: "Courses" },
    { value: "90%", label: "Placement Rate" },
  ];

  return (
    <section className="bg-background py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {statData.map((stat, index) => (
          <div key={index} className="card group">
            {/* Number Value */}
            <h2 className="text-5xl font-bold text-brand-primary mb-3 transition-transform duration-500 group-hover:scale-110">
              {stat.value}
            </h2>
            
            {/* Description Label */}
            <p className="text-foreground/50 text-sm font-medium tracking-wide group-hover:text-foreground/80 transition-colors">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;