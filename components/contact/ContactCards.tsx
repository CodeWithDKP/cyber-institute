"use client";

import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactCards = () => {
  const handleCallClick = () => {
    alert("You can directly call us using the numbers provided.");
  };

  const contactInfo = [
    {
      title: "Phone",
      detail: "+91 9959043515 / +91 8332881713",
      icon: <Phone size={24} className="text-brand-primary" />,
      action: () => {
        handleCallClick();
        window.location.href = "tel:+919959043515";
      },
    },
    {
      title: "Email",
      detail: "cysectrainings@gmail.com",
      icon: <Mail size={24} className="text-brand-primary" />,
      action: () => {
        window.location.href = "mailto:cysectrainings@gmail.com";
      },
    },
    {
      title: "Address",
      detail:
        "Madhura Nagar, Nizampet, Hyderabad, Telangana.",
      icon: <MapPin size={24} className="text-brand-primary" />,
      action: () => {
        window.open(
          "https://www.google.com/maps?q=Suja+Elysian+Hyderabad",
          "_blank"
        );
      },
    },
  ];

  return (
    <section className="bg-background py-16 px-6" id="contact-card">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {contactInfo.map((info, index) => (
          <div
            key={index}
            onClick={info.action}
            className="card !p-12 !cursor-pointer !transform-none !transition-none hover:!shadow-none hover:!border-white/5 hover:!after:w-0"
          >
            {/* Icon */}
            <div className="w-16 h-16 rounded-xl bg-brand-primary/10 flex items-center justify-center mb-6 border border-brand-primary/20">
              {info.icon}
            </div>

            {/* Text */}
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