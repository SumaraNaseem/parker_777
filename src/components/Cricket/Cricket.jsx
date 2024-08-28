import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import MainGame from "../MainGame/MainGame";
import RightSideCard from "../RightSideCard/RightSideCard";
function Cricket({ burgerState }) {
  return (
    <div className="w-full">
      <div className=" flex w-full min-w-fit py-1 gap-1">
        {/* <div className="hidden lg:block ">
          <Sidebar burgerState={burgerState} />
        </div> */}
        <div className="w-full">
          <MainGame />
        </div>
      </div>
    </div>
  );
}

export default Cricket;
