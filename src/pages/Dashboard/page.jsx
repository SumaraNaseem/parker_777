import React, { useState } from 'react';
import Navbar from '../../components/Navbar/nabvar';
import Navbarsec from '../../components/Navbarsec/Navbarsec';
import Sidebar from '../../components/Sidebar/Sidebar';
import MainGame from '../../components/MainGame/MainGame';
import RightSideCard from '../../components/RightSideCard/RightSideCard';

function Page() {
  const [activeItem, setActiveItem] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [subDropdownOpen, setSubDropdownOpen] = useState(null);

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  const toggleDropdown = (item) => {
    setDropdownOpen(dropdownOpen === item ? null : item);
  };

  const toggleSubDropdown = (item) => {
    setSubDropdownOpen(subDropdownOpen === item ? null : item);
  };
  return (
    <div><Navbar />
      <Navbarsec />
      <div className="grid grid-cols-12 gap-2">
        <div className="hidden sm:block md:col-span-3 lg:col-span-2 xl:col-span-2">
          <Sidebar />
        </div>

        <div className="col-span-12 md:col-span-9 lg:col-span-10 xl:col-span-10 grid grid-cols-10 gap-2">
          <div className="col-span-12 md:col-span-8 lg:col-span-8 xl:col-span-8">
            <MainGame />
          </div>
          <div className="hidden sm:block md:col-span-2 lg:col-span-2 xl:col-span-2 ">
            <RightSideCard />
          </div>
         {/* {Array.from({ length: 11 }).map((_, index) => (
            <div className="col-span-2 lg:col-span-10 mr-2 grid grid-cols-6 gap-1 ">

              <div className=''>
                <img src="https://parker777.io/assets/img/casino1/aura-gaming-lobby.webp" alt="Image 1" className="w-full h-full object-cover" />
              </div>

              <div className=''>
                <img src="https://tezcdn.com/casino/67720.webp" alt="Image 2" className="w-full h-full object-cover" />
              </div>

              <div className=''>
                <img src="https://tezcdn.com/casino/67670.webp" alt="Image 3" className="w-full h-full object-cover" />
              </div>

              <div className=''>
                <img src="https://tezcdn.com/casino/56767.webp" alt="Image 4" className="w-full h-full object-cover" />
              </div>

              <div className=''>
                <img src="https://tezcdn.com/casino/56768.webp" alt="Image 5" className="w-full h-full object-cover" />
              </div> 

              <div className=''>
                <img src="https://tezcdn.com/casino/67630.webp" alt="Image 6" className="w-full h-full object-cover" />
              </div>

            </div>
          ))} */}

        </div>

      </div>


    </div>
  )
}

export default Page