import React from "react";

import accessories from "../../image/iphone-card-50-apple-intelligence-202410.jpg";

function Intelligence() {
  return (
    <div className="mr-5">
      <div className="grid grid-row-[20%_80%] rounded-3xl bg-white w-[29.8rem] relative ">
        <img src={accessories} className=" rounded-3xl" />
        <div className="h-44 w-full content-center p-7 pt-0 absolute">
          <div className="mt-1 text-xs text-[#6e6e73] pb-3">
            APPLE INTELLIGENCE
          </div>
          <div className="text-3xl z-1 w-max ">
            ทั้งมีความเฉพาะตัว เป็นส่วนตัว และ
            <br></br>
            ทรงพลัง
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intelligence;
