import { colors } from "@/styles/GlobalStyles";
import styled from "styled-components";

export const TitleWrapper = styled.div`
  margin-bottom: 50px;
  display: flex;

  h2 {
    color: ${colors.white};
    font-size: 40px;
  }

  @media (max-width: 1300px) {
    margin-bottom: 20px;
  }

  @media (max-width: 1100px) {
    h2 {
      font-size: 30px;
    }
  }

  @media (max-width: 700px) {
    h2 {
      font-size: 24px;
    }
  }
`;
