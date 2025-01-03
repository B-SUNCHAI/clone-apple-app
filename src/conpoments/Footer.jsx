import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faApple } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="pt-12">
      <div className="w-full pt-3">
        <div className="mx-[27rem] h-full pt-5">
          <div className="mx-6">
            <div className="text-xs text-[#6e6e73]">
              ราคาสินค้าดังกล่าวได้รวมภาษีมูลค่าเพิ่มแล้ว
              และไม่มีค่าธรรมเนียมการจัดส่งสินค้าทุกประเภท
            </div>
            <div className="text-xs text-[#6e6e73] mt-4 font-bold ">
              1. เงื่อนไขสำหรับการผ่อนชำระเงินเป็นระยะเวลา 3 เดือน 6 เดือน และ
              10 เดือน ด้วยอัตราดอกเบี้ย 0%
            </div>
            <div className="text-xs text-[#6e6e73] mt-3">
              บริษัทคาร์ดเอกซ์จำกัด (CardX) และธนาคารไทยพาณิชย์ (SCB),
              ธนาคารกสิกรไทย (KBank), ธนาคาร UOB, กรุงศรีคอนซูมเมอร์ (Krungsri
              Consumer), ธนาคารทีเอ็มบีธนชาต (TMBThanachart) หรือธนาคารกรุงเทพ
              (Bangkok Bank) เป็นผู้ให้บริการผ่อนชำระเงินด้วยอัตราดอกเบี้ย 0%
              การซื้อต้องมีมูลค่าเกิน 5,000 บาท
              เพื่อให้เข้าเกณฑ์สำหรับข้อเสนอการผ่อนชำระดอกเบี้ย 0% เป็นเวลา 3, 6
              หรือ 10 เดือน การซื้อทั้งหมดตามแผนการผ่อนชำระดอกเบี้ย 0%
              ขึ้นอยู่กับการอนุมัติโดยสถาบันผู้ออกบัตรเครดิตของคุณ
              โปรดดูเงื่อนไข ค่าธรรมเนียม และค่าบริการอื่นๆ
              ที่กำหนดไว้ในเว็บไซต์ บริษัทคาร์ดเอกซ์จำกัด (CardX)
              และธนาคารไทยพาณิชย์ (SCB), ธนาคารกสิกรไทย (KBank), ธนาคาร UOB,
              กรุงศรีคอนซูมเมอร์ (Krungsri Consumer), ธนาคารทีเอ็มบีธนชาต
              (TMBThanachart) หรือธนาคารกรุงเทพ (Bangkok Bank)
            </div>
            <div className="text-xs text-[#6e6e73] font-bold">
              ข้อตกลงและเงื่อนไข
            </div>
            <div className="text-xs text-[#6e6e73]">
              ข้อเสนอการผ่อนชำระมีให้กับเฉพาะลูกค้า Apple ลูกค้าธุรกิจ
              และลูกค้าเพื่อการศึกษา ที่ใช้บัตรเครดิตเพื่อการบริโภค
              การซื้อสินค้าด้วยบัตร อเมริกัน เอ็กซ์เพรส (AMEX)
              และบัตรเดบิตจะไม่ได้รับสิทธิ์ตามข้อเสนอนี้
              ระบบจะเรียกเก็บเงินจากบัตรของคุณในช่วงเย็นของวันที่คุณทำการสั่งซื้อ
              อนึ่งข้อเสนอเหล่านี้ใช้บังคับไปถึงการซื้อสินค้าผ่านโครงการซื้อสินค้าของลูกจ้าง
              (Employee Purchase Program) และการซื้อสินค้ามือสองด้วย เจ้าหน้าที่
              Apple ไม่มีหน้าที่ในการชี้แจงเหตุผลใดๆ
              ในกรณีที่ธนาคารเจ้าของบัตรเครดิตไม่อนุมัติการสั่งซื้อสินค้าดังกล่าว
              หากต้องการข้อมูลเพิ่มเติมเกี่ยวกับการผ่อนชำระค่าสินค้า
              กรุณาติดต่อสอบถามไปยังธนาคารเจ้าของบัตรเครดิตของท่าน
              ค่าธรรมเนียมทางการเงินที่เกี่ยวข้องจะเป็นไปตามที่ปรากฏในใบแจ้งยอดค่าใช้จ่ายผ่านบัตร
              อนึ่งข้อเสนอนี้อยู่ภายใต้ราคาที่โฆษณา หรือราคาที่แสดงอยู่ที่สินค้า
            </div>
            <div className="text-xs text-[#6e6e73] mt-3">
              ข้อมูลนี้เป็นข้อมูลล่าสุด ณ วันที่ 1 กรกฎาคม 2024
            </div>
            <div className="text-xs text-[#6e6e73] mt-3">
              2. บริการแลกเปลี่ยนให้บริการโดยพันธมิตรการแลกเปลี่ยนของ Apple
              ราคาซื้อขายแลกเปลี่ยนเป็นเพียงการประมาณการเท่านั้น
              และมูลค่าจริงอาจต่ำกว่าที่ประมาณการไว้
              มูลค่าการแลกจะแตกต่างกันไปตามสภาพ ปี
              และการกำหนดค่าของอุปกรณ์ที่เข้าเกณฑ์ที่คุณนำมาแลก
              อุปกรณ์บางเครื่องอาจไม่เข้าเกณฑ์การรับเครดิต
              คุณต้องมีอายุบรรลุนิติภาวะเป็นอย่างน้อยจึงจะมีคุณสมบัติรับเครดิต
              Apple Store หรือบัตรของขวัญ
              มูลค่าการแลกสามารถนำไปใช้ซื้ออุปกรณ์เครื่องใหม่ที่เข้าเกณฑ์ได้หรือเพิ่มลงในบัตรของขวัญ
              Apple
              Storeมูลค่าจริงที่จ่ายให้นั้นอ้างอิงจากการได้รับอุปกรณ์ที่เข้าเกณฑ์และตรงตามคำอธิบายขณะทำการประเมินภาษีมูลค่าเพิ่ม
              (VAT)
              อาจคิดจากมูลค่าเต็มของอุปกรณ์เครื่องใหม่ที่ซื้อโปรดแสดงบัตรประจำตัวที่มีรูปถ่ายซึ่งออกให้โดยรัฐบาลและยังไม่หมดอายุเมื่อนำอุปกรณ์มาแลกภายในร้าน
              (อาจต้องมีการบันทึกข้อมูลนี้ตามกฎหมายท้องถิ่น)
              ข้อเสนออาจใช้ไม่ได้ในร้านค้าทุกแห่ง
              และยังอาจแตกต่างกันไประหว่างการแลกอุปกรณ์ที่ร้านและทางออนไลน์
              การนำคอมพิวเตอร์มาแลกอาจใช้ไม่ได้ในร้านค้าทุกแห่งร้านค้าบางแห่งอาจมีข้อกำหนดเพิ่มเติม
              พันธมิตรการแลกเปลี่ยนของ Apple ขอสงวนสิทธิ์ในการปฏิเสธ ยกเลิก
              หรือจำกัดจำนวนธุรกรรมการแลกเปลี่ยนใดๆ
              ด้วยเหตุผลใดก็ตามสามารถดูรายละเอียดเพิ่มเติมจาก
              พันธมิตรด้านการแลกอุปกรณ์ ของ Apple สำหรับการแลก และ
              พันธมิตรด้านการรีไซเคิล
              สำหรับการรีไซเคิลอุปกรณ์ที่มีคุณสมบัติเข้าเกณฑ์
              อาจมีการใช้ข้อกำหนดและข้อจำกัด
              อาจมีการใช้ข้อกำหนดและข้อจำกัดอื่นๆสำหรับอุปกรณ์ที่มีคุณสมบัติเข้าเกณฑ์การรีไซเคิล
            </div>
            <div className="text-xs text-[#6e6e73] mt-3 ">
              ° การใช้ Apple TV+ ต้องสมัครสมาชิกก่อน
            </div>
            <div className="mt-3">
              <hr />
            </div>
          </div>
          <div className="mx-6 pt-3">
            <div className="text-xs text-[#555558]">
              <FontAwesomeIcon className="text-lg" icon={faApple} />{" "}
              &nbsp;&nbsp;ᐳ&nbsp;&nbsp; Apple Store แบบออนไลน์
              &nbsp;&nbsp;ᐳ&nbsp;&nbsp; iPhone
            </div>
            <div className="pt-4 flex flex-row pb-10">
              <div className="basis-1/5">
                <div className="text-xs mb-2 text-[#000000] font-bold">
                  เลือกซื้อและเรียนรู้
                </div>
                <div className="text-xs mb-2 text-[#555558] ">ร้าน</div>
                <div className="text-xs mb-2 text-[#555558] ">MAC</div>
                <div className="text-xs mb-2 text-[#555558] ">iPad</div>
                <div className="text-xs mb-2 text-[#555558] ">iPhone</div>
                <div className="text-xs mb-2 text-[#555558] ">Watch</div>
                <div className="text-xs mb-2 text-[#555558] ">AirPods</div>
                <div className="text-xs mb-2 text-[#555558] ">TV และบ้าน</div>
                <div className="text-xs mb-2 text-[#555558] ">AirTag</div>
                <div className="text-xs mb-2 text-[#555558] ">อุปกรณ์เสริม</div>
                <div className="text-xs mb-2 text-[#555558] ">บัตรของขวัญ</div>
                <div className="text-xs mt-6 mb-2 text-[#000000] font-bold">
                  กระเป๋าสตางค์ Apple
                </div>
                <div className="text-xs text-[#555558] ">กระเป๋าสตางค์</div>
              </div>
              <div className="basis-1/5">
                <div className="text-xs mb-2 text-[#000000] font-bold">
                  บัญชี
                </div>
                <div className="text-xs mb-2 text-[#555558] ">
                  จัดการบัญชี Apple ของคุณ
                </div>
                <div className="text-xs mb-2 text-[#555558] ">
                  บัญชีสำหรับ Apple Store
                </div>
                <div className="text-xs mb-2 text-[#555558] ">iCloud.com</div>
                <div className="text-xs mt-6 mb-2 text-[#000000] font-bold ">
                  ความบันเทิง
                </div>
                <div className="text-xs mb-2 text-[#555558] ">Apple One</div>
                <div className="text-xs mb-2 text-[#555558] ">Apple TV+</div>
                <div className="text-xs mb-2 text-[#555558] ">Apple Music</div>
                <div className="text-xs mb-2 text-[#555558] ">Apple Arcade</div>
                <div className="text-xs mb-2 text-[#555558] ">
                  Apple Podcasts
                </div>
                <div className="text-xs mb-2 text-[#555558] ">Apple Books</div>
                <div className="text-xs mb-2 text-[#555558] ">Apple Store</div>
              </div>
              <div className="basis-1/5">
                <div className="text-xs mb-2 text-[#000000] font-bold">
                  Apple Store
                </div>
                <div className="text-xs mb-2 text-[#555558] ">ค้นหาร้าน</div>
                <div className="text-xs mb-2 text-[#555558] ">Genius Bar</div>
                <div className="text-xs mb-2 text-[#555558] ">
                  Today at Apple
                </div>
                <div className="text-xs mb-2 text-[#555558] ">
                  แอป Apple Store
                </div>
                <div className="text-xs mb-2 text-[#555558] ">
                  Apple Trade In
                </div>
                <div className="text-xs mb-2 text-[#555558] ">
                  บริการด้านการเงิน
                </div>
                <div className="text-xs mb-2 text-[#555558] ">
                  โครงการรีไซเคิลของ Apple
                </div>
                <div className="text-xs mb-2 text-[#555558] ">
                  สถานะคำสั่งซื้อ
                </div>
                <div className="text-xs mb-2 text-[#555558] ">
                  บริการช่วยเหลือด้านการซื้อ
                </div>
              </div>
              <div className="basis-1/5">
                <div className="text-xs mb-2 text-[#000000] font-bold">
                  สำหรับธุรกิจ
                </div>
                <div className="text-xs mb-2 text-[#555558] ">
                  Apple กับธุรกิจ
                </div>
                <div className="text-xs mb-2 text-[#555558] ">
                  เลือกซื้อสินค้าสำหรับธุรกิจของคุณ
                </div>
                <div className="text-xs mt-6 mb-2 text-[#000000] font-bold ">
                  สำหรับการศึกษา
                </div>
                <div className="text-xs mb-2 text-[#555558] ">
                  Apple กับการศึกษา
                </div>
                <div className="text-xs mb-2 text-[#555558] ">
                  เลือกซื้อสินค้าสำหรับมหาวิทยาลัย
                </div>
                <div className="text-xs mt-6 mb-2 text-[#000000] font-bold ">
                  สำหรับการดูแลสุขภาพ
                </div>
                <div className="text-xs mb-2 text-[#555558] ">
                  Apple กับการดูแลสุขภาพ
                </div>
              </div>
              <div className="basis-1/5">
                <div className="text-xs mb-2 text-[#000000] font-bold">
                  ค่านิยมของ Apple
                </div>
                <div className="text-xs mb-2 text-[#555558] ">
                  การช่วยการเข้าถึง
                </div>
                <div className="text-xs mb-2 text-[#555558] ">สิ่งแวดล้อม</div>
                <div className="text-xs mb-2 text-[#555558] ">
                  ความเป็นส่วนตัว
                </div>
                <div className="text-xs mb-2 text-[#555558] ">ซัพพลายเซน</div>
                <div className="text-xs mt-6 mb-2 text-[#000000] font-bold ">
                  เกี่ยวกับ Apple
                </div>
                <div className="text-xs mb-2 text-[#555558] ">Newsroom</div>
                <div className="text-xs mb-2 text-[#555558] ">
                  ผู้บริการ Apple
                </div>
                <div className="text-xs mb-2 text-[#555558] ">
                  ร่วมงานกับเรา
                </div>
                <div className="text-xs mb-2 text-[#555558] ">นักลงทุน</div>
                <div className="text-xs mb-2 text-[#555558] ">
                  จริยธรรมและการปฏิบัติตาม
                </div>
                <div className="text-xs mb-2 text-[#555558] ">กิจกรรม</div>
                <div className="text-xs text-[#555558] ">ติดต่อ Apple</div>
              </div>
            </div>
            <div className="pb-5">
              <span className="text-xs text-[#6e6e73]">
                อีกหลากหลายวิธีในการเลือกซื้อ:&nbsp;
              </span>
              <span className="text-xs text-[#5656ff] underline">
                ค้นหา Apple Store &nbsp;
              </span>
              <span className="text-xs text-[#6e6e73]">หรือ&nbsp;</span>
              <span className="text-xs text-[#5656ff] underline">
                ร้านค้าอื่นๆ &nbsp;
              </span>
              <span className="text-xs text-[#6e6e73]">
                ใกล้คุณ หรือโทร 1800-01-9209
              </span>
            </div>
            <div className="">
              <hr />
            </div>
            <div className="pt-3 flex justify-between">
              <div className="">
                <div className="">
                  <span className="text-xs text-[#6e6e73]">
                    Copyright © 2024 Apple Inc. สงวนสิทธิ์ทุกประการ
                  </span>
                </div>
                <div className="">
                  <span className="text-xs text-[#6e6e73]">
                    นโยบายความเป็นส่วนตัว
                  </span>
                  <span className="text-xs text-[#6e6e73] px-2">|</span>
                  <span className="text-xs text-[#6e6e73]">
                    ข้อกำหนดการใช้งาน
                  </span>
                  <span className="text-xs text-[#6e6e73] px-2">|</span>
                  <span className="text-xs text-[#6e6e73]">
                    การขายและการคืนเงิน
                  </span>
                  <span className="text-xs text-[#6e6e73] px-2">|</span>
                  <span className="text-xs text-[#6e6e73]">
                    ข้อมูลทางกฎหมาย
                  </span>
                  <span className="text-xs text-[#6e6e73] px-2">|</span>
                  <span className="text-xs text-[#6e6e73]">แผนผังเว็บไซด์</span>
                </div>
              </div>
              <div className="h-7">
                <span className="text-xs text-[#6e6e73] ">ไทย</span>
                <span className="text-xs text-[#6e6e73] px-2">|</span>
                <span className="text-xs text-[#6e6e73] ">English</span>
              </div>
            </div>
            <div className="pt-3 flex justify-between"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
