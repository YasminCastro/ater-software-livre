import styled from "styled-components";

export const PageWrapper = styled.div`
  background-image: url("fundo_site_2-03.png");
  background-position: top;
  background-repeat: repeat;

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
  max-width: 1440px;

  height: fit-content;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SectionWrapper = styled.div`
  width: 100%;
  max-width: 1024px;

  height: fit-content;

  display: flex;
  justify-content: center;
`;
