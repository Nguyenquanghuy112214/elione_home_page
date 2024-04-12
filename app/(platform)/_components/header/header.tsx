// "use client";
// import Image from "next/image";
// import React, { useEffect } from "react";
// import ContactHeader from "./contact_header";
// import MenuMb from "./menu_mb";
// import ScrollToTopButton from "../scrolltotop/scrolltotop";
// import { AOSInit } from "@/lib/aos";
// import { Contact } from "@prisma/client";
// function Header({dataContact}:{dataContact:Contact[]}) {
//   const menu = [
//     {
//       title: "Giới thiệu",
//     },
//     {
//       title: "Chương trình học",
//     },
//     {
//       title: "Tin tức sự kiện",
//     },
//     {
//       title: "Học online",
//     },
//     {
//       title: "Thương hiệu elione",
//     },
//     {
//       title: "Tuyển dụng",
//     },
//   ];

//   useEffect(() => {
//     // Khởi tạo AOS
//     // AOSInit.init({
//     //   offset: 20000,
//     //   duration: 2000,
//     //   delay: 1000,
//     // });
//     // AOS.refresh();

//     // Xử lý cuộn trang
//     const handleScroll = () => {
//       const header = document.querySelector(".nav");
//       if (header) {
//         if (window.scrollY > 20) {
//           header.classList.add("sticky");
//         } else {
//           header.classList.remove("sticky");
//         }
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     // Cleanup khi component unmount
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);
//   return (
//     <div className=" ">
//       <ScrollToTopButton />
//       <div className="container grid grid-cols-12 sm:hidden md:grid pt-5">
//         <div className=" col-span-3"></div>
//         <div className=" col-span-9">
//           <ContactHeader dataContact={dataContact}/>
//         </div>
//       </div>
//       <div className=" nav shadow-xl scroll-smooth">
//         <div className="container grid grid-cols-12 py-[10px]">
//           <div className="  sm:col-span-6 md:col-span-3">
//             <Image
//               src="https://elione.bkt.net.vn/Content/images/logo-wide.png"
//               className=" object-contain sm:w-[120px] md:w-[200px]"
//               height={100}
//               width={200}
//               alt="logo"
//             />
//           </div>
//           <div className=" sm:col-span-6 md:col-span-9 flex flex-col items-start justify-start sm:hidden lg:flex">
//             <ul className=" h-full  items-center justify-between w-full flex ">
//               {menu.map((item, index) => (
//                 <li
//                   className=" font-semibold uppercase cursor-pointer hover:text-secondary transition-all"
//                   key={index}
//                 >
//                   {item?.title}
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <div className="sm:col-span-6 md:col-span-9 flex flex-col items-end justify-center lg:hidden sm:flex">
//             <MenuMb />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Header;

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
        <div className=" container grid grid-cols-12 pt-[10px] pb-[30px] ">
          <div className="  sm:col-span-6 md:col-span-3">
            <Image
              onClick={() => router.push("/")}
              src={icons.logo}
              className=" object-contain sm:w-[120px] md:w-[200px] cursor-pointer"
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
                    " group font-semibold uppercase cursor-pointer hover:text-secondary transition-all relative text-sm py-2",
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
                    <ul className=" absolute left-0 top-[100%] text-black hover:text-secondary hover:border-secondary invisible opacity-0  group-hover:opacity-100 group-hover:visible transition-all border-l-[2px] border-solid border-black pl-3">
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
                              `${
                                (pathname === "/" && chi.path === "/") ||
                                pathname === chi.path ||
                                pathname?.startsWith(`${chi.path}/`)
                                  ? "text-secondary"
                                  : ""
                              }`
                            )}
                          >
                            <Link href={"/program"}>{chi.title}</Link>
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
