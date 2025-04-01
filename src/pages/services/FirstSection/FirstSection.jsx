import { FaCheck } from "react-icons/fa";

const FirstSection = () => {
    return (
        <div className="bg-[#214F4B] h-[200px] p-8 flex items-center">
            <div className="max-w-5xl mx-auto flex justify-between items-center w-full">
                {/* Heading */}
                <h1 className="text-white font-bold leading-snug text-3xl w-2/3">
                    Are you unable to visit? Book an online Telehealth consultation
                </h1>

                {/* Circular Button */}
                <div className="relative w-32 h-32 bg-white rounded-full flex flex-col items-center justify-center shadow-lg border border-gray-300 text-center p-4">
                    {/* Checkbox in center */}
                    <div className="w-8 h-8 bg-[#16C172] flex items-center justify-center rounded-full text-white mb-1">
                        <FaCheck className="text-lg" />
                    </div>

                    {/* Wrapped Text inside Circle */}
                    <p className="text-[#214F4B] font-semibold text-sm leading-tight">
                        Book a free call here
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FirstSection;
