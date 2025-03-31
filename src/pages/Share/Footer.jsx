import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#214F4B] text-white py-10 ">
      <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Harbal Harmony</h2>
          <p className="text-gray-300">
            We provide top-notch integrative medicine solutions to help you heal and thrive. Your health is our priority.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li className="hover:text-[#16C172] cursor-pointer">Home</li>
            <li className="hover:text-[#16C172] cursor-pointer">Services</li>
            <li className="hover:text-[#16C172] cursor-pointer">About</li>
            <li className="hover:text-[#16C172] cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p className="text-gray-300">Email: pranaychowdhury00@gamil.com</p>
          <p className="text-gray-300">Phone: +8801303572144</p>
          <p className="text-gray-300">Address: Dhaka,Bangladesh</p>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4">
            <FaFacebookF className="cursor-pointer hover:text-[#16C172] text-xl" />
            <FaTwitter className="cursor-pointer hover:text-[#16C172] text-xl" />
            <FaInstagram className="cursor-pointer hover:text-[#16C172] text-xl" />
            <FaLinkedinIn className="cursor-pointer hover:text-[#16C172] text-xl" />
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-500 mt-8 pt-5 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;