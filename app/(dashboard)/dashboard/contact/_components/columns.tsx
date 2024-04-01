"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import ActionTable from "./action-table";
import { Contact } from "@prisma/client";

export const columns: ColumnDef<Contact>[] = [
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
    accessorKey: "slogan",
    header: "Slogan",
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("slogan")}</div>
    ),
  },
  {
    accessorKey: "namecompany",
    header: "Name Company",
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("namecompany")}</div>
    ),
  },
  {
    accessorKey: "addresscompany",
    header: "Address Company",
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("addresscompany")}</div>
    ),
  },
  {
    accessorKey: "namecenter",
    header: "Name Center",
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("namecenter")}</div>
    ),
  },
  {
    accessorKey: "addresscenter",
    header: "Address Center",
    cell: ({ row }) => (
      <div className="lowercase">{row.getValue("addresscenter")}</div>
    ),
  },
  {
    accessorKey: "mail",
    header: "Mail",
    cell: ({ row }) => <div className="lowercase">{row.getValue("mail")}</div>,
  },
  {
    accessorKey: "phone",
    header: "Phone",
    cell: ({ row }) => <div className="lowercase">{row.getValue("phone")}</div>,
  },

  {
    accessorKey: "logo",
    header: () => <div className="">Logo</div>,
    cell: ({ row }) => {
      return (
        <div className=" relative  h-[120px] w-[120px] border rounded-md">
          <Image
            className=" rounded-md object-contain"
            fill
            alt={"altText"}
            src={row.getValue("logo")}
          />
        </div>
      );
    },
  },
  {
    accessorKey: "sublogo",
    header: () => <div className="">Sub Logo</div>,
    cell: ({ row }) => {
      return (
        <div className=" relative  h-[120px] w-[120px] border rounded-md">
          <Image
            className=" rounded-md object-contain"
            fill
            alt={"altText"}
            src={row.getValue("sublogo")}
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
      const logo = row.getValue("logo") as string;
      const sublogo = row.getValue("sublogo") as string;
      const slogan = row.getValue("slogan") as string;
      const namecompany = row.getValue("namecompany") as string;
      const addresscompany = row.getValue("addresscompany") as string;
      const namecenter = row.getValue("namecenter") as string;
      const addresscenter = row.getValue("addresscenter") as string;
      const mail = row.getValue("mail") as string;
      const phone = row.getValue("phone") as string;
      return ActionTable({
        id,
        logo,
        sublogo,
        slogan,
        namecompany,
        addresscompany,
        namecenter,
        addresscenter,
        mail,
        phone,
      });
    },
  },
];
