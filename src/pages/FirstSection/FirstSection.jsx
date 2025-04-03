import React, { useEffect } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaHeadset } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      offset: 100,
    });
  }, []);

  const contactOptions = [
    { title: "Send us a message", icon: <FaEnvelope /> },
    { title: "Visit our office", icon: <FaMapMarkerAlt /> },
    { title: "Email support available", icon: <FaHeadset /> },
    { title: "Call us anytime", icon: <FaPhoneAlt /> },
  ];

  return (
    <div className="bg-[#F7F3E3] w-full py-10">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <p className="text-[#16C172] font-medium mb-8 text-center" data-aos="fade-up">
          Get in Touch
        </p>

        <div className="flex flex-col md:flex-row mb-7 gap-6 md:gap-10">
          {/* Left Text Section */}
          <div className="w-full md:w-3/4 text-center md:text-left">
            <h1
              className="text-[#214F4B] font-bold text-4xl md:text-5xl leading-relaxed"
              data-aos="fade-right"
            >
              We'd love to hear from you! <br /> Contact us for any inquiries.
            </h1>
          </div>
          
          {/* Right Text Section */}
          <div
            className="w-full md:w-1/4 text-[#214F4B] font-light text-lg md:text-[18px] text-center md:text-left"
            data-aos="fade-left"
          >
            Whether you have a question, need support, or want to visit us,
            feel free to reach out. Our team is here to assist you in any way
            possible.
          </div>
        </div>

        {/* Contact Options */}
        <div className="flex flex-wrap gap-6 justify-center md:justify-start">
          {contactOptions.map((option, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl h-[140px] w-full md:w-[220px] p-6 flex flex-col gap-3 shadow-md"
              data-aos="zoom-in"
              data-aos-delay={index * 200}
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#16C172] text-white">
                {option.icon}
              </div>
              <h1 className="text-[#214F4B] font-bold leading-tight text-center">
                {option.title}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
