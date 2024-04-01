"use client";

import { CreateContactModal } from "@/app/(dashboard)/dashboard/contact/_components/modal/create-contact";
import { DeleteContactModal } from "@/app/(dashboard)/dashboard/contact/_components/modal/delete-contact";
import { EditContactModal } from "@/app/(dashboard)/dashboard/contact/_components/modal/edit-contact";
import { CreateCourseModal } from "@/app/(dashboard)/dashboard/course/_components/modal/create-course";
import { DeleteCourseModal } from "@/app/(dashboard)/dashboard/course/_components/modal/delete-course";
import { EditCourseModal } from "@/app/(dashboard)/dashboard/course/_components/modal/edit-course";
import { CreateEvaluateModal } from "@/app/(dashboard)/dashboard/evaluate/_components/modal/create-evaluate";
import { DeleteEvaluateModal } from "@/app/(dashboard)/dashboard/evaluate/_components/modal/delete-evaluate";
import { EditValuateModal } from "@/app/(dashboard)/dashboard/evaluate/_components/modal/edit-evaluate";
import { CreateExcellentModal } from "@/app/(dashboard)/dashboard/excellent/_components/modal/create-excellent";
import { DeleteExcellentModal } from "@/app/(dashboard)/dashboard/excellent/_components/modal/delete-excellent";
import { EditExcellentModal } from "@/app/(dashboard)/dashboard/excellent/_components/modal/edit-excellent";
import { CreateExpertModal } from "@/app/(dashboard)/dashboard/expert/_components/modal/create-expert";
import { DeleteExpertModal } from "@/app/(dashboard)/dashboard/expert/_components/modal/delete-expert";
import { EditExpertModal } from "@/app/(dashboard)/dashboard/expert/_components/modal/edit-expert";
import { CreateInformationModal } from "@/app/(dashboard)/dashboard/information/_components/modal/create-information";
import { DeleteInformationModal } from "@/app/(dashboard)/dashboard/information/_components/modal/delete-information";
import { EditInformationModal } from "@/app/(dashboard)/dashboard/information/_components/modal/edit-information";
import { CreatePartnerModal } from "@/app/(dashboard)/dashboard/partner/_components/modal/create-partner";
import { DeletePartnerModal } from "@/app/(dashboard)/dashboard/partner/_components/modal/delete-partner";
import { EditPartnerModal } from "@/app/(dashboard)/dashboard/partner/_components/modal/edit-partner";
import { CreateProcessModal } from "@/app/(dashboard)/dashboard/process/_components/modal/create-process";
import { DeleteProcessModal } from "@/app/(dashboard)/dashboard/process/_components/modal/delete-process";
import { EditProcessModal } from "@/app/(dashboard)/dashboard/process/_components/modal/edit-process";
import { CreateWhyChooseModal } from "@/app/(dashboard)/dashboard/whychoose/_components/modal/create-why-choose";
import { DeleteWhyChooseModal } from "@/app/(dashboard)/dashboard/whychoose/_components/modal/delete-why-choose";
import { EditWhyChooseModal } from "@/app/(dashboard)/dashboard/whychoose/_components/modal/edit-why-choose";
import { useEffect, useState } from "react";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <CreateWhyChooseModal />
      <EditWhyChooseModal />
      <DeleteWhyChooseModal />

      <CreateInformationModal />
      <EditInformationModal />
      <DeleteInformationModal />

      <CreateProcessModal />
      <EditProcessModal />
      <DeleteProcessModal />

      <CreateExcellentModal />
      <EditExcellentModal />
      <DeleteExcellentModal />

      <CreatePartnerModal />
      <EditPartnerModal />
      <DeletePartnerModal />

      <CreateCourseModal />
      <EditCourseModal />
      <DeleteCourseModal />

      <CreateEvaluateModal />
      <EditValuateModal />
      <DeleteEvaluateModal />

      <CreateExpertModal />
      <EditExpertModal />
      <DeleteExpertModal />

      <CreateContactModal />
      <EditContactModal />
      <DeleteContactModal />
    </>
  );
};
