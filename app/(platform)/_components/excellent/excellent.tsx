"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectFade,
  Navigation,
  Pagination,
  EffectCreative,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { Excellent } from "@prisma/client";
function ExcellentCl({ data }: { data: Excellent[] }) {
  return (
    <div className=" container my-14">
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className=" text-center font-medium uppercase sm:text-[26px] md:text-[32px] my-14"
      >
        Học viên xuất sắc
      </div>
      <Swiper
        data-aos="zoom-in"
        data-aos-duration="1000"
        autoplay={{ delay: 5000 }}
        navigation={true}
        pagination={true}
        loop={true}
        grabCursor={true}
        speed={2000}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination, Navigation]}
        className=" swiper-course !pb-10"
      >
        {data?.map((item, i) => (
          <SwiperSlide key={i}>
            <div>
              <Image
                src={item?.img}
                alt="img"
                width={500}
                height={500}
                className=" w-full h-[300px] object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ExcellentCl;
