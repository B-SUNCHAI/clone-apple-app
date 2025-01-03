import React from "react";

import MCFL4_SW_COLOR from "../../image/MCFL4_SW_COLOR.jpg";
import MCFM4_SW_COLOR from "../../image/MCFM4_SW_COLOR.jpg";
import MCFN4_SW_COLOR from "../../image/MCFN4_SW_COLOR.jpg";
import MCFP4_SW_COLOR from "../../image/MCFP4_SW_COLOR.jpg";
import MCFM4 from "../../image/MCFM4.jpg";

function Beats_magsafe() {
  return (
    <div className="mr-5 my-1 mb-4">
      <div className="grid grid-row-[20%_50%_10%_20%] rounded-3xl shadow-md bg-white w-[20rem] hover:shadow-lg hover:scale-[1.02] duration-700">
        <div className="h-[18.5rem] mt-20 mb-2">
          <img src={MCFM4} className="w-2/3 ml-14 " />
          <div className="h-9 flex flex-row justify-center mb-6 mt-5">
            <span className="h-3 w-3 mr-2">
              <img src={MCFL4_SW_COLOR} />
            </span>
            <span className="h-3 w-3 mr-2">
              <img src={MCFM4_SW_COLOR} />
            </span>
            <span className="h-3 w-3 mr-2">
              <img src={MCFN4_SW_COLOR} />
            </span>
            <span className="h-3 w-3 mr-2">
              <img src={MCFP4_SW_COLOR} />
            </span>
          </div>
        </div>
        <div className="mx-7 pt-1">
          <div className="text-[16px] font-semibold whitespace-nowrap">
            เคส Beats สำหรับ iPhone 16 Pro
            <br />
            พร้อม MagSafe - สีซัมมิตสโตน
          </div>
        </div>

        <div className="h-16 flex flex-row ">
          <div className="m-auto ml-7 text-base mt-4"> ฿1,990.00</div>
        </div>
      </div>
    </div>
  );
}

export default Beats_magsafe;
