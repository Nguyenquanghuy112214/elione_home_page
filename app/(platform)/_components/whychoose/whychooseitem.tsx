"use client";

import { PreviewReactQuill } from "@/components/preview-reactquill";
import Image from "next/image";
import React from "react";

function WhyChooseItem({
  title,
  img,
  description,
}: {
  title: string;
  img: string;
  description: string;
}) {
  return (
    <div className=" sm:col-span-12 md:col-span-3">
      <div className=" flex items-center justify-center mb-8">
        <Image
          src={img}
          alt="banner1"
          width={200}
          height={200}
          className=" w-[150px] h-[150px] rounded-md"
        ></Image>
      </div>
      <div className=" bg-secondary skew-x-12 text-black uppercase mb-3 relative italic px-2 py-1 text-center font-semibold">
        {title}
      </div>
      <div className=" text-justify tracking-tighter ">
        <PreviewReactQuill value={description}/></div>
    </div>
  );
}

export default WhyChooseItem;
