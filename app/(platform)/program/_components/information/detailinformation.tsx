"use client";
import React from "react";
import { FaStar } from "react-icons/fa";
import { Chart } from "react-google-charts";
import Image from "next/image";
import { icons } from "@/public/img";
import { Time } from "@prisma/client";
import { formatDay } from "@/contants/formatDay";
import { OpenSansBoldItalicF } from "@/components/fonts_application/fonts";
function DetailInformation({ dataTime }: { dataTime: Time[] }) {
  if (!dataTime) return null;
  return (
    <div className=" flex flex-col sm:gap-y-2 md:gap-y-3 mt-7">
      <div className=" flex items-center justify-start gap-x-2">
        <div>
          <FaStar className=" text-[#57bfce] sm:text-[15px] md:text-[20px]" />
        </div>
        <div
          className={`${OpenSansBoldItalicF.className} text-[#8c8f9c] sm:text-base md:text-lg`}
        >
          Thời gian đăng kí:{" "}
          <span className=" font-sans">
            {" "}
            {formatDay(dataTime[0]?.timestart)} -{" "}
            {formatDay(dataTime[0]?.timeend)}
          </span>
        </div>
      </div>
      <div className=" flex items-center justify-start gap-x-2">
        <div>
          <FaStar className=" text-[#57bfce] sm:text-[15px] md:text-[20px]" />
        </div>
        <div
          className={`${OpenSansBoldItalicF.className} text-[#8c8f9c] sm:text-base md:text-lg`}
        >
          Địa điểm: <span className=" font-sans">{dataTime[0]?.location}</span>
        </div>
      </div>
      <div className=" flex items-center justify-start gap-x-2">
        <div>
          <FaStar className=" text-[#57bfce] sm:text-[15px] md:text-[20px]" />
        </div>
        <div className= {`${OpenSansBoldItalicF.className} text-[#8c8f9c] sm:text-base md:text-lg`}>
          Tỉ trọng thời lượng các môn học
        </div>
      </div>
      <div>
        <Image
          src={dataTime[0]?.img}
          alt="chart"
          width={400}
          height={400}
          className=" w-full h-auto"
        />
      </div>
    </div>
  );
}

export default DetailInformation;
