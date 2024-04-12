import React from "react";
import { DataTable } from "./time/_components/data-table";
import { columns } from "./time/_components/columns";
import { Step, Time } from "@prisma/client";
import { getTime } from "@/data/time";
import { DataTableStep } from "./step/_components/data-table";
import { columnsStep } from "./step/_components/columns";
import { getStep } from "@/data/step";

const Page = async () => {
  const data = (await getTime()) as Time[];
  const dataStep = (await getStep()) as Step[];
  return (
    <div>
      <DataTable columns={columns} data={data} />
      <DataTableStep columns={columnsStep} data={dataStep} />
    </div>
  );
};

export default Page;
