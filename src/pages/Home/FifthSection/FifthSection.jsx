import CountUp from "react-countup";
import img from "/flos-06.jpg"; // Adjust the path as necessary
const FifthSection = () => {
  return (
    <div className="bg-[#214F4B] py-20">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-10">
        {/* Text Section */}
        <div className="w-1/2">
          {/* Heading */}
          <h1 className="text-[#16C172] font-medium text-[19px] mb-3">
            Quality Assured
          </h1>
          <p className="text-white font-bold text-5xl leading-tight">
            We will find the best <br /> medicine for your <br /> condition
          </p>

          {/* CountUp Section */}
          <div className="flex gap-10 mt-10">
            {/* First CountUp */}
            <div className="text-center">
              <h2 className="text-5xl font-bold text-white">
                <CountUp start={0} end={80} duration={3} suffix="%" />
              </h2>
              <p className="text-lg text-white mt-2">Recovery Rate</p>
            </div>

            {/* Second CountUp */}
            <div className="text-center">
              <h2 className="text-5xl font-bold text-white">
                <CountUp start={0} end={90} duration={3} suffix="%" />
              </h2>
              <p className="text-lg text-white mt-2">Customer Satisfaction</p>
            </div>
          </div>

          <button className="btn bg-[#16C172] text-white font-bold rounded-2xl mt-10 hover:bg-white hover:text-[#16C172]">Book appointment</button>
        </div>

        {/* Image Section */}
        <div className="w-1/2 flex justify-center">
          <img
            src={img}
            alt="Medicine Illustration"
            className="w-[400px] rounded-[50%] shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default FifthSection;
