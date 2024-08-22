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
      <div class="grid grid-cols-[2fr_7.5fr_2.5fr] space-x-2 mt-2 ">
        <div class="col-span-1"><Sidebar /></div>
        <div class="col-span-1"><MainGame /></div>
        <div class="col-span-1"><RightSideCard /></div>
      </div>
    </div>
  )
}

export default Page