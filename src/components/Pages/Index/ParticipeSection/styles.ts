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
  gap: 30px;

  width: 100%;
  justify-content: center;

  margin-top: 28px;
  text-align: center;

  a {
    max-width: 180px;
    color: ${colors.white};

    font-size: 18px;
    font-weight: 200;

    display: flex;
    flex-direction: column;
    align-items: center;

    cursor: pointer;
  }

  @media (max-width: 680px) {
    gap: 16px;

    a {
      font-size: 14px;
    }

    img {
      width: 100px;
    }
  }

  @media (max-width: 400px) {
    gap: 4px;
  }
`;
