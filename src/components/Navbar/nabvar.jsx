import React from 'react'
import logo from '../../assest/logo.png'


const Navbar = () => {
  
  return <>
  <div className='w-full fixed z-20 flex text-center h-20'>
  <div className='bg-custom-blue-background w-full'>
    <div className='flex items-center sm:px-14 px-0'>
      <img src={logo} width={120} height={120} alt="logo" />
      <button className='bg-custom-yellow-background  hover:opacity-30 font-[400] text-[14px] px-4 py-1.5 rounded-[3px] ml-auto'>
        Sign In
      </button>
    </div>
  </div>
</div>

   
  </>
};

export default Navbar;