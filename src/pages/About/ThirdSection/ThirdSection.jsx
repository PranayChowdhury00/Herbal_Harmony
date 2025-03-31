import { FaCompass } from "react-icons/fa";
import img3 from "/flos-08.jpg";

const ThirdSection = () => {
  return (
    <div className="bg-[#F7F3E3] py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
        
        {/* Left Column: Heading & Description */}
        <div>
          <h1 className="text-[#214F4B] font-extrabold text-5xl leading-snug">
            Premium natural & holistic treatments
          </h1>
          <p className="text-[#214F4B] font-medium text-xl mt-5">❤</p>
          <p className="text-[#214F4B] font-medium text-xl mt-2">
            Individual personalised approach
          </p>
          <p className="text-[#214F4B] font-light mt-5">
            Our holistic treatments are tailored to your needs, focusing on 
            natural healing and wellness through time-tested techniques.
          </p>
        </div>

        {/* Center Column: Image */}
        <div>
          <img className="w-full h-[500px] rounded-full object-cover" src={img3} alt="Holistic Treatment" />
        </div>

        {/* Right Column: Features */}
        <div>
          {/* Feature 1 */}
          <div className="mb-10 flex items-start gap-3">
            <FaCompass className="text-[#214F4B] text-3xl" />
            <div>
              <h2 className="text-[#214F4B] font-medium text-xl">
                Expert remedy preparation
              </h2>
              <p className="text-[#214F4B] font-light mt-2">
                Our remedies are crafted with expertise, ensuring maximum effectiveness 
                and safety for your holistic health journey.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-start gap-3">
            <span className="text-[#214F4B] text-3xl">🔹</span>
            <div>
              <h2 className="text-[#214F4B] font-medium text-xl">
                Premium natural ingredients
              </h2>
              <p className="text-[#214F4B] font-light mt-2">
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
