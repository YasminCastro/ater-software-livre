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

export const Container = styled.section`
  width: 100%;

  margin-top: 160px;

  display: flex;
  justify-content: space-evenly;

  .mantine-Card-root {
    width: 100%;
    max-width: 580px;
    height: 400px;

    background: ${colors.darkerGray};
    border: 1px solid ${colors.white};
    border-radius: 20px;
  }

  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
    margin-top: -28px;
  }

  @media (max-width: 700px) {
    max-width: 500px;
    height: 600px;
  }
`;

export const Animation = styled.div`
  animation: ${fadeIn} 1s linear;
  h1 {
    font-size: 60px;
    margin-top: 140px;
    font-family: "'Lato', sans-serif";
    color: ${colors.white};
  }

  @media (max-width: 1100px) {
    animation: ${fadeInLeft} 1s linear;
    margin-bottom: 6px;
  }

  @media (max-width: 500px) {
    h1 {
      font-size: 50px;
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
`;
