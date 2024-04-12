"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import ActionTable from "./action-table";
import { Time } from "@prisma/client";
import { formatDate } from "@/contants/formatDay";

export const columns: ColumnDef<Time>[] = [
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
    accessorKey: "timestart",
    header: "Start on Date",
    cell: ({ row }) => (
      <div className="truncate">
        {formatDate(row.getValue("timestart"), "DD/MM/YYYY HH:MM")}
      </div>
    ),
  },
  {
    accessorKey: "timeend",
    header: "End on Date",
    cell: ({ row }) => (
      <div className="truncate">
        {formatDate(row.getValue("timeend"), "DD/MM/YYYY HH:MM")}
      </div>
    ),
  },
  {
    accessorKey: "location",
    header: "Adress",
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("location")}</div>
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
    accessorKey: "id",
    header: "",
    enableHiding: false,
    cell: ({ row }) => {
      const id = row.getValue("id") as string;
      const img = row.getValue("img") as string;
      const location = row.getValue("location") as string;
      const timestart = row.getValue("timestart") as Date;
      const timeend = row.getValue("timeend") as Date;
      return ActionTable({
        id,
        img,
        location,
        timestart,
        timeend,
      });
    },
  },
];
