import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowTrendUp } from "react-icons/fa6";

const LastSection = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000,
          easing: "ease-in-out",
          once: false,
        });
      }, []);
      const services = [
        { title: "Individual evaluation" },
        { title: "Premium ingredient selection" },
        { title: "Fast & discreet shipping" },
      ];
      return (
        <div className="bg-[#F7F3E3] py-16">
          <div className="max-w-7xl mx-auto px-6 md:px-10">
            <p className="text-[#16C172] font-semibold text-lg uppercase mb-4" data-aos="fade-up">
              Guaranteed Results
            </p>
    
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-6">
              <h1 
                className="md:w-2/3 text-[#214F4B] font-bold text-4xl md:text-5xl leading-snug"
                data-aos="fade-right"
              >
                Create your own homeopathic kit
              </h1>
              <p 
                className="md:w-1/3 text-[#214F4B] font-light text-lg"
                data-aos="fade-left"
              >
                Homeopathic medicine tailored to your needs, ensuring top-quality ingredients, 
                expert evaluation, and fast, discreet delivery.
              </p>
            </div>
    
            {/* Cards Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl h-[140px] p-6 flex flex-col gap-3 shadow-md transition-transform duration-300 hover:scale-105"
                  data-aos="zoom-in"
                  data-aos-delay={`${index * 200}`}
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#16C172] text-white">
                    <FaArrowTrendUp className="text-lg" />
                  </div>
                  <h1 className="text-[#214F4B] font-bold leading-tight">
                    {service.title}
                  </h1>
                </div>
              ))}
            </div>
    
            {/* Book Appointment Button */}
            <div className="text-center mt-10" data-aos="fade-up">
              <button className="bg-[#214F4B] text-white font-bold rounded-2xl py-3 px-6 text-lg transition duration-300 ease-in-out hover:bg-[#16C172]">
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      );
    };


export default LastSection;