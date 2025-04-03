import React, { useEffect } from "react";
import { FaArrowTrendUp } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";

const SixthSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
      offset: 100,
    });
  }, []);

  const cardData = [
    { title: "Instant Telehealth appointment" },
    { title: "Comprehensive Holistic Treatment" },
    { title: "Personalized Healing Approach" },
    { title: "Evidence-Based Natural Remedies" },
  ];

  return (
    <div className="bg-[#F7F3E3] w-full py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <p className="text-[#16C172] font-medium mb-4 text-center md:text-left" data-aos="fade-up">
          Begin now
        </p>

        {/* Heading & Description */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10 mb-10">
          <h1
            className="text-[#214F4B] font-bold text-3xl md:text-5xl text-center md:text-left leading-tight"
            data-aos="fade-right"
          >
            Start using integrative medicine to <br className="hidden md:block" /> help you heal and thrive
          </h1>
          <p
            className="text-[#214F4B] font-light text-lg md:w-1/2 text-center md:text-left"
            data-aos="fade-left"
          >
            Integrative healing can have a lot of different facets to it. It is essentially looking at somebody as a whole. It looks at somebody in their physical, spiritual, mental, and emotional state. It's looking at somebody as far as what are the stressors in their life?
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 flex flex-col gap-3 shadow-md items-center text-center"
              data-aos="zoom-in"
              data-aos-delay={index * 200}
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#16C172] text-white">
                <FaArrowTrendUp className="text-lg" />
              </div>
              <h1 className="text-[#214F4B] font-bold">{card.title}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SixthSection;
