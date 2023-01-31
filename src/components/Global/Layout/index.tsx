import styled from "styled-components";

import Header from "@/components/Global/Header";
import Footer from "../Footer";

import GlobalStyle from "@/styles/GlobalStyles";

const Layout: React.FC<any> = ({ children }): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <VerticalLine />
      <MetodologiaHorizontalLine />
      <Header />
      <MainContainer>{children}</MainContainer>
      <Footer />
    </>
  );
};

const MainContainer = styled.main`
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
  width: 1px; /* Line width */
  background-color: white; /* Line color */
  height: 2394px; /* Override in-line if you want specific height. */
  float: left;
  left: 100px;
  position: absolute;
  z-index: 90;
`;

const MetodologiaHorizontalLine = styled.div`
  width: 150px; /* Line width */
  background-color: white; /* Line color */
  height: 1px; /* Override in-line if you want specific height. */
  float: left;
  top: 685px;
  position: absolute;
  z-index: 90;
`;

export default Layout;
