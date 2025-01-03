import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faApple } from "@fortawesome/free-brands-svg-icons";

import peple from "../image/peple.jpg";

function HeadContent() {
  return (
    <div className="px-36">
      <div className="h-56 grid grid-cols-[39%_42%_19%] ">
        <div className="content-center text-5xl py-3 font-bold mr-auto">
          <div className="">ซื้อ iPhone</div>
          {/* gradient_background */}
        </div>
        <div></div>
        <div className="pt-20">
          <div className="grid grid-cols-[15%_85%] pb-3">
            <span className="h-10 w-10 mt-1 ml-0.5 ">
              <img src={peple} />
            </span>

            <div className="grid grid-row-2">
              <div className="text-sm mr-auto">
                ต้องการความช่วยเหลือในการช้อปปิ้งใช่มั้ย
              </div>
              <a className="text-sm text-blue-500 mr-auto underline cursor-pointer ">
                ถาม Specialist เรื่อง iPhone ได้เลย
              </a>
            </div>
          </div>
          <div className="grid grid-cols-[15%_85%] pb-5">
            <div className="">
              <FontAwesomeIcon className="text-3xl mt-2 ml-3" icon={faApple} />
            </div>
            <div className="grid grid-row-2">
              <div className="text-sm mr-auto">แวะไปที่ Apple Store</div>
              <a className="text-sm text-blue-500 mr-auto cursor-pointer hover:underline ">
                ค้นหาร้านที่อยู่ใกล้คุณ
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeadContent;
