"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import ActionTable from "./action-table";
import { SocialNetwork } from "@prisma/client";

export const columns: ColumnDef<SocialNetwork>[] = [
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
    accessorKey: "zalo",
    header: "Zalo",
    cell: ({ row }) => <div className="lowercase">{row.getValue("zalo")}</div>,
  },
  {
    accessorKey: "facebook",
    header: "Facebook",
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("facebook")}</div>
    ),
  },
  {
    accessorKey: "youtube",
    header: "Youtube",
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("youtube")}</div>
    ),
  },
  {
    accessorKey: "tiktok",
    header: "Tiktok",
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("tiktok")}</div>
    ),
  },
  {
    accessorKey: "location",
    header: "Location",
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("location")}</div>
    ),
  },

  {
    accessorKey: "id",
    header: "",
    enableHiding: false,
    cell: ({ row }) => {
      const id = row.getValue("id") as string;
      const zalo = row.getValue("zalo") as string;
      const youtube = row.getValue("youtube") as string;
      const tiktok = row.getValue("tiktok") as string;
      const facebook = row.getValue("facebook") as string;
      const location = row.getValue("location") as string;
      return ActionTable({
        id,
        zalo,
        youtube,
        tiktok,
        facebook,
        location,
      });
    },
  },
];
