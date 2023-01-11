import { colors } from "@/styles/GlobalStyles";
import styled from "styled-components";

export const HeaderBackground = styled.div`
  width: 100%;
  max-width: 100vw;

  background-color: ${colors.black};
  min-height: 75px;
  position: absolute;
  top: 0;

  border-bottom: 2px solid ${colors.white};

  display: flex;
  justify-content: center;
`;

export const HeaderWrapper = styled.header`
  max-height: 75px;
  padding: 19px 0;

  z-index: 100;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  max-width: 100vw;
  max-height: 75px;
  z-index: 100;

  display: flex;
  gap: 70px;
  align-items: center;

  a {
    color: ${colors.white};
    font-weight: bold;
    font-size: 20px;

    :hover {
      color: ${colors.blue};
      transition: 0.5s;
    }
  }
`;

export const WhiteDot = styled.div`
  width: 40px;
  height: 40px;
  background: ${colors.white} 0% 0% no-repeat padding-box;
  border-radius: 50%;
  top: 19px !important;
  display: flex;
  justify-content: center;
  align-items: center;
`;
