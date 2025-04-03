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
    <div className="bg-[#F7F3E3] w-full h-[500px]">
      <div className="max-w-7xl mx-auto py-10">
        <p className="text-[#16C172] font-medium mb-8" data-aos="fade-up">
          Get in Touch
        </p>

        <div className="flex mb-7">
          <h1
            className="w-3/4 leading-relaxed text-[#214F4B] font-bold text-5xl"
            data-aos="fade-right"
          >
            We'd love to hear from you! <br /> Contact us for any inquiries.
          </h1>
          <p
            className="w-1/4 text-[#214F4B] font-light text-[18px]"
            data-aos="fade-left"
          >
            Whether you have a question, need support, or want to visit us,
            feel free to reach out. Our team is here to assist you in any way
            possible.
          </p>
        </div>

        <div className="flex gap-10 w-full">
          {contactOptions.map((option, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl h-[140px] p-6 flex flex-col gap-3 shadow-md"
              data-aos="zoom-in"
              data-aos-delay={index * 200}
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#16C172] text-white">
                {option.icon}
              </div>
              <h1 className="text-[#214F4B] font-bold leading-tight">
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