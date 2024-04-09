import React from "react";
import Banner from "./_components/banner-program/banner";
import WhychooseElione from "./_components/whychoose-elione/whychoose-elione";
import BgGradient from "./_components/bg-gradient/bg-gradient";
import Student from "./_components/student/student";
import Target from "./_components/target/target";
import Schedule from "./_components/schedule/schedule";
import EvaluateCl from "../_components/evaluate/evaluate";
import { getEvaluate } from "@/data/evaluate";
import { Evaluate, Information } from "@prisma/client";
import InfomationCl from "../_components/infomation/infomation";
import { getInformation } from "@/data/information";
import InformationSub from "./_components/information/information";

async function Page() {
  const dataEvaluate = (await getEvaluate()) as Evaluate[];
  const dataInformation = (await getInformation()) as Information[];

  return (
    <div>
      <Banner />
      <WhychooseElione />
      {/* <BgGradient/> */}
      <Student />
      <Target />
      <InformationSub />
      <Schedule />
      <EvaluateCl data={dataEvaluate} />
      <InfomationCl data={dataInformation}/>
    </div>
  );
}

export default Page;
