import React from "react";
import { DataTable } from "./_components/data-table";
import { columns } from "./_components/columns";
import { Receive } from "@prisma/client";
import { getReceive } from "@/data/receive";

const Page = async () => {
  const data = (await getReceive()) as Receive[];
  return <DataTable columns={columns} data={data} />;
};

export default Page;
