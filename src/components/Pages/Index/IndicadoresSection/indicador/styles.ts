import { colors } from "@/styles/GlobalStyles";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 538px;

  margin-bottom: 14px;
  margin-top: 50px;

  p {
    font-size: 28px;
    color: ${colors.white};
    margin-bottom: 14px;
    height: 70px;
  }

  img {
    border: 1px solid ${colors.gray};
    width: 538px;
  }
  /* 
  @media (max-width: 1280px) {
  } */
`;
