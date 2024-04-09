"use client";
import { icons } from "@/public/img";
import Image from "next/image";
import React from "react";
import { MdOutlineArrowRight } from "react-icons/md";
import Description from "./description";

function Schedule() {
  return (
    <div className=" container sm:my-3 md:py-10">
      <div className=" flex sm:gap-x-2 md:gap-x-10 items-center">
        <MdOutlineArrowRight className=" text-[#27dae7] text-[50px]" />
        <div className="">
          <div className=" text-center sm:text-[22px] md:text-text_h1 uppercase text-[#9f9f9f]">
            Thời khóa biểu trại hè
          </div>
        </div>
      </div>
      <div className=" sm:mt-4 md:mt-6">
        <Image src={icons.schedulesvg} alt="img" width={1000} height={1000} className=" w-full h-auto"/>
      </div>
      <div className=" mt-6">
        <Description/>
      </div>
    </div>
  );
}

export default Schedule;
