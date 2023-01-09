import styled from "styled-components";
import { colors } from "./GlobalStyles";

export const PageWrapper = styled.div`
  width: 100%;
  max-width: 100vw;

  height: 100%;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  background: grey;
  transition: background 0.15s linear;
`;

export const PageContainer = styled.div`
  width: 100%;
  max-width: 1440px;

  height: fit-content;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1088px) {
    padding: 0 32px;
  }

  @media (max-width: 500px) {
    padding: 0 20px;
  }
`;
