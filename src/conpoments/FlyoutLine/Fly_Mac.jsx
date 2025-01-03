import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { div } from "motion/react-m";
import "./fly.css";

const Example = () => {
  return (
    <div className="t_color nav-item ">
      <Fly_Mac href="#" FlyoutContent={MacContent}>
        <div className="">Mac</div>
      </Fly_Mac>
    </div>
  );
};

const Fly_Mac = ({ children, href, FlyoutContent }) => {
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

const MacContent = () => {
  return (
    <div>
      <div className="w-[1920px] h-[550px] bg-[#ffffff] justify-items-center">
        <div className=" w-[1025px] max-h-calc(100% - 44px)  p-6 mt-4 text-left">
          <div className="flex mt-4 mb-10 ">
            {/* max-h-calc(100% - 44px) */}
            <div className="flex flex-col mb-3 pr-12 ">
              <h3 className="h_color">ดูข้อมูล Mac</h3>
              <a href="#" className="t_color pt-4 text-2xl font-semibold ">
                ดูข้อมูล Mac ทั้งหมด
              </a>
              <a href="#" className="t_color pt-3 text-2xl font-semibold">
                MacBook Air
              </a>
              <a href="#" className="t_color pt-3 text-2xl font-semibold ">
                MacBook Pro
              </a>
              <a href="#" className="t_color pt-3 text-2xl font-semibold ">
                iMac
              </a>
              <a href="#" className="t_color pt-3 text-2xl font-semibold ">
                Mac Mini
              </a>
              <a href="#" className="t_color pt-3 text-2xl font-semibold">
                Mac Studio
              </a>
              <a href="#" className="t_color pt-3 text-2xl font-semibold">
                Mac Pro
              </a>
              <a href="#" className="t_color pt-3 text-2xl font-semibold">
                จอภาพ
              </a>
              <a href="#" className="t_color pt-5 text-xs font-semibold">
                เปรียบเทียบ Mac
              </a>
              <a href="#" className="t_color pt-2 text-xs font-semibold">
                เปลี่ยนจาก PC มาใช้ Mac
              </a>
            </div>
            <div className="flex flex-col mb-3 pr-10">
              <h3 className="h_color">เลือกซื้อ Mac</h3>
              <a href="#" className="t_color pt-5 text-xs font-semibold">
                เลือกซื้ออุปกรณ์ Mac
              </a>
              <a href="#" className="t_color pt-3 text-xs font-semibold">
                อุปกรณ์เสริม Mac
              </a>
              <a href="#" className="t_color pt-3 text-xs font-semibold">
                Apple Trade In
              </a>
              <a href="#" className="t_color pt-3 text-xs font-semibold">
                บริการด้านการเงิน
              </a>
            </div>
            <div className="flex flex-col mb-3 pr-20">
              <h3 className="h_color">อีกมากมายจาก Mac</h3>
              <a href="#" className="t_color pt-5 text-xs font-semibold">
                บริการช่วยเหลือสำหรับ Mac
              </a>
              <a href="#" className="t_color pt-3 text-xs font-semibold">
                AppleCare+ สำหรับ Mac
              </a>
              <a href="#" className="t_color pt-3 text-xs font-semibold">
                macOS Sequoia
              </a>
              <a href="#" className="t_color pt-3 text-xs font-semibold">
                Apple Intelligence
              </a>
              <a href="#" className="t_color pt-3 text-xs font-semibold">
                แอปต่างๆ จาก Apple
              </a>
              <a href="#" className="t_color pt-3 text-xs font-semibold">
                ความต่อเนื่อง
              </a>
              <a href="#" className="t_color pt-3 text-xs font-semibold">
                iCloud+
              </a>
              <a href="#" className="t_color pt-3 text-xs font-semibold">
                Mac สำหรับธุรกิจ
              </a>
              <a href="#" className="t_color pt-3 text-xs font-semibold">
                การศึกษา
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
