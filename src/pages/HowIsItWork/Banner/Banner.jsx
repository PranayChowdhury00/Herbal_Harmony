import { PiFlowerTulipLight } from "react-icons/pi";
import Navbar from "../../Share/Navbar";
import banner from "/banner.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import img from "/rightBannerImg.jpg";
import { FaCheck } from "react-icons/fa";

const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false, // Animations repeat every time the section is visible
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
      <div className="relative max-w-7xl mx-auto py-10 flex flex-col md:flex-row gap-10">
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <p data-aos="fade-right" className="text-[#16C172] font-medium py-6">
            Welcome
          </p>
          <h1
            data-aos="fade-right"
            data-aos-delay="200"
            className="text-[#214F4B] text-3xl md:text-6xl font-extrabold leading-tight"
          >
            Hi! It is great to see you have arrived
          </h1>
          <p
            data-aos="fade-right"
            data-aos-delay="400"
            className="text-[#214F4B] font-light text-lg md:text-[18px] py-5"
          >
            Discover a holistic approach to healing that nurtures your mind,
            body, and soul. Experience the power of integrative medicine and
            unlock your true vitality.
          </p>
          <button className="btn bg-[#214F4B] text-white hover:bg-[#16C172] rounded-2xl font-bold text-[18px]">
            Book appointment
          </button>
        </div>

        {/* Image + List Section */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
          {/* Image */}
          <img
            data-aos="fade-up"
            src={img}
            alt="Right Banner"
            className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] rounded-full shadow-lg mb-6"
          />

          {/* Benefits List */}
          <ul
            data-aos="fade-up"
            data-aos-delay="200"
            className="space-y-4 text-center md:text-left"
          >
            {[
              "Natural immunity",
              "Increased vitality",
              "Better health",
              "Permanent relief",
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-center justify-center md:justify-start gap-3 text-[#214F4B] text-lg"
              >
                <span className="w-8 h-8 flex items-center justify-center bg-white rounded-full shadow-md">
                  <FaCheck className="text-[#16C172]" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Banner;
