// MODULE
import styled from "styled-components";
// STYLED
const FooterSection = styled.div`
  width: 100vw;
  height: 6rem;
  bottom: 0;
  padding: 2rem;
  background: var(--white);
  border-top: 1px solid var(--gray);
  .copylight {
    font-size: 1.2rem;
  }
`;
export const Footer: React.FC = () => {
  return (
    <FooterSection className="fixed flex flex_jc_c flex_ai_c">
      <div className="copylight">
        COPYRIGHT ⓒ 2024. Team-infomation. all right reserved.
      </div>
    </FooterSection>
  );
};
