"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Logo from "../../app/public/images/CYSECLOGO.jpg"

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
        <div className="flex items-center">
          <div className="w-10 h-10 relative">
            <Image
              src={Logo}  // place in /public
              alt="Cyber Institute Logo"
              fill
              sizes="40px"
              className="object-contain"
            />
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => {
            const isActive = isActiveRoute(link.href);

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`${isActive ? "text-brand-primary" : "text-foreground"
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
          <Link
            href="/contact#contact-form"
            className="hidden md:block border border-brand-primary hover:bg-brand-primary hover:text-white text-sm py-2.5 px-6 rounded-xl transition-all"
          >
            Enroll Now
          </Link>

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
        className={`md:hidden absolute top-full left-0 w-full bg-background border-b border-border overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
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
                className={`${isActive ? "text-brand-primary" : "text-foreground"
                  } text-lg font-medium`}
              >
                {link.name}
              </Link>
            );
          })}

          <Link
            href="/contact#contact-form"
            onClick={() => setIsOpen(false)}
            className="bg-brand-primary text-white w-full py-3 rounded-xl font-bold mt-2 text-center block"
          >
            Enroll Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;