import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./fes.css";

import Surprice from "./Surprice";
import Adapter_20w from "./Adapter_20w";
import Silicone_blue from "./Silicone_blue";
import FineWoven from "./FineWoven";
import Adapter_30w from "./Adapter_30w";
import Magsafe from "./Magsafe";
import IphoneMagsafe from "./IphoneMagsafe";
import Beats_magsafe from "./Beats_magsafe";

function Festival_slick() {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div className="flex m-auto w-auto mt-14">
        <div className="h-14 mx-36 text-3xl">
          <span className=" mr-1.5">อุปกรณ์เสริม</span>
          <span className="text-[#6e6e73]">
            สิ่งที่ขาดไม่ได้ที่จับคู่กับอุปกรณ์โปรดของคุณได้อย่างลงตัว
          </span>
        </div>
      </div>
      <div className="slider-container mx-36 cursor-pointer">
        <Slider {...settings}>
          <div className="">
            <Surprice />
          </div>
          <div>
            <IphoneMagsafe />
          </div>
          <div>
            <Silicone_blue />
          </div>
          <div>
            <Adapter_20w />
          </div>
          <div>
            <Magsafe />
          </div>
          <div>
            <Adapter_30w />
          </div>
          <div>
            <FineWoven />
          </div>
          <div>
            <Beats_magsafe />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Festival_slick;
