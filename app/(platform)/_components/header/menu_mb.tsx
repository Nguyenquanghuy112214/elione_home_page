// "use client";

// import {
//   Sheet,

//   SheetContent,

//   SheetTrigger,
// } from "@/components/ui/sheet";
// import { Menu } from "lucide-react";

// export default function MenuMb() {
//     const menu = [
//         {
//           title: "Giới thiệu",
//         },
//         {
//           title: "Chương trình học",
//         },
//         {
//           title: "Tin tức sự kiện",
//         },
//         {
//           title: "Học online",
//         },
//         {
//           title: "Thương hiệu elione",
//         },
//         {
//           title: "Tuyển dụng",
//         },
//       ];
//   return (
//     <Sheet>
//       <SheetTrigger asChild>
//         <Menu className=" cursor-pointer" />
//       </SheetTrigger>
//       <SheetContent>
//         <ul className=" h-full  items-start justify-start gap-y-4 w-full flex flex-col mt-5">
//           {menu.map((item, index) => (
//             <li className=" font-semibold sm:text-sm md:text-base uppercase cursor-pointer hover:bg-secondary hover:text-white w-full sm:p-2 md:p-2 rounded-md transition-all" key={index}>
//               {item?.title}
//             </li>
//           ))}
//         </ul>
//       </SheetContent>
//     </Sheet>
//   );
// }

"use client";
import React, { Fragment, useState } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { dropMenu } from "@/contants/farmermotion";
import { menu } from "@/data/menu";
import { usePathname, useRouter } from "next/navigation";

function MenuMb({
  active,
  handleClick,
}: {
  active: boolean;
  handleClick: () => void;
}) {
  const pathname = usePathname();

  const [idChildren, setIdChildren] = useState<number>(-1);
  const router = useRouter();
  return (
    <div
      className={cn(
        " bg-secondary sm:block lg:hidden  absolute left-0 right-0 top-[100%] z-20"
      )}
    >
      <motion.div
        variants={dropMenu(active)}
        initial="hidden"
        whileInView="show"
        className="px-5"
      >
        <motion.ul className=" py-4">
          {menu.map((item, index) => (
            <Fragment key={index}>
              <li
                key={index}
                className={cn(
                  " flex flex-col  items-center justify-between text-white hover:text-primary cursor-pointer h-10 transition-all duration-200 font-medium",
                  `${idChildren === index ? " " : ""}`,
                  `${
                    (pathname === "/" && item.path === "/") ||
                    pathname === item.path ||
                    pathname?.startsWith(`${item.path}/`) ||
                    pathname?.startsWith(`${item.pathParent}`)
                      ? "text-primary"
                      : ""
                  }`
                )}
              >
                <span className="w-full h-full flex items-center justify-between">
                  <span
                    onClick={() => {
                      if (!!item?.path) {
                        router.push(item?.path ? item?.path : "");
                        handleClick();
                      }
                    }}
                  >
                    {item.title}
                  </span>
                  <span
                    onClick={() => {
                      setIdChildren(idChildren === index ? -1 : index);
                    }}
                  >
                    {!!item?.children && <ChevronDown className="h-4 w-4" />}
                  </span>
                </span>
              </li>
              <motion.div
                variants={dropMenu(idChildren === index)}
                initial="hidden"
                whileInView="show"
                className=""
              >
                <motion.ul className="bg-secondary  sub-menu transition-all duration-200">
                  {item.children?.map((itemChil, indexChil) => (
                    <li
                      onClick={(e) => {
                        e.stopPropagation();
                        if (!!itemChil.path) {
                          router.push(itemChil.path);
                          setIdChildren(-1);
                          handleClick();
                        }
                      }}
                      key={indexChil}
                      className={cn(
                        "min-w-[180px] px-5 py-3 flex flex-col items-start text-white hover:text-primary  gap-x-1 cursor-pointer hover:translate-x-1 transition-all duration-200 text-sm",
                        `${
                          (pathname === "/" && itemChil.path === "/") ||
                          pathname === itemChil.path ||
                          pathname?.startsWith(`${itemChil.path}/`)
                            ? "text-primary"
                            : ""
                        }`
                      )}
                    >
                      {itemChil.title}
                    </li>
                  ))}
                </motion.ul>
              </motion.div>
            </Fragment>
          ))}
        </motion.ul>
      </motion.div>
    </div>
  );
}

export default MenuMb;
