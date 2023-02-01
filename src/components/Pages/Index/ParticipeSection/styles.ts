import { colors } from "@/styles/GlobalStyles";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from{
    transform: translateX(0);
    opacity: 1;
  }

  to{
    transform: translateX(14px);
    opacity: 1;
  }
`;

export const Wrapper = styled.section`
  margin-top: 100px;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  align-items: flex-start;

  margin-bottom: 96px;

  h1 {
    color: ${colors.white};
    font-size: 40px;
  }

  @media (max-width: 1000px) {
    h1 {
      font-size: 30px;
    }
  }
`;

export const ButtonsBlock = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 28px;

  a {
    color: ${colors.white};
    border-radius: 36px;

    border: 1px solid ${colors.white};
    background: transparent;

    padding: 20px 100px;

    font-size: 24px;
    font-weight: bold;

    :hover {
      background: ${colors.blue};
      transition: 0.5s;

      svg {
        animation: ${fadeIn} 1s forwards;
      }
    }

    display: flex;
    align-items: center;
    gap: 40px;

    @media (max-width: 1300px) {
      padding: 20px 60px;
    }

    @media (max-width: 1100px) {
      padding: 16px 30px;
    }

    @media (max-width: 1000px) {
      font-size: 18px;
    }
  }
`;
