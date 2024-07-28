// MODULE
import create from "zustand";

// TYPE
interface Props {
  FoodType: FoodTypeProps;
  setFoodType: (FoodType: object) => void;
  Depth2FoodType?: Depth2FoodTypeProps;
  setDepth2FoodType?: (FoodType: object) => void;
  Depth3FoodType?: Depth3FoodTypeProps;
  setDepth3FoodType?: (FoodType: object) => void;
}
type LatLonTypeProps = {
  lat: number;
  setLat: (lat: number) => void;
  lon: number;
  setLon: (lon: number) => void;
};
type FoodTypeProps = {
  key?: number;
  value?: string;
};
type Depth2FoodTypeProps = {
  id?: number;
  value?: string;
  menu?: any[];
};
type Depth3FoodTypeProps = {
  id?: number;
  value?: string;
};

export const ResultStore = create<Props>((set) => ({
  FoodType: {},
  setFoodType: (foodType: object) => set({ FoodType: foodType }),
  Depth2FoodType: {},
  setDepth2FoodType: (foodType: object) => set({ Depth2FoodType: foodType }),
  Depth3FoodType: {},
  setDepth3FoodType: (foodType: object) => set({ Depth3FoodType: foodType }),
}));
export const LatLonStore = create<LatLonTypeProps>((set) => ({
  lat: 0,
  setLat: (latitude: number) => set({ lat: latitude }),
  lon: 0,
  setLon: (longitude: number) => set({ lon: longitude }),
}));
