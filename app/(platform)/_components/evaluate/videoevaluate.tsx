"use client";
import { cn } from "@/lib/utils";
import { PlayCircle, School, Star, Trophy, User } from "lucide-react";
import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";
import { icons } from "@/public/img";
import { Evaluate } from "@prisma/client";
import _ from "lodash";

function VideoEvaluate({ item }: { item: Evaluate }) {
  const numberStar = Number(item?.star);
  const numberStarOff = 5 - Number(item?.star);

  const newStar = _.times(numberStar, _.constant(numberStar));
  const newStarOff = _.times(numberStarOff, _.constant(numberStarOff));

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="  ">
          <div
            className={cn(
              " relative  videodemo cursor-pointer  bg-center bg-cover bg-no-repeat sm:h-[100px] md:h-[200px]  flex items-center justify-center flex-col gap-7 "
            )}
          >
            <Image fill src={item?.img} alt="img" className=" object-cover" />
            {/* <div className={cn(" text-white text-2xl font-bold relative z-50")}>
              title
            </div> */}
            <PlayCircle
              strokeWidth={1}
              className=" text-white h-[75px] w-[75px] rounded-full  relative z-50"
            />
          </div>
        </div>
      </DialogTrigger>
      <div className=" px-4 py-2 border-[2px] border-solid border-[#ccc] shadow-md">
        <div className=" text-secondary mb-2 leading-5 font-semibold text-[15px]">
          {item?.title}
        </div>
        <div className=" flex items-center justify-end">
          {newStar?.map((item, index) => {
            if (index < 5) {
              return (
                <Star
                  key={index}
                  size={20}
                  className=" text-yellow-300"
                  strokeWidth={1.2}
                  absoluteStrokeWidth
                />
              );
            }
          })}
          {newStarOff?.map((item, index) => {
            if (index < 5) {
              return (
                <Star
                  key={index}
                  size={20}
                  color="#ccc"
                  strokeWidth={1.2}
                  absoluteStrokeWidth
                />
              );
            }
          })}
        </div>
        <div className=" flex items-center justify-start gap-x-1 text-black">
          <User
            className=" text-secondary"
            size={16}
            strokeWidth={2.25}
            absoluteStrokeWidth
          />
          Phụ huynh học viên: {item?.parentstudent}
        </div>
        <div className=" flex md:items-center sm:flex-col sm:items-start sm:gap-x-0 sm:gap-y-2 md:justify-between md:flex-row md:gap-x-6 mt-2">
          <div className=" flex items-center justify-start gap-x-1">
            <Trophy
              size={16}
              className=" text-secondary"
              strokeWidth={2.25}
              absoluteStrokeWidth
            />
            Thành tích: {item?.achievements}
          </div>
          <div className=" flex items-center justify-start gap-x-1">
            <School
              size={20}
              className=" text-secondary"
              strokeWidth={2.25}
              absoluteStrokeWidth
            />
            Lớp học: {item?.class}
          </div>
        </div>
      </div>
      <DialogContent className=" flex items-center justify-center bg-transparent border-none !p-1">
        <video playsInline controls loop>
          <source src={item?.video} type="video/mp4" />
        </video>
      </DialogContent>
    </Dialog>
  );
}

export default VideoEvaluate;
