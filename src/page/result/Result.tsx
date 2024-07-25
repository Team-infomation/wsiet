// MODULE
import { useEffect, useLayoutEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
// STORE
import { Depth1Store, Depth2Store, Depth3Store } from "../../store/commonStore";
import { ResultStore } from "../../store/resultStore";
// COMPONENT
import { Button } from "../../components/common/Button";
// JSON
import FoodJson from "../../json/FoodType.json";
import KoreanFood from "../../json/Korean.json";
import AmericanFood from "../../json/America.json";
import ChinaFood from "../../json/China.json";
import JapanFood from "../../json/Japan.json";
// STYLED
const DummyLoadFrame = styled.div``;
const ResultTitle = styled.div`
  padding-top: 2rem;
  font-size: 2rem;
  font-weight: 700;
  word-break: keep-all;
  > div {
    font-size: 1.8rem;
    font-weight: 600;
  }
`;
// PROPS
type Depth2Props = {
  id?: number;
  value?: string;
  menu?: any[];
};
export const Result: React.FC = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  // STORE
  const {
    FoodType,
    setFoodType,
    Depth2FoodType,
    setDepth2FoodType,
    Depth3FoodType,
    setDepth3FoodType,
  }: any = ResultStore();
  const { setOption1 }: any = Depth1Store();
  const { setOption2 }: any = Depth2Store();
  const { setOption3 }: any = Depth3Store();

  const [dummyLoad, setDummyLoad] = useState<boolean>(false);

  const depth1 = FoodJson.type1;
  const maxNum = depth1.length;
  const rouellet = Math.floor(Math.random() * maxNum);

  const getRandomFood = (items: any[]) => {
    console.log("items", items);
    const maxNum = items.length;
    return items[Math.floor(Math.random() * maxNum)];
  };

  const handleRestart = () => {
    setOption1(false);
    setOption2(false);
    setOption3(false);
    navigate("/");
  };

  useLayoutEffect(() => {
    setTimeout(() => {
      setDummyLoad(true);
    }, 0);
  }, []);
  useEffect(() => {
    const selectedFoodType = depth1[rouellet];
    setFoodType(selectedFoodType);

    if (state.option1) {
      let depth2FoodType: Depth2Props | any = {};
      let depth3Food: any = {};

      if (selectedFoodType.key === 1) {
        depth2FoodType = getRandomFood(KoreanFood.koreanFood);
        if (state.option2) {
          depth3Food = getRandomFood(
            KoreanFood.koreanFood[depth2FoodType.id].menu
          );
        }
      } else if (selectedFoodType.key === 2) {
        depth2FoodType = getRandomFood(AmericanFood.americanFood);
        if (state.option2) {
          depth3Food = getRandomFood(
            AmericanFood.americanFood[depth2FoodType.id].menu
          );
        }
      } else if (selectedFoodType.key === 3) {
        depth2FoodType = getRandomFood(AmericanFood.americanFood);
        if (state.option2) {
          depth3Food = getRandomFood(
            AmericanFood.americanFood[depth2FoodType.id].menu
          );
        }
      } else if (selectedFoodType.key === 4) {
        depth2FoodType = getRandomFood(ChinaFood.chinaFood);
        if (state.option2) {
          depth3Food = getRandomFood(
            ChinaFood.chinaFood[depth2FoodType.id].menu
          );
        }
      } else if (selectedFoodType.key === 5) {
        depth2FoodType = getRandomFood(JapanFood.japanFood);
        if (state.option2) {
          depth3Food = getRandomFood(
            JapanFood.japanFood[depth2FoodType.id].menu
          );
        }
      }

      setDepth2FoodType(depth2FoodType);
      setDepth3FoodType(depth3Food);
      console.log("Depth3FoodType", Depth3FoodType);
    }
  }, []);
  return (
    <>
      {!dummyLoad ? (
        <DummyLoadFrame className="fixed">
          사실 로딩 걸릴 일이 없지만 왠지 있어보이고 싶어서 넣었습니다.
        </DummyLoadFrame>
      ) : (
        <div>
          {!state.option1 ? (
            <ResultTitle>
              오늘 밥은 {FoodType.value} 종류 먹는걸로 하시죠!
            </ResultTitle>
          ) : (
            <ResultTitle className="flex flex_dir_c flex_jc_c flex_ai_c">
              오늘 밥은 {FoodType.value}!
              {FoodType.key !== 6 ? (
                <>
                  <div>그 중에서 {Depth2FoodType.value} 종류!</div>
                  {state.option2 && <div>{Depth3FoodType.value}</div>}
                </>
              ) : (
                <div>빨리 편의점을 털어버리세요.</div>
              )}
            </ResultTitle>
          )}
          <Button
            txt={"다시 뽑기?"}
            width={"100%"}
            height={5}
            event={() => handleRestart()}
          />
        </div>
      )}
    </>
  );
};
