import React, { useState } from 'react';
import logo from '../../assest/logo.png';
import { RxCross2 } from "react-icons/rx";

function Modal({ showModal, handleClose, formType }) {
  if (!showModal) return null;

  const isLogin = formType === 'login';

  return (
    <div className="fixed inset-0 w-auto bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className={`bg-custom-blue-background -mt-20  ${!isLogin === "login" ? "w-[400px] h-[300px]":" w-[455px] h-[400px]"} rounded-lg shadow-lg p-6 relative`}>
        <button className="absolute top-4 right-2 font-ubuntu font-extrabold text-[20px] text-white" onClick={handleClose}>
          <RxCross2/>
        </button>
        <div className="text-center flex justify-center items-center">
          <img src={logo} className='w-[200px] h-[120px] -mt-2' alt="logo" />
        </div>
        <form className="mt-8 flex flex-col space-y-4">
          {!isLogin && (
            <input type="text" placeholder="Your Name" className="p-2 border rounded-md" />
          )}
          <input type="email" placeholder="Your Email" className="p-2 border rounded-md" />
          {!isLogin && (
            <textarea placeholder="Your Message" className="p-2 border rounded-md h-24"></textarea>
          )}
          <input type="password" placeholder="Your Password" className="p-2 border rounded-md" />
          {!isLogin && (
            <input type="password" placeholder="Confirm Password" className="p-2 border rounded-md" />
          )}
          <button type="submit" className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
            {isLogin ? 'Login' : 'Register'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Modal;