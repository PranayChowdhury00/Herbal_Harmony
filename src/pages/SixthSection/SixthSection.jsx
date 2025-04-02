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
    <div className="bg-[#F7F3E3] w-full h-[500px]">
      <div className="max-w-7xl mx-auto py-10">
        <p className="text-[#16C172] font-medium mb-8" data-aos="fade-up">Begin now</p>

        <div className="flex mb-7">
          <h1
            className="w-3/4 leading-relaxed text-[#214F4B] font-bold text-5xl"
            data-aos="fade-right"
          >
            Start using integrative medicine to <br /> help you heal and thrive
          </h1>
          <p
            className="w-1/4 text-[#214F4B] font-light text-[18px]"
            data-aos="fade-left"
          >
            Integrative healing can have a lot of different facets to it. It is
            essentially looking at somebody as a whole. It looks at somebody in
            their physical, spiritual, mental, and emotional state. It's looking
            at somebody as far as what are the stressors in their life?
          </p>
        </div>

        <div className="flex gap-10 w-full">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl h-[140px] p-6 flex flex-col gap-3 shadow-md"
              data-aos="zoom-in" // AOS animation
              data-aos-delay={index * 200} // Delay effect for staggered animation
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#16C172] text-white">
                <FaArrowTrendUp className="text-lg" />
              </div>
              <h1 className="text-[#214F4B] font-bold leading-tight">
                {card.title}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SixthSection;
