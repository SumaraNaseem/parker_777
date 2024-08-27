import React from "react";
import Kabaddi from "../../components/Kabaddi/Kabaddi";

function page({burgerState}) {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <div className="block ">
        <Kabaddi burgerState={burgerState} />
      </div>
    </div>
  );
}

export default page;
