import React from "react";

import Business from "./Business";

function Special_slick() {
  return (
    <div>
      <div>
        <div className="flex m-auto w-auto mt-14">
          <div className="h-14 mx-36 text-3xl">
            <span className=" mr-1.5">ร้านพิเศษของเรา</span>
            <span className="text-[#6e6e73]">ดูราคาที่ออกแบบมาเป็นพิเศษ</span>
          </div>
        </div>
        <div className="flex flex-row mx-36 mt-3 mb-4 cursor-pointer">
          <Business />
        </div>
      </div>
    </div>
  );
}

export default Special_slick;
