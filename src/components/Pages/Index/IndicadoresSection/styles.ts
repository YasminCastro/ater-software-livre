import { colors } from "@/styles/GlobalStyles";
import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
`;

export const Container = styled.div`
  width: 100%;

  margin: 48px 140px;

  display: flex;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 1372px) {
    margin-right: 48px;
  }

  @media (max-width: 800px) {
    margin: 56px 72px;
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
  display: flex;

  h2 {
    color: ${colors.white};
    font-size: 40px;

    @media (max-width: 800px) {
      font-size: 30px;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;
