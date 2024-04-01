import { create } from "zustand";

export type ModalType = "createEvaluate" | "editEvaluate" | "deleteEvaluate";

export type DataModal = {
  id: string;
  img: string;
  video: string;
  title: string;
  star: string;
  parentstudent: string;
  achievements: string;
  class_g: string;
};
interface ModalStore {
  type: ModalType | null;
  data: DataModal;
  isOpen: boolean;
  onOpen: (type: ModalType, data?: DataModal) => void;
  onClose: () => void;
}

export const useModalEvaluate = create<ModalStore>((set) => ({
  type: null,
  data: {} as DataModal,
  isOpen: false,
  onOpen: (type, data = {} as DataModal) => set({ isOpen: true, type, data }),
  onClose: () => set({ type: null, isOpen: false }),
}));
