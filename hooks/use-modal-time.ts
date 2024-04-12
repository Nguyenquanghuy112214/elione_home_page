import { create } from "zustand";

export type ModalType =
  | "createTime"
  | "editTime"
  | "deleteTime"

export type DataModal = {
  id: string;
  timestart: Date;
  timeend: Date;
  location: string;
  img: string;
};
interface ModalStore {
  type: ModalType | null;
  data: DataModal;
  isOpen: boolean;
  onOpen: (type: ModalType, data?: DataModal) => void;
  onClose: () => void;
}

export const useModalTime = create<ModalStore>((set) => ({
  type: null,
  data: {} as DataModal,
  isOpen: false,
  onOpen: (type, data = {} as DataModal) => set({ isOpen: true, type, data }),
  onClose: () => set({ type: null, isOpen: false }),
}));
