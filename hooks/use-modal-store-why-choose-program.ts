import { create } from "zustand";

export type ModalType =
  | "createWhyChooseProgram"
  | "editWhyChooseProgram"
  | "deleteWhyChooseProgram";

export type DataModal = {
  id: string;
  img: string;
  subimg: string;
  title1: string;
  title2: string;
  title3: string;
  description: string;
};
interface ModalStore {
  type: ModalType | null;
  data: DataModal;
  isOpen: boolean;
  onOpen: (type: ModalType, data?: DataModal) => void;
  onClose: () => void;
}

export const useModalWhyChooseProgram = create<ModalStore>((set) => ({
  type: null,
  data: {} as DataModal,
  isOpen: false,
  onOpen: (type, data = {} as DataModal) => set({ isOpen: true, type, data }),
  onClose: () => set({ type: null, isOpen: false }),
}));
