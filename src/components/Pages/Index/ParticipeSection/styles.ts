import { colors } from "@/styles/GlobalStyles";
import styled from "styled-components";

export const Wrapper = styled.section`
  width: 100%;
`;

export const Container = styled.div`
  margin-top: 48px;
  margin-left: 140px;

  @media (max-width: 1300px) {
    margin-left: 70px;
  }
`;

export const ContentBlock = styled.div`
  margin-bottom: 38px;
`;

export const Content = styled.div`
  color: ${colors.white};
  font-size: 24px;
`;

export const ButtonsBlock = styled.div`
  a {
    color: ${colors.white};
    border-radius: 24px;

    border: 1px solid ${colors.white};
    background: transparent;
    padding: 20px;

    font-size: 28px;
    font-weight: bold;

    :hover {
      background: ${colors.blue};
      transition: 0.5s;
    }

    width: fit-content;
    display: flex;
    gap: 40px;
    align-items: center;
  }
`;
