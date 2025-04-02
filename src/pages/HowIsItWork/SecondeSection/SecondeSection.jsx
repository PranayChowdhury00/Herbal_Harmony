import muscle from "/muscle.png";
import Chronicfatigue from "/Chronicfatigue.png";
import { LiaAllergiesSolid } from "react-icons/lia";
import { FaStethoscope } from "react-icons/fa";
import { MdHealing } from "react-icons/md";
import { BiBrain } from "react-icons/bi";
import { FaWeight } from "react-icons/fa";
import { GiStomach } from "react-icons/gi";
import { AiOutlineHeart } from "react-icons/ai";

const SecondeSection = () => {
  return (
    <div className="bg-[#F7F3E3] py-20">
      {/* Center Div */}
      <div className="max-w-7xl mx-auto">
        {/* Top Text */}
        <div className="mb-12 text-center">
          <h1 className="text-[#16C172] font-medium text-xl py-6">Quality service</h1>
          <p className="text-[#214F4B] text-3xl font-bold">
            Homeopathic treatments and <br /> healing services
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* First Card */}
          <div className="bg-white h-[250px] rounded-2xl shadow-lg p-6 flex items-center gap-5 hover:shadow-xl transition-shadow">
            <div className="text-5xl text-[#214F4B]">
              <LiaAllergiesSolid />
            </div>
            <div>
              <h1 className="text-[#214F4B] font-medium">Allergies</h1>
              <p>We provide treatments to help relieve symptoms of common allergies like dust, pollen, and pet dander.</p>
            </div>
          </div>

          {/* Second Card */}
          <div className="bg-white h-[250px] rounded-2xl shadow-lg p-6 flex items-center gap-5 hover:shadow-xl transition-shadow">
            <div className="text-5xl text-[#214F4B]">
              <img src={muscle} alt="Joint & Muscle Pain" className="w-12" />
            </div>
            <div>
              <h1 className="text-[#214F4B] font-medium">Joint & Muscle Pain</h1>
              <p>Our holistic treatments target the root causes of joint and muscle pain, providing long-term relief.</p>
            </div>
          </div>

          {/* Third Card */}
          <div className="bg-white h-[250px] rounded-2xl shadow-lg p-6 flex items-center gap-5 hover:shadow-xl transition-shadow">
            <div className="text-5xl text-[#214F4B]">
              <img src={Chronicfatigue} alt="Chronic Fatigue" className="w-12" />
            </div>
            <div>
              <h1 className="text-[#214F4B] font-medium">Chronic Fatigue</h1>
              <p>Our treatments help restore energy levels and manage the symptoms of chronic fatigue syndrome.</p>
            </div>
          </div>

          {/* Fourth Card */}
          <div className="bg-white h-[250px] rounded-2xl shadow-lg p-6 flex items-center gap-5 hover:shadow-xl transition-shadow">
            <div className="text-5xl text-[#214F4B]">
              <FaStethoscope />
            </div>
            <div>
              <h1 className="text-[#214F4B] font-medium">Preventative Care</h1>
              <p>Focus on prevention with natural remedies to strengthen your body and avoid future illnesses.</p>
            </div>
          </div>

          {/* Fifth Card */}
          <div className="bg-white h-[250px] rounded-2xl shadow-lg p-6 flex items-center gap-5 hover:shadow-xl transition-shadow">
            <div className="text-5xl text-[#214F4B]">
              <MdHealing />
            </div>
            <div>
              <h1 className="text-[#214F4B] font-medium">Holistic Healing</h1>
              <p>Our holistic approach balances mind, body, and spirit to promote natural healing and wellness.</p>
            </div>
          </div>

          {/* Sixth Card */}
          <div className="bg-white h-[250px] rounded-2xl shadow-lg p-6 flex items-center gap-5 hover:shadow-xl transition-shadow">
            <div className="text-5xl text-[#214F4B]">
              <BiBrain />
            </div>
            <div>
              <h1 className="text-[#214F4B] font-medium">Mental Health</h1>
              <p>We offer treatments to reduce stress, anxiety, and other mental health challenges.</p>
            </div>
          </div>

          {/* Seventh Card */}
          <div className="bg-white h-[250px] rounded-2xl shadow-lg p-6 flex items-center gap-5 hover:shadow-xl transition-shadow">
            <div className="text-5xl text-[#214F4B]">
              <FaWeight />
            </div>
            <div>
              <h1 className="text-[#214F4B] font-medium">Weight Management</h1>
              <p>Our weight management services help you achieve a healthy weight through natural solutions.</p>
            </div>
          </div>

          {/* Eighth Card */}
          <div className="bg-white h-[250px] rounded-2xl shadow-lg p-6 flex items-center gap-5 hover:shadow-xl transition-shadow">
            <div className="text-5xl text-[#214F4B]">
              <GiStomach />
            </div>
            <div>
              <h1 className="text-[#214F4B] font-medium">Digestive Health</h1>
              <p>We treat digestive disorders like IBS, bloating, and indigestion with holistic remedies.</p>
            </div>
          </div>

          {/* Ninth Card */}
          <div className="bg-white h-[250px] rounded-2xl shadow-lg p-6 flex items-center gap-5 hover:shadow-xl transition-shadow">
            <div className="text-5xl text-[#214F4B]">
              <AiOutlineHeart />
            </div>
            <div>
              <h1 className="text-[#214F4B] font-medium">Heart Health</h1>
              <p>Our treatments focus on improving cardiovascular health and preventing heart diseases.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondeSection;
