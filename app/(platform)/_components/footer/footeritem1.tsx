"use client";

import { Course } from "@prisma/client";
import { ChevronRight } from "lucide-react";
import React from "react";

function FooterItem1({ dataCourse }: { dataCourse: Course[] }) {
  return (
    <div>
      <div className="title_footer mb-5">Các khóa học</div>
      <div className=" flex flex-col items-start justify-start gap-y-1 ">
        {dataCourse?.map((item, index) => (
          <div key={index} className=" flex items-center justify-start ">
            <ChevronRight
              size={20}
              className=" text-secondary"
              strokeWidth={2.25}
              absoluteStrokeWidth
            />
            <span className=" uppercase font-medium text-[15px]">
              {item?.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FooterItem1;
