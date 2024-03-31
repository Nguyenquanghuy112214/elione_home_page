import React from "react";
import { DataTable } from "./_components/data-table";
import { columns } from "./_components/columns";
import { Partner } from "@prisma/client";
import { getPartner } from "@/data/partner";

const Page = async () => {
  const data = (await getPartner()) as Partner[];
  return <DataTable columns={columns} data={data} />;
};

export default Page;
