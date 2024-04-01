import { create } from "zustand";

export type ModalType = "createContact" | "editContact" | "deleteContact";

export type DataModal = {
  id: string;
  logo: string;
  sublogo: string;
  slogan: string;
  namecompany: string;
  addresscompany: string;
  namecenter: string;
  addresscenter: string;
  mail: string;
  phone: string;
};
interface ModalStore {
  type: ModalType | null;
  data: DataModal;
  isOpen: boolean;
  onOpen: (type: ModalType, data?: DataModal) => void;
  onClose: () => void;
}

export const useModalContact = create<ModalStore>((set) => ({
  type: null,
  data: {} as DataModal,
  isOpen: false,
  onOpen: (type, data = {} as DataModal) => set({ isOpen: true, type, data }),
  onClose: () => set({ type: null, isOpen: false }),
}));
