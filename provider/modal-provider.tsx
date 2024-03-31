"use client";

import { CreateExcellentModal } from "@/app/(dashboard)/dashboard/excellent/_components/modal/create-excellent";
import { DeleteExcellentModal } from "@/app/(dashboard)/dashboard/excellent/_components/modal/delete-excellent";
import { EditExcellentModal } from "@/app/(dashboard)/dashboard/excellent/_components/modal/edit-excellent";
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
    </>
  );
};
