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
    <div className="bg-[#F7F3E3] min-h-[500px] flex items-center">
      <div className="max-w-7xl mx-auto py-10 px-6">
        {/* Heading */}
        <h4 className="text-[#16C172] font-medium text-[19px]" data-aos="fade-down">
          Premium Care
        </h4>

        {/* Text Section */}
        <div className="mt-7 flex justify-between items-center gap-10">
          {/* Left Text */}
          <h1 className="text-[#214F4B] text-3xl leading-snug font-bold w-1/2"
            data-aos="fade-right"
            data-aos-delay="300"
          >
            Excellent health to unlock the best <br /> quality of your life
          </h1>

          {/* Right Text */}
          <div className="w-1/2 flex justify-end"
            data-aos="fade-left"
            data-aos-delay="500"
          >
            <p className="text-gray-800 text-lg w-[80%]">
              We provide personalized treatments and holistic wellness plans to
              ensure a healthier, happier life.
            </p>
          </div>
        </div>

        {/* Cards Section */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 mt-14 mb-14">
          {/* First Card */}
          <div className="h-[230px] rounded-2xl p-8 bg-white shadow-lg"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <p className="text-[#214F4B] text-4xl mb-3"><PiFlowerLotusLight /></p>
            <h1 className="text-[#214F4B] font-medium text-[22px] mb-3">Long-term Healing</h1>
            <p className="text-[#214F4B] font-light">
              A holistic approach that focuses on long-term wellness and recovery.
            </p>
          </div>

          {/* Second Card */}
          <div className="h-[230px] rounded-2xl p-8 bg-white shadow-lg"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <p className="text-[#214F4B] text-4xl mb-3">❤</p>
            <h1 className="text-[#214F4B] font-medium text-[22px] mb-3">100% Natural & Safe</h1>
            <p className="text-[#214F4B] font-light">
              Our treatments use only natural, safe, and effective methods.
            </p>
          </div>

          {/* Third Card */}
          <div className="h-[230px] rounded-2xl p-8 bg-white shadow-lg"
            data-aos="zoom-in"
            data-aos-delay="600"
          >
            <p className="text-[#214F4B] text-4xl mb-3"><TfiSupport /></p>
            <h1 className="text-[#214F4B] font-medium text-[22px] mb-3">
              Supports Natural Immunity
            </h1>
            <p className="text-[#214F4B] font-light">
              Strengthen your body's natural defenses with holistic care.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
