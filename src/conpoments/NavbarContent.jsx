import React from "react";

function NavbarContent() {
  return (
    <div className="h-16 grid mb-10">
      <div className="ml-36 content-center">
        <span className="mid_navbar">
          <span
            className="mid_text"
            onClick={() =>
              window.scrollTo({
                top: aboutIphoneRef.current.offsetTop,
                behavior: "smooth",
              })
            }
          >
            ทุกรุ่น
          </span>
        </span>
        <span className="mid_navbar">
          <span className="mid_text">คำแนะนำในการช้อปปิ้ง</span>
        </span>
        <span className="mid_navbar">
          <span className="mid_text">วิธีประหยัด</span>
        </span>
        {/* <span className="mid_navbar">
          <span className="mid_text">ที่ Apple เท่านั้น</span>
        </span> */}
        <span className="mid_navbar">
          <span className="mid_text">อุปกรณ์เสริม</span>
        </span>
        <span className="mid_navbar">
          <span className="mid_text">การตั้งค่าและความช่วยเหลือ</span>
        </span>
        <span className="mid_navbar">
          <span className="mid_text">ประสบการณ์การใช้งาน iPhone</span>
        </span>
        <span className="mid_navbar">
          <span className="mid_text">ร้านพิเศษของเรา</span>
        </span>
      </div>
    </div>
  );
}

export default NavbarContent;
