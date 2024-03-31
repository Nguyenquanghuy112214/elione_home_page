"use client";

import { Input } from "@/components/ui/input";
import { Mail, PhoneCall, Search } from "lucide-react";
import React from "react";

function ContactHeader() {
  return (
    <div className=" border-b-[1px] border-primary border-solid ">
      <div className=" flex items-center justify-between pb-1">
        <div className=" flex gap-x-4">
          <div className=" flex gap-x-[6px]">
            <PhoneCall className=" text-secondary" />
            <span className=" font-bold italic text-secondary">
              0889 515 888
            </span>
          </div>
          <div className=" flex gap-x-[6px]">
            <Mail className=" font-bold text-secondary" />
            <span className=" font-medium italic text-secondary">
              hr.elione@gmail.com
            </span>
          </div>
        </div>
        <div className=" flex gap-x-4">
          <div className=" text-secondary uppercase md:hidden lg:block">
            Hệ Thống Anh Ngữ Thực Hành Quốc Tế Elione
          </div>
          <div className=" relative group">
            <Search className=" text-secondary" />
            <div className=" absolute bottom-[-50%] w-10 right-0 h-10 "></div>
            <div className=" absolute top-[160%] right-0 invisible min-w-[200px] group-hover:top-[140%] group-hover:opacity-100 group-hover:visible transition-all ">
              <div className=" flex items-center justify-between border-[2px] border-solid px-4 py-1  bg-white">
                <Input  className=" border-none text-black" placeholder="search..."/>
                <Search className=" text-secondary cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactHeader;
