import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowTrendUp } from "react-icons/fa6";

const SeventhSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out",
      once: false, // Ensures animation triggers every time the element comes into view
    });
  }, []);

  const cardData = [
    { title: "Instant Telehealth appointment" },
    { title: "Chat with a homeopath online" },
    { title: "Buy homeopathic medicine" },
    { title: "Your personal homeopathic kit" },
  ];

  return (
    <div className="bg-[#F7F3E3] py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <p className="text-[#16C172] font-semibold text-lg uppercase mb-4" data-aos="fade-up">
          Begin now
        </p>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-6">
          <h1 
            className="md:w-2/3 text-[#214F4B] font-bold text-4xl md:text-5xl leading-snug"
            data-aos="fade-right"
          >
            Start using integrative medicine to help you heal and thrive
          </h1>
          <p 
            className="md:w-1/3 text-[#214F4B] font-light text-lg"
            data-aos="fade-left"
          >
            Integrative medicine is an approach to healthcare that includes practices not traditionally part of conventional medicine, such as herbs and supplements, meditation, wellness coaching, acupuncture, massage, movement, resiliency, and nutrition.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {cardData.map((card, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl h-[140px] p-6 flex flex-col gap-3 shadow-md transition-transform duration-300 hover:scale-105"
              data-aos="zoom-in"
              data-aos-delay={`${index * 200}`} // Staggered animations
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#16C172] text-white">
                <FaArrowTrendUp className="text-lg" />
              </div>
              <h1 className="text-[#214F4B] font-bold leading-tight">
                {card.title}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeventhSection;
