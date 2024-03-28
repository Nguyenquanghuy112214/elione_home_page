import { Separator } from "@/components/ui/separator";
import React from "react";
import FooterItem from "./footeritem";
import Contact from "./contact";
import LogoFooter from "./logofooter";

function Footer() {
  return (
    <div className=" ">
      <Separator className=" w-full h-2 bg-secondary"></Separator>
      <Separator className=" w-full h-1 bg-primary"></Separator>
      <div className=" grid container grid-cols-12 gap-y-10 py-8 min-h-[200px]">
        <div className=" sm:col-span-12 md:col-span-6 lg:col-span-3">
          {" "}
        <LogoFooter/>
        </div>
        <div className=" sm:col-span-12 md:col-span-6 lg:col-span-3">
          <FooterItem />
        </div>
        <div className=" sm:col-span-12 md:col-span-6 lg:col-span-3">
          <FooterItem />
        </div>
        <div className=" sm:col-span-12 md:col-span-6 lg:col-span-3">
          <Contact />
        </div>
      </div>
      <Separator className=" w-full h-8 bg-secondary"></Separator>
    </div>
  );
}

export default Footer;
