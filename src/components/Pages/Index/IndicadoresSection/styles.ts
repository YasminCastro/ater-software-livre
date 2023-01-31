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
  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  @media (max-width: 1230px) {
    gap: 16px;
  }

  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
  }
`;
