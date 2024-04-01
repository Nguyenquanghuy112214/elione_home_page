import React from "react";
import { DataTable } from "./_components/data-table";
import { columns } from "./_components/columns";
import { Evaluate } from "@prisma/client";
import { getEvaluate } from "@/data/evaluate";

const Page = async () => {
  const data = (await getEvaluate()) as Evaluate[];
  return <DataTable columns={columns} data={data} />;
};

export default Page;
