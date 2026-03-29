"use client";

import React from 'react';
import { Send, MapPin, PhoneCall } from 'lucide-react';

const ContactForm = () => {
  return (
    <section className="bg-[#1a1a1c] py-12 px-6" id='contact-form'>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* LEFT: Contact Form (Spans 2 columns on large screens) */}
        <div className="lg:col-span-2 card !items-start !text-left !p-10 !cursor-default !transform-none !transition-none hover:!shadow-none hover:!border-white/5 hover:!after:w-0">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">Send us a Message</h2>
            <p className="text-foreground/50 text-sm">Fill out the form below and we'll get back to you shortly.</p>
          </div>

          <form className="w-full space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-white">Full Name *</label>
                <input type="text" placeholder="Enter your full name" className="w-full bg-[#1a1a1c] border border-white/5 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-brand-primary transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-white">Email Address *</label>
                <input type="email" placeholder="Enter your email" className="w-full bg-[#1a1a1c] border border-white/5 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-brand-primary transition-colors" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-white">Phone Number *</label>
                <input type="text" placeholder="Enter your phone number" className="w-full bg-[#1a1a1c] border border-white/5 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-brand-primary transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-white">Interested Course</label>
                <select className="w-full bg-[#1a1a1c] border border-white/5 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-brand-primary appearance-none cursor-pointer">
                  <option>Select a course</option>
                  <option>Ethical Hacking</option>
                  <option>Network Security</option>
                  <option>Cyber Forensics</option>
                  <option>Web Security</option>
                  <option>Cloud Security</option>
                  <option>SOC Analyst</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-white">Message *</label>
              <textarea rows={5} placeholder="Tell us about your requirements" className="w-full bg-[#1a1a1c] border border-white/5 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-brand-primary transition-colors resize-none"></textarea>
            </div>

            <button type="button" className="w-full bg-[#e3342f] hover:bg-brand-primary text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors">
              Send Message <Send size={18} />
            </button>
          </form>
        </div>

        {/* RIGHT: Sidebars */}
        <div className="space-y-8">
          {/* Map Preview Placeholder */}
          <div className="card !p-0 overflow-hidden !aspect-square md:!aspect-video lg:!aspect-auto lg:h-64 !cursor-default !transform-none !transition-none hover:!shadow-none hover:!after:w-0">
            <div className="w-full h-full bg-[#400808] flex flex-col items-center justify-center p-8 text-center space-y-4">
              <MapPin size={40} className="text-brand-primary" />
              <h3 className="text-white font-bold text-xl">Visit Our Campus</h3>
              <p className="text-white/60 text-sm">Hyderbad, India</p>
            </div>
          </div>

          {/* Office Hours */}
          <div className="card !items-start !text-left !p-8 !cursor-default !transform-none !transition-none hover:!shadow-none hover:!after:w-0">
            <h3 className="text-xl font-bold text-white mb-6">Office Hours</h3>
            <div className="w-full space-y-4 text-sm">
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-foreground/50">Monday - Friday</span>
                <span className="text-white font-bold">9:00 AM - 7:00 PM</span>
              </div>
              <div className="flex justify-between border-b border-white/5 pb-2">
                <span className="text-foreground/50">Saturday</span>
                <span className="text-white font-bold">10:00 AM - 5:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-foreground/50">Sunday</span>
                <span className="text-brand-primary font-bold">Closed</span>
              </div>
            </div>
          </div>

          {/* Quick Response */}
          <div className="card !items-start !p-8 bg-gradient-to-br from-[#400808] to-[#121214] !cursor-default !transform-none !transition-none hover:!shadow-none hover:!after:w-0">
            <h3 className="text-white font-bold text-lg mb-2">Quick Response</h3>
            <p className="text-white/60 text-xs leading-relaxed mb-6">
              We typically respond within 24 hours. For urgent inquiries, please call us directly.
            </p>
            <a href="tel:+919573885567">
              <button className="bg-[#e3342f] text-white px-6 py-2 rounded-lg text-sm font-bold flex items-center gap-2">
                Call Now
              </button>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactForm;