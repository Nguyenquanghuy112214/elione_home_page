"use client";

import { Contact } from "@prisma/client";
import { Home, MapPin } from "lucide-react";
import React from "react";

function ContactCl({ dataContact }: { dataContact: Contact[] }) {
  return (
    <div>
      <div className="title_footer mb-5">Liên hệ</div>
      <div className=" flex flex-col items-start justify-start gap-y-1 ">
        <div className=" flex items-center justify-start gap-x-2">
          <Home
            size={20}
            className=" text-secondary"
            strokeWidth={2.25}
            absoluteStrokeWidth
          />
          <span className=" uppercase font-medium text-[15px]">
            {dataContact[0]?.namecompany}
          </span>
        </div>
        <div className=" flex items-center justify-start gap-x-2 ">
          <MapPin
            size={20}
            className=" text-secondary"
            strokeWidth={2.25}
            absoluteStrokeWidth
          />
          <span className=" text-[12px]">
            {/* No7D-LK19, khu dịch vụ Van Phúc, Phường Vạn Phúc,
            <br />
             Quận Hà Đông, Thành phố Hà Nội, Việt Nam */}
            {dataContact[0]?.addresscompany}
          </span>
        </div>
      </div>
      <div className=" uppercase font-semibold my-4">
        {dataContact[0]?.slogan}
      </div>
      <div className=" flex flex-col items-start justify-start gap-y-1 ">
        <div className=" flex items-center justify-start gap-x-2">
          <Home
            size={20}
            className=" text-secondary"
            strokeWidth={2.25}
            absoluteStrokeWidth
          />
          <span className=" uppercase font-medium text-[15px]">
            {dataContact[0]?.namecenter}
          </span>
        </div>
        <div className=" flex items-center justify-start gap-x-2 ">
          <MapPin
            size={20}
            className=" text-secondary"
            strokeWidth={2.25}
            absoluteStrokeWidth
          />
          <span className=" text-[12px]">
            {/* Số 29/282 Kim Giang, Đại Kim, Hoàng Mai, Hà Nội
            <br />
            HOTLINE: 0889 515 888 */}
            {dataContact[0]?.addresscenter}
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContactCl;
