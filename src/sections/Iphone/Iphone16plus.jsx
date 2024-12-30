import React from "react";

import iphone16plus from "../../image/iphone16plus.jpg";
import color2_1 from "../../image/color2-1.png";
import color2_2 from "../../image/color2-2.png";
import color2_3 from "../../image/color2-3.png";
import color2_4 from "../../image/color2-4.png";
import color2_5 from "../../image/color2-5.png";
function Iphone16plus() {
  return (
    <div className="mr-5 ">
      <div className="grid grid-row-[20%_50%_10%_20%] rounded-3xl bg-white w-96">
        <div className="h-40 content-center p-7 ">
          <div className="mb-2 text-xs text-[#b64400]">ใหม่</div>
          <div className="text-3xl ">
            iPhon 16 และ <br></br>
            iPone 16 Plus
          </div>
        </div>
        <div className="h-56">
          <img src={iphone16plus} className="w-3/4 ml-12" />
        </div>
        <div className="h-9 flex flex-row justify-center pt-6 mb-6">
          <span className="h-3 w-3 mr-2">
            <img src={color2_1} />
          </span>
          <span className="h-3 w-3 mr-2">
            <img src={color2_2} />
          </span>
          <span className="h-3 w-3 mr-2">
            <img src={color2_3} />
          </span>
          <span className="h-3 w-3 mr-2">
            <img src={color2_4} />
          </span>
          <span className="h-3 w-3 mr-2">
            <img src={color2_5} />
          </span>
        </div>
        <div className="h-16 flex flex-row ">
          <div className="m-auto ml-7 text-sm mt-4">เริ่มต้นที่ ฿29,900</div>
          <div className="m-auto mt-0 mr-7 px-4 py-2 rounded-full bg-[#0071e3] ">
            <div className="text-[#fff] text-sm">ซื้อ</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Iphone16plus;
