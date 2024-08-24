import React from 'react'
import Navbar from '../../components/Navbar/nabvar';
import Navbarsec from '../../components/Navbarsec/Navbarsec';
import CricketNav from '../../components/CricketNav/CricketNav'


function page() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
            <div className="flex w-full">
              <Navbar />
            </div>
            <div className="block ">
                <Navbarsec/>
                <CricketNav/>
            </div>
        </div>
  )
}

export default page