// MODULE
import styled from "styled-components";
// COMPONENT
import { Button } from "../common/Button";
// STORE
import { ModalStore } from "../../store/commonStore";
// JSON
// TYPE
// STYLED
const Modalbackground = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  &.active {
    z-index: 19;
  }
`;
const ModalFrame = styled.div`
  width: 90%;
  top: 25%;
  left: 5%;
  padding: 1.5rem;
  background: var(--white);
  &.active {
    z-index: 20;
  }
`;

export const ModalSection: React.FC = () => {
  const { Modal, setModal } = ModalStore();
  const handleCloseQuickGuide = () => {
    setModal(false);
    document.body.style.overflow = "";
  };
  return (
    <>
      <Modalbackground className={`fixed ${Modal && "active"}`} />
      <ModalFrame className={`fixed ${Modal && "active"}`}>
        <Button
          txt={"확인"}
          width={"100%"}
          height={4.5}
          event={handleCloseQuickGuide}
        />
      </ModalFrame>
    </>
  );
};
