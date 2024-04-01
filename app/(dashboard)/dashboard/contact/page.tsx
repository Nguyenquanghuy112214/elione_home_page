import React from "react";
import { DataTable } from "./_components/data-table";
import { columns } from "./_components/columns";
import { Contact } from "@prisma/client";
import { getContact } from "@/data/contact";

const Page = async () => {
  const data = (await getContact()) as Contact[];
  return <DataTable columns={columns} data={data} />;
};

export default Page;
