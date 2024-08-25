import React, { useState } from "react";
import logo from "../../assest/logo.png";
import Modal from "../../components/Model/Models";
import { Link } from "react-router-dom";

const Navbar = ({ setSaleemState, saleemState }) => {
  const [showModal, setShowModal] = useState(false);
  const [formType, setFormType] = useState("login"); // 'login' or 'register'

  const handleOpenModal = (type) => {
    setFormType(type);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <div className="w-full fixed z-20  flex text-center h-20">
        <div className="bg-custom-blue-background sm:px-14 px-0 flex justify-between items-center w-full">
          <div className="flex items-center  ">
            <Link to="/">
              <img src={logo} width={120} height={120} alt="logo" />
            </Link>
            <button onClick={() => setSaleemState(!saleemState)}>SALEEM</button>
          </div>
          <div className="space-x-2">
            <button
              onClick={() => handleOpenModal("login")}
              className="bg-custom-yellow-background  hover:opacity-40 font-[400] text-[14px] px-4 py-1.5 rounded-[3px] ml-auto"
            >
              Sign In
            </button>
            <button
              onClick={() => handleOpenModal("register")}
              className="bg-custom-yellow-background  hover:opacity-40 font-[400] text-[14px] px-4 py-1.5 rounded-[3px] ml-auto"
            >
              Sign UP
            </button>
          </div>
        </div>
      </div>
      <Modal
        showModal={showModal}
        handleClose={handleCloseModal}
        formType={formType}
      />
    </>
  );
};

export default Navbar;
