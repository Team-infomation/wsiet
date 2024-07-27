// MODULE
import { Outlet } from "react-router-dom";
import styled from "styled-components";
// COMPONENT
import Header from "../header";
import Footer from "../footer";
import { ModalSection } from "../modal/ModalSection";
// STORE
import { ModalStore } from "../../store/commonStore";
// STYLED
const Con = styled.div`
  max-width: 90%;
  margin: 5rem auto 6rem;
`;
const QuickButton = styled.div`
  width: 4rem;
  height: 4rem;
  bottom: 15%;
  right: 5%;
  border-radius: 50%;
  background: var(--white);
  box-shadow: 1px 3px 3px rgba(0, 0, 0, 0.5);
  font-size: 2.5rem;
  font-weight: 900;
`;

export const Layout: React.FC = () => {
  const { Modal, setModal } = ModalStore();
  const handleOpenQuickGuide = () => {
    setModal(true);
    document.body.style.overflow = "hidden";
  };
  return (
    <>
      {Modal && <ModalSection />}
      <Header />
      <Con>
        <Outlet />
      </Con>
      <QuickButton
        className="fixed flex flex_jc_c flex_ai_c"
        onClick={() => handleOpenQuickGuide()}
      >
        ?
      </QuickButton>
      <Footer />
    </>
  );
};
