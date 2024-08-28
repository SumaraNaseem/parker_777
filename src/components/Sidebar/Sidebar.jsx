import React, { useState } from "react";
import { FaChevronDown, FaLink } from "react-icons/fa";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { sideBarLinks } from "../../data/data";
import { useLocation } from "react-router-dom";

const Sidebar = ({ burgerState }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubDropdown, setOpenSubDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
    setOpenSubDropdown(null); // Close sub-dropdown when main dropdown toggles
  };

  const toggleSubDropdown = (index) => {
    setOpenSubDropdown(openSubDropdown === index ? null : index);
  };
  const location = useLocation();
  console.log("location", location.pathname);
  return (
    <div
      className={`h-[100%] ${
        location.pathname === "/" ? "hidden" : "block"
      }  transform transition-all duration-500 ease-in-out ${
        burgerState ? "w-[230px]" : "w-[50px]"
      } sticky top-0 bg-sidebar-bg-color text-white`}
    >
      <ul className="space-y-0.2">
        {sideBarLinks.map((item, index) => (
          <li key={index} className="relative bg-sidebar-bg-color">
            <button
              onClick={() => toggleDropdown(index)}
              className="w-full py-2 px-4 text-left border-b border-b-slate-800 flex justify-between items-center bg-sidebar-bg-color hover:bg-gray-700"
            >
              <span className="flex items-center">
                <span className={`mr-2 ${burgerState ? "" : "py-2"}`}>
                  {item.icon}
                </span>
                {burgerState && item.name}
              </span>
              {openDropdown === index ? (
                <MdArrowForwardIos />
              ) : (
                <MdArrowBackIos />
              )}
            </button>
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
                      {openDropdown === index ? (
                        <MdArrowForwardIos />
                      ) : (
                        <MdArrowBackIos />
                      )}
                    </button>
                    {openSubDropdown === subIndex && (
                      <ul className="bg-gray-600">
                        {Array.from({ length: 3 }, (_, subSubIndex) => (
                          <li
                            key={subSubIndex}
                            className="py-2 px-4 text-left flex items-center hover:bg-gray-500"
                          >
                            <FaLink className="mr-2" /> Sub-dropdown{" "}
                            {subSubIndex + 1}
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
