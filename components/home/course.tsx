"use client";
import React from 'react';
import { Shield, Lock, Target, Code, Clock, BarChart, MoveRight } from 'lucide-react';
import Link from 'next/link';

const Courses = () => {
  const courseData = [
    {
      title: "Ethical Hacking",
      duration: "3 Months",
      level: "Beginner to Advanced",
      description: "Learn penetration testing and security fundamentals.",
      icon: <Shield size={24} className="text-white" />,
    },
    {
      title: "Network Security",
      duration: "2 Months",
      level: "Intermediate",
      description: "Master network defense and security protocols.",
      icon: <Lock size={24} className="text-white" />,
    },
    {
      title: "Cyber Forensics",
      duration: "3 Months",
      level: "Advanced",
      description: "Investigate and analyze cyber crimes effectively.",
      icon: <Target size={24} className="text-white" />,
    },
    {
      title: "Web Security",
      duration: "2 Months",
      level: "Intermediate",
      description: "Secure web applications from common vulnerabilities.",
      icon: <Code size={24} className="text-white" />,
    },
  ];

  return (
    <section className="bg-[#1a1a1a] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Featured Courses
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Choose from our comprehensive range of cybersecurity training programs.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {courseData.map((course, index) => (
            <div key={index} className="card !items-start !text-left !p-8 group">
              {/* Icon Box */}
              <div className="w-12 h-12 rounded-xl bg-brand-primary flex items-center justify-center mb-6 shadow-lg shadow-brand-primary/20">
                {course.icon}
              </div>

              {/* Course Title */}
              <h3 className="text-xl font-bold text-foreground mb-4">
                {course.title}
              </h3>

              {/* Metadata Row (Duration & Level) */}
              <div className="flex flex-wrap items-center gap-y-2 gap-x-4 mb-6">
                <div className="flex items-center gap-1.5 text-foreground/50 text-[11px] font-medium">
                  <Clock size={14} className="text-brand-primary" />
                  {course.duration}
                </div>
                <div className="w-1 h-1 rounded-full bg-foreground/20 hidden sm:block" />
                <div className="flex items-center gap-1.5 text-foreground/50 text-[11px] font-medium">
                  <BarChart size={14} className="text-brand-primary" />
                  {course.level}
                </div>
              </div>

              {/* Description */}
              <p className="text-foreground/50 text-sm leading-relaxed mb-8 flex-grow">
                {course.description}
              </p>

              {/* View Details Link */}
              <Link 
                href="#" 
                className="inline-flex items-center gap-2 text-brand-primary text-sm font-bold hover:gap-3 transition-all"
              >
                View Details
                <MoveRight size={16} />
              </Link>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center">
          <button className="btn-primary !px-10 !py-4 text-base shadow-xl shadow-brand-primary/20 hover:scale-105 transition-transform">
            View All Courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default Courses;