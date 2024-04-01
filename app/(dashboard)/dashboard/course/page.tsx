import React from "react";
import { DataTable } from "./_components/data-table";
import { columns } from "./_components/columns";
import { getCourse } from "@/data/course";
import { Course } from "@prisma/client";

const Page = async () => {
  const data = (await getCourse()) as Course[];
  return <DataTable columns={columns} data={data} />;
};

export default Page;
