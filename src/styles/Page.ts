import styled from "styled-components";

export const PageWrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const PageContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const HorizontalLine = styled.div`
  width: 60px;
  background-color: white;
  height: 1px;
  float: left;
  position: absolute;
  left: 0;
  margin-top: 24px;

  z-index: 90;

  @media (max-width: 650px) {
    display: none;
  }
`;

export const VerticalLine = styled.div`
  width: 1px;
  background-color: white;
  height: 100%;
  left: 50px;
  position: fixed;
  z-index: 80;

  @media (max-width: 650px) {
    display: none;
  }
`;
