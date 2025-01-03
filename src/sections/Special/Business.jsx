import React from "react";

import accessories from "../../image/iphone-card-40-business-202409_GEO_TH_LANG_TH.jpg";

function Business() {
  return (
    <div className="mr-5 my-1 mb-4">
      <div className="grid grid-row-[20%_80%] rounded-3xl shadow-md bg-white w-[25.2rem]  relative hover:shadow-lg hover:scale-[1.02] duration-700">
        <img src={accessories} className=" rounded-3xl" />
        <div className="h-44 w-full content-center p-7 pt-0 absolute">
          <div className="mt-8 text-xs text-[#6e6e73] pb-3">ธุรกิจ</div>
          <div className="text-3xl z-1 w-max text-white">
            ไม่ว่าธุรกิจใหญ่หรือธุรกิจ
            <br></br>
            เล็ก เราก็ยินดีช่วยเหลืองาน
            <br />
            ของคุณ
          </div>
        </div>
      </div>
    </div>
  );
}

export default Business;
