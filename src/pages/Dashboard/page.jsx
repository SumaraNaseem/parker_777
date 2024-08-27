import React, { useState } from "react";
import LayOut from "../../components/Layout/Layout";

function Page({ burgerState }) {
  const [activeItem, setActiveItem] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [subDropdownOpen, setSubDropdownOpen] = useState(null);
  const [images, setImages] = useState(true);

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
    <div>
      <LayOut burgerState={burgerState} />
    </div>
  );
}

export default Page;
