import { colors } from "@/styles/GlobalStyles";
import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
`;

export const Container = styled.div`
  width: 100%;

  margin: 48px 140px;

  display: flex;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 800px) {
    margin: 56px 72px;
  }
`;

export const ContentBlock = styled.div`
  margin-bottom: 38px;

  a {
    color: ${colors.white};

    text-decoration: underline;

    :hover {
      color: #4b8bb4;
    }
  }
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

    @media (max-width: 800px) {
      font-size: 30px;
    }
  }
`;

export const Content = styled.div`
  max-width: 1088px;

  color: ${colors.white};
  font-size: 24px;

  @media (max-width: 800px) {
    font-size: 20px;
  }
`;

export const ButtonsBlock = styled.div`
  display: flex;
  justify-content: space-around;

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

    display: flex;
    align-items: center;
    gap: 40px;

    @media (max-width: 1000px) {
      gap: 10px;
      font-size: 22px;
    }
  }
`;
