"use client";
import React from 'react';
import Link from "next/link";
import Image from 'next/image';
import { ShieldCheck, Users, Trophy, Lock, ArrowRight } from 'lucide-react';
import Cyber from '../../app/public/images/cyber.jpg';

const Hero = () => {
    return (
        <section className="relative w-full overflow-hidden bg-background pt-12 md:pt-16 pb-20 md:pb-24 px-6">
            {/* Background Glow Effect */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-brand-primary/10 blur-[80px] md:blur-[140px] rounded-full -z-10" />

            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                {/* Left Content */}
                <div className="space-y-6 md:space-y-8 text-center lg:text-left flex flex-col items-center lg:items-start">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-primary bg-brand-primary/5 text-[12px] md:text-[13px] font-medium text-foreground">
                        <Lock size={14} className="text-foreground" />
                        Premium Cybersecurity Training
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-foreground">
                        Build Your <br className="hidden md:block" />
                        Career in <br className="hidden md:block" />
                        <span className="text-brand-primary">Cyber Security</span>
                    </h1>

                    {/* Subtext */}
                    <p className="text-foreground/70 text-base md:text-lg max-w-lg leading-relaxed">
                        Master ethical hacking, network security, and real-world cyber
                        defense skills with industry experts and hands-on training.
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        {/* Explore Courses */}
                        <Link
                            href="/courses"
                            className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-brand-primary bg-brand-primary/10 hover:bg-brand-primary text-foreground font-semibold transition-all backdrop-blur-sm w-full sm:w-auto"
                        >
                            Explore Courses
                            <ArrowRight size={18} />
                        </Link>

                        {/* Contact Us */}
                        <Link
                            href="/contact#contact-form"
                            className="px-8 py-4 rounded-xl border border-foreground/20 hover:border-brand-primary text-foreground font-semibold transition-all bg-transparent backdrop-blur-sm w-full sm:w-auto text-center"
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>

                {/* Right Content: Image & Floating Cards */}
                <div className="relative flex justify-center mt-8 lg:mt-0">
                    {/* Main Image Container */}
                    <div className="relative rounded-[1.5rem] md:rounded-[2.5rem] p-1.5 md:p-2 border border-border/50 bg-card/30 backdrop-blur-sm overflow-hidden shadow-2xl">
                        <Image
                            src={Cyber}
                            alt="Cyber Security Lab"
                            className="rounded-[1.2rem] md:rounded-[2rem] w-full max-w-[550px] aspect-[3/2] object-cover shadow-inner"
                        />
                    </div>

                    {/* Floating Card 1: Certified Training - Hidden on mobile, shown from md up */}
                    <div
                        className="hidden md:flex absolute -top-4 -right-4 md:-right-8 bg-brand-primary border border-border p-4 rounded-2xl items-center gap-4 shadow-2xl"
                        style={{ animation: 'float 4s ease-in-out infinite' }}
                    >
                        <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center text-white">
                            <ShieldCheck size={22} />
                        </div>
                        <div className="pr-2">
                            <p className="text-sm font-bold text-white">Certified Training</p>
                            <p className="text-[10px] text-white/70 font-medium">Industry Standards</p>
                        </div>
                    </div>

                    {/* Floating Card 2: Success Rate - Hidden on mobile, shown from md up */}
                    <div
                        className="hidden md:flex absolute -bottom-6 -left-4 md:-left-8 bg-brand-primary border border-border p-4 rounded-2xl items-center gap-4 shadow-2xl"
                        style={{
                            animation: 'float 4s ease-in-out infinite',
                            animationDelay: '2s'
                        }}
                    >
                        <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center text-white">
                            <Trophy size={22} />
                        </div>
                        <div className="pr-2">
                            <p className="text-sm font-bold text-white">90% Success Rate</p>
                            <p className="text-[10px] text-white/70 font-medium">Placement Record</p>
                        </div>
                    </div>

                    <style jsx global>{`
                        @keyframes float {
                            0%, 100% { transform: translateY(0px); }
                            50% { transform: translateY(-15px); }
                        }
                    `}</style>
                </div>
            </div>
        </section>
    );
};

export default Hero;