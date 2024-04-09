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
import React, { useEffect } from "react";
import ContactHeader from "./contact_header";
import MenuMb from "./menu_mb";
import ScrollToTopButton from "../scrolltotop/scrolltotop";
import { Contact } from "@prisma/client";
import { useRouter } from "next/navigation";
function Header({ dataContact }: { dataContact: Contact[] }) {
  const router = useRouter();
  const menu = [
    {
      title: "Giới thiệu",
      path: "/",
    },
    {
      title: "Chương trình học",
      path: "/program",
      childrent: [
        {
          title: "Trại Hè Tiếng Anh 2024",
        },
      ],
    },
    {
      title: "Tin tức sự kiện",
      path: "/news",
      childrent: [
        {
          title: "Tiếng Anh ABC",
        },
      ],
    },
    {
      title: "Học online",
      path: "/online",
      childrent: [
        {
          title: "Tiếng Anh Ielts",
        },
      ],
    },
    {
      title: "Thương hiệu elione",
    },
    {
      title: "Tuyển dụng",
    },
  ];

  useEffect(() => {
    // Xử lý cuộn trang
    const handleScroll = () => {
      const header = document.querySelector(".nav");
      if (header) {
        if (window.scrollY > 20) {
          header.classList.add("sticky");
        } else {
          header.classList.remove("sticky");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup khi component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className=" ">
      <ScrollToTopButton />
      <div className="container grid grid-cols-12 sm:hidden md:grid pt-5">
        <div className=" col-span-3"></div>
        <div className=" col-span-9">
          <ContactHeader dataContact={dataContact} />
        </div>
      </div>
      <div className=" nav shadow-xl scroll-smooth">
        <div className="container grid grid-cols-12 pt-[10px] pb-[30px]">
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
                <li
                  onClick={() => router.push(item?.path ? item?.path : "")}
                  className=" group font-semibold uppercase cursor-pointer hover:text-secondary transition-all relative text-sm py-2"
                  key={index}
                >
                  {item?.title}
                  {item?.childrent && (
                    <ul className=" absolute left-0 top-[100%] text-black hover:text-secondary hover:border-secondary invisible opacity-0  group-hover:opacity-100 group-hover:visible transition-all border-l-[2px] border-solid border-black pl-3">
                      {item?.childrent?.map((chi, i) => (
                        <li key={index}>{chi.title}</li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="sm:col-span-6 md:col-span-9 flex flex-col items-end justify-center lg:hidden sm:flex">
            <MenuMb />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
