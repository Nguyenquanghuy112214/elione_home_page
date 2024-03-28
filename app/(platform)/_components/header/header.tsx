import Image from "next/image";
import React from "react";
import ContactHeader from "./contact_header";
import MenuMb from "./menu_mb";

function Header() {
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
    <div className=" sm:h-[100px] md:h-[150px] py-[20px]">
      <div className="container grid grid-cols-12 sm:hidden md:grid">
        <div className=" col-span-3"></div>
        <div className=" col-span-9">
          <ContactHeader />
        </div>
      </div>
      <div className="container grid grid-cols-12 mt-4">
        <div className="  sm:col-span-6 md:col-span-3">
          <Image
            src="https://elione.bkt.net.vn/Content/images/logo-wide.png"
            className=" object-contain sm:w-[120px] md:w-[200px]"
            height={100}
            width={200}
            alt="logo"
          />
        </div>
        <div className=" sm:col-span-6 md:col-span-9 flex flex-col items-start justify-start sm:hidden lg:flex">
          <ul className=" h-full  items-center justify-between w-full flex ">
            {menu.map((item, index) => (
              <li className=" font-semibold uppercase cursor-pointer hover:text-secondary transition-all" key={index}>
                {item?.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="sm:col-span-6 md:col-span-9 flex flex-col items-end justify-center lg:hidden sm:flex">
          <MenuMb />
        </div>
      </div>
    </div>
  );
}

export default Header;
