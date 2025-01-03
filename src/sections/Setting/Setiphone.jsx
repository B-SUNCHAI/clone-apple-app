import React from "react";

import accessories from "../../image/iphone-card-50-setup-202409_GEO_TH_LANG_TH.jpg";

function Setiphone() {
  return (
    <div className="mr-5 my-1 mb-4">
      <div className="grid grid-row-[20%_80%] rounded-3xl shadow-md bg-white w-[29.8rem] relative  hover:shadow-lg hover:scale-[1.02] duration-700">
        <img src={accessories} className=" rounded-3xl" />
        <div className="h-56 w-full content-center p-7 pt-0 absolute">
          <div className="mt-2 text-xs text-[#6e6e73] pb-3">
            ตั้งค่าเริ่มต้นแบบรวดเร็ว
          </div>
          <div className="text-3xl z-1 w-max ">
            ตั้งค่า iPhone เครื่องมหท่อัตโนมัติ
            <br></br>
            ด้วยอุปกรณ์ iOS เครื่องปัจจุบันของ
            <br></br>
            คุณ
          </div>
        </div>
      </div>
    </div>
  );
}

export default Setiphone;
