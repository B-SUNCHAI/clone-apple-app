import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./fly.css";

const Example = () => {
  return (
    <div className="t_color nav-item ">
      <Fly_Watch href="#" FlyoutContent={WatchContent}>
        <div className="">Watch</div>
      </Fly_Watch>
    </div>
  );
};

const Fly_Watch = ({ children, href, FlyoutContent }) => {
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

const WatchContent = () => {
  return (
    <div>
      <div className="w-[1920px] h-[460px] bg-[#ffffff] justify-items-center">
        <div className=" w-[1025px] max-h-calc(100% - 44px)  p-6 mt-4 text-left">
          <div className="flex mt-4 mb-10 ">
            {/* max-h-calc(100% - 44px) */}
            <div className="flex flex-col mb-3 pr-12 ">
              <h3 className="h_color">ดูข้อมูล Watch</h3>
              <a href="#" className="t_color pt-4 text-2xl font-semibold ">
                ดูข้อมูล Apple Watch ทั้งหมด
              </a>
              <a href="#" className="t_color pt-3 text-2xl font-semibold">
                Apple Watch Series 10
              </a>
              <a href="#" className="t_color pt-3 text-2xl font-semibold ">
                Apple Watch Iltra 2
              </a>
              <a href="#" className="t_color pt-3 text-2xl font-semibold ">
                Apple Watch SE
              </a>
              <a href="#" className="t_color pt-3 text-2xl font-semibold ">
                Apple Watch Nike
              </a>
              <a href="#" className="t_color pt-3 text-2xl font-semibold">
                Apple Watch Hermès
              </a>
              <a href="#" className="t_color pt-5 text-xs font-semibold">
                เปรียบเทียบ Watch
              </a>
              <a href="#" className="t_color pt-2 text-xs font-semibold">
                ทำไมต้อง Apple Watch
              </a>
            </div>
            <div className="flex flex-col mb-3 pr-10">
              <h3 className="h_color">เลือกซื้อ Watch</h3>
              <a href="#" className="t_color pt-5 text-xs font-semibold">
                เลือกซื้อ Apple Watch
              </a>
              <a href="#" className="t_color pt-3 text-xs font-semibold">
                Apple Watch Studio
              </a>
              <a href="#" className="t_color pt-3 text-xs font-semibold">
                สาย Apple Watch
              </a>
              <a href="#" className="t_color pt-3 text-xs font-semibold">
                อุปกรณ์เสริม Apple Watch
              </a>
              <a href="#" className="t_color pt-3 text-xs font-semibold">
                Apple Trade in
              </a>
              <a href="#" className="t_color pt-3 text-xs font-semibold">
                บริการด้านการเงิน
              </a>
            </div>
            <div className="flex flex-col mb-3 pr-20">
              <h3 className="h_color">อีกมากมายจาก Watch</h3>
              <a href="#" className="t_color pt-5 text-xs font-semibold">
                บริการช่วยเหลือสำหรับ Apple Watch
              </a>
              <a href="#" className="t_color pt-3 text-xs font-semibold">
                AppleCare+
              </a>
              <a href="#" className="t_color pt-3 text-xs font-semibold">
                watchOS 11
              </a>
              <a href="#" className="t_color pt-3 text-xs font-semibold">
                Apple Watch สำหรับลูกๆ ของคุณ
              </a>
              <a href="#" className="t_color pt-3 text-xs font-semibold">
                แอปต่างๆ จาก Apple
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
