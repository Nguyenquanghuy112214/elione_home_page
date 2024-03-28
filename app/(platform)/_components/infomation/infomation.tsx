
import React from "react";
import InfomationItem from "./infomationitem";

function Infomation() {
  return (
    <div className=" container mb-10">
      <div className=" text-center font-medium uppercase sm:text-[26px] md:text-[32px] my-10">
        Thông tin - Tư vấn học bổng du học
      </div>
      <div className=" grid grid-cols-12 sm:gap-y-8 md:gap-x-4 ">
        <InfomationItem />
        <InfomationItem />
        <InfomationItem />
        <InfomationItem />
      </div>
    </div>
  );
}

export default Infomation;
