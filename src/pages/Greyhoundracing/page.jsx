import React from "react";
import Navbar from "../../components/Navbar/nabvar";
import Navbarsec from "../../components/Navbarsec/Navbarsec";
import Greyhoundracing from "../../components/Greyhoundracing/Greyhoundracing";

function page() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <div className="block ">
        <Greyhoundracing />
      </div>
    </div>
  );
}

export default page;
