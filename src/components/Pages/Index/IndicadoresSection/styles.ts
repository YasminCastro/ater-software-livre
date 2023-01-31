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

export const Square = styled.div`
  position: absolute;
  background: ${colors.white} 0% 0% no-repeat padding-box;
  width: 52px;
  height: 47px;
  border: 1px solid ${colors.gray};
  left: 0px;
  margin: 50px auto;
`;

export const Title = styled.div`
  margin-bottom: 50px;
  display: flex;

  h2 {
    color: ${colors.white};
    font-size: 40px;

    @media (max-width: 900px) {
      font-size: 30px;
    }
  }

  @media (max-width: 1300px) {
    margin-bottom: 20px;
  }
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
`;
