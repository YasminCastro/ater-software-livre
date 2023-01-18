import { colors } from "@/styles/GlobalStyles";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from{
    transform: translateY(100px);
    opacity: 0;
  }

  to{
    transform: translateY(0);
    opacity: 1;
  }
`;

export const Container = styled.section`
  width: 100%;

  margin-top: 160px;

  display: flex;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    margin-top: -28px;
  }
`;

export const Left = styled.div`
  animation: ${fadeIn} 1s linear;
  margin-top: 140px;

  h1 {
    font-size: 60px;
    font-weight: 700;
    color: ${colors.white};
  }

  @media (max-width: 1000px) {
    h1 {
      font-size: 60px;
      margin-bottom: 18px;
    }
  }
`;

export const Right = styled.div`
  width: 100%;
  max-width: 580px;

  border: 1px solid ${colors.white};
  border-radius: 20px;
  padding: 16px;
  background: ${colors.darkerGray};
`;

export const SearchBar = styled.div`
  position: relative;

  input {
    width: 100%;
    max-width: 562px;

    height: 52px;

    border: 1px solid ${colors.gray};
    margin-bottom: 10px;

    font-size: 20px;
    padding-left: 20px;
    border-radius: 6px;
  }

  svg {
    position: absolute;
    right: 0;
    top: 4px;
    padding: 10px 20px;
  }
`;
export const Results = styled.div`
  width: 100%;
  max-width: 582px;
  border-radius: 6px;

  height: 300px;

  margin-left: 10px;

  li {
    color: ${colors.white};
    font-size: 20px;
    margin-bottom: 4px;

    :hover {
      color: ${colors.blue};
    }
  }
`;
