import React from "react";
import Horserasing from "../../components/Horserasing/horserasing";

function page({burgerState}) {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <div className="block ">
        <Horserasing  burgerState={burgerState}/>
      </div>
    </div>
  );
}

export default page;
