import { colors } from "@/styles/GlobalStyles";
import styled from "styled-components";

export const HeaderBackground = styled.div`
  width: 100%;
  max-width: 100vw;

  background-color: ${colors.white};
  min-height: 75px;
  position: absolute;
  top: 0;

  border: 1px solid #707070;
`;

export const HeaderWrapper = styled.header`
  width: 100%;
  max-width: 100vw;

  display: flex;
  justify-content: flex-end;

  min-height: 64px;
  position: fixed;
  z-index: 100;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  max-width: 1024px;

  display: flex;
  gap: 87px;
  padding-top: 19px;

  @media (max-width: 1088px) {
    margin: 0 32px;
  }

  @media (max-width: 500px) {
    margin: 0 20px;
  }

  a {
    color: ${colors.black};
    font-weight: bold;
    font-size: 24px;
  }
`;

export const BlackDot = styled.div`
  width: 43px;
  height: 43px;
  background: ${colors.black} 0% 0% no-repeat padding-box;
  border: 1px solid #707070;
  border-radius: 50%;
  top: 19px !important;
`;
