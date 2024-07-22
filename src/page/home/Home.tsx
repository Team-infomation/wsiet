// MODULE
import styled from "styled-components";
// UTIL
import { setDate } from "../../util/date";
// STORE
import { Depth1Store, Depth2Store } from "../../store/commonStore";
// COMPONENT
import { Button } from "../../components/common/Button";
import { useEffect } from "react";
// STYLED
const OptionSection = styled.div`
  margin-top: 2rem;
  margin-bottom: 3rem;
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
  // STORE
  const { Option1, setOption1 }: any = Depth1Store();
  const { Option2, setOption2 }: any = Depth2Store();

  console.log(setDate(new Date()));

  useEffect(() => {}, [Option1]);
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
          <OptionTitle>2. 현재 위치 중심으로 식당도 찾아줘?!</OptionTitle>
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
      <Button txt={"뭐먹지?"} width={"100%"} height={5} />
    </>
  );
};
