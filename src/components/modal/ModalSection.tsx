// MODULE
import styled from "styled-components";
import { Link } from "react-router-dom";
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
  .modal_tit {
    font-size: 2rem;
    font-weight: 700;
  }
  ul {
    margin-left: 2rem;
    li {
      margin-bottom: 1.5rem;
      font-size: 1.4rem;
      word-break: keep-all;
      list-style: disc;
      &::marker {
        color: var(--light-blue);
      }
      a {
        color: var(--light-blue);
      }
    }
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
        <div className="modal_header flex flex_jc_c flex_ai_c mar_bot_20">
          <img
            src={`${process.env.PUBLIC_URL}/asset/image/Logo.svg`}
            alt=""
            width={30}
            height={30}
          />
          <div className="modal_tit flex flex_jc_c">오늘 뭐먹지?</div>
        </div>
        <ul>
          <li>선택장애있는 제가 도저히 고를 자신이 없어 만들었습니다.</li>
          <li>음식선별 기준은 지극히 개인적으로 선별하였습니다.</li>
          <li>
            식당 목록은 경기데이터드림(
            <Link
              to={"https://data.gg.go.kr/portal/mainPage.do"}
              target="_blank"
            >
              https://data.gg.go.kr/portal/mainPage.do
            </Link>
            ) 의 API를 사용하였습니다.
          </li>
          <li>카카오맵 API를 사용하고싶었지만 일정횟수 이상은 유료인지라...</li>
        </ul>
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
