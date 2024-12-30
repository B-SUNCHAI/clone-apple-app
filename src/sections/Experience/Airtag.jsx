import React from "react";

import accessories from "../../image/iphone-card-50-airtags-202409.jpg";

function Airtag() {
  return (
    <div className="mr-5">
      <div className="grid grid-row-[20%_80%] rounded-3xl bg-white w-[29.8rem] relative ">
        <img src={accessories} className=" rounded-3xl" />
        <div className="h-44 w-full content-center p-7 pt-0 absolute">
          <div className="mt-1 text-xs text-[#6e6e73] pb-3">AIRTAG</div>
          <div className="text-3xl z-1 w-max ">
            วิธีที่ง่ายสุดๆ ในการ ติดตาม
            <br />
            ข้ามของของคุณ
          </div>
        </div>
      </div>
    </div>
  );
}

export default Airtag;
