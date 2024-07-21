// MODULE
import styled from "styled-components";
// UTIL
import { setDate } from "../../util/date";
// STORE
import { Depth1Store } from "../../store/commonStore";
// COMPONENT
import { Button } from "../../components/common/Button";
// STYLED
const OptionTitle = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
`;
const RadioButton = styled.div`
  width: 100%;
  margin-top: 1rem;
  input {
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
  const { Option, setOption } = Depth1Store();

  console.log(setDate(new Date()));
  console.log(Option, setOption);
  return (
    <>
      <div>오늘 뭐먹을지 고민할 시간에 랜덤으로 정해버리자!</div>
      <OptionTitle>1. 어떤요리로 먹을지만 결정할까?</OptionTitle>
      <div className="flex flex_dir_c flex_jc_sb flex_ai_c">
        <RadioButton className="flex flex_jc_c flex_ai_c">
          <input type="radio" name="depth1" id="depth1true" defaultChecked />
          <label htmlFor="depth1true" className="flex flex_jc_c flex_ai_c">
            간단하게 음식 종류까지 정해줘!
          </label>
        </RadioButton>
        <RadioButton className="flex flex_jc_c flex_ai_c">
          <input type="radio" name="depth1" id="depth1false" />
          <label htmlFor="depth1false" className="flex flex_jc_c flex_ai_c">
            그냥 어떤 종류까지만 정해줘!
          </label>
        </RadioButton>
      </div>
      <Button txt={"뭐먹지?"} width={"100%"} height={3} />
    </>
  );
};
