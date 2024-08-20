import React from 'react'
import logo from '../../assest/logo.png'
function Footer() {
  return (
    <div className="bg-footer-bg-color  px-1 lg:px-20">
  <div className="grid sm:grid-cols-1 lg:grid-cols-5 pt-10 lg:pt-20 gap-4  ">
    <div className=" flex  justify-center">
    <img src={logo} className='w-[500px] h-[145px]' alt="logo" />
    </div>
    <div className="flex justify-center   text-center">
      <div className=''>
      <p className='text-[#DFB849] text-[16px] font-[700] uppercase font-poppins '>Menu</p>
      <div className=' text-center flex justify-center items-center '>
        <div className='border-[#DFB849] border-b  w-12 mb-0'></div>
      </div>
      <p className='text-white  text-[13.6px] font-[400] font-poppins'>About Us</p>
      <p  className='text-white text-[13.6px] font-[400] font-poppins'>Privacy Policy</p>
      <p  className='text-white  text-[13.6px] font-[400] font-poppins'>Rules</p>
      </div>
     
    </div>
    <div className="flex justify-center   text-center">
      <div className=''>
      <p className='text-[#DFB849] text-[16px] font-[700] uppercase font-poppins '>Game Therapy</p>
      <div className=' text-center flex justify-center items-center '>
        <div className='border-[#DFB849] border-b  w-32'></div>
      </div>
      <div className='flex  mt-0.5'>
      <img src="https://parker777.io/assets/img/webfiles/18-plus-color-footer.png" alt=" logo" className='text-white w-12 h-12 my-1 text-[13.6px] font-[400] font-poppins'/>
      <img src="https://parker777.io/assets/img/webfiles/gamecare.png" alt="logo" className='text-white my-1 w-12 h-12 text-[13.6px] font-[400] font-poppins'/>
      <img src="https://parker777.io/assets/img/webfiles/gt.png" alt="logo" className='text-white my-1 w-12 h-12  text-[13.6px] font-[400] font-poppins'/>
      </div>
      
      </div>
     
    </div>
    <div className="flex justify-center   text-center">
      <div className=''>
      <p className='text-[#DFB849] text-[16px] font-[700] uppercase font-poppins '>Scan QR</p>
      <div className=' text-center flex justify-center items-center '>
        <div className='border-[#DFB849] border-b  w-20'></div>
      </div> 
      <div className='flex justify-center  items-center mt-0.5'>
      <img src="https://parker777.io/assets/img/parker777io/qr-code.png" alt=" logo" className='text-white w-[124px] lg:w-1/2 h-1/2 '/>
      </div>
     
      </div>
    </div>
    <div className=" justify-center items-center">
      <div className='flex  justify-center items-center'>
      <img src="https://parker777.io/assets/img/webfiles/ssl.png" alt="rescuse"/>
      </div>
      
      <p className='text-white text-center  text-[13.6px] font-[700] font-poppins'>100% SAFE</p>
      <p  className='text-white text-center  text-[13.6px] font-[400] font-poppins'>Protected connection and encrypted data.</p>
     
    </div>
    
  </div>
  <hr className='mt-1 border-t border-gray-900'/>
  <div>
<p className='text-center text-[15px] font-poppins capitalize font-[400] text-white py-10 items-start'>
© Copyright 2020-2021 <span className='font-[700]'>Parker777.</span>  All rights reserved
</p>
  </div>
</div>
  )
}

export default Footer