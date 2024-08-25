import React, { useState, useEffect } from 'react';
import { TbPlayFootball } from "react-icons/tb";
function Upcoming() {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentDateTime(new Date());
        }, 1000); // Update every second
    
        return () => clearInterval(interval); // Cleanup on unmount
      }, []);
  return (
    <>
    
  <div class="w-full overflow-x-auto px-1 lg:px-0">
          <div class="w-full overflow-x-auto">
            {/* <table class="table-auto min-w-full">
              <thead className='lg:hidden sm:block'>
                <div className='flex justify-start '>
                  <p class="text-white text-[18px] font-[600]"> Compitation</p>
                </div>
              </thead>
              <thead className='hidden lg:block w-full'>
                <div className='flex justify-end items-center  '>
                  <p class="text-white text-[18px] font-[600] pr-24 text-left"> 1 </p>
                  <p class="text-white  text-[18px] font-[600] pr-20  text-left"> x </p>
                  <p class="text-white text-[18px] font-[600] pr-9  text-left"> 2</p>
                </div>
              </thead>
              <tbody className="bg-white">
                {Array.from({ length: 25 }).map((_, index) => (
                  <tr className="bg-white flex flex-wrap sm:flex-nowrap md:flex-nowrap">
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
                        <div className="flex space-x-2 justify-end">
                          <img className="w-5 h-5" src="https://parker777.io/assets/img/icons/bm.svg" alt="b logo" />
                          <img className="w-5 h-5" src="https://parker777.io/assets/img/icons/tv.svg" alt="b logo" />
                          <img className="w-5 h-5" src="https://parker777.io/assets/img/fancy-icon.svg" alt="b logo" />
                        </div>
                      </div>
                    </td>
                    <td className="border text-center p-2 bg-tablecolor-blue sm:w-fit sm:inline-block max-w-[100%] w-1/6">1.59</td>
                    <td className="border text-center p-2 bg-tableColor-pink sm:w-fit sm:inline-block max-w-[100%] w-1/6">1.57</td>
                    <td className="border text-center p-2 bg-tablecolor-blue sm:w-fit sm:inline-block max-w-[100%] w-1/6">3.15</td>
                    <td className="border text-center p-2 bg-tableColor-pink sm:w-fit sm:inline-block max-w-[100%] w-1/6">3.2</td>
                    <td className="border text-center p-2 bg-tablecolor-blue sm:w-fit sm:inline-block max-w-[100%] w-1/6">19.5</td>
                    <td className="border text-center p-2 bg-tableColor-pink sm:w-fit sm:inline-block max-w-[100%] w-1/6">20</td>
                  </tr>
                ))}
              </tbody>
            </table> */}
            <div className='bg-white mt-2 p-[5px]'>
              <div className='bg-custom-yellow-background'>
                <p className='uppercase text-[#343A40] px-2 text-[14px] font-[600] font-ubuntu'>Upcoming Horse Racing</p>
              </div>
              <div className='overflow-scroll min-w-[300px] max-w-full h-auto scrollbar-hide whitespace-nowrap flex space-x-1 py-2'>
                {Array.from({ length: 4 }).map((_, index) => (
                  <div key={index} className="w-28 bg-[#F1F1F1] rounded-md flex-none">
                    <div className='flex items-center m-1'>
                      <img className='w-10 h-6' src='https://flagcdn.com/h40/za.png' alt="image" />
                      <div className='px-2'>
                        <p className='text-[11.9px] font-[600] font-poppins'>09:20 PM</p>
                        <p className='text-[12px] font-[400] font-poppins'>7f Hcap</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className='bg-custom-yellow-background'>
                <p className='uppercase text-[#343A40] px-2 text-[14px] font-[600] font-ubuntu'>Upcoming Greyhound Racing</p>
              </div>
              <div className='overflow-scroll min-w-[300px] max-w-full h-auto scrollbar-hide whitespace-nowrap flex space-x-1 py-2 '>
                {Array.from({ length: 10 }).map((_, index) => (
                  <div key={index} className="w-28  bg-[#F1F1F1] rounded-md flex-none">
                    <div className='flex items-center m-1'>
                      <img className='w-10 h-6' src='https://flagcdn.com/h40/za.png' alt="image" />
                      <div className='px-2'>
                        <p className='text-[11.9px] font-[600] font-poppins'>09:20 PM</p>
                        <p className='text-[12px] font-[400] font-poppins'>7f Hcap</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        </>
   
  )
}

export default Upcoming