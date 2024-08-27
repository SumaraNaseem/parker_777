import React from "react";
import Navbar from "../../components/Navbar/nabvar";
import Navbarsec from "../../components/Navbarsec/Navbarsec";
import CricketNav from "../../components/CricketNav/CricketNav";

function page({burgerState}) {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <div className="block ">
        <CricketNav burgerState={burgerState} />
      </div>
    </div>
  );
}

export default page;
