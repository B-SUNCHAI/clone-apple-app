import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Iphone16Pro from "./Iphone16Pro";
import Iphone16plus from "./Iphone16plus";
import Iphone15plus from "./Iphone15plus";
import Iphone14plus from "./Iphone14plus";
import Iphonese from "./Iphonese";
import IphoneOther from "./IphoneOt";

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
    <div className="slider-container mx-36">
      <Slider {...settings}>
        <div>
          <Iphone16Pro />
        </div>
        <div>
          <Iphone16plus />
        </div>
        <div>
          <Iphone15plus />
        </div>
        <div>
          <Iphone14plus />
        </div>
        <div>
          <Iphonese />
        </div>
        <div>
          <IphoneOther />
        </div>
      </Slider>
    </div>
  );
}

export default Iphone_slick;
