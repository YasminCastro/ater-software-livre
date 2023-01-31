import { colors } from "@/styles/GlobalStyles";
import styled from "styled-components";

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
