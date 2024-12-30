import React from "react";

import iphone14plus from "../../image/iphone14plus.jpg";
import color4_1 from "../../image/color4-1.png";
import color4_2 from "../../image/color4-2.png";
import color4_3 from "../../image/color4-3.png";
import color4_4 from "../../image/color4-4.png";
import color4_5 from "../../image/color4-5.png";
import color4_6 from "../../image/color4-5.png";
function Iphone14plus() {
  return (
    <div className="mr-5 ">
      <div className="grid grid-row-[20%_50%_10%_20%] rounded-3xl bg-white w-96">
        <div className="h-40 content-center p-7 ">
          <div className="text-3xl pt-5">
            iPhon 14 และ <br></br>
            iPone 14 Plus
          </div>
        </div>
        <div className="h-56">
          <img src={iphone14plus} className="w-3/4 ml-12" />
        </div>
        <div className="h-9 flex flex-row justify-center pt-6 mb-6">
          <span className="h-3 w-3 mr-2">
            <img src={color4_1} />
          </span>
          <span className="h-3 w-3 mr-2">
            <img src={color4_2} />
          </span>
          <span className="h-3 w-3 mr-2">
            <img src={color4_3} />
          </span>
          <span className="h-3 w-3 mr-2">
            <img src={color4_4} />
          </span>
          <span className="h-3 w-3 mr-2">
            <img src={color4_5} />
          </span>
          <span className="h-3 w-3 mr-2">
            <img src={color4_6} />
          </span>
        </div>
        <div className="h-16 flex flex-row ">
          <div className="m-auto ml-7 text-sm mt-4">เริ่มต้นที่ ฿22,900</div>
          <div className="m-auto mt-0 mr-7 px-4 py-2 rounded-full bg-[#0071e3] ">
            <div className="text-[#fff] text-sm">ซื้อ</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Iphone14plus;
