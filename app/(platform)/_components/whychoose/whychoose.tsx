import { icons } from "@/public/img";
import React from "react";
import WhyChooseItem from "./whychooseitem";
import { getWhyChoose } from "@/data/whychoose";
import { WhyChoose } from "@prisma/client";

async function WhyChooseCl({data}:{data:WhyChoose[]}) {
 
  return (
    <div className=" my-10">
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className=" sm:text-[26px] md:text-[32px] uppercase my-10 text-center font-semibold"
      >
        Vì Sao Elione được phụ huynh tin tưởng lựa chọn
      </div>
      <div
        data-aos="zoom-in"
        data-aos-duration="1000"
        className=" container grid grid-cols-12 md:gap-x-10 sm:gap-y-8"
      >
        {data?.map((item, index) => (
          <WhyChooseItem
            key={index}
            title={item.title}
            description={item.description}
            img={item.img}
          />
        ))}
      </div>
    </div>
  );
}

export default WhyChooseCl;
