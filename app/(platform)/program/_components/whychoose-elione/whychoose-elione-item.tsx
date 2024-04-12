"use client";
import { PreviewReactQuill } from "@/components/preview-reactquill";
import { WhyChooseProgram } from "@prisma/client";
import Image from "next/image";
import React from "react";


function WhychooseElioneItem({ data }: { data: WhyChooseProgram }) {
  return (
    <div className="sm:px-5">
      <div className="flex items-center justify-center relative flex-col">
        <Image
          src={data?.img}
          alt="img"
          width={300}
          height={300}
          className=" w-[300px] h-[250px] object-contain"
        />
        <div className=" bg-white p-4 z-0 rounded-[14px] mt-[-55px] drop-shadow-md relative">
          <div className="signs flex items-center justify-center bg-gradient-to-r from-[#01c0db] to-[#01c5a6] text-white uppercase font-semibold text-[18px] ">
            {data?.title1}
          </div>
          <div className=" py-2 rounded-lg boxed shadow-md sm:px-3 md:px-8">
            <div className=" rounded-lg pt-10 flex items-center justify-start gap-y-2 flex-col">
              <h1 className=" font-semibold uppercase text-[20px]">
                {data?.title2}
              </h1>
              <h1 className=" font-semibold uppercase text-[20px]">
                {data?.title3}
              </h1>
              <h1 className="text-justify tracking-tight text-sm font-medium line-clamp-6 mt-3">
                <PreviewReactQuill value={data?.description}/>
              </h1>
            </div>
          </div>
  
          <div className=" img-circle">
            <div className=" img-circle-children overflow-hidden">
              <Image
                src={data?.subimg}
                alt="img"
                width={200}
                height={200}
                className="sm:w-[80px] sm:h-[80px] md:w-[100px] md:h-[100px] object-containt"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhychooseElioneItem;
