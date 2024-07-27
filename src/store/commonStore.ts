// MODULE
import create from "zustand";

// TYPE
interface Props {
  Option1?: boolean;
  setOption1?: (option: boolean) => void;
  Option2?: boolean;
  setOption2?: (option: boolean) => void;
  Option3?: boolean;
  setOption3?: (option: boolean) => void;
}
interface ModalProps {
  Modal: boolean;
  setModal: (modalState: boolean) => void;
}

export const Depth1Store = create<Props>((set) => ({
  Option1: false,
  setOption1: (option: boolean) => set({ Option1: option }),
}));

export const Depth2Store = create<Props>((set) => ({
  Option2: false,
  setOption2: (option: boolean) => set({ Option2: option }),
}));

export const Depth3Store = create<Props>((set) => ({
  Option3: false,
  setOption3: (option: boolean) => set({ Option3: option }),
}));

export const ModalStore = create<ModalProps>((set) => ({
  Modal: false,
  setModal: (modalState: boolean) => set({ Modal: modalState }),
}));
