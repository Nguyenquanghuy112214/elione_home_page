import React from "react";
// import { DataTable } from "./_components/targetthumb/data-table";
import {
  InformationProgram,
  InformationThumbnail,
  Target,
  TargetThumbnail,
} from "@prisma/client";
import { getTarget, getTargetThumb } from "@/data/target";
import {
  getInformationProgram,
  getInformationThumb,
} from "@/data/informationprogram";
import { DataTable } from "./informationthumb/data-table";
import { columns } from "./informationthumb/columns";
import { DataTableProgram } from "./informationprogram/data-table";
import { columnsProgram } from "./informationprogram/columns";

const Page = async () => {
  const data = (await getInformationThumb()) as InformationThumbnail[];
  const dataProgram = (await getInformationProgram()) as InformationProgram[];
  return (
    <div>
      <DataTable columns={columns} data={data} />
      <DataTableProgram columns={columnsProgram}  data={dataProgram}/>
    </div>
  );
};

export default Page;
