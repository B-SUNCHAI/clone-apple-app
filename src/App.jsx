import "./App.css";

import HeadNavbar from "./conpoments/headNavbar";
import HeadContent from "./conpoments/HeadContent";
import NavbarContent from "./conpoments/NavbarContent";

import Twoiphone from "./sections/Suggest/Twoiphone";
import Changeiphone from "./sections/Suggest/Changeiphone";
import Specialist from "./sections/Suggest/Specialist";

import Interest from "./sections/Saveprice/Interest";
import Trade from "./sections/Saveprice/Trade";

import Surprice from "./sections/Festival/Surprice";
import Adapter_20w from "./sections/Festival/adapter_20w";
import FineWoven from "./sections/Festival/FineWoven";
import Adapter_30w from "./sections/Festival/Adapter_30w";
import Magsafe from "./sections/Festival/Magsafe";
import Silicone_blue from "./sections/Festival/Silicone_blue";
import IphoneMagsafe from "./sections/Festival/IphoneMagsafe";
import Beats_magsafe from "./sections/Festival/Beats_magsafe";

import Aboutiphone from "./sections/Setting/Aboutiphone";
import Cloudiphone from "./sections/Setting/Cloudiphone";
import Applecare from "./sections/Setting/Applecare";
import Setiphone from "./sections/Setting/Setiphone";
import Today from "./sections/Setting/Today";

import Intelligence from "./sections/Experience/Intelligence";
import Ios18 from "./sections/Experience/Ios_18";
import Airpods from "./sections/Experience/Airpods";
import AppleTV from "./sections/Experience/AppleTV";
import Airtag from "./sections/Experience/Airtag";
import Appleone from "./sections/Experience/Appleone";

import Business from "./sections/Special/Business";

import Footer from "./conpoments/Footer";
import Iphone_slick from "./sections/Iphone/Iphone_slick";

function App() {
  return (
    <>
      <div>
        <HeadNavbar />
        <HeadContent />
        <NavbarContent />

        {/* Iphone */}
        <div className="h-12 grid mb-3">
          <div className="ml-36">
            <span className=" text-3xl mr-2">ทุกรุ่น</span>
            {/* gradient_background */}
            <span className="text-3xl text-[#6e6e73]">
              เลือกแบบที่ใช่ได้เลย
            </span>
          </div>
        </div>

        <Iphone_slick />

        <div className="h-14"></div>

        {/* Suggest */}
        <div className="h-14 mx-36 text-3xl">
          <span className=" mr-1.5">คำแนะนำในการช้อปปิ้ง</span>
          <span className="text-[#6e6e73]">
            ถ้าเลือกไม่ได้ ก็เริ่มตรงนี้เลย
          </span>
        </div>
        <div className="flex flex-row mx-36 mt-3 pb-4">
          <Twoiphone />
          <Specialist />
          <Changeiphone />
        </div>

        {/* Saveprice */}
        <div className="flex m-auto w-auto mt-14">
          <div className="h-14 mx-36 text-3xl">
            <span className=" mr-1.5">วิธีในการประหยัด</span>
            <span className="text-[#6e6e73]">ที่ Apple</span>
          </div>
        </div>
        <div className="flex flex-row mx-36 mt-3 mb-4">
          <Interest />
          <Trade />
        </div>

        {/* Festival */}
        <div className="flex m-auto w-auto mt-14">
          <div className="h-14 mx-36 text-3xl">
            <span className=" mr-1.5">อุปกรณ์เสริม</span>
            <span className="text-[#6e6e73]">
              สิ่งที่ขาดไม่ได้ที่จับคู่กับอุปกรณ์โปรดของคุณได้อย่างลงตัว
            </span>
          </div>
        </div>
        <div className="flex flex-row mx-36 mt-3 mb-4">
          <Surprice />
          <IphoneMagsafe />
          <Silicone_blue />
          <Adapter_20w />
          <Magsafe />
          <Adapter_30w />
          <FineWoven />
          <Beats_magsafe />
        </div>

        {/* Setting */}
        <div className="flex m-auto w-auto mt-14">
          <div className="h-14 mx-36 text-3xl">
            <span className=" mr-1.5">การตั้งค่าแลกความช่วยเหลือ</span>
            <span className="text-[#6e6e73]">
              Specialist ของเราพร้อมช่วยเหลือคุณ
            </span>
          </div>
        </div>
        <div className="flex flex-row mx-36 mt-3 mb-4">
          <Aboutiphone />
          <Cloudiphone />
          <Applecare />
          <Setiphone />
          <Today />
        </div>

        {/* Experience */}
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
        <div className="flex flex-row mx-36 mt-3 mb-4">
          <Intelligence />
          <Ios18 />
          <Airpods />
          <AppleTV />
          <Airtag />
          <Appleone />
        </div>

        {/* Festival */}
        <div className="flex m-auto w-auto mt-14">
          <div className="h-14 mx-36 text-3xl">
            <span className=" mr-1.5">ร้านพิเศษของเรา</span>
            <span className="text-[#6e6e73]">ดูราคาที่ออกแบบมาเป็นพิเศษ</span>
          </div>
        </div>
        <div className="flex flex-row mx-36 mt-3 mb-4">
          <Business />
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default App;
