"use client";
import { Button } from "@/components/ui/button";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { staggerContainer, tranformX, tranformY, zoomIn } from "@/lib/motion";

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
      className="overflow-hidden border-t-[6px] border-b-[6px] border-solid border-primary bg-banner1  bg-cover bg_40 bg-no-repeat sm:h-[460px] md:h-[550px] lg:h-[650px] xl:h-[700px] 2xl:h-[800px] "
    >
      <motion.div
        style={{ y: textY }}
        className=" h-full container flex flex-col items-start justify-center gap-y-10"
      >
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
      </motion.div>
    </motion.div>
  );
}

export default Banner1;
