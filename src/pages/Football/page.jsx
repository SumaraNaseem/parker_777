import React from "react";
import FootBall from "../../components/Football/Football";

function page({burgerState}) {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <div className="block ">
        <FootBall burgerState={burgerState} />
      </div>
    </div>
  );
}

export default page;
