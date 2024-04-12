"use client";

import { Separator } from "@/components/ui/separator";
import React from "react";
import LogoFooter from "./logofooter";
import { Contact, Course, Expert, SocialNetwork } from "@prisma/client";
import FooterItem1 from "./footeritem1";
import FooterItem2 from "./footeritem2";
import ContactCl from "./contact";

function Footer({
  dataCourse,
  dataExpert,
  dataContact,
  dataSocialNetwork
}: {
  dataCourse: Course[];
  dataExpert: Expert[];
  dataContact:Contact[]
  dataSocialNetwork:SocialNetwork[]
}) {
  return (
    <div className=" ">
      <Separator className=" w-full h-2 bg-secondary"></Separator>
      <Separator className=" w-full h-1 bg-primary"></Separator>
      <div
        data-aos="zoom-down"
        data-aos-duration="1000"
        className=" grid container grid-cols-12 gap-y-10 py-8 min-h-[200px] gap-4"
      >
        <div className=" sm:col-span-12 md:col-span-6 lg:col-span-3">
          {" "}
          <LogoFooter dataContact={dataContact} dataSocialNetwork={dataSocialNetwork}/>
        </div>
        <div className=" sm:col-span-12 md:col-span-6 lg:col-span-3">
          <FooterItem1 dataCourse={dataCourse} />
        </div>
        <div className=" sm:col-span-12 md:col-span-6 lg:col-span-3">
          <FooterItem2 dataExpert={dataExpert}/>
        </div>
        <div className=" sm:col-span-12 md:col-span-6 lg:col-span-3">
          <ContactCl dataContact={dataContact}/>
        </div>
      </div>
      <Separator className=" w-full h-8 bg-secondary"></Separator>
    </div>
  );
}

export default Footer;
