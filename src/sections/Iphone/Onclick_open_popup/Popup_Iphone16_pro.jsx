import { div } from "motion/react-client";
import React from "react";

function Popup_Iphone16_pro() {
  return (
    <div className="h-screen w-full top-0 left-0 bg-black bg-opacity-50 place-items-center absolute">
      <div className="w-[980px] h-[200px] justify-items-end z-1 bg-[#868686] absolute top-0 ">
        <div className="h-[44px] w-[44px] text-center z-1 mt-[20px] me-[20x]">
          X
        </div>
        <div className="w-[980px] h-[980px] bg-white"></div>
      </div>
    </div>
  );
}

export default Popup_Iphone16_pro;
