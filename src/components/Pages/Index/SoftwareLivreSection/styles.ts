import { colors } from "@/styles/GlobalStyles";
import styled, { keyframes } from "styled-components";

export const fadeIn = keyframes`
  from{
    transform: translateY(100px);
    opacity: 0;
  }

  to{
    transform: translateY(0);
    opacity: 1;
  }
`;

const fadeInLeft = keyframes`
  from{
    transform: translateX(-150px);
    opacity: 0;
  }

  to{
    transform: translateX(0);
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
  justify-content: space-around;
  flex-wrap: wrap;

  gap: 16px;

  margin: 148px 98px 0 98px;

  .mantine-Card-root {
    width: 100%;
    max-width: 580px;
    height: 400px;

    background: ${colors.darkerGray};
    border: 1px solid ${colors.white};
    border-radius: 20px;
  }

  @media (max-width: 1038px) {
    gap: 10px;
    margin-top: 64px;
  }

  @media (max-width: 650px) {
    gap: 10px;
    margin: 64px 58px 0 58px;

    .mantine-Card-root {
      height: 300px;
    }
  }

  @media (max-width: 450px) {
    gap: 10px;
    margin: 48px 38px 0 38px;

    .mantine-Card-root {
      height: 260px;
    }
  }
`;

export const Animation = styled.div`
  animation: ${fadeIn} 1s linear;

  h1 {
    font-size: 60px;
    font-family: "'Lato', sans-serif";
    color: ${colors.white};
  }

  @media (max-width: 1038px) {
    animation: ${fadeInLeft} 1s linear;
  }

  @media (max-width: 650px) {
    h1 {
      font-size: 48px;
    }
  }

  @media (max-width: 450px) {
    h1 {
      font-size: 40px;
    }
  }
`;

export const ResultsList = styled.ul`
  width: 100%;

  margin-top: 16px;

  li {
    color: ${colors.white};
    font-size: 20px;
    margin-bottom: 4px;

    :hover {
      color: ${colors.blue};
    }
  }

  @media (max-width: 550px) {
    li {
      font-size: 16px;
    }
  }
`;
