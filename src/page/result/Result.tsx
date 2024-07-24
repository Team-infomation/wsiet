// MODULE
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
// STORE
import { ResultStore } from "../../store/resultStore";
// JSON
import FoodJson from "../../json/FoodType.json";
import KoreanFood from "../../json/Korean.json";
import AmericanFood from "../../json/America.json";
import ChinaFood from "../../json/China.json";
import JapanFood from "../../json/Japan.json";
// STYLED
export const Result: React.FC = () => {
  const { state } = useLocation();
  const { FoodType, setFoodType, Depth2FoodType, setDepth2FoodType }: any =
    ResultStore();

  const depth1 = FoodJson.type1;
  const maxNum = depth1.length;
  const rouellet = Math.floor(Math.random() * maxNum);

  const getRandomFood = (items: any[]) => {
    const maxNum = items.length;
    return items[Math.floor(Math.random() * maxNum)].value;
  };

  useEffect(() => {
    const selectedFoodType = depth1[rouellet].value;
    setFoodType(selectedFoodType);

    if (state.option1) {
      let depth2FoodType = "";

      if (selectedFoodType === "한식") {
        depth2FoodType = getRandomFood(KoreanFood.koreanFood);
      } else if (selectedFoodType === "양식") {
        depth2FoodType = getRandomFood(AmericanFood.americaFood);
      } else if (selectedFoodType === "아시아") {
        depth2FoodType = getRandomFood(AmericanFood.americaFood);
      } else if (selectedFoodType === "중식") {
        depth2FoodType = getRandomFood(ChinaFood.chinaFood);
      } else if (selectedFoodType === "일식") {
        depth2FoodType = getRandomFood(JapanFood.japanFood);
      }

      setDepth2FoodType(depth2FoodType);
    }
  }, []);
  return (
    <div>
      {!state.option1 ? (
        <>오늘 밥은 {FoodType} 먹는걸로 하시죠!</>
      ) : (
        <>
          오늘 밥은 {FoodType}, 그 중에서 바로 {Depth2FoodType}
        </>
      )}
    </div>
  );
};
