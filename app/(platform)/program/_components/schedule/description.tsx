import React from "react";
import { FaStar } from "react-icons/fa";

function Description() {
  return (
    <div className=" grid sm:grid-cols-1 md:grid-cols-3 md:gap-x-3 sm:gap-y-1">
      <div className=" flex items-start justify-start gap-x-2">
        <div className=" mt-1">
          <FaStar className=" text-[#57bfce] sm:text-[15px] md:text-[20px]" />
        </div>
        <div className=" text-[#8c8f9c] sm:text-base md:text-base">
          Dã ngoại tổ chức tháng 1 lần vào ngày thứ 6 của tuần cuối cùng
        </div>
      </div>
      <div className=" flex items-start justify-start gap-x-2">
        <div className=" mt-1">
          <FaStar className=" text-[#57bfce] sm:text-[15px] md:text-[20px]" />
        </div>
        <div className=" text-[#8c8f9c] sm:text-base md:text-base">
          Dã ngoại tổ chức tháng 1 lần vào ngày thứ 6 của tuần cuối cùng
        </div>
      </div>
      <div className=" flex items-start justify-start gap-x-2">
        <div className=" mt-1">
          <FaStar className=" text-[#57bfce] sm:text-[15px] md:text-[20px]" />
        </div>
        <div className=" text-[#8c8f9c] sm:text-base md:text-base">
          Dã ngoại tổ chức tháng 1 lần vào ngày thứ 6 của tuần cuối cùng
        </div>
      </div>
    </div>
  );
}

export default Description;
