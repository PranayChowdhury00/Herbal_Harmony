import React from "react";
import { FaCheck } from "react-icons/fa";

const FourthSection = () => {
  return (
    <section className="bg-[#DDF0FF] py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h1 className="text-[#16C172] font-medium text-lg md:text-xl">
          Exclusive Services
        </h1>
        <p className="text-[#214F4B] font-extrabold text-3xl md:text-5xl mt-5 leading-snug">
          Ethically Sourced Premium <br className="hidden md:block" /> Ingredients for Holistic Wellness
        </p>

        {/* Benefits Section */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 mt-12">
          {["Immunity", "Vitality", "Strength"].map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#b9d8f0] shadow-md">
                <FaCheck className="w-5 h-5 text-[#214F4B]" />
              </div>
              <p className="text-[#214F4B] font-medium text-lg">{item}</p>
            </div>
          ))}
        </div>

        {/* Decorative Text with Icon */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-12">
          <p className="text-5xl">🌿</p>
          <p className="text-[#214F4B] font-light text-lg max-w-xl">
            Our carefully selected natural ingredients promote balance, boost energy, and enhance well-being for a healthier lifestyle.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FourthSection;
