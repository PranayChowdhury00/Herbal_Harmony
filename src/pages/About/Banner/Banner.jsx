import { PiFlowerTulipLight } from "react-icons/pi";
import Navbar from "../../Share/Navbar";
import banner from "/banner.jpg";
import img from "/secondBanner.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Banner = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
            offset: 100, // Adjust offset to trigger animations sooner
        });
        console.log("AOS initialized"); // Debugging log
    }, []);

    return (
        <div
            className="relative h-[700px] bg-cover bg-center overflow-hidden"
            style={{ backgroundImage: `url(${banner})` }}
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50 z-0"></div>

            {/* Navbar */}
            <div className="relative z-10 py-10">
                <Navbar />
            </div>

            {/* Content Section */}
            <div
                className="relative z-10 flex max-w-7xl mx-auto flex-col md:flex-row items-center justify-between px-6"
                data-aos="fade-up"
            >
                {/* Text */}
                <div className="w-full md:w-1/2 mb-6 md:mb-0" data-aos="fade-right">
                    <h1 className="text-[#5a938ee6] font-extrabold py-5 text-4xl md:text-7xl leading-tight">
                        Compassionate alternative medicine clinic
                    </h1>
                    <p className="text-gray-300 text-lg md:text-xl">
                        If you're looking for a clinic in Dakshin Natai that offers compassionate
                        alternative medicine, you might consider searching for clinics that
                        specialize in holistic therapies, natural medicine, or integrative
                        healthcare.
                    </p>
                </div>

                {/* Image */}
                <div className="w-full md:w-1/2" data-aos="fade-left">
                    <img
                        src={img}
                        className="w-full rounded-2xl shadow-xl"
                        alt="Alternative Medicine"
                    />
                </div>
            </div>

            {/* Button Section */}
            <div
                className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-5 mt-5"
                data-aos="zoom-in"
            >
                <button className="btn bg-[#214F4B] text-white font-bold rounded-2xl py-2 px-6 text-xl transition duration-300 ease-in-out hover:bg-[#16C172]">
                    Our Services
                </button>
                <p className="text-[#214F4B] text-xl hover:text-[#16C172] cursor-pointer transition duration-300 ease-in-out">
                    How it Works
                </p>
            </div>
        </div>
    );
};

export default Banner;
