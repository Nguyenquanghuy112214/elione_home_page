import React from "react";
import Header from "./_components/header/header";
import { getContact } from "@/data/contact";
import { Contact, Course, Expert, SocialNetwork } from "@prisma/client";
import Footer from "./_components/footer/footer";
import { getExpert } from "@/data/expert";
import { getCourse } from "@/data/course";
import { getSocialNetwork } from "@/data/socialnetwork";

async function Layout({ children }: { children: React.ReactNode }) {
  const dataContact = (await getContact()) as Contact[];
  const dataExpert = (await getExpert()) as Expert[];
  const dataCourse = (await getCourse()) as Course[];
  const dataSocialNetwork = (await getSocialNetwork()) as SocialNetwork[];

  return (
    <div>
      <Header dataContact={dataContact} />
      {children}
      <Footer
        dataContact={dataContact}
        dataCourse={dataCourse}
        dataExpert={dataExpert}
        dataSocialNetwork={dataSocialNetwork}
      />
    </div>
  );
}

export default Layout;
