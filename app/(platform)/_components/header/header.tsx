"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ContactHeader from "./contact_header";
import MenuMb from "./menu_mb";
import ScrollToTopButton from "../scrolltotop/scrolltotop";
import { Contact } from "@prisma/client";
import { usePathname, useRouter } from "next/navigation";
import { icons } from "@/public/img";
import LoadingModal from "../../loading";
import Link from "next/link";
import IconMenuMb from "./iconmenumb";
import { menu } from "@/data/menu";
import { cn } from "@/lib/utils";
import { InterVF } from "@/components/fonts_application/fonts";
function Header({ dataContact }: { dataContact: Contact[] }) {
  const router = useRouter();

  const pathname = usePathname();

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [pathname]);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [scroll, setScroll] = useState<boolean>(false);
  // console.log("scroll",scroll);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".nav");
      if (header) {
        if (window.scrollY > 20) {
          setScroll(true);
        } else {
          setScroll(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className=" ">
      <LoadingModal loading={loading} />
      <ScrollToTopButton />

      {/* <div className=" nav shadow-xl scroll-smooth"> */}
      <div className="nav sticky top-0 z-50">
        <div className=" container grid grid-cols-12 pt-[10px] pb-[28px] ">
          <div className="  sm:col-span-6 md:col-span-3">
            <Image
              onClick={() => router.push("/")}
              src={icons.logo}
              className=" object-contain sm:w-[120px] md:w-[170px] cursor-pointer"
              height={100}
              width={200}
              alt="logo"
            />
          </div>
          <div className=" sm:col-span-6 md:col-span-9 flex flex-col items-start justify-start sm:hidden lg:flex">
            <ul className=" h-full  items-center justify-between w-full flex ">
              {menu.map((item, index) => (
                <li
                  onClick={() => router.push(item?.path ? item?.path : "")}
                  className={cn(
                    " group font-semibold uppercase cursor-pointer hover:text-secondary transition-all relative text-sm py-2  flex items-center justify-center h-[40px]",
                    `${InterVF.className}`,
                    `${
                      (pathname === "/" && item.path === "/") ||
                      pathname === item.path ||
                      pathname?.startsWith(`${item.path}/`) ||
                      pathname?.startsWith(`${item.pathParent}`)
                        ? "text-secondary"
                        : ""
                    }`
                  )}
                  key={index}
                >
                  {item?.title}
                  {!!item?.children && (
                    <ul className="h-[30px] items-center flex bg-white absolute left-0 top-[95%] text-black invisible opacity-0 group-hover:opacity-100 group-hover:visible  transition-all  w-max before:absolute before:left-[-10px] before:bottom-0 before:h-[45px] before:w-[3px] before:bg-[#a8a6a6]">
                      {item.children.map((chi, i) => {
                        return (
                          <li
                            key={i}
                            onClick={(e) => {
                              e.stopPropagation();
                              if (!!chi.path) {
                                router.push(chi.path);
                              }
                            }}
                            className={cn(
                              `${InterVF.className}`,
                              `${
                                (pathname === "/" && chi.path === "/") ||
                                pathname === chi.path ||
                                pathname?.startsWith(`${chi.path}/`)
                                  ? "text-secondary "
                                  : ""
                              }`,
                              `${
                                i > 0
                                  ? "border-l-[3px]  border-solid border-[#ccc]"
                                  : "!pl-0"
                              }`,
                              " px-3"
                            )}
                          >
                            <Link
                              className=" hover:text-secondary hover:border-secondary transition-all"
                              href={"/program"}
                            >
                              {chi.title}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="sm:col-span-6 md:col-span-9 flex flex-col items-end justify-center lg:hidden sm:flex">
            <div className="sm:flex lg:hidden h-full items-center justify-center">
              <IconMenuMb
                active={isMenuOpen}
                setIsMenuOpen={() => setIsMenuOpen(!isMenuOpen)}
              />
            </div>
          </div>
          <MenuMb
            active={isMenuOpen}
            handleClick={() => {
              setIsMenuOpen(false);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
