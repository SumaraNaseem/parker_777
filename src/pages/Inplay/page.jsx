import React from "react";
import Navbar from "../../components/Navbar/nabvar";
import Navbarsec from "../../components/Navbarsec/Navbarsec";
// import Cricket from '../../components/Cricket/Cricket';
// import Table from '../../components/Table/Table'
// import LayOut from '../../components/Layout/Layout';
import Inplay from "../../components/Inplay/Inplay";

function page() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <div className="block ">
        <Inplay />
      </div>
    </div>
  );
}

export default page;
