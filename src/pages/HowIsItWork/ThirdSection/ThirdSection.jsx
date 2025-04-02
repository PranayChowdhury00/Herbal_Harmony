import homo from '/homo.jpg';
import { FaCheck } from 'react-icons/fa';

const ThirdSection = () => {
    return (
        <div className='bg-[#E2DFD6]'>
            {/* center  */}
            <div className="max-w-7xl mx-auto py-20 flex gap-10">
                {/*text  */}
                <div className="w-1/2">
                <p className='text-[#16C172] font-medium'>Premium service</p>
                <h1 className='text-[#214F4B] text-4xl font-extrabold leading-snug py-7'>Experience the benefits of homeopathy</h1>
                <div className="flex gap-10 py-7">
                    <p className='text-[#214F4B] flex items-center gap-2 font-medium'><FaCheck /> Natural immunity                   </p>
                    <p className='text-[#214F4B] flex items-center gap-2 font-medium'><FaCheck /> Lasting benefits                   </p>
                </div>
                <p className='text-[#214F4B] font-light py-7'>Four hundred and fifty-six (456) patient visits were compared: 281 received homeopathy, 175 received conventional medicine. The response to treatment as measured by the primary outcomes criterion for patients receiving homeopathy was 82.6%, for conventional medicine it was 68%.</p>
                </div>
                {/* img */}
                <div className="w-1/2">
                <img className='rounded-xl' src={homo} alt="" /></div>
            </div>
        </div>
    );
};

export default ThirdSection;