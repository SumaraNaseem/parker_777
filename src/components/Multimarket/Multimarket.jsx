import React, { useState, useEffect } from 'react';
// import { MainGamesImage } from '../../data/data';
import { FaTelegramPlane } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
// import { RiArrowDropDownLine } from "react-icons/ri";
// import RightSideCard from '../../components/RightSideCard/RightSideCard';
// import Table from '../../components/Table/Table';
// import { GiCricketBat } from "react-icons/gi";
// import Cards from '../Cards/Cards';
// import Upcoming from '../Upcomming/upcomming';
import Matches from '../Matches/Matches'
function Multimarket() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [selectedOption, setSelectedOption] = useState('Competition');
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);
  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <>
   <div class="grid grid-cols-12 gap-1 ">
  <div className="col-span-12 lg:col-span-8 ">
    <div className=" w-[100%] p-2 bg-custom-yellow-background mx-1 mr-1 lg:mx-0">
    <div className="flex justify-between">
      <div className="flex space-x-1 items-center">
        <p className="text-[12px] lg:text-[14px] font-[600] font-poppins uppercase text-black">
        Al-Fateh (KSA) v Al Ahli
        </p>
      </div>
      <div className="flex justify-center items-center space-x-2">
        <p className="text-[12px] lg:text-[14px] font-[600] font-poppins uppercase text-black">
        {currentDateTime.toLocaleDateString()} {currentDateTime.toLocaleTimeString()}
        </p>
      </div>
    </div>
  </div>
  <div className=" w-[100%] p-2  mx-1 mr-1 lg:mx-0">
    <div className="flex justify-between">
      <div className="flex space-x-1 items-center">
        <p className="text-[12px] lg:text-[14px] font-[600] font-poppins uppercase text-white">
        <FaTelegramPlane />
        </p>
        <p className="text-[12px] lg:text-[13px]  font-[700] font-poppins uppercase text-white">
        Match Odds
        </p>
        <p className="text-[16px] lg:text-[16px] text-yellow-500 font-[600] font-poppins uppercase  rounded-full ">
        <FaInfoCircle/>
        </p>
      </div>
      <div className="flex justify-center items-center space-x-2">
        <p className="text-[12px] lg:text-[11px] font-[600] font-poppins uppercase text-white">
        Min: 100 | Max: 25 k
        </p>
      </div>
    </div>
  </div>
  <table className="table-auto min-w-full">
       {selectedOption === 'Competition' && (
       <thead className='grid grid-cols-12 items-center'>
       {/* First column (spanning 9 columns) */}
       <div className='col-span-8 flex'>
         <p className="text-white py-1 text-[16px] font-[600]">Matched: 4161.36</p>
       </div>
     
       {/* Second column (spanning 3 columns) */}
       <div className='col-span-3 flex  justify-center items-center '>
         <p className="text-white px-2 w-1/3  text-center py-2 border border-zinc-50 bg-[#98D4FF]  text-[13px] uppercase font-[600]">Black</p>
         <p className="text-white  px-2 w-1/3 py-2 text-center border border-zinc-50 bg-[#FFC3D0] text-[13px] uppercase font-[600]">Lay</p>
       </div>
     </thead>
      )}

        <tbody className="bg-white">
          {Array.from({ length: 3 }).map((_, index) => (
            <tr key={index} className="bg-white flex flex-wrap sm:flex-nowrap md:flex-nowrap">
              <td className="border min-w-[320px] max-w-full flex-grow p-[5px] flex flex-col">
                <div className="flex items-center justify-between h-full w-full">
                  <div>
                    <div className="flex items-center">
                      <p className="pr-1 text-[11px] font-[400] font-poppins">{currentDateTime.toLocaleDateString()}</p>
                      <p className="pr-1 text-[11px] font-[400] font-poppins">{currentDateTime.toLocaleTimeString()}</p>
                      <div className="bg-green-400 rounded-full flex justify-center items-center ml-1 text-green-400">
                        <p className="h-2 w-2"></p>
                      </div>
                    </div>
                    <p className="pr-1 text-[13px] font-[600] font-poppins">Pakistan v Bangladesh</p>
                  </div>
                  {/* <div className="flex space-x-2 justify-end">
                    <img className="w-5 h-5" src="https://parker777.io/assets/img/icons/bm.svg" alt="b logo" />
                    <img className="w-5 h-5" src="https://parker777.io/assets/img/icons/tv.svg" alt="b logo" />
                    <img className="w-5 h-5" src="https://parker777.io/assets/img/fancy-icon.svg" alt="b logo" />
                  </div> */}
                </div>
              </td>
              <td className="border text-center p-2 px-2 bg-tablecolor-blue sm:w-fit sm:inline-block max-w-[100%] w-1/6">1.59</td>
              <td className="border text-center p-2 px-2 bg-tableColor-pink sm:w-fit sm:inline-block max-w-[100%] w-1/6">1.57</td>
              <td className="border text-center p-2 px-2 bg-tablecolor-blue sm:w-fit sm:inline-block max-w-[100%] w-1/6">3.15</td>
              <td className="border text-center p-2 px-2 bg-tableColor-pink sm:w-fit sm:inline-block max-w-[100%] w-1/6">3.12</td>
              <td className="border text-center p-2 px-2 bg-tablecolor-blue sm:w-fit sm:inline-block max-w-[100%] w-1/6">19.5</td>
              <td className="border text-center p-2 px-2 bg-tableColor-pink sm:w-fit sm:inline-block max-w-[100%] w-1/6">20.1</td>
            </tr>
          ))}
        </tbody>
      </table>

  </div>
  <div class="hidden lg:block lg:col-span-4 px-1 lg:px-0 ">
   <Matches/>
  </div>
</div>

        
   
    </>
  );
}

export default Multimarket;