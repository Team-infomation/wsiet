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
  const maxNum = Math.floor(depth1.length);

  const SelectFood = depth1
    .filter((item) => item.key === Math.floor(Math.random() * (maxNum - 1) + 1))
    .map((result) => result.value)[0];

  useEffect(() => {
    const rouellet = Math.floor(Math.random() * (maxNum - 1) + 1);
    if (state.option1 === false) {
      setFoodType(depth1[rouellet].value);
    } else {
    }
  }, []);
  console.log("state", state);

  return (
    <div>
      {!state.option1 ? (
        <>오늘 밥은 {FoodType} 먹는걸로 하시죠!</>
      ) : (
        <>오늘 밥은 {FoodType}, 그 중에서</>
      )}
    </div>
  );
};
