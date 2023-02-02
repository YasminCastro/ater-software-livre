import styled from "styled-components";

import Header from "@/components/Global/Header";
import Footer from "../Footer";

import GlobalStyle from "@/styles/GlobalStyles";

const Layout: React.FC<any> = ({ children }): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      {/* <VerticalLine /> */}
      <Header />
      <MainContainer>{children}</MainContainer>
      <Footer />
    </>
  );
};

const MainContainer = styled.main`
  padding-top: 56px;
  background-image: linear-gradient(
    120deg,
    #000000,
    #040b10,
    #08151f,
    #0d202f,
    #112a3f,
    #15354e,
    #19405e,
    #22557d,
    #22557d,
    #19405e,
    #15354e,
    #112a3f,
    #0d202f,
    #08151f,
    #040b10,
    #000000
  );
`;

const VerticalLine = styled.div`
  width: 1px;
  align-self: stretch;
  background-color: white;
  height: 3802px;
  left: 50px;
  position: absolute;
  z-index: 90;

  /* @media (max-width: 1367px) {
    height: 3826px;
  }

  @media (max-width: 1347px) {
    height: 3850px;
  }

  @media (max-width: 1333px) {
    height: 3874px;
  }

  @media (max-width: 1317px) {
    height: 3897px;
  }

  @media (max-width: 1300px) {
    height: 3734px;
  }

  @media (max-width: 1239px) {
    height: 3760px;
  }

  @media (max-width: 1287px) {
    height: 3784px;
  }

  @media (max-width: 1100px) {
    height: 5601px;
  }

  @media (max-width: 1000px) {
    height: 5129px;
  }

  @media (max-width: 880px) {
    left: 30px;
    height: 5280px;
  }

  @media (max-width: 810px) {
    display: none;
  } */
`;

export default Layout;
