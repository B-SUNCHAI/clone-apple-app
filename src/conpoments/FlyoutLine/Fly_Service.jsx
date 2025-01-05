import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./fly.css";

const Example = () => {
  return (
    <div className="t_color nav-item">
      <Fly_Service href="#" FlyoutContent={ServiceContent}>
        <div className="">บริการช่วยเหลือ</div>
      </Fly_Service>
    </div>
  );
};

const Fly_Service = ({ children, href, FlyoutContent }) => {
  const [open, setOpen] = useState(false);

  const showFlyout = FlyoutContent && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onScroll={() => setOpen(true)}
      className=" w-fit h-9"
    >
      <a href={href} className="relative">
        {children}
      </a>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute left-1/2  text-black mt-1 z-20 "
          >
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ServiceContent = () => {
  return (
    <div>
      <div className=" w-[1920px] h-[500px] bg-[#ffffff] justify-items-center">
        <div className="w-[1025px] max-h-calc(100% - 44px)  p-6 mt-4 text-left">
          <div className="flex mt-4 mb-10 ">
            {/* max-h-calc(100% - 44px) */}
            <div className="flex flex-col mb-3 pr-16 ">
              <h3 className="h_color">ดูข้อมูลการบริการช่วยเหลือ</h3>
              <a href="#" className="t_color pt-4 text-2xl font-semibold ">
                iPhone
              </a>
              <a href="#" className="t_color pt-3 text-2xl font-semibold">
                Mac
              </a>
              <a href="#" className="t_color pt-3 text-2xl font-semibold ">
                iPad
              </a>
              <a href="#" className="t_color pt-3 text-2xl font-semibold ">
                Watch
              </a>
              <a href="#" className="t_color pt-3 text-2xl font-semibold ">
                AirPods
              </a>
              <a href="#" className="t_color pt-3 text-2xl font-semibold ">
                เพลง
              </a>
              <a href="#" className="t_color pt-3 text-2xl font-semibold ">
                TV
              </a>
              <a href="#" className="t_color pt-5 text-xs font-semibold">
                ดูข้อมูลบริการช่วยเหลือ
              </a>
            </div>
            <div className="flex flex-col mb-3 pr-14">
              <h3 className="h_color">รับความช่วยเหลือ</h3>
              <a href="#" className="t_color pt-5 text-xs font-semibold">
                ชุมชน
              </a>
              <a href="#" className="t_color pt-5 text-xs font-semibold">
                ตรวจสอบ
              </a>
              <a href="#" className="t_color pt-5 text-xs font-semibold">
                ซ่อม
              </a>
            </div>
            <div className="flex flex-col mb-3 pr-10">
              <h3 className="h_color">หัวข้อที่เป็นประโยชน์</h3>
              <a href="#" className="t_color pt-5 text-xs font-semibold">
                ซื้อ AppleCare+
              </a>
              <a href="#" className="t_color pt-5 text-xs font-semibold">
                บัญชี Apple และรหัสผ่าน
              </a>
              <a href="#" className="t_color pt-5 text-xs font-semibold">
                การเรียกเก็บเงินและการสมัครรับ
              </a>
              <a href="#" className="t_color pt-5 text-xs font-semibold">
                การช่วยเหลือการเข้าถึง
              </a>
            </div>
          </div>
        </div>
        <div className=" w-[1920px] h-[550px] bg-[#ffffffd9]"></div>
      </div>
    </div>
  );
};

export default Example;
