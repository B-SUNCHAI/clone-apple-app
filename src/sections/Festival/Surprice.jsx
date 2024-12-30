import React from "react";

import accessories from "../../image/iphone-card-40-magsafe-202409.jpg";

function Surprice() {
  return (
    <div className="mr-5">
      <div className="grid grid-row-[20%_80%] rounded-3xl bg-white w-[25.2rem] relative ">
        <img src={accessories} className=" rounded-3xl" />
        <div className="h-40 w-full max-w-96 content-center p-7 pt-0 absolute">
          <div className="text-3xl z-1 w-max mt-14">
            ติดใจ iPhone ยิ่งกว่าที่
            <br></br>
            เคย
          </div>
          <div className="mt-5">
            ติดเข้ากับเคสและกระเป๋าสตางค์
            <br />
            MagSafe หรือที่ชาร์จแบบไร้สาย
          </div>
        </div>
      </div>
    </div>
  );
}

export default Surprice;
