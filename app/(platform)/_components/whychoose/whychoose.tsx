import { icons } from "@/public/img";
import React from "react";
import WhyChooseItem from "./whychooseitem";

function WhyChoose() {
  const data = [
    {
      img: icons.banner1,
      title: "đội ngũ chuyên gia hàng đầu việt nam",
      description:
        "Giá trình ELIONE được thiết kế độc quyền chuẩn quốc tế. Giáo trình được thiết kế riêng việt, chuẩn hóa về nội dung và phương thức áp dụng",
    },
    {
      img: icons.banner2,
      title: "đội ngũ chuyên gia hàng đầu việt nam",
      description:
        "Giá trình ELIONE được thiết kế độc quyền chuẩn quốc tế. Giáo trình được thiết kế riêng việt, chuẩn hóa về nội dung và phương thức áp dụng",
    },
    {
      img: icons.banner3,
      title: "đội ngũ chuyên gia hàng đầu việt nam",
      description:
        "Giá trình ELIONE được thiết kế độc quyền chuẩn quốc tế. Giáo trình được thiết kế riêng việt, chuẩn hóa về nội dung và phương thức áp dụng",
    },
    {
      img: icons.banner1,
      title: "đội ngũ chuyên gia hàng đầu việt nam",
      description:
        "Giá trình ELIONE được thiết kế độc quyền chuẩn quốc tế. Giáo trình được thiết kế riêng việt, chuẩn hóa về nội dung và phương thức áp dụng",
    },
  ];
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

export default WhyChoose;
