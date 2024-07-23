// MODULE
import create from "zustand";

// TYPE
interface Props {
  FoodType: string;
  setFoodType: (FoodType: string) => void;
  Depth2FoodType?: string;
  setDepth2FoodType?: (FoodType: string) => void;
}
export const ResultStore = create<Props>((set) => ({
  FoodType: "",
  setFoodType: (foodType: string) => set({ FoodType: foodType }),
  Depth2FoodType: "",
  setDepth2FoodType: (foodType: string) => set({ Depth2FoodType: foodType }),
}));
