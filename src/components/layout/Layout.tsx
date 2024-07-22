// MODULE
import { Outlet } from "react-router-dom";
import styled from "styled-components";
// COMPONENT
import Header from "../header";
import Footer from "../footer";
// STYLED
const Con = styled.div`
  max-width: 90%;
  margin: 5rem auto 6rem;
`;

export const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <Con>
        <Outlet />
      </Con>
      <Footer />
    </>
  );
};
