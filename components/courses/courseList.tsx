"use client";
import Link from "next/link";
import React from 'react';
import { Shield, Network, Search, Code, Cloud, Target, Clock, Users, GraduationCap, Monitor, Settings, Lock, Terminal } from 'lucide-react';

const CourseList = () => {
  const courses = [
    {
      title: "Microsoft Intune Training",
      icon: <Monitor size={24} />,
      duration: "2 Months",
      students: "150+",
      level: "Intermediate",
      desc: "Master Microsoft Intune for MDM and MAM. Learn device enrollment, configuration profiles, compliance policies, and integration with Azure AD and Defender for Endpoint.",
      topics: ["Autopilot & Co-Management", "Compliance Policies", "Intune MAM", "Endpoint Security"],
    },
    {
      title: "Microsoft SCCM Course",
      icon: <Settings size={24} />,
      duration: "3 Months",
      students: "200+",
      level: "Intermediate to Advanced",
      desc: "Comprehensive training on System Center Configuration Manager. Focus on site installation, resource discovery, software deployment, and operating system deployment (OSD).",
      topics: ["Infrastructure Setup", "Client Management", "Software Updates", "OS Deployment"],
    },
    {
      title: "Next-Generation SOC Analyst Training with AI",
      icon: <Target size={24} />,
      duration: "3 Months",
      students: "300+",
      level: "Advanced",
      desc: "Advanced security operations training incorporating AI-driven threat detection and response strategies for the modern landscape.",
      topics: ["AI in Security", "Incident Response", "Threat Intelligence"],
    },
    {
      title: "Microsoft Azure Sentinel Training",
      icon: <Cloud size={24} />,
      duration: "2 Months",
      students: "180+",
      level: "Intermediate",
      desc: "Cloud-native SIEM training. Learn to collect data across your enterprise and use intelligent security analytics to face threats.",
      topics: ["SIEM/SOAR", "Log Analytics", "KQL Queries"],
    },
    {
      title: "Certified Ethical Hacking (CEH v13 AI)",
      icon: <Shield size={24} />,
      duration: "3 Months",
      students: "500+",
      level: "Beginner to Advanced",
      desc: "Master penetration testing and ethical hacking techniques using the latest AI-enhanced tools and methodologies.",
      topics: ["Network Scanning", "Vulnerability Analysis", "AI Hacking Tools"],
    },
    {
      title: "CompTIA Security+ Certification",
      icon: <Lock size={24} />,
      duration: "2 Months",
      students: "450+",
      level: "Beginner",
      desc: "Establish the core knowledge required of any cybersecurity role and provide a springboard to intermediate-level cybersecurity jobs.",
      topics: ["Threats & Attacks", "Architecture", "Cryptography"],
    },
    {
      title: "Cortex XSOAR Training",
      icon: <Terminal size={24} />,
      duration: "2 Months",
      students: "120+",
      level: "Advanced",
      desc: "Learn to automate security tier-1 tasks and manage incidents with Palo Alto's premier SOAR platform.",
      topics: ["Playbook Automation", "Incident Management", "Integrations"],
    },
    {
      title: "Splunk Admin + Enterprise Security",
      icon: <Search size={24} />,
      duration: "2.5 Months",
      students: "220+",
      level: "Intermediate",
      desc: "Master Splunk administration and the Enterprise Security (ES) app for data-driven security insights.",
      topics: ["Data Ingestion", "Dashboarding", "ES Framework"],
    },
    {
      title: "CrowdStrike EDR Training",
      icon: <Shield size={24} />,
      duration: "2 Months",
      students: "140+",
      level: "Intermediate",
      desc: "Focused training on Falcon Endpoint Detection and Response to stop breaches through unified visibility and control.",
      topics: ["Endpoint Protection", "Threat Hunting", "Real-time Response"],
    },
    {
      title: "Nessus Vulnerability Management",
      icon: <Search size={24} />,
      duration: "2 Months",
      students: "190+",
      level: "Intermediate",
      desc: "Professional training on the industry standard for vulnerability assessment and compliance management.",
      topics: ["Vulnerability Scanning", "Reporting", "Compliance"],
    },
    {
      title: "CISM Certification Training",
      icon: <GraduationCap size={24} />,
      duration: "3 Months",
      students: "110+",
      level: "Expert",
      desc: "Focused on management and governance, this course prepares you for the Certified Information Security Manager exam.",
      topics: ["Risk Management", "Governance", "Program Development"],
    },
    {
      title: "CISA Training & Certification",
      icon: <GraduationCap size={24} />,
      duration: "2 Months",
      students: "95+",
      level: "Expert",
      desc: "The standard of achievement for those who audit, control, monitor, and assess information technology.",
      topics: ["IT Auditing", "Governance", "Asset Protection"],
    },
    {
      title: "Cloud Security Professional (CCSP)",
      icon: <Cloud size={24} />,
      duration: "2.5 Months",
      students: "130+",
      level: "Advanced",
      desc: "Learn the high-level skills needed to design, manage, and secure data, applications, and infrastructure in the cloud.",
      topics: ["Cloud Architecture", "Data Security", "Operations"],
    },
    {
      title: "CISSP Online Training",
      icon: <Shield size={24} />,
      duration: "3 Months",
      students: "210+",
      level: "Expert",
      desc: "Comprehensive training for the most globally recognized certification in the information security market.",
      topics: ["Security Engineering", "Communication", "IAM"],
    },
    {
      title: "IBM QRadar Training",
      icon: <Target size={24} />,
      duration: "2 Months",
      students: "100+",
      level: "Intermediate",
      desc: "In-depth training on IBM QRadar SIEM to detect and prioritize threats across the enterprise.",
      topics: ["Log Management", "Anomaly Detection", "Rules Engine"],
    }
  ];

  return (
    <section className="bg-[#1a1a1a] py-24 px-6" id='courseList'>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Our Professional Training Courses
          </h2>
          <p className="text-foreground/50 font-medium max-w-2xl mx-auto">
            Industry-aligned curriculum designed to take you from fundamentals to advanced technical expertise.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="card !items-start !text-left !p-8 group flex flex-col h-full">
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

              {/* Footer: Button Only (Price Removed) */}
              <div className="mt-auto w-full pt-6 border-t border-white/5 flex items-center justify-end">
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