// /MODULE
import styled from "styled-components";
// STYLED
const HeaderSection = styled.div`
  width: 100vw;
  top: 0;
  height: 5rem;
  background: var(--white);
  border-bottom: 1px solid var(--gray);
`;
export const Header: React.FC = () => {
  return (
    <HeaderSection className="fixed flex flex_jc_c flex_ai_c">
      <img
        src={`${process.env.PUBLIC_URL}/asset/image/Logo.svg`}
        alt=""
        width={40}
        height={40}
      />
      <div>오늘 뭐먹지?</div>
    </HeaderSection>
  );
};
