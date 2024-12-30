import React from "react";

import Interestphone from "../../image/Interestphone.jpg";

function Interest() {
  return (
    <div className="mr-5">
      <div className="grid grid-row-[20%_80%] rounded-3xl bg-white w-[30rem] relative ">
        <img src={Interestphone} className=" rounded-3xl" />
        <div className="h-40 w-full max-w-96 content-center p-7 pt-0 absolute">
          <div className="pb-2 text-xs  text-[#6e6e73]">
            ยอดชำระรายเดือนแบบเบาๆ
          </div>
          <div className="text-3xl z-1 w-max">
            จ่ายดอกเบี้ย 0% นานสุด <br></br> 10 เดือน²
          </div>
        </div>
      </div>
    </div>
  );
}

export default Interest;
