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

export const Square = styled.div`
  position: absolute;
  background: ${colors.white} 0% 0% no-repeat padding-box;
  width: 52px;
  height: 47px;
  border: 1px solid ${colors.gray};
  left: 0px;
  margin: 50px auto;

  @media (max-width: 1100px) {
    width: 42px;
    height: 37px;
  }

  @media (max-width: 700px) {
    width: 32px;
    height: 27px;
  }
`;
