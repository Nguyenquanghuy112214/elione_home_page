"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import ActionTable from "./action-table";
import { Process, ScheduleThumbnail } from "@prisma/client";

export const columnsThumb: ColumnDef<ScheduleThumbnail>[] = [
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
      const title = row.getValue("title") as string;
      return ActionTable({
        id,
        img,
        title,
      });
    },
  },
];
