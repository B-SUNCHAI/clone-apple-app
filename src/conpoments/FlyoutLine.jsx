import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { div } from "motion/react-m";

const Example = () => {
  return (
    <div>
      <div className="flex justify-center bg-neutral-900 px-3 py-12">
        <div className="px-5">
          <FlyoutLink href="#" FlyoutContent={PricingContent}>
            Pricing
          </FlyoutLink>
        </div>
        <div className="px-5">
          <FlyoutLink href="#" FlyoutContent={PricingContent2}>
            Pricing
          </FlyoutLink>
        </div>
      </div>
    </div>
  );
};

const FlyoutLink = ({ children, href, FlyoutContent }) => {
  const [open, setOpen] = useState(false);

  const showFlyout = FlyoutContent && open;

  return (
    <div
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      className=" w-fit h-fit"
    >
      <a href={href} className="relative text-white">
        {children}
        <span
          style={{
            transform: showFlyout ? "scaleX(1)" : "scaleX(0)",
          }}
          className="absolute -bottom-2 -left-2 -right-2 h-1  scale-x-0 rounded-full transition-transform duration-300 ease-out"
        />
      </a>
      <AnimatePresence>
        {showFlyout && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            style={{ translateX: "-50%" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="absolute left-1/2 bg-white text-black"
          >
            <div className="absolute -top-6 left-0 right-0 bg-transparent" />
            <FlyoutContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const PricingContent = () => {
  return (
    <div>
      <div className=" w-[1920px] h-auto justify-items-center">
        <div className=" w-2/4 max-h-calc(100% - 44px) bg-white p-6 shadow-xl m-2">
          <div className="flex mt-4 mb-10">
            {/* max-h-calc(100% - 44px) */}
            <div className="flex flex-col mb-3 pr-20">
              <h3 className="">เลือกซื้อ2</h3>
              <a href="#" className="pt-4 text-2xl font-semibold ">
                เลือกซื้อผลิตภัณฑ์ล่าสุด2
              </a>
              <a href="#" className="pt-3 text-2xl font-semibold">
                Mac2
              </a>
              <a href="#" className="pt-3 text-2xl font-semibold ">
                iPad2
              </a>
              <a href="#" className="pt-3 text-2xl font-semibold ">
                iPhone2
              </a>
              <a href="#" className="pt-3 text-2xl font-semibold ">
                Apple Watch2
              </a>
              <a href="#" className="pt-3 text-2xl font-semibold">
                อุปกรณ์เสริม2
              </a>
            </div>
            <div className="flex flex-col mb-3 pr-20">
              <h3 className="">ลิงก์ด่วน</h3>
              <a href="#" className="pt-5 text-sm font-semibold">
                ค้นหาร้าน
              </a>
              <a href="#" className="pt-2 text-sm font-semibold">
                สถานะคำสั่งซื้อ
              </a>
              <a href="#" className="pt-2 text-sm font-semibold">
                Apple Trade in
              </a>
              <a href="#" className="pt-2 text-sm font-semibold">
                บริการด้านการเงิน
              </a>
            </div>
            <div className="flex flex-col mb-3 pr-20">
              <h3 className="">เลือกซื้อในร้านค้าพิเศษ</h3>
              <a href="#" className="pt-5 text-sm hover:underline">
                การศึกษา
              </a>
              <a href="#" className="pt-2 text-sm hover:underline">
                ธุรกิจ
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PricingContent2 = () => {
  return (
    <div>
      <div className="w-[1920px] justify-items-center">
        <div className=" w-2/4 max-h-calc(100% - 44px) bg-white p-6 shadow-xl m-2">
          <div className="flex mt-4 mb-10">
            {/* max-h-calc(100% - 44px) */}
            <div className="flex flex-col mb-3 pr-20">
              <h3 className="">เลือกซื้อ</h3>
              <a href="#" className="pt-4 text-2xl font-semibold ">
                เลือกซื้อผลิตภัณฑ์ล่าสุด
              </a>
              <a href="#" className="pt-3 text-2xl font-semibold">
                Mac
              </a>
              <a href="#" className="pt-3 text-2xl font-semibold ">
                iPad
              </a>
              <a href="#" className="pt-3 text-2xl font-semibold ">
                iPhone
              </a>
              <a href="#" className="pt-3 text-2xl font-semibold ">
                Apple Watch
              </a>
              <a href="#" className="pt-3 text-2xl font-semibold">
                อุปกรณ์เสริม
              </a>
            </div>
            <div className="flex flex-col mb-3 pr-20">
              <h3 className="">ลิงก์ด่วน</h3>
              <a href="#" className="pt-5 text-sm font-semibold">
                ค้นหาร้าน
              </a>
              <a href="#" className="pt-2 text-sm font-semibold">
                สถานะคำสั่งซื้อ
              </a>
              <a href="#" className="pt-2 text-sm font-semibold">
                Apple Trade in
              </a>
              <a href="#" className="pt-2 text-sm font-semibold">
                บริการด้านการเงิน
              </a>
            </div>
            <div className="flex flex-col mb-3 pr-20">
              <h3 className="">เลือกซื้อในร้านค้าพิเศษ</h3>
              <a href="#" className="pt-5 text-sm hover:underline">
                การศึกษา
              </a>
              <a href="#" className="pt-2 text-sm hover:underline">
                ธุรกิจ
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Example;
