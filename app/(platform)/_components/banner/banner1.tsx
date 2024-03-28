"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, tranformX, tranformY, zoomIn } from "@/lib/motion";

function Banner1() {
  return (
    <motion.div
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      className=" border-t-[6px] border-b-[6px] border-solid border-primary bg-banner1 bg-cover bg_10 bg-no-repeat sm:h-[460px] md:h-[550px] lg:h-[650px] xl:h-[680px] bg-fixed"
    >
      <div className=" h-full container flex flex-col items-start justify-center gap-y-10">
        <motion.div
          variants={tranformX(0.4, 1.8)}
          className="  text-white sm:text-[44px] md:text-[100px] font-bold "
        >
          EDUCATION
        </motion.div>
        <div>
          <motion.div
            variants={tranformY(0.7, 1.8)}
            className=" text-white sm:text-[10px] md:text-[16px] my-8"
          >
            We always provides our best services for our clients
          </motion.div>
          <motion.div variants={tranformY(1.3, 2.2)}>
            <Button className=" sm:text-[10px] md:text-[16px]">
              View Details
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Banner1;
