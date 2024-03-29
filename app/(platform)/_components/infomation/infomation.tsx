
import React from "react";
import InfomationItem from "./infomationitem";

function Infomation() {
  return (
    <div className=" container my-14">
      <div   data-aos="fade-up"
        data-aos-duration="1000" className=" text-center font-medium uppercase sm:text-[26px] md:text-[32px] my-14">
        Thông tin - Tư vấn học bổng du học
      </div>
      <div   data-aos="zoom-in"
        data-aos-duration="1000" className=" grid grid-cols-12 sm:gap-y-8 md:gap-x-4 ">
        <InfomationItem />
        <InfomationItem />
        <InfomationItem />
        <InfomationItem />
      </div>
    </div>
  );
}

export default Infomation;
