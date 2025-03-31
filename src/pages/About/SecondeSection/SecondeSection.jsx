import CountUp from "react-countup";
import img2 from "/flos-22.jpg";

const SecondeSection = () => {
  return (
    <div className="bg-[#214F4B] py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        
        {/* Left Section: CountUp & Image */}
        <div className="w-full md:w-3/4 flex flex-col items-center md:items-start">
          
          {/* CountUp Stats */}
          <div className="flex gap-10 mb-8">
            {/* First CountUp */}
            <div className="text-center">
              <h2 className="text-5xl font-bold text-white">
                <CountUp start={0} end={90} duration={3} suffix="%" />
              </h2>
              <p className="text-lg text-white mt-2">
                Overall health improvement
              </p>
            </div>

            {/* Second CountUp */}
            <div className="text-center">
              <h2 className="text-5xl font-bold text-white">
                <CountUp start={0} end={87} duration={3} suffix="%" />
              </h2>
              <p className="text-lg text-white mt-2">Symptom elimination</p>
            </div>
          </div>

          {/* Image */}
          <div className="w-full">
            <img src={img2} alt="Healing Process" className="rounded-2xl shadow-lg" />
          </div>
        </div>

        {/* Right Section: Text Content */}
        <div className="w-full md:w-1/4 text-center md:text-left mt-8 md:mt-0">
          <h2 className="text-4xl font-bold text-white leading-snug">
            Experience the Power of Alternative Medicine
          </h2>
          <p className="text-lg text-gray-200 mt-4">
            Our integrative healing approach helps improve overall health by addressing physical, emotional, and mental well-being.
          </p>
          <button className="mt-6 bg-[#16C172] text-white font-bold py-2 px-6 rounded-2xl transition duration-300 hover:bg-white hover:text-[#214F4B]">
          Book appointment
          </button>
        </div>

      </div>
    </div>
  );
};

export default SecondeSection;
