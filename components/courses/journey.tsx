"use client";

import React from 'react';

const Journey = () => {
    const steps = [
        {
            number: "1",
            title: "Choose Your Course",
            description: "Select from our comprehensive range of cybersecurity courses",
        },
        {
            number: "2",
            title: "Hands-on Training",
            description: "Learn through practical labs and real-world scenarios",
        },
        {
            number: "3",
            title: "Get Certified",
            description: "Earn industry-recognized certifications",
        },
        {
            number: "4",
            title: "Career Support",
            description: "Get placement assistance and interview preparation",
        },
    ];

    return (
        <section className="bg-background py-24 px-6 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-20 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                        Your Learning Journey
                    </h2>
                    <p className="text-foreground/50 font-medium">
                        Follow our proven path to cybersecurity success
                    </p>
                </div>

                {/* Steps Container */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-0">
                    {steps.map((step, index) => (
                        <React.Fragment key={index}>
                            {/* Step Card */}
                            <div
                                className="card group !items-start !text-left !p-10 !cursor-default !transform-none !transition-none hover:!shadow-none hover:!border-white/5 hover:!after:w-0 z-10 w-full lg:w-[23%]"
                            >
                                <div className="w-12 h-12 rounded-full bg-brand-primary flex items-center justify-center text-white font-bold text-lg mb-8 shadow-lg shadow-brand-primary/20">
                                    {step.number}
                                </div>

                                <h3 className="text-xl font-bold text-white mb-4">
                                    {step.title}
                                </h3>

                                <p className="text-foreground/50 text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </div>

                            {/* Connecting Line - Only show between items and only on Desktop */}
                            {index !== steps.length - 1 && (
                                <div className="hidden lg:block w-[2%] h-[1px] bg-brand-primary/30 mx-2" />
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Journey;