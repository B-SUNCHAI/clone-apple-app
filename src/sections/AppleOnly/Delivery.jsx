import React from "react";

import delivery from "../../image/delivery-pickup.png";

function Delivery() {
  return (
    <div className="mr-5">
      <div className="grid grid-row-[20%_80%] rounded-3xl bg-white w-[30rem] relative ">
        <img src={delivery} className=" rounded-3xl" />
        <div className="h-40 w-full max-w-96 content-center p-7 pt-0 absolute">
          <div className="text-3xl z-1 w-max mt-16">
            รับของขวัญทันเวลาสำหรับ
            <br></br>
            ช่วงเทศกาลด้วยบริการจัด
            <br></br>
            ส่งฟรีหรือรับด้วยตนเอง
            <br></br>
            สะดวกง่ายดาย
          </div>
        </div>
      </div>
    </div>
  );
}

export default Delivery;
