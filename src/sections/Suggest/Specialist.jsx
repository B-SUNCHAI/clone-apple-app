import React from "react";

import specia from "../../image/holiday-specialist-help.jpg";

function Specialist() {
  return (
    <div className="mr-5">
      <div className="grid grid-row-[20%_80%] rounded-3xl  shadow-md bg-white w-[30rem] relative hover:shadow-lg hover:scale-[1.02] duration-700">
        <img src={specia} className=" rounded-3xl" />
        <div className="h-40 w-full max-w-96 content-center p-7 pt-0 absolute">
          <div className="pb-2 text-xs mt-5 text-[#6e6e73]">
            SPEICALIST เรื่อง IPHONE
          </div>
          <div className="text-3xl z-1 w-max">
            ช้อปแบบตัวต่อตัวกับ Specialist
            <br></br>
            ทางออนไลน์หรือในร้าน
          </div>
        </div>
      </div>
    </div>
  );
}

export default Specialist;
