import React, { useState } from 'react';
import Navbar from '../../components/Navbar/nabvar';
import Navbarsec from '../../components/Navbarsec/Navbarsec';
import Sidebar from '../../components/Sidebar/Sidebar';
import MainGame from '../../components/MainGame/MainGame';

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
    <div><Navbar/>
    <Navbarsec/> 
    <div class="grid grid-cols-12 space-x-2 my-2 ">
  <div class="col-span-2"><Sidebar/></div>
  <div class="col-span-7"><MainGame/></div>
  <div class="col-span-3 ">
  <div className="relative w-full h-[200px] overflow-hidden">
  <img
    src="https://parker777.io/assets/img/casino/auragaming.png"
    alt="image"
    className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
  />
  <div className="absolute inset-0 flex items-center justify-center">
    <button className="p-4 bg-white rounded-full shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-2xl">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-8 h-8 text-gray-700"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M14 10l-6 6M14 10l-6-6M14 10V3" />
      </svg>
    </button>
  </div>
</div>


</div>
</div>
    </div>
  )
}

export default Page