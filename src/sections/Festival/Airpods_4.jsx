import React from "react";

import airpods_4 from "../../image/airpods-4-anc-select-202409.jpg";

function Airpods_4() {
  return (
    <div className="mr-5 ">
      <div className="grid grid-row-[20%_50%_10%_20%] rounded-3xl bg-white w-[20rem] ">
        <div className="h-[18.5rem] mt-20 mb-2">
          <img src={airpods_4} className="w-3/4 ml-10 " />
          <div className="mx-7 pt-1 mt-11">
            <div className="mb-2 text-xs text-[#b64400] font-semibold">
              สลักข้อความฟรี
            </div>
          </div>
        </div>
        <div className="mx-7 pt-1">
          <div className="text-[17px] font-semibold ">
            Airpods 4 พร้อมการตัดเสียง
            <br />
            รบกวนแบบแอ็คทีฟ
          </div>
        </div>

        <div className="h-16 flex flex-row ">
          <div className="m-auto ml-7 text-base mt-4"> ฿6,490.00</div>
        </div>
      </div>
    </div>
  );
}

export default Airpods_4;
