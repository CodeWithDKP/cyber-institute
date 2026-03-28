"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Courses", href: "/courses" },
    { name: "Contact", href: "/contact" },
  ];

  // Helper for active route
  const isActiveRoute = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav className="w-full px-6 py-4 bg-background sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="bg-brand-primary w-10 h-10 rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-xl">C</span>
          </div>
          <span className="text-foreground font-bold text-xl tracking-tight">
            Cyber Institute
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => {
            const isActive = isActiveRoute(link.href);

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`${
                  isActive ? "text-brand-primary" : "text-foreground"
                } text-sm font-medium relative py-1 hover:text-brand-primary transition-colors`}
              >
                {link.name}

                {isActive && (
                  <span className="absolute bottom-[-2px] left-0 w-full h-[2px] bg-brand-primary"></span>
                )}
              </Link>
            );
          })}
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <button className="hidden md:block border border-brand-primary hover:bg-brand-primary hover:text-white text-sm py-2.5 px-6 rounded-xl transition-all">
            Enroll Now
          </button>

          {/* Mobile Toggle */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-foreground p-1"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-background border-b border-border overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col p-6 space-y-4">
          {navLinks.map((link) => {
            const isActive = isActiveRoute(link.href);

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`${
                  isActive ? "text-brand-primary" : "text-foreground"
                } text-lg font-medium`}
              >
                {link.name}
              </Link>
            );
          })}

          <button className="bg-brand-primary text-white w-full py-3 rounded-xl font-bold mt-2">
            Enroll Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;