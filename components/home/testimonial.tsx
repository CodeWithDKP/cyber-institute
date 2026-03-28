"use client";
import React from 'react';
import Image from 'next/image';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      name: "Rahul Kumar",
      role: "Student",
      image: "/avatars/rahul.jpg", // Replace with your actual paths
      text: "Great training and placement support. Highly recommended for aspiring cybersecurity professionals."
    },
    {
      name: "Priya Sharma",
      role: "Graduate",
      image: "/avatars/priya.jpg",
      text: "The hands-on labs and expert guidance helped me land my dream job in cybersecurity."
    },
    {
      name: "Amit Patel",
      role: "Working Professional",
      image: "/avatars/amit.jpg",
      text: "Excellent course structure and practical approach. The instructors are very knowledgeable."
    }
  ];

  return (
    <section className="bg-[#1a1a1a] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            What Our Students Say
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto font-medium">
            Read success stories from our graduates.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div 
              key={index} 
              /* !transform-none: stops the float up 
                 !transition-none: stops any smooth color changes
                 hover:!after:w-0: stops the red bottom line from growing
                 hover:!shadow-none: stops the red glow 
              */
              className="card !items-start !text-left !p-10 !transform-none !transition-none !cursor-default hover:!shadow-none hover:!border-border hover:!after:w-0"
            >
              {/* Quote Icon - Rotated to match design */}
              <Quote size={32} className="text-brand-primary mb-6 rotate-180 opacity-80" />

              {/* Review Text */}
              <p className="text-foreground/80 italic leading-relaxed mb-10 text-[15px]">
                "{review.text}"
              </p>

              {/* Student Info Row */}
              <div className="flex items-center gap-4 mt-auto">
                
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-foreground">{review.name}</span>
                  <span className="text-[12px] text-foreground/50 font-medium">{review.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;