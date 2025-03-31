import React from 'react';

const FifthSection = () => {
    return (
        <div className='bg-[#214F4B] py-10'>
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 md:px-10 gap-5">
                
                {/* Responsive Text */}
                <p className='text-white font-bold text-center md:text-left text-xl md:text-4xl leading-tight'>
                    Are you unable to visit? Book an online <br /> Telehealth consultation.
                </p>

                {/* Call-to-Action Button */}
                <button className='bg-[#16C172] text-white font-semibold py-3 px-6 rounded-lg transition duration-300 ease-in-out hover:text-[#214F4B] hover:bg-white shadow-md'>
                    Book Appointment
                </button>
            </div>
        </div>
    );
};

export default FifthSection;
