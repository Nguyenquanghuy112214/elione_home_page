'use client'
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
function Course() {
  return (
    <div className=" container mb-10">
      <div className=" text-center font-medium uppercase sm:text-[26px] md:text-[32px] my-10">
        Thông tin các khóa học
      </div>
      <Swiper
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
        <SwiperSlide>
          <VideoCourse />
        </SwiperSlide>
        <SwiperSlide>
          <VideoCourse />
        </SwiperSlide>
        <SwiperSlide>
          <VideoCourse />
        </SwiperSlide>
        <SwiperSlide>
          <VideoCourse />
        </SwiperSlide>
        <SwiperSlide>
          <VideoCourse />
        </SwiperSlide>
        <SwiperSlide>
          <VideoCourse />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Course;
