import React from "react";

import MY1W2_GEO_TH from "../../image/MY1W2_GEO_TH.jpg";

function Adapter_30w() {
  return (
    <div className="mr-5 my-1 mb-4">
      <div className="grid grid-row-[20%_50%_10%_20%] rounded-3xl shadow-md bg-white w-[20rem] hover:shadow-lg hover:scale-[1.02] duration-700">
        <div className="h-[18.5rem] mt-20 mb-2">
          <img src={MY1W2_GEO_TH} className="w-3/4 ml-10 " />
        </div>
        <div className="mx-7 pt-1">
          <div className="text-[17px] font-semibold ">
            อะแดปเตอร์แปลงไฟ USB-C
            <br />
            ขนาด 30 วัตต์
          </div>
        </div>

        <div className="h-16 flex flex-row ">
          <div className="m-auto ml-7 text-base mt-4"> ฿1,190.00</div>
        </div>
      </div>
    </div>
  );
}

export default Adapter_30w;
