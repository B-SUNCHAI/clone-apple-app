import "./App.css";
import { useEffect, useRef } from "react";

import HeadNavbar from "./conpoments/Navbar";
import HeadContent from "./conpoments/HeadContent";
import NavbarContent from "./conpoments/NavbarContent";

import Footer from "./conpoments/Footer";

import Iphone_slick from "./sections/Iphone/Iphone_slick";
import Festival_slick from "./sections/Festival/Festival_slick";
import Setting_slick from "./sections/Setting/Setting_slick";
import Experience_slick from "./sections/Experience/Experience_slick";
import Suggest_slick from "./sections/Suggest/Suggest_slick";
import Saveprice_slick from "./sections/Saveprice/Saveprice_slick";
import Special_slick from "./sections/Special/Special_slick";

function App() {
  const aboutIphoneRef = useRef(null);
  const aboutSuggestRef = useRef(null);
  const aboutSavepriceRef = useRef(null);
  const aboutFestivalRef = useRef(null);
  const aboutSettingRef = useRef(null);
  const aboutExperienceRef = useRef(null);
  const aboutSpecialRef = useRef(null);
  return (
    <>
      <div>
        {/* <FlyoutLine /> */}

        <HeadNavbar />
        <HeadContent />
        {/* <NavbarContent /> */}
        <div className="h-16 grid mb-10">
          <div className="ml-36 content-center">
            <span className="mid_navbar">
              <button
                className="mid_text t_nav_color"
                onClick={() =>
                  window.scrollTo({
                    top: aboutIphoneRef.current.offsetTop,
                    behavior: "smooth",
                  })
                }
              >
                ทุกรุ่น
              </button>
            </span>
            <span className="mid_navbar">
              <span
                className="mid_text t_nav_color"
                onClick={() =>
                  window.scrollTo({
                    top: aboutSuggestRef.current.offsetTop,
                    behavior: "smooth",
                  })
                }
              >
                คำแนะนำในการช้อปปิ้ง
              </span>
            </span>
            <span className="mid_navbar">
              <span
                className="mid_text t_nav_color"
                onClick={() =>
                  window.scrollTo({
                    top: aboutSavepriceRef.current.offsetTop,
                    behavior: "smooth",
                  })
                }
              >
                วิธีประหยัด
              </span>
            </span>
            <span className="mid_navbar">
              <span
                className="mid_text t_nav_color"
                onClick={() =>
                  window.scrollTo({
                    top: aboutFestivalRef.current.offsetTop,
                    behavior: "smooth",
                  })
                }
              >
                อุปกรณ์เสริม
              </span>
            </span>
            <span className="mid_navbar">
              <span
                className="mid_text t_nav_color"
                onClick={() =>
                  window.scrollTo({
                    top: aboutSettingRef.current.offsetTop,
                    behavior: "smooth",
                  })
                }
              >
                การตั้งค่าและความช่วยเหลือ
              </span>
            </span>
            <span className="mid_navbar">
              <span
                className="mid_text t_nav_color"
                onClick={() =>
                  window.scrollTo({
                    top: aboutExperienceRef.current.offsetTop,
                    behavior: "smooth",
                  })
                }
              >
                ประสบการณ์การใช้งาน iPhone
              </span>
            </span>
            <span className="mid_navbar">
              <span
                className="mid_text t_nav_color"
                onClick={() =>
                  window.scrollTo({
                    top: aboutSpecialRef.current.offsetTop,
                    behavior: "smooth",
                  })
                }
              >
                ร้านพิเศษของเรา
              </span>
            </span>
          </div>
        </div>

        {/* Iphone */}
        <div className="" ref={aboutIphoneRef}>
          <Iphone_slick />
        </div>

        {/* Suggest */}
        <div className="" ref={aboutSuggestRef}>
          <Suggest_slick />
        </div>

        {/* Saveprice */}
        <div className="" ref={aboutSavepriceRef}>
          <Saveprice_slick />
        </div>

        {/* Festival */}
        <div className="" ref={aboutFestivalRef}>
          <Festival_slick />
        </div>

        {/* Setting */}
        <div className="" ref={aboutSettingRef}>
          <Setting_slick />
        </div>

        {/* Experience */}
        <div className="" ref={aboutExperienceRef}>
          <Experience_slick />
        </div>

        {/* Special */}
        <div className="" ref={aboutSpecialRef}>
          <Special_slick />
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default App;
