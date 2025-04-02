import { PiFlowerTulipLight } from "react-icons/pi";
import Navbar from "../../Share/Navbar";
import banner from "/banner.jpg";
import flosImg from "/flos-12.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

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
      className="relative h-[700px] bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${banner})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full py-6">
        <Navbar />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto flex items-center gap-10 px-6 mt-10">
        
        {/* Left Section (Text) */}
        <div className="w-1/2" data-aos="fade-right">
          <h1 className="text-white font-extrabold text-4xl leading-snug">
            Take the First Step Towards a Healthier You
          </h1>
          <p className="text-white text-lg mt-4">
            Your healing journey starts here. Let us guide you toward better health and well-being with expert care and support.
          </p>
          <button className="mt-6 bg-[#16C172] text-white font-semibold text-lg py-3 px-6 rounded-full shadow-lg hover:bg-[#139a5c] transition-all duration-300">
            Book an Appointment
          </button>
        </div>

        {/* Right Section (Image) */}
        <div className="w-1/2" data-aos="fade-left">
          <img className="rounded-3xl shadow-lg w-full" src={flosImg} alt="Healing Process" />
        </div>

      </div>
    </div>
  );
};

export default Banner;
