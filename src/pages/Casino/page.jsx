import React from "react";
import Navbar from "../../components/Navbar/nabvar";
import Navbarsec from "../../components/Navbarsec/Navbarsec";
import FootBall from "../../components/Football/Football";
import Casino from "../../components/Casino/Casino";

function page() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <div className="block ">
        <Casino />
      </div>
    </div>
  );
}

export default page;
