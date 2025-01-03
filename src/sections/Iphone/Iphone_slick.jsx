import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Iphone16_Pro from "./Iphone16_Pro";
import Iphone16_plus from "./Iphone16plus";
import Iphone15_plus from "./Iphone15plus";
import Iphone14_plus from "./Iphone14plus";
import Iphone_se from "./Iphonese";
import Iphone_Other from "./IphoneOt";

function Iphone_slick() {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
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
      <div className="h-12 grid mb-3">
        <div className="ml-36">
          <span className=" text-3xl mr-2">ทุกรุ่น</span>
          {/* gradient_background */}
          <span className="text-3xl text-[#6e6e73]">เลือกแบบที่ใช่ได้เลย</span>
        </div>
      </div>
      <div className="slider-container mx-36 cursor-pointer">
        <Slider {...settings}>
          <div className="">
            <Iphone16_Pro />
          </div>
          <div className="">
            <Iphone16_plus />
          </div>
          <div className="">
            <Iphone15_plus />
          </div>
          <div className="">
            <Iphone14_plus />
          </div>
          <div className="">
            <Iphone_se />
          </div>
          <div className="">
            <Iphone_Other />
          </div>
        </Slider>
      </div>
      <div className="h-14"></div>
    </div>
  );
}

export default Iphone_slick;
