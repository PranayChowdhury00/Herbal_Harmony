import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img4 from '/flos-24.jpg';

const SixthSection = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration
            easing: 'ease-in-out', // Easing for smooth animations
            once: false, // Ensures the animation triggers every time the element comes into the viewport
        });
    }, []);

    return (
        <div className='bg-[#FBFAF8] py-16'>
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6 md:px-10">
                
                {/* Image Section with AOS Animation */}
                <div className="md:w-1/2" data-aos="fade-right" data-aos-duration="1000">
                    <img src={img4} alt="Detox Program" className='w-full h-[450px] md:h-[500px] rounded-2xl object-cover shadow-lg' />
                </div>

                {/* Text Section with AOS Animation */}
                <div className="md:w-1/2 text-center md:text-left space-y-5" data-aos="fade-up" data-aos-duration="1000">
                    <p className='text-[#16C172] font-semibold text-lg uppercase'>Limited time</p>
                    <h2 className='text-[#214F4B] text-3xl md:text-4xl font-bold leading-snug'>
                        Join our 28-day Gut Green Detox Online Program
                    </h2>
                    
                    <button className='bg-[#16C172] text-white font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out hover:text-[#214F4B] hover:bg-white shadow-md'>
                        Join the Program
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SixthSection;
