import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import img from "/flos-28.jpg"; // Replace with actual image path

const GuaranteedResults = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
    }, []);

    return (
        <div className="bg-[#DDF0FF] py-20">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
                {/* Left Section - Text */}
                <div className="md:w-1/2" data-aos="fade-right">
                    <h2 className="text-[#214F4B] font-bold text-4xl mb-4">Guaranteed Results</h2>
                    <p className="text-[#214F4B] text-lg mb-6">Create your own homeopathic kit with carefully selected remedies tailored for your well-being.</p>
                    
                    <ul className="list-none space-y-3">
                        <li className="flex items-center gap-3 text-[#214F4B]">
                            <span className="bg-[#16C172] text-white p-2 rounded-full">✔</span>
                            Individual evaluation
                        </li>
                        <li className="flex items-center gap-3 text-[#214F4B]">
                            <span className="bg-[#16C172] text-white p-2 rounded-full">✔</span>
                            Premium ingredient selection
                        </li>
                        <li className="flex items-center gap-3 text-[#214F4B]">
                            <span className="bg-[#16C172] text-white p-2 rounded-full">✔</span>
                            Fast & discreet shipping
                        </li>
                    </ul>

                    <button className="mt-6 bg-[#16C172] text-white font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out hover:text-[#214F4B] hover:bg-white shadow-md">
                        Book Appointment
                    </button>
                </div>

                {/* Right Section - Image */}
                <div className="md:w-1/2 flex justify-center" data-aos="fade-left">
                    <img src={img} alt="Homeopathic Kit" className="w-full max-w-md rounded-2xl shadow-md object-cover" />
                </div>
            </div>
        </div>
    );
};

export default GuaranteedResults;
