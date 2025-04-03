import CountUp from "react-countup";
import img from "/flos-06.jpg"; // Adjust the path as necessary

const FifthSection = () => {
  return (
    <div className="bg-[#214F4B] py-20 px-4">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          {/* Heading */}
          <h1 className="text-[#16C172] font-medium text-lg md:text-xl mb-3">
            Quality Assured
          </h1>
          <p className="text-white font-bold text-3xl md:text-5xl leading-tight">
            We will find the best <br className="hidden md:block" /> medicine for your <br className="hidden md:block" /> condition
          </p>

          {/* CountUp Section */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-10">
            {/* First CountUp */}
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                <CountUp start={0} end={80} duration={3} suffix="%" />
              </h2>
              <p className="text-lg text-white mt-2">Recovery Rate</p>
            </div>

            {/* Second CountUp */}
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                <CountUp start={0} end={90} duration={3} suffix="%" />
              </h2>
              <p className="text-lg text-white mt-2">Customer Satisfaction</p>
            </div>
          </div>

          <button className="bg-[#16C172] text-white font-bold rounded-2xl px-6 py-3 mt-10 hover:bg-white hover:text-[#16C172] transition">
            Book Appointment
          </button>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={img}
            alt="Medicine Illustration"
            className="w-[280px] sm:w-[350px] md:w-[400px] rounded-full shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default FifthSection;
