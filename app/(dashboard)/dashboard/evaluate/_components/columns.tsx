"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import ActionTable from "./action-table";
import { Course, Evaluate } from "@prisma/client";

export const columns: ColumnDef<Evaluate>[] = [
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
    accessorKey: "parentstudent",
    header: "Parent Student",
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("parentstudent")}</div>
    ),
  },
  {
    accessorKey: "achievements",
    header: "Achievements",
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("achievements")}</div>
    ),
  },
  {
    accessorKey: "class",
    header: "Class",
    cell: ({ row }) => <div className="lowercase">{row.getValue("class")}</div>,
  },
  {
    accessorKey: "star",
    header: "Star",
    cell: ({ row }) => <div className="lowercase">{row.getValue("star")}</div>,
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
      const star = row.getValue("star") as string;
      const img = row.getValue("img") as string;
      const video = row.getValue("video") as string;
      const parentstudent = row.getValue("parentstudent") as string;
      const achievements = row.getValue("achievements") as string;
      const class_g = row.getValue("class") as string;
      return ActionTable({
        id,
        video,
        img,
        title,
        star,
        parentstudent,
        achievements,
        class_g,
      });
    },
  },
];
