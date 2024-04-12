"use client";

import { Expert } from "@prisma/client";
import { ChevronRight } from "lucide-react";
import React from "react";

function FooterItem2({dataExpert}:{dataExpert:Expert[]}) {
  return (
    <div>
      <div className="title_footer mb-5">Đội ngũ chuyên gia</div>
      <div className=" flex flex-col items-start justify-start gap-y-1 ">

        {dataExpert?.map((item, index) => (
            <div key={index} className=" flex items-center justify-start ">
                <ChevronRight size={20} className=" text-secondary" strokeWidth={2.25} absoluteStrokeWidth />
                <span className=" uppercase font-medium text-[15px] flex-1">{item?.title}</span>
            </div>
        ))}
      </div>
    </div>
  );
}

export default FooterItem2;
