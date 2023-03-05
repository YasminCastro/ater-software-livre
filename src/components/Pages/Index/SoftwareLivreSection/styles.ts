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

    background: rgba(150, 150, 150, 0.1);
    border: 1px solid ${colors.white};
    border-radius: 20px;

    .mantine-InputWrapper-root {
      width: 100%;
    }

    form {
      display: flex;
      align-items: flex-start;
      gap: 6px;

      button {
        background: transparent;
        border: 1px solid ${colors.white};

        :hover {
          background: ${colors.blue};
          transition: 0.5s;
        }

        @media (max-width: 550px) {
          font-size: 16px;
          padding: 10px;
        }
      }

      .mantine-TextInput-error {
        color: white;
      }
      .mantine-TextInput-input {
        color: black;
      }
    }
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
    font-size: 64px;
    font-family: "'Lato', sans-serif";
    color: ${colors.white};
  }

  @media (max-width: 1038px) {
    animation: ${fadeInLeft} 1s linear;
  }

  @media (max-width: 650px) {
    h1 {
      font-size: 42px;
    }
  }

  @media (max-width: 450px) {
    h1 {
      font-size: 36px;
    }
  }
`;

export const ResultsList = styled.ul`
  width: 100%;

  a {
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

export const Scroll = styled.div`
  overflow-y: auto;
  height: 300px;
  margin-top: 16px;

  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  ::-webkit-scrollbar-button {
    width: 10px;
    height: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: #e1e1e1;
    border: 0px none #ffffff;
    border-radius: 20px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #ffffff;
  }
  ::-webkit-scrollbar-thumb:active {
    background: #000000;
  }
  ::-webkit-scrollbar-track {
    background: #666666;
    border: 0px none #ffffff;
    border-radius: 20px;
  }
  ::-webkit-scrollbar-track:hover {
    background: #666666;
  }
  ::-webkit-scrollbar-track:active {
    background: #333333;
  }
  ::-webkit-scrollbar-corner {
    background: transparent;
  }

  @media (max-width: 650px) {
    height: 205px;
  }

  @media (max-width: 450px) {
    height: 164px;
  }
`;
