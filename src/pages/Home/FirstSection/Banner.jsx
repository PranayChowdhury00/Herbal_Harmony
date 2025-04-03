import { PiFlowerTulipLight } from "react-icons/pi";
import Navbar from "../../Share/Navbar";
import banner from "/banner.jpg";
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
      className="relative h-[500px] md:h-[600px] lg:h-[700px] bg-cover bg-center flex flex-col"
      style={{ backgroundImage: `url(${banner})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Navbar */}
      <div className="relative py-6 md:py-10">
        <Navbar />
      </div>

      {/* Text */}
      <div className="relative text-center mt-10 md:mt-20 px-4">
        <h1
          data-aos="fade-up"
          className="text-4xl md:text-6xl lg:text-9xl text-[#5a938ee6] font-bold uppercase leading-tight"
        >
          Healing <span className="text-lg md:text-3xl">with</span> <br />
          <span className="inline-block">
            <PiFlowerTulipLight
              className="inline text-6xl md:text-9xl text-[#458265] mx-2"
              data-aos="zoom-in"
              data-aos-delay="500"
            />
          </span>
          nature
        </h1>
      </div>
    </div>
  );
};

export default Banner;
