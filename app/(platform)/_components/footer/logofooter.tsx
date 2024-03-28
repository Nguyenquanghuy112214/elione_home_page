import { icons } from "@/public/img";
import { Facebook, Instagram, LocateOffIcon, Twitter } from "lucide-react";
import Image from "next/image";
import React from "react";

function LogoFooter() {
  return (
    <div>
      <div className=" mb-3 ">
        <Image
          src="https://elione.bkt.net.vn/Content/images/logo-wide.png"
          className=" object-contain sm:w-[120px] md:w-[220px]"
          height={100}
          width={200}
          alt="logo"
        />
      </div>
      <div className="  mb-3">
        <Image
          src={icons.logo_footer}
          className=" object-contain sm:w-[120px] md:w-[220px]"
          height={200}
          width={200}
          alt="logo"
        />
      </div>
      <div className=" flex items-center justify-start gap-x-3">
        <div className=" p-1 rounded-full border-[3px] border-solid border-secondary ">
          <Facebook size={20} absoluteStrokeWidth className=" text-secondary" />
        </div>
        <div className=" p-1 rounded-full border-[3px] border-solid border-secondary ">
          <Twitter size={20} absoluteStrokeWidth className=" text-secondary" />
        </div>
        <div className=" p-1 rounded-full border-[3px] border-solid border-secondary ">
          <Instagram
            size={20}
            absoluteStrokeWidth
            className=" text-secondary"
          />
        </div>
        <div className=" p-1 rounded-full border-[3px] border-solid border-secondary ">
          <LocateOffIcon
            size={20}
            absoluteStrokeWidth
            className=" text-secondary"
          />
        </div>
      </div>
    </div>
  );
}

export default LogoFooter;
