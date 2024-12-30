import React from "react";

import iphonese from "../../image/iphonese.jpg";
import color5_1 from "../../image/color5-1.png";
import color5_2 from "../../image/color5-2.png";
import color5_3 from "../../image/color5-3.png";
function Iphonese() {
  return (
    <div className="mr-5 ">
      <div className="grid grid-row-[20%_50%_10%_20%] rounded-3xl bg-white w-96">
        <div className="h-40 content-center p-7 ">
          <div className="text-3xl pt-5 pb-9">iPhon SE</div>
        </div>
        <div className="h-56">
          <img src={iphonese} className="w-3/4 ml-12" />
        </div>
        <div className="h-9 flex flex-row justify-center pt-6 mb-6">
          <span className="h-3 w-3 mr-2">
            <img src={color5_1} />
          </span>
          <span className="h-3 w-3 mr-2">
            <img src={color5_2} />
          </span>
          <span className="h-3 w-3 mr-2">
            <img src={color5_3} />
          </span>
        </div>
        <div className="h-16 flex flex-row ">
          <div className="m-auto ml-7 text-sm mt-4">เริ่มต้นที่ ฿16,900</div>
          <div className="m-auto mt-0 mr-7 px-4 py-2 rounded-full bg-[#0071e3] ">
            <div className="text-[#fff] text-sm">ซื้อ</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Iphonese;
