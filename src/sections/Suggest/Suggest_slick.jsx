import React from "react";

import Twoiphone from "./Twoiphone";
import Specialist from "./Specialist";
import Changeiphone from "./Changeiphone";

function Suggest_slick() {
  return (
    <div>
      <div className="h-14 mx-36 text-3xl">
        <span className=" mr-1.5">คำแนะนำในการช้อปปิ้ง</span>
        <span className="text-[#6e6e73]">ถ้าเลือกไม่ได้ ก็เริ่มตรงนี้เลย</span>
      </div>
      <div className="flex flex-row mx-36 mt-3 pb-4 cursor-pointer">
        <div className="">
          <Twoiphone />
        </div>
        <div className="">
          <Specialist />
        </div>
        <div className="">
          <Changeiphone />
        </div>
      </div>
    </div>
  );
}

export default Suggest_slick;
