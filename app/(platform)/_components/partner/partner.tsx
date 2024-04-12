"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { icons } from "@/public/img";
import { Partner } from "@prisma/client";
function PartnerCl({data}:{data:Partner[]}) {
  return (
    <div className=" container my-14">
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className=" text-center font-medium uppercase sm:text-[26px] md:text-[32px] my-14"
      >
        Đối tác
      </div>
      <Swiper
        data-aos="zoom-in"
        data-aos-duration="1000"
        autoplay={{ delay: 1000 }}
        navigation={true}
        loop={true}
        grabCursor={true}
        speed={1500}
        breakpoints={{
          0: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 8,
            spaceBetween: 10,
          },
        }}
        modules={[Navigation, Autoplay]}
        className=" swiper-course !pb-10"
      >
        {data?.map((item, i) => (
          <SwiperSlide key={i}>
            <Image
              src={item?.img}
              alt="img"
              width={400}
              height={400}
              className=" w-full h-[100px] object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default PartnerCl;
