import React from 'react'
import Navbar from '../../components/Navbar/nabvar';
import Navbarsec from '../../components/Navbarsec/Navbarsec';
import Sidebar from '../../components/Sidebar/Sidebar';
import MainGame from '../../components/MainGame/MainGame';

function page() {
  return (
    <div><Navbar />
    <Navbarsec />
    <div className="grid grid-cols-12 gap-2">
      {/* <div className="col-span-2 hidden sm:block bg-gray-200">
        <Sidebar />
      </div> */}
      {/* <div className="col-span-10 ">
          <MainGame />
          {Array.from({ length: 11 }).map((_, index) => (
          <div className="col-span-10 mr-2 grid grid-cols-6 gap-1 ">
            <div className=''>
              <img src="https://parker777.io/assets/img/casino1/aura-gaming-lobby.webp" alt="Image 1" className="w-full h-full object-cover" />
            </div>
            <div className=''>
              <img src="https://tezcdn.com/casino/67720.webp" alt="Image 2" className="w-full h-full object-cover" />
            </div>
            <div className=''>
              <img src="https://tezcdn.com/casino/67670.webp" alt="Image 3" className="w-full h-full object-cover" />
            </div>
            <div className=''>
              <img src="https://tezcdn.com/casino/56767.webp" alt="Image 4" className="w-full h-full object-cover" />
            </div>
            <div className=''>
              <img src="https://tezcdn.com/casino/56768.webp" alt="Image 5" className="w-full h-full object-cover" />
            </div>
            <div className=''>
              <img src="https://tezcdn.com/casino/67630.webp" alt="Image 6" className="w-full h-full object-cover" />
            </div>
          </div>
        ))}
       </div> */}
      </div>
    </div>
  )
}

export default page