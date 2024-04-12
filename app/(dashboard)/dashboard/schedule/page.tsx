import React from "react";
import { Schedule, ScheduleThumbnail } from "@prisma/client";
import { getSchedule, getScheduleThumb } from "@/data/schedule";
import { DataTableThumb } from "./schedulethumb/_components/data-table";
import { columnsThumb } from "./schedulethumb/_components/columns";
import { DataTable } from "./schedule/data-table";
import { columns } from "./schedule/columns";

const Page = async () => {
  const data = (await getScheduleThumb()) as ScheduleThumbnail[];
  const dataSchedule = (await getSchedule()) as Schedule[];
  return <div>
     <DataTableThumb columns={columnsThumb} data={data} />
     <DataTable columns={columns} data={dataSchedule} />
  </div>
};

export default Page;
