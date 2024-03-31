"use client";

import { icons } from "@/public/img";
import { ChevronRight, MoveRight } from "lucide-react";
import Image from "next/image";
import React from "react";

function InfomationItem() {
  return (
    <div className=" sm:col-span-12 md:col-span-6 lg:col-span-3 border-[2px] border-solid border-[#ccc] shadow-md">
      <div>
        <Image
          src={icons.children}
          alt="img"
          width={200}
          height={100}
          className=" w-full h-[200px] object-cover "
        />
      </div>
      <div className="px-4 py-2 ">
        <div className=" text-secondary mb-2 leading-5 font-semibold text-[15px]">
          Con tôi là đứa trẻ ghét nhất mông tiếng Anh tôi đã bất lục và không
          tìm được phương pháp cho đến khi giới thiệu đến trung tâm ELIONE
        </div>
        <div>
          Điểm mạnh của du học Anh so với các quốc gia nằm ở chương trình học
          ngắn. Các khoa học tại Anh thường có thời gian học ngắn hơn so với các
          nước khác. Chương trình Cử nhân sẽ kéo dài 3 năm và chương trình Thạc
          sĩ kéo dài khoảng 1 năm
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
