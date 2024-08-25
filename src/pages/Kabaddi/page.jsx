import React from "react";
import Navbar from "../../components/Navbar/nabvar";
import Navbarsec from "../../components/Navbarsec/Navbarsec";
import Kabaddi from "../../components/Kabaddi/Kabaddi";

function page() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <div className="block ">
        <Kabaddi />
      </div>
    </div>
  );
}

export default page;
