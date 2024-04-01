"use client";

import { PreviewReactQuill } from "@/components/preview-reactquill";
import { icons } from "@/public/img";
import { Information } from "@prisma/client";
import { ChevronRight, MoveRight } from "lucide-react";
import Image from "next/image";
import React from "react";

function InfomationItem({ item }: { item: Information }) {
  return (
    <div className=" sm:col-span-12 md:col-span-6 lg:col-span-3 border-[2px] border-solid border-[#ccc] shadow-md">
      <div>
        <Image
          src={item?.img}
          alt="img"
          width={200}
          height={100}
          className=" w-full h-[200px] object-cover "
        />
      </div>
      <div className="px-4 py-2 ">
        <div className=" text-secondary mb-2 leading-5 font-semibold text-[15px]">
          {item?.title}
        </div>
        <div>
          <PreviewReactQuill value={item?.description} />
        </div>
        <div className=" flex items-center justify-end ">
          <MoveRight
            size={24}
            className=" text-secondary hover:translate-x-1 transition-all cursor-pointer "
            strokeWidth={2.7}
            absoluteStrokeWidth
          />
        </div>
      </div>
    </div>
  );
}

export default InfomationItem;
