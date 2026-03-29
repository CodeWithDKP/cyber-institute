"use client";

import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactCards = () => {
  const contactInfo = [
    {
      title: "Phone",
      detail: "+91 9876543210",
      icon: <Phone size={24} className="text-brand-primary" />,
    },
    {
      title: "Email",
      detail: "info@cyberinstitute.com",
      icon: <Mail size={24} className="text-brand-primary" />,
    },
    {
      title: "Address",
      detail: "Mumbai, Maharashtra, India",
      icon: <MapPin size={24} className="text-brand-primary" />,
    },
  ];

  return (
    <section className="bg-background py-16 px-6" id='contact-card'>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {contactInfo.map((info, index) => (
          <div 
            key={index} 
            /* !transform-none & !transition-none: removes the hover lift
               hover:!after:w-0: removes the red bottom line
               hover:!shadow-none: removes the red glow
               !cursor-default: removes the pointer finger
            */
            className="card !p-12 !cursor-default !transform-none !transition-none hover:!shadow-none hover:!border-white/5 hover:!after:w-0"
          >
            {/* Icon Box with dark maroon tint */}
            <div className="w-16 h-16 rounded-xl bg-brand-primary/10 flex items-center justify-center mb-6 border border-brand-primary/20">
              {info.icon}
            </div>

            {/* Text Content */}
            <h3 className="text-xl font-bold text-white mb-3">
              {info.title}
            </h3>
            <p className="text-foreground/60 text-sm font-medium">
              {info.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactCards;