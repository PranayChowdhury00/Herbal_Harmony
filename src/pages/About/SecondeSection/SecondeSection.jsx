import { useEffect, useState } from "react";
import CountUp from "react-countup";
import AOS from "aos";
import "aos/dist/aos.css";
import img2 from "/flos-22.jpg";

const SecondeSection = () => {
  const [countStart, setCountStart] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false, // Ensures animation plays on every scroll
      offset: 100,
    });
  }, []);

  return (
    <div className="bg-[#214F4B] py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row justify-between items-center gap-12">
        
        {/* Left Section: Text Content */}
        <div className="w-full md:w-1/2 text-center md:text-left" data-aos="fade-left">
          <h2 className="text-3xl md:text-4xl font-bold text-white leading-snug">
            Experience the Power of Alternative Medicine
          </h2>
          <p className="text-lg text-gray-200 mt-4">
            Our integrative healing approach helps improve overall health by addressing physical, emotional, and mental well-being.
          </p>
          <button className="mt-6 bg-[#16C172] text-white font-bold py-3 px-8 rounded-2xl transition duration-300 hover:bg-white hover:text-[#214F4B]">
            Book Appointment
          </button>
        </div>

        {/* Right Section: CountUp Stats & Image */}
        <div
          className="w-full md:w-1/2 flex flex-col items-center md:items-start"
          data-aos="fade-up"
          onMouseEnter={() => setCountStart(true)} // Triggers when visible
        >
          
          {/* CountUp Stats */}
          <div className="flex flex-col sm:flex-row justify-center gap-8 mb-8">
            {/* First CountUp */}
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                <CountUp start={countStart ? 0 : null} end={90} duration={3} suffix="%" />
              </h2>
              <p className="text-lg text-white mt-2">Overall health improvement</p>
            </div>

            {/* Second CountUp */}
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                <CountUp start={countStart ? 0 : null} end={87} duration={3} suffix="%" />
              </h2>
              <p className="text-lg text-white mt-2">Symptom elimination</p>
            </div>
          </div>

          {/* Image */}
          <div className="w-full max-w-[450px]" data-aos="zoom-in">
            <img src={img2} alt="Healing Process" className="w-full rounded-2xl shadow-lg" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default SecondeSection;
