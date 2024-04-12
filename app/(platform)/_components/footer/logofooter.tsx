"use client";

import { icons } from "@/public/img";
import { Contact, SocialNetwork } from "@prisma/client";
import { Facebook, Instagram, LocateOffIcon, Twitter } from "lucide-react";
import Image from "next/image";
import React from "react";
import { SiZalo } from "react-icons/si";
import { FaTiktok, FaYoutube } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
function LogoFooter({ dataContact,dataSocialNetwork }: { dataContact: Contact[],dataSocialNetwork:SocialNetwork[] }) {
  if (!dataContact || !dataSocialNetwork) {
    return null;
  }
  return (
    <div>
      <div className=" mb-3 ">
        <Image
          src={dataContact[0]?.logo}
          className=" object-contain  md:w-[220px]"
          height={100}
          width={200}
          alt="logo"
        />
      </div>
      <div className="  mb-3">
        <Image
          src={dataContact[0]?.sublogo}
          className=" object-contain  md:w-[220px]"
          height={200}
          width={200}
          alt="logo"
        />
      </div>
      <div className=" flex items-center justify-start gap-x-3">
        <a target="_blank" href={dataSocialNetwork[0]?.facebook} className=" p-1 rounded-full border-[3px] border-solid border-secondary ">
          <Facebook size={20} absoluteStrokeWidth className=" text-secondary" />
        </a>
        <a target="_blank" href={dataSocialNetwork[0]?.zalo} className=" p-1 rounded-full border-[3px] border-solid border-secondary ">
          <SiZalo size={20} className=" text-secondary" />
        </a>
        <a target="_blank" href={dataSocialNetwork[0]?.youtube} className=" p-1 rounded-full border-[3px] border-solid border-secondary ">
          <FaYoutube size={20} className=" text-secondary" />
        </a>
        <a target="_blank" href={dataSocialNetwork[0]?.tiktok} className=" p-1 rounded-full border-[3px] border-solid border-secondary ">
          <FaTiktok size={20} className=" text-secondary" />
        </a>
        <a target="_blank" href={dataSocialNetwork[0]?.location} className=" p-1 rounded-full border-[3px] border-solid border-secondary ">
          <FaLocationDot size={20} className=" text-secondary" />
        </a>
      </div>
    </div>
  );
}

export default LogoFooter;
