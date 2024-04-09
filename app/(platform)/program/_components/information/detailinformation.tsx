"use client";
import React from "react";
import { FaStar } from "react-icons/fa";
import { Chart } from "react-google-charts";
import Image from "next/image";
import { icons } from "@/public/img";
function DetailInformation() {
  const data = [
    ["Task", "Hours per Day"],
    ["Work", 11],
    ["Eat", 2],
    ["Commute", 2],
    ["Watch TV", 2],
    ["Sleep", 7],
  ];
  const options = {
    // title: "My Daily Activities",
    is3D: true,
  };
  return (
    <div className=" flex flex-col sm:gap-y-2 md:gap-y-3 mt-7">
      <div className=" flex items-center justify-start gap-x-2">
        <div>
          <FaStar className=" text-[#57bfce] sm:text-[15px] md:text-[20px]" />
        </div>
        <div className=" text-[#8c8f9c] sm:text-base md:text-lg">
          Thời gian đăng kí: 01/04 - 30/05/2024
        </div>
      </div>
      <div className=" flex items-center justify-start gap-x-2">
        <div>
          <FaStar className=" text-[#57bfce] sm:text-[15px] md:text-[20px]" />
        </div>
        <div className=" text-[#8c8f9c] sm:text-base md:text-lg">
          Địa điểm: ELIONE ĐẠI KIM - Số 29/282 Kim Giang, Đại Kim, Hoàng Mai, Hà
          Nội.
        </div>
      </div>
      <div className=" flex items-center justify-start gap-x-2">
        <div>
          <FaStar className=" text-[#57bfce] sm:text-[15px] md:text-[20px]" />
        </div>
        <div className=" text-[#8c8f9c] sm:text-base md:text-lg">
          Tỉ trọng thời lượng các môn học
        </div>
      </div>
      <div>
        {/* <Chart
          chartType="PieChart"
          data={data}
          options={options}
          width={"100%"}
          height={"500px"}
        /> */}
        <Image
          src={icons.chartsvg}
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
