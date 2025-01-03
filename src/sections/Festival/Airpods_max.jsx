import React from "react";

import blue_SW from "../../image/airpods-max-select-202409-blue_SW_COLOR.jpg";
import purple_SW from "../../image/airpods-max-select-202409-purple_SW_COLOR.jpg";
import midnight_SW from "../../image/airpods-max-select-202409-midnight_SW_COLOR.jpg";
import starlight_SW from "../../image/airpods-max-select-202409-starlight_SW_COLOR.jpg";
import orange_SW from "../../image/airpods-max-select-202409-orange_SW_COLOR.jpg";
import airpods_max from "../../image/airpods-max-select-202409-purple.jpg";

function Airpods_max() {
  return (
    <div className="mr-5 ">
      <div className="grid grid-row-[20%_50%_10%_20%] rounded-3xl bg-white w-[22rem] ">
        <div className="h-[18.5rem] mt-20 mb-2">
          <img src={airpods_max} className="w-2/3 ml-14 " />

          <div className="h-5 flex flex-row justify-center mt-5 ">
            <span className="h-3 w-3 mr-2">
              <img src={blue_SW} />
            </span>
            <span className="h-3 w-3 mr-2">
              <img src={purple_SW} />
            </span>
            <span className="h-3 w-3 mr-2">
              <img src={midnight_SW} />
            </span>
            <span className="h-3 w-3 mr-2">
              <img src={starlight_SW} />
            </span>
            <span className="h-3 w-3 mr-2">
              <img src={orange_SW} />
            </span>
          </div>
          <div className="mx-7 pt-1 mt-2">
            <div className="mb-2 text-xs text-[#b64400] font-semibold">
              สลักข้อความฟรี
            </div>
          </div>
        </div>

        <div className="mx-7 pt-1">
          <div className="text-[16px] font-semibold whitespace-nowrap mb-7">
            Airpods Max - สีม่วง
          </div>
        </div>

        <div className="h-16 flex flex-row ">
          <div className="m-auto ml-7 text-base mt-4"> ฿19,900.00</div>
        </div>
      </div>
    </div>
  );
}

export default Airpods_max;
