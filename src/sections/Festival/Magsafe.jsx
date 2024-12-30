import React from "react";

import MX6X3 from "../../image/MX6X3.jpg";

function Magsafe() {
  return (
    <div className="mr-5 ">
      <div className="grid grid-row-[20%_50%_10%_20%] rounded-3xl bg-white w-[20rem] ">
        <div className="h-[18.5rem] mt-20 mb-2">
          <img src={MX6X3} className="w-3/4 ml-10 " />
        </div>
        <div className="mx-7 pt-1 ">
          <div className="text-[17px] font-semibold mb-7">
            ที่ชาร์จ MagSafe (1 ม.)
          </div>
        </div>

        <div className="h-16 flex flex-row ">
          <div className="m-auto ml-7 text-base mt-4"> ฿1,590.00</div>
        </div>
      </div>
    </div>
  );
}

export default Magsafe;
