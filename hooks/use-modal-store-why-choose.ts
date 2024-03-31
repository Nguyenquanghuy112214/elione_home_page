import { create } from "zustand";

export type ModalType = "createWhyChoose"|"editWhyChoose"|"deleteWhyChoose";

export type DataModal = {
  id: string;
  img: string;
  title: string;
  description: string;
};
interface ModalStore {
  type: ModalType | null;
  data: DataModal;
  isOpen: boolean;
  onOpen: (type: ModalType, data?: DataModal) => void;
  onClose: () => void;
}

export const useModalWhyChoose = create<ModalStore>((set) => ({
  type: null,
  data: {} as DataModal,
  isOpen: false,
  onOpen: (type, data = {} as DataModal) => set({ isOpen: true, type, data }),
  onClose: () => set({ type: null, isOpen: false }),
}));
