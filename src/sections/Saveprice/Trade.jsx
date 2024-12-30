import React from "react";

import tradephone from "../../image/tradephone.jpg";

function Trade() {
  return (
    <div className="mr-5">
      <div className="grid grid-row-[20%_80%] rounded-3xl bg-white w-[30rem] relative ">
        <img src={tradephone} className=" rounded-3xl" />
        <div className="h-40 w-full max-w-96 content-center p-7 pt-0 absolute">
          <div className="pb-2 text-xs mt-5 text-[#6e6e73]">APPLE TRADE IN</div>
          <div className="text-3xl z-1 w-max">
            นำอุปกรณ์ของคุณมาแลก <br></br> เพื่อรักเครดิตสำหรับใช้ซื้อ <br></br>
            เครื่องใหม่²
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trade;
