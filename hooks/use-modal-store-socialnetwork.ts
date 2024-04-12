import { create } from "zustand";

export type ModalType = "createSocial" | "editSocial" | "deleteSocial";

export type DataModal = {
  id: string;
  zalo: string;
  facebook: string;
  tiktok: string;
  youtube: string;
  location: string;
};
interface ModalStore {
  type: ModalType | null;
  data: DataModal;
  isOpen: boolean;
  onOpen: (type: ModalType, data?: DataModal) => void;
  onClose: () => void;
}

export const useModalSocial = create<ModalStore>((set) => ({
  type: null,
  data: {} as DataModal,
  isOpen: false,
  onOpen: (type, data = {} as DataModal) => set({ isOpen: true, type, data }),
  onClose: () => set({ type: null, isOpen: false }),
}));
