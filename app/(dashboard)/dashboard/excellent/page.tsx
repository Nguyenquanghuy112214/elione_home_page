import React from "react";
import { DataTable } from "./_components/data-table";
import { columns } from "./_components/columns";
import { Excellent } from "@prisma/client";
import { getExcellent } from "@/data/excellent";

const Page = async () => {
  const data = (await getExcellent()) as Excellent[];
  return <DataTable columns={columns} data={data} />;
};

export default Page;
