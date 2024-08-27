import React from "react";
import Navbar from "../../components/Navbar/nabvar";
import Navbarsec from "../../components/Navbarsec/Navbarsec";
import Tennis from "../../components/Tennis/Tennis";

function page({burgerState}) {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <div className="block ">
        <Tennis burgerState={burgerState}/>
      </div>
    </div>
  );
}

export default page;
