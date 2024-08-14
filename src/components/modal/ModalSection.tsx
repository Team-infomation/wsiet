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
            위치 기반의 경우 geolocation을 통하여 사용자의 위도·경도값을 받아온
            후 V-WORLD 디지털트윈국토 의{" "}
            <Link
              to={"https://www.vworld.kr/dev/v4dv_geocoderguide2_s001.do"}
              target="_blank"
            >
              Geocoder API 2.0 레퍼런스
            </Link>{" "}
            를 통하여 사용자가 현재 위치한 지역의 동 이름을 받아오고 있습니다.
          </li>
          <li>
            식당 목록은 경기데이터드림(
            <Link
              to={
                "https://data.gg.go.kr/portal/data/service/selectServicePage.do?page=1&sortColumn=&sortDirection=&infId=YBSSB8F816M3B966AB6K30423820&infSeq=1&searchWord=%EC%8B%9D%EB%8B%B9"
              }
              target="_blank"
            >
              https://data.gg.go.kr/portal/mainPage.do
            </Link>
            ) 의 안심식당 정보 API를 사용하였습니다.
          </li>
          <li>추후 전국단위의 공공데이터 활용 예정입니다.</li>
          {/* <li>카카오맵 API를 사용하고싶었지만 일정횟수 이상은 유료인지라...</li> */}
        </ul>
        <div className="modal_tit flex flex_jc_c flex_ai_c">
          이런거 왜 만들었는지 따지러 가기
        </div>
        <ul>
          <li>
            <Link
              to={"https://github.com/Team-infomation/wsiet"}
              target="_blank"
            >
              Project Repository
            </Link>
          </li>
          <li>
            <Link to={"https://github.com/kkt9102"} target="_blank">
              담당자 Github
            </Link>
          </li>
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
