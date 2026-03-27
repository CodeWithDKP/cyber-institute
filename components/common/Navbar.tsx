"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // Import Lucide icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', href: '/', active: true },
    { name: 'About', href: '/about' },
    { name: 'Courses', href: '/courses' },
    { name: 'Certifications', href: '/certifications' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="w-full px-6 py-4 bg-background  sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left Section: Logo */}
        <div className="flex items-center gap-3">
          <div className="bg-brand-primary w-10 h-10 rounded-xl flex items-center justify-center transition-colors">
            <span className="text-white font-bold text-xl">C</span>
          </div>
          <span className="text-foreground font-bold text-xl tracking-tight">
            Cyber Institute
          </span>
        </div>

        {/* Center Section: Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href} 
              className={`${
                link.active ? 'text-brand-primary' : 'text-foreground'
              } text-sm font-medium relative py-1 hover:text-brand-primary transition-colors`}
            >
              {link.name}
              {link.active && (
                <span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-brand-primary"></span>
              )}
            </Link>
          ))}
        </div>

        {/* Right Section: Desktop Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <button className="hidden md:block border border-brand-primary hover:bg-brand-primary hover:text-white text-sm py-2.5 px-6 rounded-xl transition-all">
            Enroll Now
          </button>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-foreground p-1"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`
        md:hidden absolute top-full left-0 w-full bg-background border-b border-border overflow-hidden transition-all duration-300 ease-in-out
        ${isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'}
      `}>
        <div className="flex flex-col p-6 space-y-4">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`${
                link.active ? 'text-brand-primary' : 'text-foreground'
              } text-lg font-medium`}
            >
              {link.name}
            </Link>
          ))}
          <button className="bg-brand-primary text-white w-full py-3 rounded-xl font-bold mt-2">
            Enroll Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;