import { colors } from "@/styles/GlobalStyles";
import styled from "styled-components";

export const Wrapper = styled.section`
  margin-top: 100px;
  width: 100%;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  h1 {
    color: ${colors.white};
    font-size: 40px;
  }

  @media (max-width: 1000px) {
    h1 {
      font-size: 30px;
      margin-bottom: 20px;
    }
  }
`;

export const Content = styled.div`
  color: ${colors.white};
  font-size: 24px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  @media (max-width: 1230px) {
    gap: 16px;
  }

  @media (max-width: 1100px) {
    flex-direction: column;
    gap: 0;
  }
`;
