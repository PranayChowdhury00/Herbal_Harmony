import { FaCompass } from "react-icons/fa";
import img3 from "/flos-08.jpg";

const ThirdSection = () => {
  return (
    <div className="bg-[#F7F3E3] py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
        
        {/* Left Column: Heading & Description */}
        <div data-aos="fade-right">
          <h1 className="text-[#214F4B] font-extrabold text-3xl md:text-5xl leading-snug">
            Premium Natural & Holistic Treatments
          </h1>
          <p className="text-[#214F4B] text-2xl mt-5">❤️</p>
          <p className="text-[#214F4B] font-medium text-lg md:text-xl mt-2">
            Individual Personalized Approach
          </p>
          <p className="text-[#214F4B] font-light text-base md:text-lg mt-5">
            Our holistic treatments are tailored to your needs, focusing on 
            natural healing and wellness through time-tested techniques.
          </p>
        </div>

        {/* Center Column: Image */}
        <div data-aos="zoom-in">
          <img
            className="w-full h-[400px] md:h-[500px] rounded-full object-cover shadow-lg"
            src={img3}
            alt="Holistic Treatment"
          />
        </div>

        {/* Right Column: Features */}
        <div className="space-y-10" data-aos="fade-left">
          {/* Feature 1 */}
          <div className="flex items-start gap-4">
            <FaCompass className="text-[#214F4B] text-3xl" />
            <div>
              <h2 className="text-[#214F4B] font-medium text-lg md:text-xl">
                Expert Remedy Preparation
              </h2>
              <p className="text-[#214F4B] font-light text-base md:text-lg mt-2">
                Our remedies are crafted with expertise, ensuring maximum effectiveness 
                and safety for your holistic health journey.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-start gap-4">
            <span className="text-[#214F4B] text-3xl">🔹</span>
            <div>
              <h2 className="text-[#214F4B] font-medium text-lg md:text-xl">
                Premium Natural Ingredients
              </h2>
              <p className="text-[#214F4B] font-light text-base md:text-lg mt-2">
                We use only the finest, natural ingredients sourced ethically 
                to bring you pure and effective holistic treatments.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ThirdSection;
