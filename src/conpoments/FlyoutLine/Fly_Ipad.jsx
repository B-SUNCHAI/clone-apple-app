import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./fly.css";

const Example = () => {
  return (
    <div className="t_color nav-item ">
      <Fly_Ipad href="#" FlyoutContent={IpadContent}>
        <div className="">iPad</div>
      </Fly_Ipad>
    </div>
  );
};

const Fly_Ipad = ({ children, href, FlyoutContent }) => {
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

const IpadContent = () => {
  return (
    <div>
      <div className="w-[1920px] h-[510px] bg-[#ffffff] justify-items-center">
        <div className=" w-[1025px] max-h-calc(100% - 44px)  p-6 mt-4 text-left">
          <div className="flex mt-4 mb-10 ">
            {/* max-h-calc(100% - 44px) */}
            <div className="flex flex-col mb-3 pr-12 ">
              <h3 className="h_color">ดูข้อมูล iPad</h3>
              <a href="#" className="t_color pt-4 text-2xl font-semibold ">
                ดูข้อมูล iPad ทั้งหมด
              </a>
              <a href="#" className="t_color pt-3 text-2xl font-semibold">
                iPad Pro
              </a>
              <a href="#" className="t_color pt-3 text-2xl font-semibold ">
                iPad Air
              </a>
              <a href="#" className="t_color pt-3 text-2xl font-semibold ">
                iPad
              </a>
              <a href="#" className="t_color pt-3 text-2xl font-semibold ">
                iPad Mini
              </a>
              <a href="#" className="t_color pt-3 text-2xl font-semibold">
                Apple Pencil
              </a>
              <a href="#" className="t_color pt-3 text-2xl font-semibold">
                คีย์บอร์ด
              </a>
              <a href="#" className="t_color pt-5 text-xs font-semibold">
                เปรียบเทียบ iPad
              </a>
              <a href="#" className="t_color pt-2 text-xs font-semibold">
                ทำไมต้อง iPad
              </a>
            </div>
            <div className="flex flex-col mb-3 pr-10">
              <h3 className="h_color">เลือกซื้อ iPad</h3>
              <a href="#" className="t_color pt-5 text-xs font-semibold">
                เลือกซื้อ iPad
              </a>
              <a href="#" className="t_color pt-3 text-xs font-semibold">
                อุปกรณ์เสริม iPad
              </a>
              <a href="#" className="t_color pt-3 text-xs font-semibold">
                Apple Trade in
              </a>
              <a href="#" className="t_color pt-3 text-xs font-semibold">
                บริการด้านการเงิน
              </a>
            </div>
            <div className="flex flex-col mb-3 pr-20">
              <h3 className="h_color">อีกมากมายจาก iPad</h3>
              <a href="#" className="t_color pt-5 text-xs font-semibold">
                บริการช่วยเหลือสำหรับ iPad
              </a>
              <a href="#" className="t_color pt-3 text-xs font-semibold">
                AppleCare+ สำหรับ iPad
              </a>
              <a href="#" className="t_color pt-3 text-xs font-semibold">
                iPadOS 18
              </a>
              <a href="#" className="t_color pt-3 text-xs font-semibold">
                Apple Intelligence
              </a>
              <a href="#" className="t_color pt-3 text-xs font-semibold">
                แอปต่างๆ จาก Apple
              </a>
              <a href="#" className="t_color pt-3 text-xs font-semibold">
                iCloud+
              </a>
              <a href="#" className="t_color pt-3 text-xs font-semibold">
                การศึกษา
              </a>
            </div>
          </div>
        </div>
        <div className=" w-[1920px] h-[500px] bg-[#ffffffd9]"></div>
      </div>
    </div>
  );
};

export default Example;
