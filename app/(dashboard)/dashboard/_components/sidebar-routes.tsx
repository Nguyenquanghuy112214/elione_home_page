"use client";

import {
  BookCopy,
  BookOpenCheck,
  ShieldPlus,
  SquareSlash,
} from "lucide-react";

import { SidebarItem } from "./sidebar-item";
const routes = [
  {
    // icon: BookOpenCheck,
    label: "Why-Choose",
    href: "/dashboard/whychoose",
  },
  {
    // icon: BookOpenCheck,
    label: "Infomation-Advise",
    href: "/dashboard/information",
  },
  {
    // icon: ShieldPlus,
    label: "Process",
    href: "/dashboard/process",
  },
  {
    // icon: SquareSlash,
    label: "Excellent",
    href: "/dashboard/excellent",
  },
  {
    // icon: SquareSlash,
    label: "Partner",
    href: "/dashboard/partner",
  },
];

export const SidebarRoutes = () => {
  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          // icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  );
};
