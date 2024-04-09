"use client";
import { icons } from "@/public/img";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { MdOutlineArrowRight } from "react-icons/md";
import ArrowSVG from "./arrowsvg";
import Targetsvg from "./targetsvg";
function Target() {
  const data = [1, 2, 3, 4, 5];
  const [isMobile, setIsmobile] = useState<boolean>(false);
  console.log("isMobile", isMobile);

  const handleResize = () => {
    if (window.innerWidth < 1025) {
      setIsmobile(true);
    } else {
      setIsmobile(false);
    }
  };

  // create an event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });
  return (
    <div className=" container sm:my-3 md:py-10">
      <div className=" flex sm:gap-x-2 md:gap-x-10 items-center">
        <MdOutlineArrowRight className=" text-[#27dae7] text-[50px]" />
        <div className="">
          <div className=" text-center sm:text-[22px] md:text-text_h1 uppercase text-[#9f9f9f]">
            Mục tiêu chương trình
          </div>
          <h2 className="text-center sm:text-[14px] md:text-[28px] uppercase text-[#9f9f9f]">
            Vững Nền Tảng - Sẵn Sàng Khám Phá
          </h2>
        </div>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 md:px-8">
        <div className=" flex flex-col items-start justify-end">
          <div className=" sm:w-[100%] md:w-[130%]  relative z-[2]">
            <Targetsvg />
          </div>
          {/* <div className=" relative md:block sm:hidden"> */}
          <div className=" w-full relative">
            <ArrowSVG />
            <div className=" text-[#7d838f] text-sm absolute top-[50%] sm:left-[105px] md:left-[140px] translate-y-[-50%] sm:w-[250px] md:w-[350px]">
              Tạo nên những đứa trẻ hạnh phúc, yêu thích việc học, sẵn sàng với
              các hoạt động học tập, chuẩn bị vững vàng tâm lý.
              <div className=" text-2xl font-medium border-arrow text-white absolute top-[50%] translate-y-[-50%] left-[-70px] md:w-[50px] md:h-[50px] sm:w-[44px] sm:h-[44px] rounded-full  flex items-center justify-center p-3 shadow-arrow">
                1
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>

        <div className=" col-span-1">
          {data?.map((item, i) => (
            <div className=" w-full relative" key={i}>
              <ArrowSVG />
              <div className=" text-[#7d838f] text-sm absolute top-[50%] sm:left-[105px] md:left-[140px] translate-y-[-50%] sm:w-[250px] md:w-[350px]">
                Tạo nên những đứa trẻ hạnh phúc, yêu thích việc học, sẵn sàng
                với các hoạt động học tập, chuẩn bị vững vàng tâm lý.
                <div className=" text-2xl font-medium border-arrow text-white absolute top-[50%] translate-y-[-50%] left-[-70px] md:w-[50px] md:h-[50px] sm:w-[44px] sm:h-[44px] rounded-full  flex items-center justify-center p-3 shadow-arrow">
                  {i+2}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Target;
