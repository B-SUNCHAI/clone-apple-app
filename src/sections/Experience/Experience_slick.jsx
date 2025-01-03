import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Intelligence from "./Intelligence";
import Ios18 from "./Ios_18";
import Airpods from "./Airpods";
import AppleTV from "./AppleTV";
import Airtag from "./Airtag";
import Appleone from "./Appleone";

function Experience_slick() {
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
        <div className="h-20 mx-36 text-3xl">
          <span className=" mr-1.5">ประสบการณ์การใช้งาน iPhone</span>
          <span className="text-[#6e6e73]">
            ออกแบบมาเพื่อเชื่อมทุกอย่างที่เป็น Apple ให้เป็น
            <br />
            หนึ่งเดียว
          </span>
        </div>
      </div>
      <div className="slider-container mx-36 cursor-pointer">
        <Slider {...settings}>
          <div className="">
            <Intelligence />
          </div>
          <div>
            <Ios18 />
          </div>
          <div>
            <Airpods />
          </div>
          <div>
            <AppleTV />
          </div>
          <div>
            <Airtag />
          </div>
          <div>
            <Appleone />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Experience_slick;
