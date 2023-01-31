import styled from "styled-components";

export const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 100vw;

  background: #4c96cb;
  transition: background 0.15s linear;
  display: flex;
  justify-content: center;
`;

export const FooterContainer = styled.div`
  width: 100%;
  max-width: 1024px;

  padding: 20px 0;
  transition: 0.2s;

  @media (max-width: 1088px) {
    margin: 0 32px;
  }

  @media (max-width: 500px) {
    margin: 0 20px;
  }
`;
