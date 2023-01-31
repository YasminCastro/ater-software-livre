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

export const HeaderContainer = styled.div<{ isMobile: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 58px;

  justify-content: ${({ isMobile }) => (isMobile ? "flex-end" : null)};
  margin-right: ${({ isMobile }) => (isMobile ? "36px" : null)};
`;

export const HeaderLeft = styled.div<{ isMobile: boolean }>`
  a {
    color: ${colors.white};
    font-weight: 400;
    font-size: 14px;
    border-right: 1px solid ${colors.white};
    padding: 20px 58px;

    display: ${({ isMobile }) => (isMobile ? "none" : "")};
    justify-content: ${({ isMobile }) => (isMobile ? "flex-end" : null)};
    margin-right: ${({ isMobile }) => (isMobile ? "54px" : null)};

    :hover {
      color: ${colors.green};
      transition: 0.5s;
    }

    :last-child {
      border-right: none;
    }

    :nth-last-child(4) {
      background-color: ${colors.mediumGrey};
      color: ${colors.green};
    }

    @media (max-width: 1088px) {
      padding: 20px 40px;
    }
  }
`;

export const HeaderRight = styled.div<{ isMobile: boolean }>`
  display: flex;
  gap: 36px;
  .menu-mobile {
    display: ${({ isMobile }) => (isMobile ? "flex" : "none")};
  }
`;
