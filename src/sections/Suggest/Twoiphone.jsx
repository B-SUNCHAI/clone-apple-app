import React from "react";

import twophone from "../../image/twophone.jpg";

function Twoiphone() {
  return (
    <div className="mr-5">
      <div className="grid grid-row-[20%_80%] rounded-3xl  shadow-md bg-white w-[30rem] relative hover:shadow-lg hover:scale-[1.02] duration-700">
        <img src={twophone} className=" rounded-3xl" />
        <div className="h-40 w-full max-w-96 content-center p-7 pt-0 absolute">
          <div className="pb-2 text-xs  text-[#6e6e73]">เปรียบเทียบทุกรุ่น</div>
          <div className="text-3xl z-1 w-max">iPhone รุ่นไหนเหมาะกับคุณ</div>
        </div>
      </div>
    </div>
  );
}

export default Twoiphone;
