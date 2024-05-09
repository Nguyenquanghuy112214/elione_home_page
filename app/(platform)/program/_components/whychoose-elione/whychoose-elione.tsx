"use client";
import { icons } from "@/public/img";
import React from "react";
import WhychooseElioneItem from "./whychoose-elione-item";
import { WhyChooseProgram } from "@prisma/client";
import { InterVF } from "@/components/fonts_application/fonts";

function WhychooseElione({ data }: { data: WhyChooseProgram[] }) {
  return (
    <div className=" bg-gradient-to-br from-[#f8f8f8] from-25% to-[#bcbebd] relative z-0">
      <div className={`py-10 ${InterVF.className}`}>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className={` text-center text-text_h1 uppercase `}
        >
          Lý do chọn Elione ?
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className=" text-center uppercase font-semibold"
        >
          Tặng Con Mùa Hè Thật Ý Nghĩa
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className=" flex items-center justify-center mt-3"
        >
          <div className=" flex  h-2 w-[20%]">
            <div className="flex-1 bg-gradient-to-r from-[#0047b4] to-[#042d9e] h-full rounded-s-sm"></div>
            <div className="flex-1 h-full bg-gradient-to-r from-[#0285d5] to-[#005fc3]"></div>
            <div className="flex-1 h-full bg-gradient-to-r from-[#04c1a9] to-[#01c57a] rounded-e-sm"></div>
          </div>
        </div>
        <div data-aos="zoom-in" data-aos-duration="1000" className=" relative">
          <div className=" grid sm:grid-cols-1 sm:gap-y-32 md:gap-y-28 lg:gap-x-20 lg:grid-cols-3 mt-10 relative md:container">
            {data?.map((item, i) => (
              <div className="circle-ab relative" key={i}>
                <WhychooseElioneItem data={item} />
                <div className=" bg-gradient"></div>
              </div>
            ))}
          </div>
          <div className=" bg-gradient sm:hidden lg:block"> </div>
        </div>
      </div>
    </div>
  );
}

export default WhychooseElione;
