import React from "react";
import { FaCheck } from "react-icons/fa";

const FourthSection = () => {
  return (
    <div className="bg-[#DDF0FF] h-[500px] py-20">
      <div className="max-w-7xl mx-auto">
        {/* Center Text */}
        <div className="text-center">
          <h1 className="text-[#16C172] font-medium text-xl">Exclusive services</h1>
          <p className="text-[#214F4B] font-extrabold text-5xl mt-5 leading-snug">
            Ethically sourced premium <br /> ingredients for holistic wellness
          </p>

          {/* Benefits Section */}
          <div className="flex justify-between px-40 mt-16">
            {["Immunity", "Vitality", "Strength"].map((item, index) => (
              <span key={index} className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#b9d8f0] shadow-md">
                  <FaCheck className="w-5 h-5 text-[#214F4B]" />
                </div>
                <p className="text-[#214F4B] font-medium text-lg">{item}</p>
              </span>
            ))}
          </div>

          {/* Decorative Text with Icon */}
          <div className="flex justify-center items-center gap-4 mt-16 ">
            <p className="text-5xl">🌿</p>
            <p className="text-[#214F4B] font-light text-lg max-w-lg">
              Our carefully selected natural ingredients promote balance, boost energy, and enhance well-being for a healthier lifestyle.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
