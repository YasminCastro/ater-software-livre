import { colors } from "@/styles/GlobalStyles";
import styled, { keyframes } from "styled-components";

export const fadeIn = keyframes`
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
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Content = styled.div`
  color: ${colors.white};
  font-size: 20px;
  margin-top: 32px;
  text-align: justify;

  a {
    color: ${colors.white};
    text-decoration: underline;

    :hover {
      color: #4b8bb4;
    }
  }

  @media (max-width: 900px) {
    font-size: 20px;
  }
`;

export const ButtonsBlock = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 16px;

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
  }
`;
