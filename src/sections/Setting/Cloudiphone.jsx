import React from "react";

import accessories from "../../image/iphone-card-50-icloud-202109.jpg";

function Cloudiphone() {
  return (
    <div className="mr-5 my-1 mb-4">
      <div className="grid grid-row-[20%_80%] rounded-3xl shadow-md bg-white w-[29.8rem] relative  hover:shadow-lg hover:scale-[1.02] duration-700">
        <img src={accessories} className=" rounded-3xl" />
        <div className="h-56 w-full content-center p-7 pt-0 absolute">
          <div className="mt-8 text-xs text-[#6e6e73] pb-3">
            ถ่ายโอนข้อมูลได้ง่ายๆ
          </div>
          <div className="text-3xl z-1 w-max ">
            เข้าถึงพื้นที่จัดเก็บข้อมูล
            <br></br>
            iCloud+ ทั้งหมด เพื่อย้ายทุก
            <br></br>
            อย่างที่คุณต้องการไป
            <br></br>
            iPhone เครื่องใหม่ของคุณ
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cloudiphone;
