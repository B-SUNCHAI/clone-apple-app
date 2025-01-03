import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import Fly_Store from "./FlyoutLine/Fly_Store";
import Fly_Mac from "./FlyoutLine/Fly_Mac";
import Fly_Ipad from "./FlyoutLine/Fly_Ipad";
import Fly_Iphone from "./FlyoutLine/Fly_Iphone";
import Fly_Watch from "./FlyoutLine/Fly_Watch";
import Fly_AirPods from "./FlyoutLine/Fly_AirPods";
import Fly_TV from "./FlyoutLine/Fly_TV";
import Fly_Entertainment from "./FlyoutLine/Fly_Entertainment";
import Fly_Accessories from "./FlyoutLine/Fly_Accessories";
import Fly_Service from "./FlyoutLine/Fly_Service";

function Navbar() {
  return (
    <div className="grid grid-cols-[23%_53%_24%] ">
      <div></div>
      <div className=" flex flex-row h-12">
        <div className="nav-item">
          <FontAwesomeIcon className="text-lg" icon={faApple} />
        </div>
        <Fly_Store />
        <Fly_Mac />
        <Fly_Ipad />
        <Fly_Iphone />
        <Fly_Watch />
        <Fly_AirPods />
        <Fly_TV />
        <Fly_Entertainment />
        <Fly_Accessories />
        <Fly_Service />
        <span className="nav-item cursor-pointer">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </span>
        <span className="nav-item cursor-pointer">
          <FontAwesomeIcon className="text-lg" icon={faBagShopping} />
        </span>
      </div>
    </div>
  );
}

export default Navbar;
