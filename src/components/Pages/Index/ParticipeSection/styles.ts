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
  width: 100%;
  max-width: 1440px;

  display: flex;

  align-items: center;
`;

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin: 148px 98px;

  h1 {
    color: ${colors.white};
    font-size: 40px;
  }

  @media (max-width: 1038px) {
    margin: 64px 98px;
    h1 {
      font-size: 30px;
    }
  }

  @media (max-width: 650px) {
    margin: 64px 58px;
  }

  @media (max-width: 450px) {
    margin: 48px 38px;
  }
`;

export const ButtonsBlock = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 16px;

  margin-top: 28px;

  a {
    color: ${colors.white};
    border-radius: 36px;

    border: 1px solid ${colors.white};
    background: transparent;

    padding: 16px 100px;

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

    @media (max-width: 1300px) {
      padding: 16px 60px;
    }

    @media (max-width: 1100px) {
      font-size: 18px;
    }

    @media (max-width: 400px) {
      font-size: 16px;
      padding: 14px 48px;
    }
  }
`;
