import { create } from "zustand";

export type ModalType =
  | "createProcess"
  | "editProcess"
  | "deleteProcess"
  | "createExcellent"
  | "editExcellent"
  | "deleteExcellent"
  | "createPartner"
  | "editPartner"
  | "deletePartner"
  | "createExpert"
  | "editExpert"
  | "deleteExpert"
  | "createTargetThumb"
  | "editTargetThumb"
  | "deleteTargetThumb"
  | "createTarget"
  | "editTarget"
  | "deleteTarget"
  | "createInformationThumb"
  | "editInformationThumb"
  | "deleteInformationThumb"
  | "createInformationProgram"
  | "editInformationProgram"
  | "deleteInformationProgram"
  | "createScheduleThumb"
  | "editScheduleThumb"
  | "deleteScheduleThumb"
  | "createSchedule"
  | "editSchedule"
  | "deleteSchedule";

export type DataModal = {
  id: string;
  img: string;
  title: string;
};
interface ModalStore {
  type: ModalType | null;
  data: DataModal;
  isOpen: boolean;
  onOpen: (type: ModalType, data?: DataModal) => void;
  onClose: () => void;
}

export const useModalProcess = create<ModalStore>((set) => ({
  type: null,
  data: {} as DataModal,
  isOpen: false,
  onOpen: (type, data = {} as DataModal) => set({ isOpen: true, type, data }),
  onClose: () => set({ type: null, isOpen: false }),
}));
