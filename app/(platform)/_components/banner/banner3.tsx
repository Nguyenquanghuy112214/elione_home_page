"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, tranformX, tranformY, zoomIn } from "@/lib/motion";

function Banner3() {
  return (
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      className=" border-t-[6px] border-b-[6px] border-solid border-primary bg-banner3 bg_10 bg-cover bg-no-repeat sm:h-[460px] md:h-[550px] lg:h-[650px] xl:h-[680px] bg-fixed"
    >
      <div className=" h-full container flex flex-col items-start justify-center gap-y-2">
        <motion.div
          variants={tranformY(0.4, 1.8)}
          className="  mb-5 flex justify-end items-end w-full flex-col gap-y-2"
        >
          <div className="text-white   sm:text-[32px] md:text-[64px] p-2 sm:min-h-[26px] md:min-h-[54px] bg-[#202c45bf] border-r-[6px] border-solid border-primary">
            BEST EDUCATION
          </div>
          <div className="text-white  sm:text-[14px] p-2 md:text-[32px] sm:min-h-[26px] md:min-h-[54px] bg-[#00000099] ">
            FOR YOUR BETTER FUTURE
          </div>
        </motion.div>
        <div className=" flex flex-col justify-end w-full items-end">
          <motion.div
            variants={tranformY(0.7, 1.8)}
            className="  text-white sm:text-[10px] md:text-[16px] mb-10 "
          >
            We always provides our best services for our clients
          </motion.div>
          <motion.div
            variants={tranformY(1.3, 2.2)}
            className=""
          >
            <Button
              variant="default"
              className=" sm:text-[10px] md:text-[16px] font-normal"
            >
              Apply Now
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Banner3;
