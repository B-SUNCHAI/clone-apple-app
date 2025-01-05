import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./fly.css";

const Example = () => {
  return (
    <div className="t_color nav-item ">
      <Fly_AirPods href="#" FlyoutContent={AirPodsContent}>
        <div className="">AirPods</div>
      </Fly_AirPods>
    </div>
  );
};

const Fly_AirPods = ({ children, href, FlyoutContent }) => {
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

const AirPodsContent = () => {
  return (
    <div>
      <div className=" w-[1920px] h-[400px] bg-[#ffffff] justify-items-center">
        <div className="w-[1025px] max-h-calc(100% - 44px)  p-6 mt-4 text-left">
          <div className="flex mt-4 mb-10 ">
            {/* max-h-calc(100% - 44px) */}
            <div className="flex flex-col mb-3 pr-12 ">
              <h3 className="h_color">ดูข้อมูล AirPods</h3>
              <a href="#" className="t_color pt-4 text-2xl font-semibold ">
                ดูข้อมูล AirPods ทั้งหมด
              </a>
              <a href="#" className="t_color pt-3 text-2xl font-semibold">
                AirPods 4
              </a>
              <a href="#" className="t_color pt-3 text-2xl font-semibold ">
                AirPods Pro 2
              </a>
              <a href="#" className="t_color pt-3 text-2xl font-semibold ">
                AirPods Max
              </a>
              <a href="#" className="t_color pt-5 text-xs font-semibold">
                เปรียบเทียบ AirPods
              </a>
            </div>
            <div className="flex flex-col mb-3 pr-10">
              <h3 className="h_color">เลือกซื้อ AirPods</h3>
              <a href="#" className="t_color pt-5 text-xs font-semibold">
                เลือกซื้อ AirPods
              </a>
              <a href="#" className="t_color pt-3 text-xs font-semibold">
                อุปกรณ์เสริม AirPods
              </a>
            </div>
            <div className="flex flex-col mb-3 pr-20">
              <h3 className="h_color">อีกมากมายจาก AirPods</h3>
              <a href="#" className="t_color pt-5 text-xs font-semibold">
                บริการช่วยเหลือสำหรับ AirPods
              </a>
              <a href="#" className="t_color pt-3 text-xs font-semibold">
                AppleCare+ สำหรับหูฟัง
              </a>
              <a href="#" className="t_color pt-3 text-xs font-semibold">
                Apple Music
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
