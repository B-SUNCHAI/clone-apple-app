import React from "react";

import Changephone from "../../image/Changephone.jpg";

function Changeiphone() {
  return (
    <div className="mr-5">
      <div className="grid grid-row-[20%_80%] rounded-3xl bg-white w-[30rem] relative ">
        <img src={Changephone} className=" rounded-3xl" />
        <div className="h-40 w-full max-w-96 content-center p-7 pt-0 absolute">
          <div className="pb-2 text-xs mt-5 text-[#6e6e73]">
            เปลี่ยนมาใช้ iPhone
          </div>
          <div className="text-3xl z-1 w-max">
            เปลี่ยนจาก Angdroid มาใช้ <br></br> iPhone นั้นง่ายมาก
          </div>
        </div>
      </div>
    </div>
  );
}

export default Changeiphone;
