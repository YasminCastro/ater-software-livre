import { colors } from "@/styles/GlobalStyles";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 540px;

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
    width: 540px;
  }

  @media (max-width: 1230px) {
    max-width: 500px;

    p {
      max-width: 500px;
      font-size: 22px;
      height: 50px;
    }

    img {
      width: 500px;
    }
  }
`;
