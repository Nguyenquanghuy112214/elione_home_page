"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import ActionTable from "./action-table";
import { WhyChooseProgram } from "@prisma/client";
import { PreviewReactQuill } from "@/components/preview-reactquill";

export const columns: ColumnDef<WhyChooseProgram>[] = [
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
    accessorKey: "title1",
    header: "Title1",
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("title1")}</div>
    ),
  },
  {
    accessorKey: "title2",
    header: "Title2",
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("title2")}</div>
    ),
  },
  {
    accessorKey: "title3",
    header: "Title3",
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("title3")}</div>
    ),
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => (
      <PreviewReactQuill
        value={row.getValue("description")}
      ></PreviewReactQuill>
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
    accessorKey: "subimg",
    header: () => <div className="">Image</div>,
    cell: ({ row }) => {
      return (
        <div className=" relative  h-[120px] w-[120px] border rounded-md">
          <Image
            className=" rounded-md object-contain"
            fill
            alt={"altText"}
            src={row.getValue("subimg")}
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
      const title1 = row.getValue("title1") as string;
      const title2 = row.getValue("title2") as string;
      const title3 = row.getValue("title3") as string;
      const description = row.getValue("description") as string;
      const img = row.getValue("img") as string;
      const subimg = row.getValue("subimg") as string;
      return ActionTable({
        id,
        title1,
        title2,
        title3,
        description,
        img,
        subimg,
      });
    },
  },
];
