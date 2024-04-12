import React from "react";
import { DataTable } from "./_components/data-table";
import { columns } from "./_components/columns";
import { WhyChooseProgram } from "@prisma/client";
import { getWhyChooseProgram } from "@/data/whychooseprogram";

const Page = async () => {
  const data = (await getWhyChooseProgram()) as WhyChooseProgram[];
  return <DataTable columns={columns} data={data} />;
};

export default Page;
