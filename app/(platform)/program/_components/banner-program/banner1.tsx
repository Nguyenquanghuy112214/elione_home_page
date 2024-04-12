"use client";
import { Button } from "@/components/ui/button";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { staggerContainer, tranformX, tranformY, zoomIn } from "@/lib/motion";
import { Separator } from "@/components/ui/separator";
import { FaPlay } from "react-icons/fa";
function Banner1() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "-160%"]);
  return (
    <motion.div
      style={{ backgroundPositionY: bgY }}
      ref={ref}
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      className=" overflow-hidden border-t-[6px] border-b-[6px] border-solid border-primary sm:bg-mb_bg md:bg-banner4 bg-cover bg-center  bg-no-repeat sm:h-[1000px] md:h-[550px] lg:h-[650px] xl:h-[700px] 2xl:h-[800px] "
    >
      <motion.div
        // style={{ y: textY }}
        className=" h-full sm:px-5 md:px-10 flex flex-col items-end sm:justify-end md:justify-center gap-y-10 mt-[-50px]"
      >
        <div className=" flex flex-col items-center justify-center gap-y-[2px]">
          <motion.h1
            variants={tranformY(0.4, 1.8)}
            className="sm:mb-2 md:mb-10 text_flip font-semibold bg-gradient-to-t from-text_banner from-20% via-white inline-block via-20% to-text_banner to-40% text-transparent sm:tracking-tighter bg-clip-text sm:text-[20px]  md:text-[40px] 2xl:text-[50px] md:tracking-tight"
          >
            VỮNG NỀN TẢNG - SẴN SÀNG BỨT PHÁ
          </motion.h1>
          <motion.div
            variants={tranformY(0.7, 1.8)}
            className=" text-text_banner sm:text-base md:text-[20px] 2xl:text-[30px] tracking-tight"
          >
            Trại hè Tiếng Anh dành cho học viên 5-10 tuổi
          </motion.div>
          <motion.div
            variants={tranformY(0.7, 1.8)}
            className="gradient_banner sm:p-2  md:p-3 uppercase rounded-xl mt-2 text-[#722814] font-medium sm:text-base md:text-[18px] shadow-lg 2xl:mt-4 2xl:text-[24px]"
          >
            Khai Giảng 01/6 - 21/08/2024
          </motion.div>
          <Separator className=" w-[40%] h-[2px] gradient_banner my-2 2xl:w-[45%]" />
          {/*  */}
          <motion.div
            variants={tranformY(0.7, 1.8)}
            className=" text-text_banner uppercase mt-2 2xl:text-[20px]"
          >
            Bắt đầu từ 01/4 - 30/05
          </motion.div>
          <motion.div
            variants={tranformY(0.7, 1.8)}
            className="2xl:text-[40px]  bg-gradient-to-t from-text_banner from-20% via-white inline-block via-20% to-text_banner to-40% text-transparent bg-clip-text  sm:text-[28px] md:text-[32px] font-medium"
          >
            Đăng ký nhận ưu đãi
          </motion.div>
          <motion.div
            variants={tranformY(0.7, 1.8)}
            className=" text-text_banner sm:text-[18px] md:text-[22px] 2xl:text-[26px]"
          >
            Tặng con mùa hè thật ý nghĩa
          </motion.div>
          {/*  */}
          <motion.div
            variants={tranformY(1.3, 2.2)}
            className=" bg-gradient-to-r from-[#f24522] from-0%  to-[#efc22d] to-80% px-2 py-1 mt-5 rounded-full text-white flex items-center min-w-[200px] h-[60px]"
          >
            <div className=" cursor-pointer border-2 w-full border-solid border-white rounded-full flex items-center  uppercase  justify-between bg-transparent">
              <h1 className="p-2 2xl:text-[20px]">Đăng ký ngay</h1>
              <div className=" w-[40px] h-[40px] 2xl:w-[48px] 2xl:h-[48px] bg-white rounded-full flex items-center justify-center">
                <FaPlay className=" text-[#f0be2b] ml-1" />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Banner1;
