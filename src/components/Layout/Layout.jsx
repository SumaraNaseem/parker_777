import Navbar from "../Navbar/nabvar";
import Navbarsec from "../Navbarsec/Navbarsec";
import Cricket from "../Cricket/Cricket";

const LayOut = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <div className="block ">
        <Cricket />
      </div>
    </div>
  );
};

export default LayOut;
