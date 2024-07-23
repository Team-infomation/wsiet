// MODULE
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
// STORE
import { ResultStore } from "../../store/resultStore";
// JSON
import FoodJson from "../../json/FoodType.json";
// STYLED
export const Result: React.FC = () => {
  const { state } = useLocation();
  const { FoodType, setFoodType }: any = ResultStore();

  const depth1 = FoodJson.type1;
  const depth2 = FoodJson.type2;
  const maxNum = Math.floor(depth1.length);

  const SelectFood = depth1
    .filter((item) => item.key === Math.floor(Math.random() * (maxNum - 1) + 1))
    .map((result) => result.value)[0];

  useEffect(() => {
    const rouellet = Math.floor(Math.random() * (maxNum - 1) + 1);
    console.log(rouellet);
    setFoodType(depth1[rouellet].value);
  }, []);

  return <div>{FoodType}</div>;
};
