import styled from "styled-components";

export const PageWrapper = styled.div`
  width: 100%;
  max-width: 100vw;

  height: 100%;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const PageContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  max-width: 1100px;

  height: fit-content;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1300px) {
    max-width: 900px;
  }

  @media (max-width: 1100px) {
    max-width: 700px;
  }
`;

export const SectionWrapper = styled.div`
  width: 100%;
  max-width: 1024px;

  height: fit-content;

  display: flex;
  justify-content: center;
`;
