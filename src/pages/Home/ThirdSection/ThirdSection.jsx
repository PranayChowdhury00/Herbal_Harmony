import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { PiFlowerLotusLight } from "react-icons/pi";
import { TfiSupport } from "react-icons/tfi";

const ThirdSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 150, // Animation triggers when 150px from viewport
      easing: "ease-in-out",
      once: false, // Allows animation to play every time it enters the viewport
    });
  }, []);

  return (
    <div className="bg-[#F7F3E3] min-h-[500px] flex items-center px-4 md:px-6">
      <div className="max-w-7xl mx-auto py-10">
        {/* Heading */}
        <h4 className="text-[#16C172] font-medium text-lg md:text-xl" data-aos="fade-down">
          Premium Care
        </h4>

        {/* Text Section */}
        <div className="mt-7 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-10">
          {/* Left Text */}
          <h1
            className="text-[#214F4B] text-2xl md:text-3xl leading-snug font-bold md:w-1/2"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            Excellent health to unlock the best <br /> quality of your life
          </h1>

          {/* Right Text */}
          <div
            className="md:w-1/2 flex justify-end"
            data-aos="fade-left"
            data-aos-delay="500"
          >
            <p className="text-gray-800 text-base md:text-lg md:w-[80%]">
              We provide personalized treatments and holistic wellness plans to
              ensure a healthier, happier life.
            </p>
          </div>
        </div>

        {/* Cards Section */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-14 mb-14">
          {/* First Card */}
          <div
            className="h-auto md:h-[230px] rounded-2xl p-8 bg-white shadow-lg flex flex-col items-start"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <p className="text-[#214F4B] text-4xl mb-3">
              <PiFlowerLotusLight />
            </p>
            <h1 className="text-[#214F4B] font-medium text-lg md:text-xl mb-3">
              Long-term Healing
            </h1>
            <p className="text-[#214F4B] font-light text-sm md:text-base">
              A holistic approach that focuses on long-term wellness and recovery.
            </p>
          </div>

          {/* Second Card */}
          <div
            className="h-auto md:h-[230px] rounded-2xl p-8 bg-white shadow-lg flex flex-col items-start"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <p className="text-[#214F4B] text-4xl mb-3">❤</p>
            <h1 className="text-[#214F4B] font-medium text-lg md:text-xl mb-3">
              100% Natural & Safe
            </h1>
            <p className="text-[#214F4B] font-light text-sm md:text-base">
              Our treatments use only natural, safe, and effective methods.
            </p>
          </div>

          {/* Third Card */}
          <div
            className="h-auto md:h-[230px] rounded-2xl p-8 bg-white shadow-lg flex flex-col items-start"
            data-aos="zoom-in"
            data-aos-delay="600"
          >
            <p className="text-[#214F4B] text-4xl mb-3">
              <TfiSupport />
            </p>
            <h1 className="text-[#214F4B] font-medium text-lg md:text-xl mb-3">
              Supports Natural Immunity
            </h1>
            <p className="text-[#214F4B] font-light text-sm md:text-base">
              Strengthen your body's natural defenses with holistic care.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
