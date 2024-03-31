import React from "react";
import { DataTable } from "./_components/data-table";
import { columns } from "./_components/columns";
import { Process } from "@prisma/client";
import { getProcess } from "@/data/process";

const Page = async () => {
  const data = (await getProcess()) as Process[];
  return <DataTable columns={columns} data={data} />;
};

export default Page;
