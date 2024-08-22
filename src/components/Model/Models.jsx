import React, { useState } from 'react';
import logo from '../../assest/logo.png';
import { RxCross2 } from "react-icons/rx";
import { IoMdEye } from "react-icons/io";
import { BsAndroid2 } from "react-icons/bs";

function Modal({ showModal, handleClose, formType }) {
  if (!showModal) return null;

  const isLogin = formType === 'login';

  return (
    <div onClick={handleClose} className="fixed inset-0 w-auto bg-black bg-opacity-50 flex items-center justify-center z-50">
  <div
    className={`bg-custom-blue-background -mt-20 ${isLogin
      ? "lg:w-[500px] lg:h-[450px] mt-6 lg:-mt-24 p-2"  // When isLogin is true (Login modal)
      : "lg:w-[600px] lg:h-[560px] mt-10 lg:mt-4 p-2"  // When isLogin is false (Register modal)
    } rounded-lg shadow-lg p-6 relative`}
    onClick={(e) => e.stopPropagation()}  // Add this line to stop click propagation
  >
    <button
      className="absolute top-4 right-2 font-ubuntu font-extrabold text-[20px] text-white"
      onClick={handleClose}
    >
      <RxCross2 />
    </button>
    <div className="text-center flex justify-center items-center">
      <img src={logo} className="w-[200px] h-[120px] -mt-2 " alt="logo" />
    </div>
    <form className="mt-4  flex flex-col space-y-2  overflow-x-scroll scrollbar-hide">
      {!isLogin && (
        <>
          <label className="text-[14px] font-poppins text-white font-[700]">Username</label>
          <input
            type="text"
            placeholder="Username"
            className="p-2 text-gray-800   rounded-md text-[16px] font-[400] font-poppins"
          />
        </>
      )}
      <label className="text-[14px] font-[700] font-poppins text-white">Mobile Number</label>
      <input
        type="email"
        placeholder="Email"
        className="p-2 mb-2 text-gray-800  rounded-md text-[16px] font-[400] font-poppins"
      />

      <label className="text-[16px] font-[700] font-poppins text-white">Password</label>
      <div className="flex">
        <div className="relative w-full">
          <input
            type="password"
            id="location-search"
            className="p-2 pr-10 text-gray-800  rounded-md text-[16px] font-[400] font-poppins w-full"
            placeholder="Password"
            required
          />
          <button type="button" className="absolute top-0 end-0 h-full p-2.5 text-sm font-medium text-white bg-custom-yellow-background rounded-r-md">
            <IoMdEye className="h-5 w-5 text-white" />
          </button>
        </div>
      </div>

      {isLogin && (
       <label className="flex items-center space-x-2 my-5">
       <div className="relative flex items-center">
         <input
           type="checkbox"
           id="keep-signed-in"
           className="hidden"
           defaultChecked
         />
         <div className="h-5 w-5 bg-custom-yellow-background border border-gray-400 hover:border-2 hover:border-yellow-500 rounded-sm flex items-center justify-center">
           <input
             type="checkbox"
             className="absolute text-20px  inset-0 opacity-0 cursor-pointer"
             defaultChecked
             onChange={(e) => e.target.checked}
           />
           <svg
             className="w-3 h-3 text-white"
             fill="none"
             stroke="currentColor"
             viewBox="0 0 24 24"
             xmlns="http://www.w3.org/2000/svg"
           >
             <path
               strokeLinecap="round"
               strokeLinejoin="round"
               strokeWidth="2"
               d="M5 13l4 4L19 7"
             />
           </svg>
         </div>
       </div>
       <span className="text-[16px] font-[700] font-poppins text-white">
         Keep me signed in
       </span>
     </label>
     
      )}


      

      {!isLogin && (
        <>
          <label className="text-[16px] font-[700] font-poppins text-white">Confirm Password</label>
          <div className="relative w-full">
            <input
              type="password"
              id="location-search"
              className="p-2 pr-10 text-gray-800  rounded-md text-[16px] font-[400] font-poppins w-full"
              placeholder="Confirm Password"
              required
            />
            <button type="button" className="absolute top-0 end-0 h-full p-2.5 text-sm font-medium text-white bg-custom-yellow-background rounded-r-md">
              <IoMdEye className="h-5 w-5 text-white" />
            </button>
          </div>
        </>
      )}
      <div className='h-2 mt-3'></div>
      <button type="submit" className="bg-custom-yellow-background  text-white p-2 rounded-md hover:opacity-50">
        {isLogin ? "Login" : "Register"}
      </button>

      <div className='flex justify-center space-x-2 items-center '>
        <BsAndroid2 className='text-customTextColor-android text-bold font-[400] text-[30px]'/>
        <p className='text-white'> Download Apk</p>
      </div>
    </form>
  </div>
</div>

  );
}

export default Modal;
