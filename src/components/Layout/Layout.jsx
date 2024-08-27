import Navbar from "../Navbar/nabvar";
import Navbarsec from "../Navbarsec/Navbarsec";
import Cricket from "../Cricket/Cricket";

const LayOut = ({ burgerState }) => {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <div className="block ">
        <Cricket burgerState={burgerState} />
      </div>
    </div>
  );
};

export default LayOut;
