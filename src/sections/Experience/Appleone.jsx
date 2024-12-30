import React from "react";

import accessories from "../../image/iphone-card-50-appleone-202108_GEO_TH_LANG_TH.jpg";

function Appleone() {
  return (
    <div className="mr-5">
      <div className="grid grid-row-[20%_80%] rounded-3xl bg-white w-[29.8rem] relative ">
        <img src={accessories} className=" rounded-3xl" />
        <div className="h-52 w-full content-center p-7 pt-0 absolute">
          <div className="mt-2 text-xs text-[#6e6e73] pb-3">APPLE ONE</div>
          <div className="text-3xl z-1 w-max ">
            รวม 4 บริการของ Apple เข้า
            <br />
            เป็นชุดเดียวกัน และเพลิดเพลิน
            <br />
            ได้มากขึ้นในราคาที่คุ้มค่า
          </div>
        </div>
      </div>
    </div>
  );
}

export default Appleone;
