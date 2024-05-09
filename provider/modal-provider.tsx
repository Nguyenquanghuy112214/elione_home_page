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
import { CreateInformationProgramModal } from "@/app/(dashboard)/dashboard/informationprogram/informationprogram/modal/create-information";
import { DeleteInformationProgramModal } from "@/app/(dashboard)/dashboard/informationprogram/informationprogram/modal/delete-information";
import { EditInformationProgramModal } from "@/app/(dashboard)/dashboard/informationprogram/informationprogram/modal/edit-information";
import { CreateInformationThumbModal } from "@/app/(dashboard)/dashboard/informationprogram/informationthumb/modal/create-information-thumb";
import { DeleteInformationThumbModal } from "@/app/(dashboard)/dashboard/informationprogram/informationthumb/modal/delete-information-thumb";
import { EditInformationThumbModal } from "@/app/(dashboard)/dashboard/informationprogram/informationthumb/modal/edit-information-thumb";
import { CreatePartnerModal } from "@/app/(dashboard)/dashboard/partner/_components/modal/create-partner";
import { DeletePartnerModal } from "@/app/(dashboard)/dashboard/partner/_components/modal/delete-partner";
import { EditPartnerModal } from "@/app/(dashboard)/dashboard/partner/_components/modal/edit-partner";
import { CreateProcessModal } from "@/app/(dashboard)/dashboard/process/_components/modal/create-process";
import { DeleteProcessModal } from "@/app/(dashboard)/dashboard/process/_components/modal/delete-process";
import { EditProcessModal } from "@/app/(dashboard)/dashboard/process/_components/modal/edit-process";
import { CreateReceiveModal } from "@/app/(dashboard)/dashboard/receive/_components/modal/create-receive";
import { DeleteReceiveModal } from "@/app/(dashboard)/dashboard/receive/_components/modal/delete-receive";
import { EditReceiveModal } from "@/app/(dashboard)/dashboard/receive/_components/modal/edit-receive";
import { CreateScheduleModal } from "@/app/(dashboard)/dashboard/schedule/schedule/modal/create-schedule";
import { DeleteScheduleModal } from "@/app/(dashboard)/dashboard/schedule/schedule/modal/delete-schedule";
import { EditScheduleModal } from "@/app/(dashboard)/dashboard/schedule/schedule/modal/edit-schedule";
import { CreateScheduleThumbModal } from "@/app/(dashboard)/dashboard/schedule/schedulethumb/_components/modal/create-schedule-thumb";
import { DeleteScheduleThumbModal } from "@/app/(dashboard)/dashboard/schedule/schedulethumb/_components/modal/delete-schedule";
import { EditScheduleThumbModal } from "@/app/(dashboard)/dashboard/schedule/schedulethumb/_components/modal/edit-schedule-thumb";
import { CreateSocialModal } from "@/app/(dashboard)/dashboard/socialnetwork/_components/modal/create-social";
import { DeleteSocialModal } from "@/app/(dashboard)/dashboard/socialnetwork/_components/modal/delete-social";
import { EditSocialModal } from "@/app/(dashboard)/dashboard/socialnetwork/_components/modal/edit-social";
import { CreateTargetModal } from "@/app/(dashboard)/dashboard/target/_components/target/modal/create-target";
import { DeleteTargetModal } from "@/app/(dashboard)/dashboard/target/_components/target/modal/delete-target";
import { EditTargetModal } from "@/app/(dashboard)/dashboard/target/_components/target/modal/edit-target";
import { CreateTargetThumbModal } from "@/app/(dashboard)/dashboard/target/_components/targetthumb/modal/create-target-thumb";
import { DeleteTargetThumbModal } from "@/app/(dashboard)/dashboard/target/_components/targetthumb/modal/delete-target-thumb";
import { EditTargetThumbModal } from "@/app/(dashboard)/dashboard/target/_components/targetthumb/modal/edit-target-thumb";
import { CreateStepModal } from "@/app/(dashboard)/dashboard/time/step/_components/modal/create-step";
import { DeleteStepModal } from "@/app/(dashboard)/dashboard/time/step/_components/modal/delete-step";
import { EditStepModal } from "@/app/(dashboard)/dashboard/time/step/_components/modal/edit-step";
import { CreateTimeModal } from "@/app/(dashboard)/dashboard/time/time/_components/modal/create-time";
import { DeleteTimeModal } from "@/app/(dashboard)/dashboard/time/time/_components/modal/delete-time";
import { EditTimeModal } from "@/app/(dashboard)/dashboard/time/time/_components/modal/edit-time";
import { CreateWhyChooseModal } from "@/app/(dashboard)/dashboard/whychoose/_components/modal/create-why-choose";
import { DeleteWhyChooseModal } from "@/app/(dashboard)/dashboard/whychoose/_components/modal/delete-why-choose";
import { EditWhyChooseModal } from "@/app/(dashboard)/dashboard/whychoose/_components/modal/edit-why-choose";
import { CreateWhyChooseProgramModal } from "@/app/(dashboard)/dashboard/whychooseprogram/_components/modal/create-why-choose-program";
import { DeleteWhyChooseProgramModal } from "@/app/(dashboard)/dashboard/whychooseprogram/_components/modal/delete-why-choose-program";
import { EditWhyChooseProgramModal } from "@/app/(dashboard)/dashboard/whychooseprogram/_components/modal/edit-why-choose-program";
import { CreateRegisterNowModal } from "@/components/form-register-now";
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

      <CreateWhyChooseProgramModal />
      <EditWhyChooseProgramModal />
      <DeleteWhyChooseProgramModal />

      <CreateReceiveModal />
      <EditReceiveModal />
      <DeleteReceiveModal />

      <CreateTargetThumbModal />
      <EditTargetThumbModal />
      <DeleteTargetThumbModal />

      <CreateTargetModal />
      <EditTargetModal />
      <DeleteTargetModal />

      <CreateInformationThumbModal />
      <EditInformationThumbModal />
      <DeleteInformationThumbModal />

      <CreateInformationProgramModal />
      <EditInformationProgramModal />
      <DeleteInformationProgramModal />

      <CreateTimeModal />
      <EditTimeModal />
      <DeleteTimeModal />

      <CreateStepModal />
      <EditStepModal />
      <DeleteStepModal />

      <CreateScheduleThumbModal />
      <EditScheduleThumbModal />
      <DeleteScheduleThumbModal />

      <CreateScheduleModal />
      <EditScheduleModal />
      <DeleteScheduleModal />

      <CreateSocialModal/>
      <EditSocialModal/>
      <DeleteSocialModal/>

      <CreateRegisterNowModal/>
    </>
  );
};
