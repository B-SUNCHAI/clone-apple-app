import React from "react";

import MA7F4 from "../../image/MA7F4.jpg";

function IphoneMagsafe() {
  return (
    <div className="mr-5 ">
      <div className="grid grid-row-[20%_50%_10%_20%] rounded-3xl bg-white w-[20rem] ">
        <div className="h-[18.5rem] mt-20 mb-2">
          <img src={MA7F4} className="w-3/4 ml-10 " />
        </div>
        <div className="mx-7 pt-1">
          <div className="text-[17px] font-semibold ">
            เคสใสสำหรับ iPhone 16 Pro Max
            <br />
            พร้อม MagSafe
          </div>
        </div>

        <div className="h-16 flex flex-row ">
          <div className="m-auto ml-7 text-base mt-4"> ฿1,990.00</div>
        </div>
      </div>
    </div>
  );
}

export default IphoneMagsafe;
