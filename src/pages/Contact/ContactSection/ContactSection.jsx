import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ContactSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      offset: 120,
    });
  }, []);

  return (
    <div className="bg-[#F7F3E3] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-[#214F4B] text-center mb-10" data-aos="fade-up">
        Let's connect
        </h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Side - Map */}
          <div className="w-full" data-aos="fade-right">
            <iframe 
              className="w-full h-[400px] rounded-lg shadow-lg" 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345086205!2d144.9537353153188!3d-37.81627977975179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf4c923c2c1af57a3!2sMelbourne%20Central!5e0!3m2!1sen!2sau!4v1633077290931!5m2!1sen!2sau" 
              allowFullScreen="" 
              loading="lazy"
            ></iframe>
          </div>

          {/* Right Side - Contact Form */}
          <form className="bg-white p-8 rounded-lg shadow-lg" data-aos="fade-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label className="block text-[#214F4B] font-medium mb-2">Full Name</label>
                <input 
                  type="text" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#16C172] outline-none" 
                  placeholder="Enter your name"
                />
              </div>

              {/* Address */}
              <div>
                <label className="block text-[#214F4B] font-medium mb-2">Address</label>
                <input 
                  type="text" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#16C172] outline-none" 
                  placeholder="Enter your address"
                />
              </div>
            </div>

            {/* Email */}
            <div className="mt-6">
              <label className="block text-[#214F4B] font-medium mb-2">Email</label>
              <input 
                type="email" 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#16C172] outline-none" 
                placeholder="Enter your email"
              />
            </div>

            {/* Message */}
            <div className="mt-6">
              <label className="block text-[#214F4B] font-medium mb-2">Message</label>
              <textarea 
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#16C172] outline-none resize-none h-32" 
                placeholder="Write your message..."
              ></textarea>
            </div>

            {/* Send Button */}
            <div className="mt-8 text-center">
              <button 
                type="submit" 
                className="bg-[#16C172] text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-[#139a5c] transition-all duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
