// MODULE
import styled from "styled-components";
// STYLED
const FooterBox = styled.div`
  padding: 2rem;
  border-top: 1px solid var(--gray);
  .copylight {
    font-size: 1.2rem;
  }
`;
export const Footer: React.FC = () => {
  return (
    <FooterBox className="flex flex_jc_c flex_ai_c">
      <div className="copylight">
        COPYRIGHT ⓒ 2024. Team-infomation. all right reserved.
      </div>
    </FooterBox>
  );
};
