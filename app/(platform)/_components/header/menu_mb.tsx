"use client";

import {
  Sheet,
 
  SheetContent,

  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function MenuMb() {
    const menu = [
        {
          title: "Giới thiệu",
        },
        {
          title: "Chương trình học",
        },
        {
          title: "Tin tức sự kiện",
        },
        {
          title: "Học online",
        },
        {
          title: "Thương hiệu elione",
        },
        {
          title: "Tuyển dụng",
        },
      ];
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu className=" cursor-pointer" />
      </SheetTrigger>
      <SheetContent>
        <ul className=" h-full  items-start justify-start gap-y-4 w-full flex flex-col mt-5">
          {menu.map((item, index) => (
            <li className=" font-semibold sm:text-sm md:text-base uppercase cursor-pointer hover:bg-secondary hover:text-white w-full sm:p-1 md:p-2 rounded-md transition-all" key={index}>
              {item?.title}
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  );
}
