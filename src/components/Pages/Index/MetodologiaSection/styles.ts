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

  margin: 148px 98px 0 98px;

  h1 {
    color: ${colors.white};
    font-size: 40px;
    margin-bottom: 16px;
  }

  @media (max-width: 1038px) {
    margin-top: 98px;
    h1 {
      font-size: 30px;
    }
  }

  @media (max-width: 650px) {
    margin: 98px 58px 0 58px;
  }

  @media (max-width: 450px) {
    margin: 48px 38px 0 38px;
  }
`;

export const Content = styled.div`
  color: ${colors.white};
  text-align: justify;
  font-size: 20px;

  a {
    color: ${colors.white};
    text-decoration: underline;

    :hover {
      color: #4b8bb4;
    }
  }

  @media (max-width: 1000px) {
    font-size: 18px;
  }

  @media (max-width: 650px) {
    font-size: 16px;
  }
`;

export const ButtonsBlock = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 16px;

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
