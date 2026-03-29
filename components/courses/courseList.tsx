"use client";
import Link from "next/link";
import React from 'react';
import { Shield, Network, Search, Code, Cloud, Target, Clock, Users, GraduationCap } from 'lucide-react';

const CourseList = () => {
  const courses = [
    {
      title: "Ethical Hacking",
      icon: <Shield size={24} />,
      duration: "3 Months",
      students: "500+",
      level: "Beginner to Advanced",
      desc: "Master penetration testing, vulnerability assessment, and ethical hacking techniques. Learn to identify and exploit security weaknesses like a professional hacker.",
      topics: ["Network Scanning", "Web Application Testing", "Social Engineering"],
      price: "₹45,000"
    },
    {
      title: "Network Security",
      icon: <Network size={24} />,
      duration: "2 Months",
      students: "350+",
      level: "Intermediate",
      desc: "Learn to design, implement, and manage secure network infrastructures. Master firewalls, VPNs, IDS/IPS systems, and network defense strategies.",
      topics: ["Firewall Configuration", "VPN Setup", "Network Monitoring"],
      price: "₹35,000"
    },
    {
      title: "Cyber Forensics",
      icon: <Search size={24} />,
      duration: "3 Months",
      students: "200+",
      level: "Advanced",
      desc: "Investigate and analyze cyber crimes effectively. Learn digital evidence collection, analysis tools, and forensic investigation procedures.",
      topics: ["Digital Evidence Collection", "Memory Forensics", "Network Forensics"],
      price: "₹50,000"
    },
    {
      title: "Web Security",
      icon: <Code size={24} />,
      duration: "2 Months",
      students: "400+",
      level: "Intermediate",
      desc: "Secure web applications from common vulnerabilities. Master OWASP Top 10, secure coding practices, and web application firewall configuration.",
      topics: ["OWASP Top 10", "SQL Injection", "XSS Attacks"],
      price: "₹30,000"
    },
    {
      title: "Cloud Security",
      icon: <Cloud size={24} />,
      duration: "2.5 Months",
      students: "250+",
      level: "Intermediate to Advanced",
      desc: "Protect cloud infrastructure on AWS, Azure, and GCP. Learn cloud security architecture, compliance, and best practices.",
      topics: ["AWS Security", "Azure Security", "Cloud Compliance"],
      price: "₹40,000"
    },
    {
      title: "SOC Operations",
      icon: <Target size={24} />,
      duration: "3 Months",
      students: "300+",
      level: "Intermediate",
      desc: "Learn to operate and manage Security Operations Centers. Master SIEM tools, threat hunting, and incident response procedures.",
      topics: ["SIEM Tools", "Log Analysis", "Threat Hunting"],
      price: "₹42,000"
    }
  ];

  return (
    <section className="bg-[#1a1a1a] py-24 px-6" id='courseList'>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            All Courses
          </h2>
          <p className="text-foreground/50 font-medium max-w-2xl mx-auto">
            Choose the perfect course to start your cybersecurity career
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="card !items-start !text-left !p-8 group">
              {/* Course Icon Box */}
              <div className="w-14 h-14 rounded-xl bg-brand-primary flex items-center justify-center text-white mb-6 shadow-lg shadow-brand-primary/20">
                {course.icon}
              </div>

              {/* Title & Meta */}
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{course.title}</h3>

              <div className="flex flex-wrap gap-4 mb-6 text-[13px] text-foreground/40 font-medium">
                <div className="flex items-center gap-1.5 text-brand-primary/80">
                  <Clock size={14} /> {course.duration}
                </div>
                <div className="flex items-center gap-1.5">
                  <Users size={14} /> {course.students}
                </div>
                <div className="flex items-center gap-1.5">
                  <GraduationCap size={14} /> {course.level}
                </div>
              </div>

              {/* Description */}
              <p className="text-foreground/50 text-sm leading-relaxed mb-6">
                {course.desc}
              </p>

              {/* Key Topics Tags */}
              <div className="space-y-3 mb-10 w-full">
                <p className="text-xs font-bold text-white uppercase tracking-wider">Key Topics:</p>
                <div className="flex flex-wrap gap-2">
                  {course.topics.map((topic, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] text-foreground/50">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer: Price & Button */}
              <div className="mt-auto w-full pt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-2xl font-bold text-brand-primary">
                  {course.price}
                </span>

                <Link href="/contact#contact-form">
                  <button className="bg-brand-primary hover:bg-brand-secondary text-white text-sm font-bold px-6 py-2.5 rounded-lg transition-colors">
                    Enroll Now
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseList;