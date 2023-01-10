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

export const Right = styled.div`
  width: 100%;
  max-width: 582px;
`;

export const SearchBar = styled.input`
  width: 100%;
  max-width: 562px;

  height: 52px;

  border: 1px solid ${colors.grey};
  margin-bottom: 34px;

  font-size: 20px;
  padding-left: 20px;

  ::placeholder {
    color: ${colors.grey};
  }
`;
export const Results = styled.div`
  width: 100%;
  max-width: 582px;

  height: 386px;
  border: 1px solid ${colors.grey};
  background: ${colors.white};

  p {
    color: ${colors.grey};
    padding: 20px;
    font-size: 20px;
  }
`;
