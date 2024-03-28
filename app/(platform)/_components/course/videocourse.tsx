"use client";
import { cn } from "@/lib/utils";
import { PlayCircle, School, Star, Trophy, User } from "lucide-react";
import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";
import { icons } from "@/public/img";

function VideoCourse() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="  ">
          <div
            className={cn(
              " relative  videodemo cursor-pointer  bg-center bg-cover bg-no-repeat sm:h-[100px] md:h-[200px]  flex items-center justify-center flex-col gap-7 "
            )}
          >
            <Image
              fill
              src={icons.banner1}
              alt="img"
              className=" object-cover"
            />
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
          Con tôi là đứa trẻ ghét nhất mông tiếng Anh tôi đã bất lục và không
          tìm được phương pháp cho đến khi giới thiệu đến trung tâm ELIONE
        </div>
        <div className=" flex items-center justify-end">
          {[1, 2, 3, 4, 5].map((item, index) => (
            <Star
            key={index}
              size={20}
              color="#ccc"
              strokeWidth={1.2}
              absoluteStrokeWidth
            />
          ))}
        </div>
        <div className=" flex items-center justify-start gap-x-1 text-black">
          <User
            className=" text-secondary"
            size={16}
            strokeWidth={2.25}
            absoluteStrokeWidth
          />
          Phụ huynh học viên:
        </div>
        <div className=" flex items-center justify-between">
          <div className=" flex items-center justify-start gap-x-1">
            <Trophy
              size={16}
              className=" text-secondary"
              strokeWidth={2.25}
              absoluteStrokeWidth
            />
            Thành tích:
          </div>
          <div className=" flex items-center justify-start gap-x-1 mt-3">
            <School
              size={20}
              className=" text-secondary"
              strokeWidth={2.25}
              absoluteStrokeWidth
            />
            Lớp học: A7
          </div>
        </div>
      </div>
      <DialogContent className=" flex items-center justify-center bg-transparent border-none !p-1">
        <video playsInline controls loop>
          <source
            src={
              "https://res.cloudinary.com/dn4nxz7f0/video/upload/v1594348575/Pexels_Videos_1093655_pr26ax.mp4"
            }
            type="video/mp4"
          />
        </video>
      </DialogContent>
    </Dialog>
  );
}

export default VideoCourse;
