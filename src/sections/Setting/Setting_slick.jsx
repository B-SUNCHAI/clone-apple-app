import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Aboutiphone from "./Aboutiphone";
import Cloudiphone from "./Cloudiphone";
import Applecare from "./Applecare";
import Setiphone from "./Setiphone";
import Today from "./Today";

function Setting_slick() {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
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
          <span className=" mr-1.5">การตั้งค่าแลกความช่วยเหลือ</span>
          <span className="text-[#6e6e73]">
            Specialist ของเราพร้อมช่วยเหลือคุณ
          </span>
        </div>
      </div>
      <div className="slider-container mx-36 cursor-pointer">
        <Slider {...settings}>
          <div className="">
            <Aboutiphone />
          </div>
          <div>
            <Cloudiphone />
          </div>
          <div>
            <Applecare />
          </div>
          <div>
            <Setiphone />
          </div>
          <div>
            <Today />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Setting_slick;
