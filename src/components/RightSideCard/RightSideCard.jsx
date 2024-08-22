import React from 'react'

function RightSideCard() {
  return (
    <div className="relative w-full h-[200px] overflow-hidden group">
    <div className="group-hover:opacity-75 transition-opacity duration-300">
      <img
        src="https://parker777.io/assets/img/casino/auragaming.png"
        alt="image"
        className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110"
      />
      <div className=' w-full -mt-20 py-2 bg-[#FBB03B]'>
        <p className='uppercase text-[20px] font-[600]'>Ander bahar</p>
      </div>
    </div>
  
    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
      <button className="p-2 rounded-sm border-2 text-white border-gray-100 shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-2xl">
        Play
      </button>
    </div>
  </div>
  
  )
}

export default RightSideCard