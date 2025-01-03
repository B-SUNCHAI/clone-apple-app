import React from "react";

import accessories from "../../image/iphone-card-50-applecare-plus-202108_GEO_TH_LANG_TH.jpg";

function Applecare() {
  return (
    <div className="mr-5 my-1 mb-4">
      <div className="grid grid-row-[20%_80%] rounded-3xl shadow-md bg-white w-[29.8rem] relative  hover:shadow-lg hover:scale-[1.02] duration-700">
        <img src={accessories} className=" rounded-3xl" />
        <div className="h-56 w-full content-center p-7 pt-0 absolute">
          <div className="mt-1 text-xs text-[#6e6e73] pb-3">APPLECARE+</div>
          <div className="text-3xl z-1 w-max ">
            ปกป้อง iPhone ของคุณด้วยบริการ
            <br></br>
            ซ่อมแบบไม่จำกัดจำนวนครั้งสำหรับ
            <br></br>
            ความเสียหายจากอุบัติเหตุ
          </div>
        </div>
      </div>
    </div>
  );
}

export default Applecare;
