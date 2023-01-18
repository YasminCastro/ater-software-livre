import { colors } from "@/styles/GlobalStyles";
import styled from "styled-components";

export const HeaderWrapper = styled.header`
  width: 100%;
  max-width: 100vw;

  background-color: ${colors.black};
  position: absolute;
  top: 0;
  border-bottom: 1px solid ${colors.white};

  z-index: 100;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    color: ${colors.white};
    font-weight: 400;
    font-size: 14px;
    border-right: 1px solid ${colors.white};
    padding: 20px 58px;

    :hover {
      color: ${colors.green};
      transition: 0.5s;
    }

    :last-child {
      padding: 0px 58px;
      border-right: none;
    }

    :nth-last-child(2) {
      border-right: none;
    }

    :nth-last-child(5) {
      background-color: ${colors.mediumGrey};
      color: ${colors.green};
      transition: 0.5s;
    }
  }
`;
