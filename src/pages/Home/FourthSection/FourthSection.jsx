import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import banner2 from "/banner2.jpg";
import { GiVanillaFlower } from "react-icons/gi";

const FourthSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <div
      className="relative h-[500px] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${banner2})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Centered Text Box with Animation */}
      <div
        className="w-[800px] h-[340px] rounded-2xl bg-[#214F4B] relative z-10 flex flex-col items-center justify-center text-center p-8"
        data-aos="fade-up"
      >
        <h1 className="md:text-5xl text-3xl leading-snug text-white font-bold">
          Are you unable to visit? <br /> Book a telehealth consultation.
        </h1>
        <div className="flex items-center gap-10 mt-8">
        <p className="text-lg text-gray-300 mt-4">
          Get expert medical advice from the comfort of your home through our secure and easy-to-use virtual consultation platform.
        </p>
        <GiVanillaFlower className="text-9xl text-gray-200"/>
        </div>
      </div>
    </div>
  );
};

export default FourthSection;
