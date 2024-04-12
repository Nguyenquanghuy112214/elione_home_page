"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import ActionTable from "./action-table";
import { Process, Schedule, ScheduleThumbnail } from "@prisma/client";

export const columns: ColumnDef<Schedule>[] = [
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
