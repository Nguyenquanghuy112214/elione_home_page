"use client";
import { useCountdown } from "@/components/use-countdown";
import React from "react";

function Time({ targetDate }: { targetDate: any }) {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return (
      <div className=" flex gap-x-2 items-center justify-start sm:pl-0 md:pl-14">
        <div className=" w-[200px] rounded-md flex items-center justify-center h-[120px] px-5 pt-8 bg-gradient-to-r from-[#e8e8e8] via-[#fdfdfd] to-[#e8e8e8] relative text-5xl font-semibold text-[#616b72]">
          0
          <div className=" md:text-base sm:text-sm absolute top-0 left-0 h-10 w-full bg-gradient-to-r from-[#20a89c]  to-[#22c5dd] arrow-down after:border-t-[#1db4b3] rounded-b-md flex items-center justify-center text-white text-base font-medium uppercase">
            Ngày kết thúc
          </div>
        </div>
        <div className=" w-[200px] rounded-md flex items-center justify-center h-[120px] px-5 pt-8 bg-gradient-to-r from-[#e8e8e8] via-[#fdfdfd] to-[#e8e8e8] relative text-5xl font-semibold text-[#616b72]">
          0
          <div className=" md:text-base sm:text-sm absolute top-0 left-0 h-10 w-full bg-gradient-to-r from-[#ffc852]  to-[#ec9415] arrow-down after:border-t-[#f7ae28] rounded-b-md flex items-center justify-center text-white text-base font-medium uppercase">
            Giờ ưu đãi
          </div>
        </div>
        <div className=" w-[200px] rounded-md flex items-center justify-center h-[120px] px-5 pt-8 bg-gradient-to-r from-[#e8e8e8] via-[#fdfdfd] to-[#e8e8e8] relative text-5xl font-semibold text-[#616b72]">
          0
          <div className=" md:text-base sm:text-sm absolute top-0 left-0 h-10 w-full bg-gradient-to-r from-[#ec75f7]  to-[#c50994] arrow-down after:border-t-[#d744c4] rounded-b-md flex items-center justify-center text-white text-base font-medium uppercase">
            Phút ưu đãi
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className=" flex gap-x-2 items-center justify-start sm:pl-0 md:pl-14">
        <div className=" w-[200px] rounded-md flex items-center justify-center h-[120px] px-5 pt-8 bg-gradient-to-r from-[#e8e8e8] via-[#fdfdfd] to-[#e8e8e8] relative text-5xl font-semibold text-[#616b72]">
          {days}
          <div className=" md:text-base sm:text-sm absolute top-0 left-0 h-10 w-full bg-gradient-to-r from-[#20a89c]  to-[#22c5dd] arrow-down after:border-t-[#1db4b3] rounded-b-md flex items-center justify-center text-white text-base font-medium uppercase">
            Ngày kết thúc
          </div>
        </div>
        <div className=" w-[200px] rounded-md flex items-center justify-center h-[120px] px-5 pt-8 bg-gradient-to-r from-[#e8e8e8] via-[#fdfdfd] to-[#e8e8e8] relative text-5xl font-semibold text-[#616b72]">
          {hours}
          <div className=" md:text-base sm:text-sm absolute top-0 left-0 h-10 w-full bg-gradient-to-r from-[#ffc852]  to-[#ec9415] arrow-down after:border-t-[#f7ae28] rounded-b-md flex items-center justify-center text-white text-base font-medium uppercase">
            Giờ ưu đãi
          </div>
        </div>
        <div className=" w-[200px] rounded-md flex items-center justify-center h-[120px] px-5 pt-8 bg-gradient-to-r from-[#e8e8e8] via-[#fdfdfd] to-[#e8e8e8] relative text-5xl font-semibold text-[#616b72]">
          {minutes}
          <div className=" md:text-base sm:text-sm absolute top-0 left-0 h-10 w-full bg-gradient-to-r from-[#ec75f7]  to-[#c50994] arrow-down after:border-t-[#d744c4] rounded-b-md flex items-center justify-center text-white text-base font-medium uppercase">
            Phút ưu đãi
          </div>
        </div>
      </div>
    );
  }
}
export default Time;
