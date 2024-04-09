"use client";

import React, { useState } from "react";
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
import Banner1 from "./banner1";

function Banner() {
  return (
    <Swiper
      autoplay={{ delay: 5000 }}
      navigation={true}
      pagination={true}
      loop={true}
      grabCursor={true}
      effect={"creative"}
      speed={2000}
      creativeEffect={{
        prev: {
          translate: ["-100%", 0, -0],
        },
        next: {
          translate: ["100%", 0, 0],
        },
      }}
      modules={[EffectCreative, Pagination, Navigation]}
    >
      <SwiperSlide>
        <Banner1 />
      </SwiperSlide>
    
    </Swiper>
  );
}

export default Banner;
