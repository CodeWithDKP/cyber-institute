"use client";

import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-b from-background to-[#1a0101] pt-20 pb-10 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Top Section: Links & Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-brand-primary w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white text-xl">
                C
              </div>
              <span className="text-white font-bold text-xl tracking-tight">
                Cyber Institute
              </span>
            </div>
            <p className="text-foreground/50 text-sm leading-relaxed max-w-xs">
              We provide advanced cybersecurity training with hands-on labs and industry expert guidance.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-lg">Quick Links</h4>
            <ul className="space-y-4 text-sm text-foreground/50">
              <li><Link href="/" className="hover:text-brand-primary transition-colors">Home</Link></li>
             
              <li><Link href="/about" className="hover:text-brand-primary transition-colors">About</Link></li>
               <li><Link href="/courses" className="hover:text-brand-primary transition-colors">Courses</Link></li>
              <li><Link href="/contact" className="hover:text-brand-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Courses */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-lg">Courses</h4>
            <ul className="space-y-4 text-sm text-foreground/50">
              <li><Link href="/courses#courseList" className="hover:text-brand-primary transition-colors">Ethical Hacking</Link></li>
              <li><Link href="/courses#courseList" className="hover:text-brand-primary transition-colors">Network Security</Link></li>
              <li><Link href="/courses#courseList" className="hover:text-brand-primary transition-colors">Cloud Security</Link></li>
              <li><Link href="/courses#courseList" className="hover:text-brand-primary transition-colors">Cyber Forensics</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-lg">Contact Info</h4>
            <ul className="space-y-4 text-sm text-foreground/50">
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-brand-primary" />
                <span>+91 9959043515</span>
                <span>+91 8332881713</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-brand-primary" />
                <span>cysectrainings@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-brand-primary" />
                <span>B block Flat no: 402 , suja elysian Madhura Nagar, Nizampet, Hyderabad, Telangana 5000 HYDERABAD, TELANGANA 500090 India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Copyright & Socials */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-foreground/30 text-sm">
            © 2026 Cyber Institute. All rights reserved.
          </p>
          
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;