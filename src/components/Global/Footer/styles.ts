import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(42, 42, 42, 1) 50%,
    rgba(83, 83, 83, 1) 100%
  );
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
