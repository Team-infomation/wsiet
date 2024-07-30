// MODULE
import { useEffect, useLayoutEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
// API
import { getFoodStoreInfo } from "../../api/FoodStore";
// UTIL
import { setDate } from "../../util/date";
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
import AsianFood from "../../json/Asia.json";
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
const RestaurantList = styled.ul``;
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

  const getRandomFoodType = (items: any[]) => {
    let maxNum = items.length;
    return items[Math.floor(Math.random() * maxNum)];
  };

  const getRandomFood = (items: any[]) => {
    let maxNum = items.length;
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
      setDepth2Id(Depth2FoodType.id);

      if (selectedFoodType.key === 1) {
        depth2FoodType = getRandomFoodType(KoreanFood.koreanFood);
        if (state.option2) {
          depth3Food = getRandomFood(depth2FoodType.menu);
        }
      } else if (selectedFoodType.key === 2) {
        depth2FoodType = getRandomFoodType(AmericanFood.americanFood);
        if (state.option2) {
          depth3Food = getRandomFood(depth2FoodType.menu);
        }
      } else if (selectedFoodType.key === 3) {
        depth2FoodType = getRandomFoodType(AsianFood.asiaFood);
        if (state.option2) {
          depth3Food = getRandomFood(depth2FoodType.menu);
        }
      } else if (selectedFoodType.key === 4) {
        depth2FoodType = getRandomFoodType(ChinaFood.chinaFood);
        if (state.option2) {
          depth3Food = getRandomFood(depth2FoodType.menu);
        }
      } else if (selectedFoodType.key === 5) {
        depth2FoodType = getRandomFoodType(JapanFood.japanFood);
        if (state.option2) {
          depth3Food = getRandomFood(depth2FoodType.menu);
        }
      }

      setDepth2FoodType(depth2FoodType);
      setDepth3FoodType(depth3Food);
    }
  }, [FoodType]);
  console.log("시간", setDate(new Date()));
  return (
    <>
      {!dummyLoad ? (
        <DummyLoadFrame className="fixed">
          사실 로딩 걸릴 일이 없지만 왠지 있어보이고 싶어서 넣었습니다.
        </DummyLoadFrame>
      ) : (
        <div>
          {!state.option1 ? (
            <ResultTitle className="flex flex_dir_c flex_jc_c flex_ai_c">
              오늘 밥은 {FoodType.value}!<span>{FoodType.subText}</span>
            </ResultTitle>
          ) : FoodType.key === 6 ? (
            <>
              <span>오늘 밥은 {FoodType.value}!</span>
              <span>{FoodType.subText}</span>
            </>
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

          {state.option3 && (
            <div>
              <div>
                현재 사용자 위치 기준으로 반경 5km 이내에 있는 식당 목록입니다!
              </div>
              <div>현재 사용자 위치 : </div>
              <div>
                식당 목록은 경기데이터드림의 안심식당정보 목록을 사용하고
                있습니다.
              </div>
              <RestaurantList></RestaurantList>
            </div>
          )}
        </div>
      )}
    </>
  );
};
