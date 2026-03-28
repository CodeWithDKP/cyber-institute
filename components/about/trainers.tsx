    "use client";

    import React from 'react';
    import Image from 'next/image';

    const Trainers = () => {
    const trainers = [
        {
        name: "Dr. Rajesh Sharma",
        role: "Chief Instructor - Ethical Hacking",
        certs: "CEH, OSCP",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
        },
        {
        name: "Priya Desai",
        role: "Senior Instructor - Network Security",
        certs: "CISSP, CCNP Security",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
        },
        {
        name: "Amit Verma",
        role: "Lead Instructor - Cloud Security",
        certs: "AWS Security, Azure Security",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
        },
    ];

    return (
        <section className="bg-background py-24 px-6">
        <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                Meet Our Expert Trainers
            </h2>
            <p className="text-foreground/50 font-medium">
                Learn from industry professionals with years of experience
            </p>
            </div>

            {/* Trainers Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trainers.map((trainer, index) => (
                <div key={index} className="card group !p-12 !cursor-default !transform-none !transition-none hover:!shadow-none hover:!border-white/5 hover:!after:w-0">
                
                {/* Profile Image with Zoom Hover */}
                <div className="relative w-40 h-40 mb-8 mx-auto">
                    {/* Red Border Ring */}
                    <div className="absolute inset-0 rounded-full border-2 border-brand-primary scale-110" />
                    
                    {/* Image Container */}
                    <div className="w-full h-full rounded-full overflow-hidden relative">
                    <Image
                        src={trainer.image}
                        alt={trainer.name}
                        fill
                        sizes="160px"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    </div>
                </div>

                {/* Text Content */}
                <div className="text-center space-y-3">
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                    {trainer.name}
                    </h3>
                    <p className="text-brand-primary text-sm font-medium uppercase tracking-wider">
                    {trainer.role}
                    </p>
                    
                    {/* Certification Badge Style */}
                    <div className="pt-4">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-foreground/40 text-xs font-semibold">
                        {trainer.certs}
                    </span>
                    </div>
                </div>

                </div>
            ))}
            </div>
        </div>
        </section>
    );
    };

    export default Trainers;