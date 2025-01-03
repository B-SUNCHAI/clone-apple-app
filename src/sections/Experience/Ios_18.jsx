import React from "react";

import accessories from "../../image/iphone-card-50-ios-202409_GEO_TH_LANG_TH.jpg";

function ios18() {
  return (
    <div className="mr-5 my-1 mb-4">
      <div className="grid grid-row-[20%_80%] rounded-3xl shadow-md bg-white w-[29.8rem] relative hover:shadow-lg hover:scale-[1.02] duration-700">
        <img src={accessories} className=" rounded-3xl" />
        <div className="h-44 w-full content-center p-7 pt-0 absolute">
          <div className="mt-1 text-xs text-[#6e6e73] pb-3">
            <br />
          </div>
          <div className="text-3xl z-1 w-max ">
            สำรวจ iOS 18 ที่อัดแน่นด้วย
            <br></br>
            คุณสมบัติใหม่ๆ สำหรับ iPhone
          </div>
        </div>
      </div>
    </div>
  );
}

export default ios18;
