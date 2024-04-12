import React from "react";
import { MdOutlineArrowRight } from "react-icons/md";
// import Time from "./time";
import LeftInformation from "./leftinformation/leftinformation";
import RightInformation from "./leftinformation/rightinformation";
import { FaPlay } from "react-icons/fa";
import {
  Step,
  Time,
} from "@prisma/client";

function InformationSub({
  dataTime,
  data,
}: {
  dataTime: Time[];
  data: Step[];
}) {
  return (
    <div className=" container sm:my-3 md:py-10">
      <div   data-aos="fade-up"
        data-aos-duration="1000" className=" flex sm:gap-x-2 md:gap-x-10 items-center">
        <MdOutlineArrowRight className=" text-[#27dae7] text-[50px]" />
        <div className="">
          <div className=" text-center sm:text-[22px] md:text-text_h1 uppercase text-[#9f9f9f]">
            Thông tin chương trình
          </div>
        </div>
      </div>
      <div    data-aos="zoom-in"
        data-aos-duration="1000" className="grid sm:grid-cols-1 md:grid-cols-2 md:px-8 sm:mt-3 md:mt-7 sm:gap-y-10 md:gap-x-10">
        <LeftInformation dataTime={dataTime}/>
        <RightInformation data={data}/>
      </div>
      <div    data-aos="zoom-in"
        data-aos-duration="1000" className=" flex items-center justify-center mt-4">
        <div className=" bg-gradient-to-r from-[#f24522] from-0%  to-[#efc22d] to-80% px-2 py-1 mt-5 rounded-full text-white sm:w-[170px] md:w-[200px] flex items-center h-[60px]">
          <div className=" cursor-pointer border-2 w-full border-solid border-white rounded-full flex items-center  uppercase  justify-center bg-transparent">
            <h1 className="p-2 2xl:text-[20px]">Đăng ký ngay</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InformationSub;
