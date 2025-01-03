import React from "react";

import MA6Y4_SW_COLOR from "../../image/MA6Y4_SW_COLOR.jpg";
import MA6W4_SW_COLOR from "../../image/MA6W4_SW_COLOR.jpg";
import MA6X4_SW_COLOR from "../../image/MA6X4_SW_COLOR.jpg";
import MA7A4_SW_COLOR from "../../image/MA7A4_SW_COLOR.jpg";
import MA6X4 from "../../image/MA6X4.jpg";

function FineWoven() {
  return (
    <div className="mr-5 my-1 mb-4">
      <div className="grid grid-row-[20%_50%_10%_20%] rounded-3xl shadow-md bg-white w-[20rem] hover:shadow-lg hover:scale-[1.02] duration-700">
        <div className="h-[18.5rem] mt-20 mb-2">
          <img src={MA6X4} className="w-3/4 ml-10 " />
          <div className="h-9 flex flex-row justify-center mb-6 mt-5">
            <span className="h-3 w-3 mr-2">
              <img src={MA6Y4_SW_COLOR} />
            </span>
            <span className="h-3 w-3 mr-2">
              <img src={MA6W4_SW_COLOR} />
            </span>
            <span className="h-3 w-3 mr-2">
              <img src={MA6X4_SW_COLOR} />
            </span>
            <span className="h-3 w-3 mr-2">
              <img src={MA7A4_SW_COLOR} />
            </span>
          </div>
        </div>
        <div className="mx-7 pt-1">
          <div className="text-[17px] font-semibold ">
            เคสผ้า FineWoven แบบกระเป๋า
            <br />
            สตางค์สำหรับ iPhone พร้อม...
          </div>
        </div>

        <div className="h-16 flex flex-row ">
          <div className="m-auto ml-7 text-base mt-4"> ฿2,390.00</div>
        </div>
      </div>
    </div>
  );
}

export default FineWoven;
