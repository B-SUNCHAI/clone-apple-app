import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { div } from "motion/react-m";
import "./fly.css";

const Example = () => {
  return (
    <div className="t_color nav-item ">
      <Fly_Store href="#" FlyoutContent={storeContent}>
        <div className="">ร้าน</div>
      </Fly_Store>
    </div>
  );
};

const Fly_Store = ({ children, href, FlyoutContent }) => {
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

const storeContent = () => {
  return (
    <div>
      <div className="w-[1920px] h-[400px] bg-[#ffffff] justify-items-center">
        <div className=" w-[1025px] max-h-calc(100% - 44px)  p-6 mt-4 text-left">
          <div className="flex mt-4 mb-10 ">
            {/* max-h-calc(100% - 44px) */}
            <div className="flex flex-col mb-3 pr-12 ">
              <h3 className="h_color">เลือกซื้อ</h3>
              <a href="#" className="t_color pt-4 text-2xl font-semibold ">
                เลือกซื้อผลิตภัณฑ์ล่าสุด
              </a>
              <a href="#" className="t_color pt-3 text-2xl font-semibold">
                Mac
              </a>
              <a href="#" className="t_color pt-3 text-2xl font-semibold ">
                iPad
              </a>
              <a href="#" className="t_color pt-3 text-2xl font-semibold ">
                iPhone
              </a>
              <a href="#" className="t_color pt-3 text-2xl font-semibold ">
                Apple Watch
              </a>
              <a href="#" className="t_color pt-3 text-2xl font-semibold">
                อุปกรณ์เสริม
              </a>
            </div>
            <div className="flex flex-col mb-3 pr-10">
              <h3 className="h_color">ลิงก์ด่วน</h3>
              <a href="#" className="t_color pt-5 text-xs font-semibold">
                ค้นหาร้าน
              </a>
              <a href="#" className="t_color pt-3 text-xs font-semibold">
                สถานะคำสั่งซื้อ
              </a>
              <a href="#" className="t_color pt-3 text-xs font-semibold">
                Apple Trade in
              </a>
              <a href="#" className="t_color pt-3 text-xs font-semibold">
                บริการด้านการเงิน
              </a>
            </div>
            <div className="flex flex-col mb-3 pr-20">
              <h3 className="h_color">เลือกซื้อในร้านค้าพิเศษ</h3>
              <a href="#" className="t_color pt-5 text-xs font-semibold">
                การศึกษา
              </a>
              <a href="#" className="t_color pt-3 text-xs font-semibold">
                ธุรกิจ
              </a>
            </div>
          </div>
        </div>
        <div className=" w-[1920px] h-[500px] backdrop-blur-2xl"></div>
      </div>
    </div>
  );
};

export default Example;
