"use client";

import React from 'react';
import Image from 'next/image';

const WhoWeAre = () => {
  return (
    <section className="bg-background py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 md:gap-20">
        
        {/* Left Side: Text Content */}
        <div className="flex-1 space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Who We Are
          </h2>
          
          <div className="space-y-6 text-foreground/70 leading-relaxed text-base md:text-lg">
            <p>
              Cyber Institute is a premier cybersecurity training organization dedicated to building 
              skilled professionals who can tackle modern cyber threats. Established with a vision 
              to create a safer digital world, we have trained thousands of students and 
              professionals in various domains of cybersecurity.
            </p>
            
            <p>
              Our comprehensive training programs are designed by industry experts and 
              delivered through a combination of theoretical knowledge and hands-on practical 
              sessions. We focus on real-world scenarios to ensure our students are job-ready 
              from day one.
            </p>
            
            <p>
              With state-of-the-art labs, experienced instructors, and strong industry partnerships, 
              we provide an unmatched learning experience that prepares students for successful 
              careers in cybersecurity.
            </p>
          </div>
        </div>

        {/* Right Side: Image with Styled Border */}
        <div className="flex-1 w-full">
          <div className="relative aspect-[4/3] rounded-[2rem] overflow-hidden border border-white/10 group">
            {/* The Image (using a placeholder from Unsplash for now) */}
            <Image 
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1000" 
              alt="Cybersecurity Professionals" 
              fill
              sizes='160px'
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Subtle Gradient Overlay to match the Cyber theme */}
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhoWeAre;