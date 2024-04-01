import React from "react";
import Header from "./_components/header/header";
import Banner from "./_components/banner/banner";
import Footer from "./_components/footer/footer";
import { getWhyChoose } from "@/data/whychoose";
import WhyChooseCl from "./_components/whychoose/whychoose";
import {
  Contact,
  Course,
  Evaluate,
  Excellent,
  Expert,
  Information,
  Partner,
  Process,
  WhyChoose,
} from "@prisma/client";
import { getProcess } from "@/data/process";
import ProcessCl from "./_components/process/process";
import CourseCl from "./_components/course/course";
import { getCourse } from "@/data/course";
import ExcellentCl from "./_components/excellent/excellent";
import { getExcellent } from "@/data/excellent";
import { getEvaluate } from "@/data/evaluate";
import { getInformation } from "@/data/information";
import EvaluateCl from "./_components/evaluate/evaluate";
import InfomationCl from "./_components/infomation/infomation";
import PartnerCl from "./_components/partner/partner";
import { getPartner } from "@/data/partner";
import { getExpert } from "@/data/expert";
import { getContact } from "@/data/contact";

async function HomePage() {
  const dataWyChoose = (await getWhyChoose()) as WhyChoose[];
  const dataProcess = (await getProcess()) as Process[];
  const dataCourse = (await getCourse()) as Course[];
  const dataExcellent = (await getExcellent()) as Excellent[];
  const dataEvaluate = (await getEvaluate()) as Evaluate[];
  const dataInformation = (await getInformation()) as Information[];
  const dataPartner = (await getPartner()) as Partner[];
  const dataExpert = (await getExpert()) as Expert[];
  const dataContact = (await getContact()) as Contact[];
  return (
    <div>
      <Header dataContact = {dataContact}/>
      <Banner />
      <WhyChooseCl data = {dataWyChoose}/>
      <ProcessCl data={dataProcess} />
      <CourseCl data={dataCourse} />
      <ExcellentCl data={dataExcellent} />
      <EvaluateCl data={dataEvaluate} />
      <InfomationCl data={dataInformation} />
      <PartnerCl data={dataPartner} />
      <Footer dataContact = {dataContact} dataCourse = {dataCourse} dataExpert={dataExpert}/>
    </div>
  );
}

export default HomePage;
