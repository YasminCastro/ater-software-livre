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

export const Square = styled.div`
  position: absolute;
  background: ${colors.white} 0% 0% no-repeat padding-box;
  width: 52px;
  height: 47px;
  border: 1px solid ${colors.gray};
  left: 0px;
  margin: 50px auto;
`;

export const Title = styled.div`
  margin-bottom: 50px;
  display: flex;

  h2 {
    color: ${colors.white};
    font-size: 40px;

    @media (max-width: 900px) {
      font-size: 30px;
    }
  }

  @media (max-width: 1300px) {
    margin-bottom: 40px;
  }
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
