import styled from "styled-components";

export const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 100vw;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const PageContainer = styled.div`
  width: 100%;
  max-width: 1100px;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1300px) {
    max-width: 900px;
  }

  @media (max-width: 1100px) {
    max-width: 700px;
  }

  @media (max-width: 880px) {
    max-width: 600px;
  }

  @media (max-width: 650px) {
    max-width: 500px;
  }

  @media (max-width: 560px) {
    max-width: 400px;
  }
`;
