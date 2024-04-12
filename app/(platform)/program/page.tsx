import React from "react";
import Banner from "./_components/banner-program/banner";
import WhychooseElione from "./_components/whychoose-elione/whychoose-elione";
import BgGradient from "./_components/bg-gradient/bg-gradient";
import Student from "./_components/student/student";
import EvaluateCl from "../_components/evaluate/evaluate";
import { getEvaluate } from "@/data/evaluate";
import {
  Evaluate,
  Information,
  InformationProgram,
  InformationThumbnail,
  Receive,
  Schedule,
  ScheduleThumbnail,
  Step,
  Target,
  TargetThumbnail,
  Time,
  WhyChooseProgram,
} from "@prisma/client";
import InfomationCl from "../_components/infomation/infomation";
import { getInformation } from "@/data/information";
import InformationSub from "./_components/information/information";
import { getWhyChooseProgram } from "@/data/whychooseprogram";
import { getReceive } from "@/data/receive";
import {
  getInformationProgram,
  getInformationThumb,
} from "@/data/informationprogram";
import { getSchedule, getScheduleThumb } from "@/data/schedule";
import ScheduleCl from "./_components/schedule/schedule";
import { getTarget, getTargetThumb } from "@/data/target";
import TargetCl from "./_components/target/target";
import { getTime } from "@/data/time";
import { getStep } from "@/data/step";

async function Page() {
  const dataEvaluate = (await getEvaluate()) as Evaluate[];
  const dataInformation = (await getInformationProgram()) as Information[];
  const dataWhyChoose = (await getWhyChooseProgram()) as WhyChooseProgram[];
  const dataStudent = (await getReceive()) as Receive[];
  const dataInformationSub =
    (await getInformationProgram()) as InformationProgram[];
  const dataInformationThumb =
    (await getInformationThumb()) as InformationThumbnail[];
  const dataShedule = (await getSchedule()) as Schedule[];
  const dataSheduleThumb = (await getScheduleThumb()) as ScheduleThumbnail[];
  const dataTarget = (await getTarget()) as Target[];
  const dataTargetThumb = (await getTargetThumb()) as TargetThumbnail[];
  const dataTime = (await getTime()) as Time[];
  const dataStep = (await getStep()) as Step[];

  return (
    <div>
      <Banner />
      <WhychooseElione data={dataWhyChoose} />
      <Student data={dataStudent} />
      <TargetCl dataThumb={dataTargetThumb} data={dataTarget} />
      <InformationSub
        dataTime={dataTime}
        data={dataStep}
      />
      <ScheduleCl dataThumb={dataSheduleThumb} data={dataShedule}/>
      <EvaluateCl data={dataEvaluate} />
      <InfomationCl data={dataInformation} />
    </div>
  );
}

export default Page;
