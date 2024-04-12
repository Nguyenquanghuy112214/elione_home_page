"use client";
import { icons } from "@/public/img";
import Image from "next/image";

export const Logo = () => {
  return (
    <Image
      className=" w-[130px] h-[60px]"
      height={130}
      width={130}
      alt="logo"
      src={icons.logo}
    />
  );
};
