import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faApple } from "@fortawesome/free-brands-svg-icons";

function HeadNavbar() {
  return (
    <div className="grid grid-cols-[23%_53%_24%] ">
      <div></div>
      <div className=" flex flex-row ">
        <div className="nav-item">
          <FontAwesomeIcon className="text-lg" icon={faApple} />
        </div>
        <div className="nav-item">ร้าน</div>
        <div className="nav-item">Mac</div>
        <div className="nav-item">iPad</div>
        <div className="nav-item">iPhone</div>
        <div className="nav-item">Watch</div>
        <div className="nav-item">AriPods</div>
        <div className="nav-item">TV และบ้าน</div>
        <div className="nav-item">ความบันเทิง</div>
        <div className="nav-item">อุปกรณ์เสริม</div>
        <div className="nav-item ">
          <div className="">บริการช่วยเหลือ</div>
          {/* gradient_background */}
        </div>
        <span className="nav-item">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </span>
        <span className="nav-item">
          <FontAwesomeIcon className="text-lg" icon={faBagShopping} />
        </span>
      </div>
    </div>
  );
}

export default HeadNavbar;
