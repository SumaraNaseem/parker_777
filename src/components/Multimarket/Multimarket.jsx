import React, { useState, useEffect } from 'react';
// import { MainGamesImage } from '../../data/data';
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
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-1 px-1 lg:px-0">
     <h1>hlo yum yum </h1>
    </div>
    {/* <div className="mt-2 w-[100%] p-2 bg-custom-yellow-background mx-1 mr-1 lg:mx-0">
    <div className="flex justify-between">
      <div className="flex space-x-1 items-center">
        <p className="text-[12px] lg:text-[14px] font-[600] font-poppins uppercase text-black">
          Cricket
        </p>
        <GiCricketBat className="font-[600] text-[20px]" />
      </div>
      <div className="flex justify-center items-center space-x-2">
        <p className="text-[12px] font-poppins text-[#343A40] font-[600]">
          View by:
        </p>
        <div className="flex flex-col space-y-2">
          <select
            id="dropdown"
            className="border bg-custom-blue-background text-white uppercase text-[13px] font-[500] outline-none rounded-sm shadow-sm"
            onChange={handleSelectChange}
            value={selectedOption}
          >
            <option className="uppercase text-[13px] font-[500]" value="Competition">
              Competition
            </option>
            <option className="uppercase text-[13px] font-[500]" value="Time">
              Time
            </option>
          </select>
          
        </div>
      </div>
    </div>
  </div> */}
  {/* <Table selectedOption={selectedOption} />  */}
  {/* <Upcoming/> */}
  </div>
  <div class="hidden lg:block lg:col-span-4 px-1 lg:px-0 ">
   <Matches/>
  </div>
</div>
{/* <Cards/> */}
        
   
    </>
  );
}

export default Multimarket;