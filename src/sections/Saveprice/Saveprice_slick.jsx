import React from "react";

import Interest from "./Interest";
import Trade from "./Trade";

function Saveprice_slick() {
  return (
    <div>
      <div className="flex m-auto w-auto mt-14">
        <div className="h-14 mx-36 text-3xl">
          <span className=" mr-1.5">วิธีในการประหยัด</span>
          <span className="text-[#6e6e73]">ที่ Apple</span>
        </div>
      </div>
      <div className="flex flex-row mx-36 mt-3 mb-4 cursor-pointer">
        <Interest />
        <Trade />
      </div>
    </div>
  );
}

export default Saveprice_slick;
