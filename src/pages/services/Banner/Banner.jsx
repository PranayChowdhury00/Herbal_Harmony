import { PiFlowerTulipLight } from "react-icons/pi";
import Navbar from "../../Share/Navbar";
import banner from "/banner.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import img from "/flos-05.jpg";
import { FaCheck } from "react-icons/fa";

const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      offset: 120,
    });
  }, []);

  return (
    <div
      className="relative h-auto md:h-[700px] bg-cover bg-center"
      style={{ backgroundImage: `url(${banner})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Navbar */}
      <div className="relative py-10">
        <Navbar />
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-5">
        {/* Image Section */}
        <div className="w-full md:w-1/2" data-aos="fade-left">
          <img
            src={img}
            className="w-full rounded-2xl shadow-xl"
            alt="Alternative Medicine"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2" data-aos="fade-right">
          <h1 className="text-[#5a938ee6] font-extrabold py-5 text-4xl md:text-6xl leading-tight">
            Get your natural personalized treatment
          </h1>

          {/* Bullet Points */}
          <div className="flex flex-col md:flex-row gap-4 mt-3">
            <p className="flex items-center gap-3 text-[#214F4B] text-lg">
              <FaCheck className="text-[#16C172]" /> Natural Immunity
            </p>
            <p className="flex items-center gap-3 text-[#214F4B] text-lg">
              <FaCheck className="text-[#16C172]" /> Lasting Benefits
            </p>
          </div>

          {/* Description */}
          <p className="text-gray-300 text-lg md:text-xl mt-4">
            If you're looking for a clinic in Dakshin Natai that offers compassionate alternative medicine, consider clinics that specialize in holistic therapies, natural medicine, or integrative healthcare.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
