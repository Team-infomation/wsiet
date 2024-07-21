import create from "zustand";

// TYPE
interface Props {
  Option: boolean;
  setOption: (option: boolean) => void;
}

export const Depth1Store = create<Props>((set) => ({
  Option: false,
  setOption: (option: boolean) => set({ Option: option }),
}));
