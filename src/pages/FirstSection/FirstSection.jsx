import { IoStar } from "react-icons/io5";
import people1 from "/people1.jpg";
import people2 from "/people2.jpg";
import people3 from "/people3.jpg";

const FirstSection = () => {
  return (
    <div className="bg-[#214F4B] py-10">
      {/* Center Div */}
      <div className="relative max-w-5xl mx-auto flex items-center gap-10">
        {/* Left Image Section */}
        <div className="relative w-2/3">
          {/* Main Image */}
          <img
            className="w-[500px] h-[550px] object-cover rounded-lg"
            src={people1}
            alt="Person 1"
          />
          {/* Left Absolute Image */}
          <img
            className="w-[200px] h-[300px] absolute top-56 left-[-20px] rounded-full object-cover shadow-lg"
            src={people2}
            alt="Person 2"
          />
          {/* Right Absolute Image */}
          <img
            className="w-[200px] h-[250px] absolute top-80 left-[140px] rounded-2xl object-cover shadow-lg"
            src={people3}
            alt="Person 3"
          />

          {/* Centered Rating Circle */}
          <div className="absolute top-[88%] left-[0%] translate-x-[-50%] translate-y-[-50%] bg-[#16C172] w-40 h-40 rounded-full flex flex-col items-center justify-center text-center shadow-xl">
            <p className="flex gap-1 text-white text-lg font-bold">
              <IoStar /> <IoStar /> <IoStar /> <IoStar /> <IoStar />
            </p>
            <p className="text-white font-bold text-[19px]">4.5 / 5.0</p>
            <p className="text-white font-medium text-[17px]">
              from over 1500 reviews
            </p>
          </div>
        </div>

        {/* Right Text Section */}
        <div className="w-1/3">
          <h1 className="text-3xl text-white font-extrabold leading-snug py-4">
            You are not your illness. You have an individual story to tell. You
            have a name, a history, a personality. Staying yourself is part of
            the battle.
          </h1>
          <p className="text-gray-400 font-medium">- Julian Seifte</p>
        </div>
      </div>
    </div>
  );
};

export default FirstSection;
