// MODULE
import styled from "styled-components";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
// UTIL
// STORE
import { Depth1Store, Depth2Store, Depth3Store } from "../../store/commonStore";
import { LatLonStore, userLocationStore } from "../../store/resultStore";
// COMPONENT
import { Button } from "../../components/common/Button";
import { getLocationName } from "../../api/LocationName";
// STYLED
const OptionSection = styled.div`
  margin-top: 2rem;
  margin-bottom: 3rem;
  .alert_message {
    font-size: 1.2rem;
    font-weight: 900;
    color: var(--light-red);
  }
`;
const OptionTitle = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
`;
const RadioButton = styled.div`
  width: 100%;
  margin-top: 1rem;
  input {
    position: absolute;
    width: 0;
    height: 0;
    overflow: hidden;
    opacity: 0;
    visibility: hidden;
    ~ label {
      width: inherit;
      padding: 1rem 0;
      border: 1px solid var(--gray);
      font-size: 1.4rem;
      font-weight: 600;
      transition: all 0.3s;
    }
    &:checked ~ label {
      background: var(--bright-blue);
      border: 1px solid var(--bright-blue);
      color: var(--white);
    }
  }
`;
export const Home: React.FC = () => {
  const navigate = useNavigate();
  // STORE
  const { Option1, setOption1 }: any = Depth1Store();
  const { Option2, setOption2 }: any = Depth2Store();
  const { Option3, setOption3 }: any = Depth3Store();
  const { lat, setLat, lon, setLon }: any = LatLonStore();
  const { level3, setLevel3, fullLocation, setFullLocation }: any =
    userLocationStore();

  const { data, isLoading } = useQuery({
    queryKey: ["location", lon, lat],
    queryFn: () =>
      getLocationName(lon, lat)
        .then((response: any) => response)
        .catch((error: any) => error),
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });

  const handleRouletteFood = () => {
    navigate("/result", {
      state: { option1: Option1, option2: Option2, option3: Option3 },
    });
  };

  useEffect(() => {}, [Option1, Option2]);
  useEffect(() => {
    if (Option3) {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          let userLat = position.coords.latitude;
          let userLon = position.coords.longitude;
          setLat(userLat);
          setLon(userLon);
        });
        console.log(data);
        // if (!isLoading && data.data.response.status == "OK") {
        //   const level2Name =
        //     data.data.response.result[0].structure.level2.split(/\s/g)[0];
        //   setLevel3(level2Name);
        //   setFullLocation(data.data.response.result[0].text);
        // }
      } else {
        console.log("geolocation을 사용할 수 없어요.");
      }
    }
  }, [Option3, isLoading]);
  return (
    <>
      <div>오늘 뭐먹을지 고민할 시간에 랜덤으로 정해버리자!</div>
      <OptionSection>
        <OptionTitle>1. 어떤요리로 먹을지만 결정할까?</OptionTitle>
        <div className="flex flex_dir_c flex_jc_sb flex_ai_c">
          <RadioButton className="flex flex_jc_c flex_ai_c">
            <input type="radio" name="depth1" id="depth1false" defaultChecked />
            <label
              htmlFor="depth1false"
              className="flex flex_jc_c flex_ai_c"
              onClick={() => setOption1(false)}
            >
              그냥 어떤 종류까지만 정해줘!
            </label>
          </RadioButton>
          <RadioButton className="flex flex_jc_c flex_ai_c">
            <input type="radio" name="depth1" id="depth1true" />
            <label
              htmlFor="depth1true"
              className="flex flex_jc_c flex_ai_c"
              onClick={() => setOption1(true)}
            >
              간단하게 음식 종류까지 정해줘!
            </label>
          </RadioButton>
        </div>
      </OptionSection>
      {Option1 && (
        <OptionSection>
          <OptionTitle>2. 어떤 종류의 요리까지 정해줄까?! </OptionTitle>
          <div className="flex flex_dir_c flex_jc_sb flex_ai_c">
            <RadioButton className="flex flex_jc_c flex_ai_c">
              <input
                type="radio"
                name="depth2"
                id="depth2true"
                defaultChecked
              />
              <label
                htmlFor="depth2true"
                className="flex flex_jc_c flex_ai_c"
                onClick={() => setOption2(false)}
              >
                아니!
              </label>
            </RadioButton>
            <RadioButton className="flex flex_jc_c flex_ai_c">
              <input type="radio" name="depth2" id="depth2false" />
              <label
                htmlFor="depth2false"
                className="flex flex_jc_c flex_ai_c"
                onClick={() => setOption2(true)}
              >
                응!
              </label>
            </RadioButton>
          </div>
        </OptionSection>
      )}
      {Option1 && Option2 && (
        <OptionSection>
          <OptionTitle>3.(예정) 근처의 식당도 한번 알아봐줄까?!</OptionTitle>
          <span className="alert_message">
            ※사용자의 실시간 위치기반 사용동의가 필요합니다.
          </span>
          <span>사실 동의만 받고 아직 API 연동 못했습니다...</span>
          <div className="flex flex_dir_c flex_jc_sb flex_ai_c">
            <RadioButton className="flex flex_jc_c flex_ai_c">
              <input
                type="radio"
                name="depth3"
                id="depth3true"
                defaultChecked
              />
              <label
                htmlFor="depth3true"
                className="flex flex_jc_c flex_ai_c"
                onClick={() => setOption3(false)}
              >
                그정도까지는 괜찮을듯한데...
              </label>
            </RadioButton>
            <RadioButton className="flex flex_jc_c flex_ai_c">
              <input type="radio" name="depth3" id="depth3false" />
              <label
                htmlFor="depth3false"
                className="flex flex_jc_c flex_ai_c"
                onClick={() => setOption3(true)}
              >
                매우 좋아!
              </label>
            </RadioButton>
          </div>
        </OptionSection>
      )}
      <Button
        txt={"뭐먹지?"}
        width={"100%"}
        height={5}
        event={() => handleRouletteFood()}
      />
    </>
  );
};
