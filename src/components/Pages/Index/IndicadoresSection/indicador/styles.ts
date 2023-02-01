import { colors } from "@/styles/GlobalStyles";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 540px;
  height: auto;

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
    width: max-content;
    max-width: 540px;
  }

  @media (max-width: 1300px) {
    max-width: 442px;

    p {
      max-width: 442px;
      font-size: 18px;
      height: auto;
    }

    img {
      max-width: 442px;
    }
  }

  @media (max-width: 1100px) {
    max-width: 600px;
    margin-top: 18px;

    p {
      font-size: 18px;
    }

    img {
      max-width: 600px;
    }
  }

  @media (max-width: 650px) {
    max-width: 450px;

    img {
      max-width: 450px;
    }
  }

  @media (max-width: 560px) {
    max-width: 400px;

    img {
      max-width: 400px;
    }
  }

  @media (max-width: 440px) {
    max-width: 350px;

    img {
      max-width: 350px;
    }
  }
`;
