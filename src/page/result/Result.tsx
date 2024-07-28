// MODULE
import { useEffect, useLayoutEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
// API
import { getFoodStoreInfo } from "../../api/FoodStore";
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
  const [depth2Id, setDepth2Id] = useState<number>(0);

  const depth1 = FoodJson.type1;
  const maxNum = depth1.length;
  const rouellet = Math.floor(Math.random() * maxNum);

  const getRandomFood = (items: any[]) => {
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
    }, 3000);
  }, []);
  useEffect(() => {
    const selectedFoodType = depth1[rouellet];
    setFoodType(selectedFoodType);
    if (state.option1) {
      let depth2FoodType: Depth2Props | any = {};
      let depth3Food: any = {};
      setDepth2Id(Depth2FoodType.id);

      if (selectedFoodType.key === 1) {
        depth2FoodType = getRandomFood(KoreanFood.koreanFood);
        if (state.option2) {
          depth3Food = getRandomFood(KoreanFood.koreanFood[depth2Id].menu);
        }
      } else if (selectedFoodType.key === 2) {
        depth2FoodType = getRandomFood(AmericanFood.americanFood);
        if (state.option2) {
          depth3Food = getRandomFood(AmericanFood.americanFood[depth2Id].menu);
        }
      } else if (selectedFoodType.key === 3) {
        depth2FoodType = getRandomFood(AmericanFood.americanFood);
        if (state.option2) {
          depth3Food = getRandomFood(AmericanFood.americanFood[depth2Id].menu);
        }
      } else if (selectedFoodType.key === 4) {
        depth2FoodType = getRandomFood(ChinaFood.chinaFood);
        if (state.option2) {
          depth3Food = getRandomFood(ChinaFood.chinaFood[depth2Id].menu);
        }
      } else if (selectedFoodType.key === 5) {
        depth2FoodType = getRandomFood(JapanFood.japanFood);
        if (state.option2) {
          depth3Food = getRandomFood(JapanFood.japanFood[depth2Id].menu);
        }
      }

      setDepth2FoodType(depth2FoodType);
      setDepth3FoodType(depth3Food);
    }
  }, [FoodType]);
  return (
    <>
      {!dummyLoad ? (
        <DummyLoadFrame className="fixed">
          사실 로딩 걸릴 일이 없지만 왠지 있어보이고 싶어서 넣었습니다.
        </DummyLoadFrame>
      ) : (
        <div>
          {!state.option1 ? (
            <ResultTitle className="flex flex_dir_c">
              <span>오늘 밥은 {FoodType.value}!</span>
              <span>{FoodType.subText}</span>
            </ResultTitle>
          ) : (
            <ResultTitle className="flex flex_dir_c flex_jc_c flex_ai_c">
              오늘 밥은 {FoodType.value}!
              {state.option1 && <div>그중에서 {Depth2FoodType.value}!</div>}
              {state.option2 && <div>그중에서 {Depth3FoodType.value}!</div>}
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
