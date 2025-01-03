import React from "react";

import accessories from "../../image/iphone-card-50-TAA-202310.jpg";

function Today() {
  return (
    <div className="mr-5 my-1 mb-4">
      <div className="grid grid-row-[20%_80%] rounded-3xl shadow-md bg-white w-[29.8rem] relative  hover:shadow-lg hover:scale-[1.02] duration-700">
        <img src={accessories} className=" rounded-3xl" />
        <div className="h-56 w-full content-center p-7 pt-0 absolute">
          <div className="mt-1 text-xs text-[#6e6e73] pb-3">TODAY AT APPLE</div>
          <div className="text-3xl z-1 w-max ">
            เข้าร่วมกับเราเพื่อค้นพบสิ่งที่ดีที่สุด
            <br></br>
            ของ iPhone
          </div>
          <div className="text-base pt-2">
            เริ่มเลยหรือสำรวจว่ามีอะไรใหม่ในเซสซั่นฟรีที่ Apple Store
          </div>
        </div>
      </div>
    </div>
  );
}

export default Today;
