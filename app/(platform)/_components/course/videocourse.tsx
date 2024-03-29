"use client";
import { cn } from "@/lib/utils";
import {
  Calculator,
  Clock,
  PersonStanding,
  PlayCircle,
  School,
  Star,
  Trophy,
  User,
} from "lucide-react";
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
              " relative  videodemo cursor-pointer  bg-center bg-cover bg-no-repeat sm:h-[150px] md:h-[200px]  flex items-center justify-center flex-col gap-7 "
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
        <div className=" text-secondary mb-4 leading-5 font-semibold text-[15px]">
          Con tôi là đứa trẻ ghét nhất mông tiếng Anh tôi đã bất lục và không
          tìm được phương pháp cho đến khi giới thiệu đến trung tâm ELIONE
        </div>

        <div className=" flex items-center justify-start gap-x-1 text-black">
          <Clock
            className=" text-secondary"
            size={16}
            strokeWidth={2.25}
            absoluteStrokeWidth
          />
          Thời gian: 8h-21h
        </div>

        <div className=" flex md:items-center sm:flex-col sm:items-start sm:gap-x-0 sm:gap-y-2 justify-start md:flex-row md:gap-x-6 mt-2">
          <div className=" flex items-center justify-start gap-x-1">
            <PersonStanding
              size={16}
              className=" text-secondary"
              strokeWidth={2.25}
              absoluteStrokeWidth
            />
            Số lớp học: 3
          </div>
          <div className=" flex items-center justify-start gap-x-1">
            <User
              size={20}
              className=" text-secondary"
              strokeWidth={2.25}
              absoluteStrokeWidth
            />
            Sĩ số lớp học: 6-12
          </div>
        </div>
        <div className=" flex md:items-center sm:flex-col sm:items-start sm:gap-x-0 sm:gap-y-2 justify-start md:flex-row md:gap-x-6 mt-2">
          <div className=" flex items-center justify-start gap-x-1">
            <Calculator
              size={16}
              className=" text-secondary"
              strokeWidth={2.25}
              absoluteStrokeWidth
            />
            Thời gian học: 90-120 phút/buổi
          </div>
          <div className=" flex items-center justify-start gap-x-1">
          <Calculator
              size={16}
              className=" text-secondary"
              strokeWidth={2.25}
              absoluteStrokeWidth
            />
            Lịch mở lớp:
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
