import React from "react";
import Header from "./_components/header/header";
import Banner from "./_components/banner/banner";
import WhyChoose from "./_components/whychoose/whychoose";
import Process from "./_components/process/process";
import Course from "./_components/course/course";
import Infomation from "./_components/infomation/infomation";
import Partner from "./_components/partner/partner";
import Footer from "./_components/footer/footer";

function HomePage() {
  return (
    <div>
      <Header />
      <Banner />
      <WhyChoose/>
      <Process/>
      <Course/>
      <Infomation/>
      <Partner/>
      <Footer/>
    </div>
  );
}

export default HomePage;
