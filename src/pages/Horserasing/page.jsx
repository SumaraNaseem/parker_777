import React from 'react'
import Navbar from '../../components/Navbar/nabvar';
import Navbarsec from '../../components/Navbarsec/Navbarsec';
import FootBall from '../../components/Football/Football'
import Horserasing from '../../components/Horserasing/horserasing'


function page() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
            <div className="flex w-full">
              <Navbar />
            </div>
            <div className="block ">
                <Navbarsec/>
                <Horserasing/>
            </div>
        </div>
  )
}

export default page