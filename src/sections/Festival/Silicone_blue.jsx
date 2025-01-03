import React from "react";

import MYYG3_SW_COLOR from "../../image/MYYG3_SW_COLOR.jpg";
import MYYF3_SW_COLOR from "../../image/MYYF3_SW_COLOR.jpg";
import MYYH3_SW_COLOR from "../../image/MYYH3_SW_COLOR.jpg";
import MYYE3_SW_COLOR from "../../image/MYYE3_SW_COLOR.jpg";
import MYYC3_SW_COLOR from "../../image/MYYC3_SW_COLOR.jpg";
import MYYD3_SW_COLOR from "../../image/MYYD3_SW_COLOR.jpg";
import MYY63 from "../../image/MYY63.jpg";

function Silicone_blue() {
  return (
    <div className="mr-5 my-1 mb-4">
      <div className="grid grid-row-[20%_50%_10%_20%] rounded-3xl shadow-md bg-white w-[20rem] hover:shadow-lg hover:scale-[1.02] duration-700">
        <div className="h-[18.5rem] mt-20 mb-2">
          <img src={MYY63} className="w-2/3 ml-14 " />
          <div className="h-9 flex flex-row justify-center mb-6 mt-5">
            <span className="h-3 w-3 mr-2">
              <img src={MYYG3_SW_COLOR} />
            </span>
            <span className="h-3 w-3 mr-2">
              <img src={MYYF3_SW_COLOR} />
            </span>
            <span className="h-3 w-3 mr-2">
              <img src={MYYH3_SW_COLOR} />
            </span>
            <span className="h-3 w-3 mr-2">
              <img src={MYYE3_SW_COLOR} />
            </span>
            <span className="h-3 w-3 mr-2">
              <img src={MYYC3_SW_COLOR} />
            </span>
            <span className="h-3 w-3 mr-2">
              <img src={MYYD3_SW_COLOR} />
            </span>
          </div>
        </div>
        <div className="mx-7 pt-1">
          <div className="text-[16px] font-semibold whitespace-nowrap">
            เคสซิลิโคนสำหรับ iPhone 16
            <br />
            Plus พร้อม MagSafe - สีน้ำเงินอัลต...
          </div>
        </div>

        <div className="h-16 flex flex-row ">
          <div className="m-auto ml-7 text-base mt-4"> ฿1,990.00</div>
        </div>
      </div>
    </div>
  );
}

export default Silicone_blue;
