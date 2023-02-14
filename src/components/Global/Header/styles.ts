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
  height: 50px;

  @media (max-width: 810px) {
    justify-content: flex-end;
    margin-right: 36px;
  }
`;

export const HeaderLeft = styled.div`
  a {
    color: ${colors.white};
    font-weight: 400;
    font-size: 14px;
    border-right: 1px solid ${colors.white};
    padding: 16px 58px;

    :hover {
      color: ${colors.green};
      transition: 0.5s;
    }

    :last-child {
      border-right: none;
    }

    :nth-last-child(4) {
      color: ${colors.green};
    }

    @media (max-width: 1088px) {
      padding: 16px 40px;
    }

    @media (max-width: 810px) {
      display: none;
      justify-content: "flex-end";
      margin-right: "54px";
    }
  }
`;

export const HeaderRight = styled.div`
  display: flex;
  gap: 36px;

  .menu-mobile {
    display: none;

    @media (max-width: 810px) {
      display: flex;
    }
  }
`;
