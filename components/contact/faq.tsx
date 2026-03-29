"use client";

import React from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: "What are the course timings?",
      answer: "We offer flexible timings with both weekday and weekend batches. Contact us to find a schedule that works for you.",
    },
    {
      question: "Do you provide placement assistance?",
      answer: "Yes, we offer 100% placement assistance including resume building, mock interviews, and job referrals.",
    },
    {
      question: "Are there any prerequisites?",
      answer: "Prerequisites vary by course. Most beginner courses require basic computer knowledge, while advanced courses may need prior experience.",
    },
    {
      question: "Can I take a demo class?",
      answer: "Absolutely! We offer free demo classes. Contact us to schedule your demo session.",
    },
  ];

  return (
    <section className="bg-background py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-foreground/50 font-medium">
            Quick answers to common questions
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              /* !items-start & !text-left: Overrides global center alignment
                 !p-8: Matches the spacing in the screenshot
                 !transform-none & hover:!after:w-0: Disables all hover effects
              */
              className="card !items-start !text-left !p-8 !cursor-default !transform-none !transition-none hover:!shadow-none hover:!border-white/5 hover:!after:w-0"
            >
              <h3 className="text-lg font-bold text-white mb-3">
                {faq.question}
              </h3>
              <p className="text-foreground/50 text-sm leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;