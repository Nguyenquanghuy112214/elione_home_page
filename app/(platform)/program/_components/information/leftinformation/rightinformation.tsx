"use client";
import React from "react";
import Image from "next/image";
import { icons } from "@/public/img";
import { Step } from "@prisma/client";
import { PreviewReactQuill } from "@/components/preview-reactquill";
import { cn } from "@/lib/utils";

function RightInformation({ data }: { data: Step[] }) {
  return (
    <div>
      {data?.map((item, i) => (
        <div
          key={i}
          className={cn(
            "relative",
            `${i > 0 ? "sm:mt-[-14px] md:mt-[-28px]" : ""}`
          )}
        >
          <Image
            src={item?.img}
            alt="img"
            width={300}
            height={300}
            className=" sm:h-[100px] sm:w-[100px] md:w-[200px] md:h-[200px] "
          />
          <div className=" absolute top-0 sm:left-[80px] md:left-[180px]  h-full  rounded-e-full sm:w-[calc(100%-100px)] md:w-[calc(100%-200px)] shadow-step pl-8 flex flex-col items-start justify-center overflow-hidden">
            <div className=" sm:text-[14px] md:text-[16px] text-[#a4949a] uppercase text-center sm:pl-0 md:pl-4 mt-5">
              {item?.title}
            </div>
            <div className=" sm:text-[15px] md:text-[18px] text-[#e64765] uppercase text-center">
              {item?.subtitle}
            </div>
            <div className=" text-[#b1a0a7] sm:text-[14px] md:text-[17px] leading-[18px] sm:hidden md:block">
              <PreviewReactQuill value={item?.description} />
            </div>
          </div>
        </div>
      ))}

      {/* <div className=" relative sm:mt-[-14px] md:mt-[-28px]">
        <Image
          src={icons.haisvg}
          alt="img"
          width={300}
          height={300}
          className=" sm:h-[100px] sm:w-[100px] md:w-[200px] md:h-[200px] "
        />
        <div className=" absolute top-0 sm:left-[80px] md:left-[180px]  h-full  rounded-e-full sm:w-[calc(100%-100px)] md:w-[calc(100%-200px)] shadow-step pl-8 flex flex-col items-start justify-center overflow-hidden">
          <div className=" sm:text-[14px] md:text-[16px] text-[#a4949a] uppercase text-center sm:pl-0 md:pl-4 mt-5">
            dành cho học sinh từ 9-10 tuổi
          </div>
          <div className=" sm:text-[15px] md:text-[18px] text-[#e64765] uppercase text-center">
            Kế họach hành động
          </div>
          <div className=" text-[#b1a0a7] text-[14px] leading-[18px]">
            <p className=" sm:hidden md:block">
              Cha mẹ học sinh đăng kí theo nhu cầu (tuần, tháng)
            </p>
            <p className=" sm:hidden md:block">Thời gian: 01/6 - 31/8</p>
            <p className=" sm:hidden md:block">
              Kinh phí: 6.000.000đ/tháng bao gồm:
            </p>
            <p className=" sm:hidden md:block">- Học phí: 4.500.000đ</p>
            <p className=" sm:hidden md:block">
              - Phí chăm sóc + tiền ăn: 1.200.000đ - Dã ngoại: 500.000đ
            </p>
          </div>
        </div>
      </div>
      <div className=" relative sm:mt-[-14px] md:mt-[-28px]">
        <Image
          src={icons.motsvg}
          alt="img"
          width={300}
          height={300}
          className=" sm:h-[100px] sm:w-[100px] md:w-[200px] md:h-[200px] "
        />
        <div className=" absolute top-0 sm:left-[80px] md:left-[180px]  h-full  rounded-e-full sm:w-[calc(100%-100px)] md:w-[calc(100%-200px)] shadow-step pl-8 flex flex-col items-start justify-center overflow-hidden">
          <div className=" sm:text-[14px] md:text-[16px] text-[#a4949a] uppercase text-center sm:pl-0 md:pl-4 mt-5">
            dành cho học sinh từ 9-10 tuổi
          </div>
          <div className=" sm:text-[15px] md:text-[18px] text-[#e64765] uppercase text-center">
            Kế họach hành động
          </div>
          <div className=" text-[#b1a0a7] text-[14px] leading-[18px]">
            <p className=" sm:hidden md:block">
              Cha mẹ học sinh đăng kí theo nhu cầu (tuần, tháng)
            </p>
            <p className=" sm:hidden md:block">Thời gian: 01/6 - 31/8</p>
            <p className=" sm:hidden md:block">
              Kinh phí: 6.000.000đ/tháng bao gồm:
            </p>
            <p className=" sm:hidden md:block">- Học phí: 4.500.000đ</p>
            <p className=" sm:hidden md:block">
              - Phí chăm sóc + tiền ăn: 1.200.000đ - Dã ngoại: 500.000đ
            </p>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default RightInformation;
