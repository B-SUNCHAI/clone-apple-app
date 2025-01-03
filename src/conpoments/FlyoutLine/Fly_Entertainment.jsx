import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./fly.css";

const Example = () => {
  return (
    <div className="t_color nav-item">
      <Fly_Entertainment href="#" FlyoutContent={EntertainmentContent}>
        <div className="">ความบันเทิง</div>
      </Fly_Entertainment>
    </div>
  );
};

const Fly_Entertainment = ({ children, href, FlyoutContent }) => {
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

const EntertainmentContent = () => {
  return (
    <div>
      <div className=" w-[1920px] h-[500px] bg-[#ffffff] justify-items-center">
        <div className="w-[1025px] max-h-calc(100% - 44px)  p-6 mt-4 text-left">
          <div className="flex mt-4 mb-10 ">
            {/* max-h-calc(100% - 44px) */}
            <div className="flex flex-col mb-3 pr-12 ">
              <h3 className="h_color">ดูข้อมูลความบันเทิง</h3>
              <a href="#" className="t_color pt-4 text-2xl font-semibold ">
                ดูข้อมูลความบันเทิง
              </a>
              <a href="#" className="t_color pt-3 text-2xl font-semibold">
                Apple One
              </a>
              <a href="#" className="t_color pt-3 text-2xl font-semibold ">
                Apple TV+
              </a>
              <a href="#" className="t_color pt-3 text-2xl font-semibold ">
                Apple Music
              </a>
              <a href="#" className="t_color pt-3 text-2xl font-semibold ">
                Apple Arcade
              </a>
              <a href="#" className="t_color pt-3 text-2xl font-semibold ">
                Apple Podcasts
              </a>
              <a href="#" className="t_color pt-3 text-2xl font-semibold ">
                Apple Book
              </a>
              <a href="#" className="t_color pt-3 text-2xl font-semibold ">
                Apple Store
              </a>
            </div>
            <div className="flex flex-col mb-3 pr-10">
              <h3 className="h_color">บริการช่วยเหลือ</h3>
              <a href="#" className="t_color pt-5 text-xs font-semibold">
                บริการช่วยเหลือสำหรับ Apple TV+
              </a>
              <a href="#" className="t_color pt-5 text-xs font-semibold">
                บริการช่วยเหลือสำหรับ Apple Music
              </a>
            </div>
          </div>
        </div>
        <div className=" w-[1920px] h-[550px] backdrop-blur-2xl"></div>
      </div>
    </div>
  );
};

export default Example;
