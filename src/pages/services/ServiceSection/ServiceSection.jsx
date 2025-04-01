import { FaLeaf, FaHeartbeat, FaSpa, FaUserMd } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const services = [
  { icon: <FaLeaf className='text-3xl text-[#16C172]' />, title: "Natural Remedies", desc: "Experience the power of nature with evidence-based herbal solutions." },
  { icon: <FaHeartbeat className='text-3xl text-[#16C172]' />, title: "Holistic Healing", desc: "Integrative approaches that nurture both body and mind." },
  { icon: <FaSpa className='text-3xl text-[#16C172]' />, title: "Wellness Programs", desc: "Join our expert-designed programs for a healthier lifestyle." },
  { icon: <FaUserMd className='text-3xl text-[#16C172]' />, title: "Expert Consultation", desc: "Book a telehealth session with certified specialists." },
];

const ServiceSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div className='bg-[#FBFAF8] py-16 px-6'>
      <div className='max-w-7xl mx-auto text-center'>
        <p className='text-[#16C172] font-medium' data-aos='fade-up'>Our Services</p>
        <h2 className='text-[#214F4B] text-4xl font-bold mb-10' data-aos='fade-up'>Healing through Nature & Science</h2>
        
        {/* Services Grid */}
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-10' data-aos='fade-up'>
          {services.map((service, index) => (
            <div key={index} className='bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center transition transform hover:scale-105'>
              <div className='w-16 h-16 flex items-center justify-center bg-[#E6F8F0] rounded-full mb-4'>
                {service.icon}
              </div>
              <h3 className='text-[#214F4B] font-bold text-xl mb-2'>{service.title}</h3>
              <p className='text-gray-600'>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
