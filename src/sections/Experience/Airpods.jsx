import React from "react";

import accessories from "../../image/iphone-card-50-airpods-engraving-202409.jpg";

function Airpods() {
  return (
    <div className="mr-5 my-1 mb-4">
      <div className="grid grid-row-[20%_80%] rounded-3xl shadow-md bg-white w-[29.8rem] relative hover:shadow-lg hover:scale-[1.02] duration-700">
        <img src={accessories} className=" rounded-3xl" />
        <div className="h-36 w-full content-center p-7 pt-0 absolute">
          <div className="mt-0 text-xs text-[#6e6e73] pb-3">AIRPODS</div>
          <div className="text-3xl z-1 w-max ">ความมหัศจรรย์จากรุ่นสู่รุ่น</div>
        </div>
      </div>
    </div>
  );
}

export default Airpods;
