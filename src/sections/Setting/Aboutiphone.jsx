import React from "react";

import accessories from "../../image/iphone-card-50-personal-setup-202408.jpg";

function Surprice() {
  return (
    <div className="mr-5">
      <div className="grid grid-row-[20%_80%] rounded-3xl bg-white w-[29.8rem] relative ">
        <img src={accessories} className=" rounded-3xl" />
        <div className="h-56 w-full content-center p-7 pt-0 absolute">
          <div className="mt-5 text-xs text-[#6e6e73] pb-3">
            คำแนะนำแบบตัวต่อตัว
          </div>
          <div className="text-3xl z-1 w-max ">
            ทำความรู้จักกับ iPhone เครื่องใหม่
            <br></br>
            ของคุณด้วยการตั้งค่าส่วนบุคคล
          </div>
          <div className="pt-2 text-base">
            เรียนรู้เคล็ดลับจาก Specialist ในเซสชั่นออนไลน์ ตั้งแต่การ
            <br />
            ตั้งค่าไปจนถึงคุณสมบัติล่าสุด
          </div>
        </div>
      </div>
    </div>
  );
}

export default Surprice;
