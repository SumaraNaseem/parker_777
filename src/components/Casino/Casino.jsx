import React from 'react'
import Sidebar from '../Sidebar/Sidebar';
import Table from '../../components/Table/Table'
import Cards from '../Cards/Cards';
import { IoTennisballOutline } from "react-icons/io5";

function Casino() {
  return (
    <div className="">
    <div className=" flex  min-w-fit py-1 gap-1">
        <div className='hidden lg:block '>
         <Sidebar />
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1">
        <div className="mt-2 w-full p-2 bg-custom-yellow-background mx-1 mr-1 lg:mx-0">
        <p className="text-[14px] text-center  lg:text-[16px] font-[700] font-ubuntu uppercase text-black">
       Live Casino
        </p>
    
  </div>
{/* <Table/> */}
<Cards/>

</div>
    </div> 
  </div>
  )
}

export default Casino