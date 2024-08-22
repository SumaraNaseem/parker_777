import React from 'react'
import {MainGamesImage} from '../../data/data'
import { TbPlayFootball } from "react-icons/tb";
import { RiArrowDropDownLine } from "react-icons/ri";

function MainGame() {
  return (
    <>
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-1">
       {MainGamesImage?.map((image, index) => (
       <div className=' flex items-center'>
    
        <div key={index} className="relative w-full">
            <img
                // onClick={() => handleOpenModal('login')}
                src={image.image_game}
                alt={`Image ${index + 1}`}
                className="w-full h-1/2 object-cover"
            />
            <div className='absolute bottom-0 w-full bg-custom-yellow-background text-center py-1'>
                <p className='text-[15px] font-[800] font-ubuntu text-white capitalize'>{image.label}</p>
            </div>
        </div>
   
</div>
 ))}

    </div>
    <div className='mt-2 w-full p-2 bg-custom-yellow-background'>
        <div className='flex justify-between '>
            <div className='flex space-x-2 items-center'>
                <p className='text-[14px] font-[600] font-poppins uppercase text-black'>Cricket</p>
                <TbPlayFootball className='font-[600] text-[20px]'/>
            </div>
            <div className='flex justify-center items-center space-x-2'>
                <p className='text-[12px] font-poppins text-[#343A40] font-[600]'>Veiw by:</p>
            <div class="flex flex-col space-y-2">
 
  <select id="dropdown" class="border bg-custom-blue-background text-white uppercase outline-none  rounded-sm  shadow-sm">
    
    <option className='uppercase' value="Competition">Competition</option>
    <option  className='uppercase' value="Time">Time</option>
  
    <RiArrowDropDownLine/>

 
    
    
  </select>
</div>
            </div>

        </div>
    </div>
    </>
  )
}

export default MainGame