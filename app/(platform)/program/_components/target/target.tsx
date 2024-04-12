"use client";
import { icons } from "@/public/img";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { MdOutlineArrowRight } from "react-icons/md";
import ArrowSVG from "./arrowsvg";
import Targetsvg from "./targetsvg";
import { Target, TargetThumbnail } from "@prisma/client";
import { cn } from "@/lib/utils";
function TargetCl({
  dataThumb,
  data,
}: {
  dataThumb: TargetThumbnail[];
  data: Target[];
}) {
  if (!dataThumb || !data) {
    return null;
  }
  return (
    <div className=" container sm:my-3 md:py-10">
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className=" flex sm:gap-x-2 md:gap-x-10 items-center"
      >
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
      <div
        data-aos="zoom-in"
        data-aos-duration="1000"
        className="grid sm:grid-cols-1 md:grid-cols-2 md:px-8"
      >
        <div className=" flex flex-col items-start justify-end">
          <div className=" sm:w-[100%] md:w-[100%]  relative z-[2]">
            <Image
              src={dataThumb[0]?.img}
              alt="img"
              width={600}
              height={700}
              className=" w-full h-auto object-cover"
            />
            {/* <Targetsvg /> */}
          </div>
          {/* <div className=" relative md:block sm:hidden"> */}
          <div className=" w-full relative">
            <ArrowSVG />
            <div className=" text-[#7d838f] sm:text-sm md:text-base absolute top-[50%] sm:left-[105px] md:left-[140px] translate-y-[-50%] sm:w-[250px] md:w-[350px]">
              {data[0]?.title}
              <div className=" text-2xl font-medium border-arrow text-white absolute top-[50%] translate-y-[-50%] left-[-70px] md:w-[50px] md:h-[50px] sm:w-[44px] sm:h-[44px] rounded-full  flex items-center justify-center p-3 shadow-arrow">
                1
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>

        <div className=" col-span-1">
          {data?.map((item, i) => {
            if (i > 0) {
              return (
                <div className=" w-full relative" key={i}>
                  <ArrowSVG />
                  <div className=" text-[#7d838f] sm:text-sm md:text-base absolute top-[50%] sm:left-[105px] md:left-[140px] translate-y-[-50%] sm:w-[250px] md:w-[350px]">
                    {item?.title}
                    <div
                      className={cn(
                        " text-2xl font-medium border-arrow text-white absolute top-[50%] translate-y-[-50%] left-[-70px] md:w-[50px] md:h-[50px] sm:w-[44px] sm:h-[44px] rounded-full  flex items-center justify-center p-3 shadow-arrow",
                        `border-arrow-${i}`
                      )}
                    >
                      {i + 1}
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default TargetCl;
