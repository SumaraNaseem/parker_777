import React, { useState } from 'react';
import { FaChevronDown, FaLink } from 'react-icons/fa';
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { sideBarLinks } from '../../data/data';

const Sidebar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubDropdown, setOpenSubDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
    setOpenSubDropdown(null); // Close sub-dropdown when main dropdown toggles
  };

  const toggleSubDropdown = (index) => {
    setOpenSubDropdown(openSubDropdown === index ? null : index);
  };

  return (
    <div className="h-[100%] w-[230px] sticky top-0 bg-sidebar-bg-color text-white">
      <ul className="space-y-0.2">
        {sideBarLinks.map((item, index) => (
          <li key={index} className="relative bg-sidebar-bg-color">
            <button
              onClick={() => toggleDropdown(index)}
              className="w-full py-2 px-4 text-left border-b border-b-slate-800 flex justify-between items-center bg-sidebar-bg-color hover:bg-gray-700"
            >
              <span className="flex items-center">
                <span className="mr-2">{item.icon}</span> {item.name}
              </span>
              {/* Conditionally render the icon based on openDropdown */}
              {openDropdown === index ? <MdArrowForwardIos /> : <MdArrowBackIos />}
            </button>
            {/* Dropdown content */}
            {openDropdown === index && (
              <ul className="bg-gray-700">
                {Array.from({ length: 3 }, (_, subIndex) => (
                  <li key={subIndex} className="relative">
                    <button
                      className="w-full py-2 px-4 text-left flex justify-between items-center hover:bg-gray-600"
                      onClick={() => toggleSubDropdown(subIndex)}
                    >
                      <span className="flex items-center">
                        <FaLink className="mr-2" /> Dropdown {subIndex + 1}
                      </span>
                      <FaChevronDown />
                    </button>
                    {/* Sub-dropdown content */}
                    {openSubDropdown === subIndex && (
                      <ul className="bg-gray-600">
                        {Array.from({ length: 3 }, (_, subSubIndex) => (
                          <li
                            key={subSubIndex}
                            className="py-2 px-4 text-left flex items-center hover:bg-gray-500"
                          >
                            <FaLink className="mr-2" /> Sub-dropdown {subSubIndex + 1}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
