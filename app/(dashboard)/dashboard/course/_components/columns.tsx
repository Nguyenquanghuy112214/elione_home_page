"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import ActionTable from "./action-table";
import { Course } from "@prisma/client";
import { PreviewReactQuill } from "@/components/preview-reactquill";

export const columns: ColumnDef<Course>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value: any) =>
          table.toggleAllPageRowsSelected(!!value)
        }
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value: any) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => <div className="lowercase">{row.getValue("title")}</div>,
  },
  {
    accessorKey: "timestart",
    header: "Time Start",
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("timestart")}</div>
    ),
  },
  {
    accessorKey: "countclass",
    header: "Count Class",
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("countclass")}</div>
    ),
  },
  {
    accessorKey: "countstudent",
    header: "Count Student",
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("countstudent")}</div>
    ),
  },
  {
    accessorKey: "timelearn",
    header: "Time Learn",
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("timelearn")}</div>
    ),
  },
  {
    accessorKey: "calendar",
    header: "Calendar",
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("calendar")}</div>
    ),
  },
  {
    accessorKey: "img",
    header: () => <div className="">Image</div>,
    cell: ({ row }) => {
      return (
        <div className=" relative  h-[120px] w-[120px] border rounded-md">
          <Image
            className=" rounded-md object-contain"
            fill
            alt={"altText"}
            src={row.getValue("img")}
          />
        </div>
      );
    },
  },
  {
    accessorKey: "video",
    header: "File Video",
    cell: ({ row }: any) => {
      return (
        <div className=" relative  h-[150px] w-[250px] border rounded-md">
          <video
            className="w-full h-full object-cover rounded-md border shadow-sm"
            controls
          >
            <source src={row.getValue("video")} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      );
    },
  },
  {
    accessorKey: "id",
    header: "",
    enableHiding: false,
    cell: ({ row }) => {
      const id = row.getValue("id") as string;
      const title = row.getValue("title") as string;
      const timestart = row.getValue("timestart") as string;
      const img = row.getValue("img") as string;
      const video = row.getValue("video") as string;
      const countclass = row.getValue("countclass") as string;
      const countstudent = row.getValue("countstudent") as string;
      const timelearn = row.getValue("timelearn") as string;
      const calendar = row.getValue("calendar") as string;
      return ActionTable({
        id,
        img,
        video,
        title,
        timestart,
        countclass,
        countstudent,
        timelearn,
        calendar,
      });
    },
  },
];
