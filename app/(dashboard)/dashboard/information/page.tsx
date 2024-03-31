import React from "react";
import { DataTable } from "./_components/data-table";
import { columns } from "./_components/columns";
import { Information } from "@prisma/client";
import { getInformation } from "@/data/information";

const Page = async () => {
  const data = (await getInformation()) as Information[];
  return <DataTable columns={columns} data={data} />;
};

export default Page;
