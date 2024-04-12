import React from "react";
import InfomationItem from "./infomationitem";
import { Information } from "@prisma/client";

function InfomationCl({ data }: { data: Information[] }) {
  console.log("dsdsd",data);
  
  return (
    <div className=" container my-14">
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className=" text-center font-medium uppercase sm:text-[26px] md:text-[32px] my-14"
      >
        Thông tin - Tư vấn học bổng du học
      </div>
      <div
        data-aos="zoom-in"
        data-aos-duration="1000"
        className=" grid grid-cols-12 sm:gap-y-8 md:gap-x-4 "
      >
        {data?.map((item, i) => (
          <InfomationItem key={i} item={item} />
        ))}
      </div>
    </div>
  );
}

export default InfomationCl;
