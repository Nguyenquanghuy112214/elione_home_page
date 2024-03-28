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
function Partner() {
  return (
    <div className=" container mb-10">
      <div className=" text-center font-medium uppercase sm:text-[26px] md:text-[32px] my-10">
        Đối tác
      </div>
      <Swiper
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
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((item, index) => (
          <SwiperSlide key={index}>
            <Image
              src={icons.banner1}
              alt="img"
              width={400}
              height={400}
              className=" w-full h-[100px]"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Partner;
