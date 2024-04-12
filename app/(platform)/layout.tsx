import React from "react";
import Header from "./_components/header/header";
import { getContact } from "@/data/contact";
import { Contact, Course, Expert, SocialNetwork } from "@prisma/client";
import Footer from "./_components/footer/footer";
import { getExpert } from "@/data/expert";
import { getCourse } from "@/data/course";
import { getSocialNetwork } from "@/data/socialnetwork";
import ContactHeader from "./_components/header/contact_header";

async function Layout({ children }: { children: React.ReactNode }) {
  const dataContact = (await getContact()) as Contact[];
  const dataExpert = (await getExpert()) as Expert[];
  const dataCourse = (await getCourse()) as Course[];
  const dataSocialNetwork = (await getSocialNetwork()) as SocialNetwork[];

  return (
    <div>
      <div className="container grid grid-cols-12 sm:hidden md:grid pt-5">
        <div className=" col-span-3"></div>
        <div className=" col-span-9">
          <ContactHeader dataContact={dataContact} />
        </div>
      </div>
      <div className=" sticky top-0 z-50 bg-white shadow-md">
        <Header dataContact={dataContact} />
      </div>
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
