"use client";

import { SidebarItem } from "./sidebar-item";
const routes = [
  {
    label: "Why-Choose",
    href: "/dashboard/whychoose",
  },
  {
    label: "Process",
    href: "/dashboard/process",
  },
  {
    label: "Course",
    href: "/dashboard/course",
  },

  {
    label: "Excellent",
    href: "/dashboard/excellent",
  },
  {
    label: "Evaluate",
    href: "/dashboard/evaluate",
  },
  {
    label: "Infomation-Advise",
    href: "/dashboard/information",
  },
  {
    label: "Partner",
    href: "/dashboard/partner",
  },

  {
    label: "Expert",
    href: "/dashboard/expert",
  },
  {
    label: "Contact",
    href: "/dashboard/contact",
  },
  {
    label: "WhyChooseProgram",
    href: "/dashboard/whychooseprogram",
  },
  {
    label: "Receive",
    href: "/dashboard/receive",
  },
  {
    label: "Target",
    href: "/dashboard/target",
  },
  {
    label: "InformationProgram",
    href: "/dashboard/informationprogram",
  },
  {
    label: "Time",
    href: "/dashboard/time",
  },
  {
    label: "Schedule",
    href: "/dashboard/schedule",
  },
  {
    label: "Social Network",
    href: "/dashboard/socialnetwork",
  },
];

export const SidebarRoutes = () => {
  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SidebarItem key={route.href} label={route.label} href={route.href} />
      ))}
    </div>
  );
};
