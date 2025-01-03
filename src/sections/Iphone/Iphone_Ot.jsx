import React from "react";

import iphoneOt from "../../image/iphoneOt.jpg";

function IphoneOther() {
  return (
    <div className="mr-5 m-1 mb-4">
      <div className="grid grid-row-[20%_80%] rounded-3xl shadow-md bg-white w-96 relative hover:shadow-lg hover:scale-[1.02] duration-700">
        <img src={iphoneOt} className="pt-7 rounded-3xl" />
        <div className="h-40 w-full max-w-96 content-center p-7 absolute">
          <div className="text-3xl pt-5 z-1">
            เลือกดูอุปกรณ์เสริมทั้งหมด <br></br>
            ของ iPhone
          </div>
        </div>
      </div>
    </div>
  );
}

export default IphoneOther;
