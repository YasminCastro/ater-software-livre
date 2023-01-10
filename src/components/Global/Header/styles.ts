import { colors } from "@/styles/GlobalStyles";
import styled from "styled-components";

export const HeaderBackground = styled.div`
  width: 100%;
  max-width: 100vw;

  background-color: ${colors.white};
  min-height: 75px;
  position: absolute;
  top: 0;

  border-bottom: 1px solid #707070;
`;

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: flex-end;
  padding: 19px 158px 19px 0;

  max-height: 75px;
  z-index: 100;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  max-width: 100vw;
  max-height: 75px;
  z-index: 100;

  display: flex;
  justify-content: flex-end;
  gap: 87px;

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
