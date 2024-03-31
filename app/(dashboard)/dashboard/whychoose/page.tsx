import React from "react";
import { DataTable } from "./_components/data-table";
import { columns } from "./_components/columns";
import { WhyChoose } from "@prisma/client";
import { getWhyChoose } from "@/data/whychoose";

const Page = async () => {
  const data = (await getWhyChoose()) as WhyChoose[];
  return <DataTable columns={columns} data={data} />;
};

export default Page;
