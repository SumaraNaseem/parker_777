import React, { useState } from 'react';
import { FaTv } from "react-icons/fa6";

const timeArray = ['11:14', '12:15', '13:16', '14:17', '15:18', '16:19', '17:20', '18:21'];
const contentArray = [
  { location: "Doncaster", date: "25th Aug" },
  { location: "Richmond (AUS)", date: "25th Aug" },
  { location: "Windsor", date: "26th Aug" }
];

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="w-full px-1 lg:px-0">
      {/* Tabs */}
      <div className="flex border border-slate-100">
        <button
          className={`py-2 px-3 text-[12px] font-[400] ${activeTab === 1 ? 'text-black bg-custom-yellow-background p-3 border border-gray-200' : 'text-white'}`}
          onClick={() => handleTabClick(1)}
        >
          AU
        </button>
        <button
          className={`py-2 px-3 text-[12px] font-[400] ${activeTab === 2 ? 'text-black bg-custom-yellow-background p-3 border border-gray-200' : 'text-white'}`}
          onClick={() => handleTabClick(2)}
        >
          DB
        </button>
      </div>

      {/* Tab Content */}
      <div className="bg-slate-50 ">
        {activeTab === 1 && (
          contentArray.map((content, index) => (
            <div key={index} className="px-3 py-1 flex border-b  border-b-gray-300 items-center space-x-2">
              <FaTv />
              <p className="text-[14px] font-[500] w-[300px]">{content.location} {content.date}</p>
              <div className="flex space-x-2">
                {timeArray.slice(0, 8).map((time, timeIndex) => (
                  <div key={timeIndex} className="flex items-center">
                    <p className="text-white px-[6px] py-1 text-[11px] font-[500] rounded-md bg-[#00162D]">
                      {time}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
        {activeTab === 2 && (
           contentArray.map((content, index) => (
            <div key={index} className="px-3 py-1 flex border-b  border-b-gray-300 items-center space-x-2">
              <FaTv />
              <p className="text-[14px]  font-[500] w-[300px]">{content.location} {content.date}</p>
              <div className="flex space-x-2">
                {timeArray.slice(0, 8).map((time, timeIndex) => (
                  <div key={timeIndex} className="flex items-center">
                    <p className="text-white px-[6px] py-1 text-[11px] font-[500] rounded-md bg-[#00162D]">
                      {time}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Tabs;
