import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background: rgba(0, 0, 0, 0.78);
  border-top: 1px solid white;
  z-index: 100;

  width: 100%;
  max-width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const FooterContainer = styled.div`
  width: 100%;
  max-width: 900px;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 800px) {
    img {
      width: 200px;
      height: 200px;
    }
  }

  @media (max-width: 600px) {
    img {
      width: 160px;
      height: 160px;
    }
  }

  @media (max-width: 480px) {
    img {
      height: auto;
      width: 100px;
    }
  }
`;
