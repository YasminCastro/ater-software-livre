import { colors } from "@/styles/GlobalStyles";
import styled from "styled-components";

export const Container = styled.section`
  width: 100%;

  margin-top: 220px;

  display: flex;
  justify-content: center;
  gap: 46px;

  @media (max-width: 950px) {
    flex-direction: column;
    margin-top: 32px;
  }
`;

export const Left = styled.div`
  border: 1px solid red;

  h1 {
    font-size: 60px;
    font-weight: 700;
    color: ${colors.white};
  }

  @media (max-width: 650px) {
    h1 {
      font-size: 32px;
      line-height: 40px;
    }
  }

  @media (max-width: 375px) {
    h1 {
      font-size: 24px;
      line-height: 32px;
    }
  }
`;

export const Right = styled.div``;

export const SearchBar = styled.input`
  width: 582px;
  height: 52px;

  border: 1px solid #707070;
  margin-bottom: 34px;

  ::placeholder {
    font-size: 20px;
    padding-left: 21px;
  }
`;
export const Results = styled.div`
  width: 582px;
  height: 386px;
  border: 1px solid #707070;
  background: ${colors.white};
`;
