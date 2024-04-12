"use client";
import { icons } from "@/public/img";
import Image from "next/image";
import React from "react";
import { MdOutlineArrowRight } from "react-icons/md";
import Description from "./description";
import { Schedule, ScheduleThumbnail } from "@prisma/client";

function ScheduleCl({
  dataThumb,
  data,
}: {
  dataThumb: ScheduleThumbnail[];
  data: Schedule[];
}) {
  if (!dataThumb || !data) return null;
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
            Thời khóa biểu trại hè
          </div>
        </div>
      </div>
      <div
        data-aos="zoom-in"
        data-aos-duration="1000"
        className=" sm:mt-4 md:mt-6"
      >
        <Image
          src={dataThumb[0]?.img}
          alt="img"
          width={1000}
          height={1000}
          className=" w-full h-auto"
        />
      </div>
      <div data-aos="zoom-in" data-aos-duration="1000" className=" mt-6">
        <Description data={data} />
      </div>
    </div>
  );
}

export default ScheduleCl;
