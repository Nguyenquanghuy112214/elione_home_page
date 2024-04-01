import React from "react";
import { DataTable } from "./_components/data-table";
import { columns } from "./_components/columns";
import { Expert } from "@prisma/client";
import { getExpert } from "@/data/expert";

const Page = async () => {
  const data = (await getExpert()) as Expert[];
  return <DataTable columns={columns} data={data} />;
};

export default Page;
