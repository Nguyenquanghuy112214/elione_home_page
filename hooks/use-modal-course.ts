import { create } from "zustand";

export type ModalType = "createCourse" | "editCourse" | "deleteCourse";

export type DataModal = {
  id: string;
  img: string;
  video: string;
  title: string;
  timestart: string;
  countclass: string;
  countstudent: string;
  timelearn: string;
  calendar: string;
};
interface ModalStore {
  type: ModalType | null;
  data: DataModal;
  isOpen: boolean;
  onOpen: (type: ModalType, data?: DataModal) => void;
  onClose: () => void;
}

export const useModalCourse = create<ModalStore>((set) => ({
  type: null,
  data: {} as DataModal,
  isOpen: false,
  onOpen: (type, data = {} as DataModal) => set({ isOpen: true, type, data }),
  onClose: () => set({ type: null, isOpen: false }),
}));
