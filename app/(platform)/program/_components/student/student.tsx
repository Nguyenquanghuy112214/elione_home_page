import { GothamMediumF, InterVF } from "@/components/fonts_application/fonts";
import { cn } from "@/lib/utils";
import { Receive } from "@prisma/client";
import React from "react";

function Student({ data }: { data: Receive[] }) {
  return (
    <div className="bg-gradient-to-br from-[#f8f8f8] from-25% to-[#bcbebd] relative z-0 mt-[198px]">
      <div className={`pt-10 pb-20 container ${InterVF.className}`}>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className=" text-center text-text_h1 uppercase"
        >
          Học viên nhận được gì ?
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className={` text-center uppercase font-normal`}
        >
          Khi tham gia trại hè tiếng anh Elione
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          className=" flex items-center justify-center mt-3"
        >
          <div className=" flex  h-2 w-[20%]">
            <div className="flex-1 bg-gradient-to-r from-[#0047b4] to-[#042d9e] h-full rounded-s-sm"></div>
            <div className="flex-1 h-full bg-gradient-to-r from-[#0285d5] to-[#005fc3]"></div>
            <div className="flex-1 h-full bg-gradient-to-r from-[#04c1a9] to-[#01c57a] rounded-e-sm"></div>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          data-aos-duration="1000"
          className=" grid sm:grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-20  mt-10"
        >
          {data?.map((item, i) => (
            <article className={cn("curved", `curved-${i}`)} key={i}>
              <h2 className={`${GothamMediumF.className} uppercase`}>{item?.title}</h2>
            </article>
          ))}
        </div>
      </div>
    </div>
    // <div className=" py-10 bg-gradient-to-r from-[#d3d7da] to-[#d0d4d7] mt-[198px]">
    //   <div className=" uppercase text-text_h1 text-center">
    //     Học viên nhận được gì ?
    //   </div>
    //   <div className=" uppercase text-center">
    //     Khi tham gia trại hè tiếng anh Elione
    //   </div>
    //
    // </div>
  );
}

export default Student;
