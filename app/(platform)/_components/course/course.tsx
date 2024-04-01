"use client";
import React from "react";
import VideoCourse from "./videocourse";

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
import { Course } from "@prisma/client";

function CourseCl({ data }: { data: Course[] }) {
  return (
    <div className=" container mt-[100px] mb-14">
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        className=" text-center font-medium uppercase sm:text-[26px] md:text-[32px] my-14"
      >
        Thông tin các khóa học
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
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        modules={[Pagination, Navigation]}
        className=" swiper-course !pb-10"
      >
        {data?.map((item, i) => (
          <SwiperSlide key={i}>
            <VideoCourse item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CourseCl;