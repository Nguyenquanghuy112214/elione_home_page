import { create } from "zustand";

export type ModalType = "createStep" | "editStep" | "deleteStep";

export type DataModal = {
  id: string;
  img: string;
  title: string;
  subtitle: string;
  description: string;
};
interface ModalStore {
  type: ModalType | null;
  data: DataModal;
  isOpen: boolean;
  onOpen: (type: ModalType, data?: DataModal) => void;
  onClose: () => void;
}

export const useModalStep = create<ModalStore>((set) => ({
  type: null,
  data: {} as DataModal,
  isOpen: false,
  onOpen: (type, data = {} as DataModal) => set({ isOpen: true, type, data }),
  onClose: () => set({ type: null, isOpen: false }),
}));
