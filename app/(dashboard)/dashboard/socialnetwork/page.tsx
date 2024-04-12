import React from "react";
import { Schedule, ScheduleThumbnail, SocialNetwork } from "@prisma/client";
import { getSchedule, getScheduleThumb } from "@/data/schedule";
import { DataTable } from "./_components/data-table";
import { columns } from "./_components/columns";
import { getSocialNetwork } from "@/data/socialnetwork";


const Page = async () => {
  const data = (await getSocialNetwork()) as SocialNetwork[];
  return <div>
     <DataTable columns={columns} data={data} />
  </div>
};

export default Page;
