import React from "react";
import { DataTable } from "./_components/targetthumb/data-table";
import { columns } from "./_components/targetthumb/columns";
import { Target, TargetThumbnail } from "@prisma/client";
import { getTarget, getTargetThumb } from "@/data/target";
import { DataTableTarget } from "./_components/target/data-table";
import { columnsTarget } from "./_components/target/columns";

const Page = async () => {
  const data = (await getTargetThumb()) as TargetThumbnail[];
  const dataTarget = (await getTarget()) as Target[];
  return (
    <div>
      <DataTable columns={columns} data={data} />
      <DataTableTarget columns={columnsTarget} data={dataTarget} />
    </div>
  );
};

export default Page;
