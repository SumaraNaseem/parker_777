import React from 'react'

function RightSideCard() {
  return (
    <div className='space-y-1 overflow-hidden'>
   
    {Array.from({ length: 3 }).map((_, index) => (
        <div className="relative w-full overflow-hidden ">
      <div key={index} className="relative group">
        <div className="transition-transform duration-300 ease-in-out group-hover:scale-110">
          <img
            src="https://parker777.io/assets/img/andar-bahar.jpg"
            alt="image"
            className="w-full h-full object-cover"
          />
        </div>
  
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
          <button className="p-1 rounded-sm border-2 text-white border-gray-100 shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-2xl">
            Play
          </button>
        </div>
      </div>
      </div>
    ))}
    </div>
 
  
  
  )
}

export default RightSideCard