import React from "react";

import "./iphone.css";

import color1_1 from "../../image/color1-1.png";
import color1_2 from "../../image/color1-2.png";
import color1_3 from "../../image/color1-3.png";
import color1_4 from "../../image/color1-4.png";
import iphone16pro from "../../image/iphone16pro.jpg";

function Iphone16_Pro() {
  return (
    <div className="mr-5 m-1 mb-4">
      <div className="show-hover grid grid-row-[20%_50%_10%_20%] rounded-3xl shadow-md bg-white w-96 hover:shadow-lg hover:scale-[1.02] duration-700">
        <div className="h-40 content-center p-7 ">
          <div className="mb-2 text-xs text-[#b64400]">ใหม่</div>
          <div className="text-3xl ">
            iPhon 16 Pro และ <br></br>
            iPone 16 Pro Max
          </div>
        </div>
        <div className="h-56">
          <img src={iphone16pro} className="w-3/4 ml-12" />
        </div>

        <div className="btn-hover bg-black rounded-3xl text-lg text-[#fff] w-28 h-10 text-center absolute pt-1 mt-[19.7rem] ml-[8.5rem] translate-y-5 opacity-0 hover:bg-[#0071e3] ">
          มาดูกันเลย
        </div>

        <div className="h-9 flex flex-row justify-center pt-6 mb-6">
          <span className="h-3 w-3 mr-2">
            <img src={color1_1} />
          </span>
          <span className="h-3 w-3 mr-2">
            <img src={color1_2} />
          </span>
          <span className="h-3 w-3 mr-2">
            <img src={color1_3} />
          </span>
          <span className="h-3 w-3 mr-2">
            <img src={color1_4} />
          </span>
        </div>
        <div className="h-16 flex flex-row ">
          <div className="m-auto ml-7 text-sm mt-4">เริ่มต้นที่ ฿39,900</div>
          <div className="m-auto mt-0 mr-7 px-4 py-2 rounded-full bg-[#0071e3] ">
            <div className="text-[#fff] text-sm">ซื้อ</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Iphone16_Pro;
