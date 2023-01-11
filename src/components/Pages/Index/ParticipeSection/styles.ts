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
`;

export const ContentBlock = styled.div`
  margin-bottom: 38px;
`;

export const Square = styled.div`
  position: absolute;
  background: ${colors.white} 0% 0% no-repeat padding-box;
  width: 52px;
  height: 47px;
  border: 1px solid ${colors.grey};
  left: 0px;
  margin: 50px auto;
`;

export const Title = styled.div`
  margin-bottom: 50px;
  display: flex;

  h2 {
    color: ${colors.white};
    font-size: 40px;
  }

  p {
    color: ${colors.white};
    font-size: 32px;
    font-weight: bold;
  }
`;

export const Content = styled.div`
  width: 1088px;

  color: ${colors.white};
  font-size: 24px;
`;

export const ButtonsBlock = styled.div`
  a {
    border: 1px solid ${colors.grey};
    background: ${colors.white};
    padding: 20px 50px;

    font-size: 28px;
    font-weight: bold;

    :hover {
      background: ${colors.grey};
      transition: 0.5s;
    }
  }
`;