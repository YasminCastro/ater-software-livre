import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  max-width: 1024px;

  margin-top: 220px;

  @media (max-width: 950px) {
    flex-direction: column;
    margin-top: 32px;
  }
`;

export const Left = styled.div`
  width: 100%;

  h1 {
    font-size: 60px;
    font-weight: 700;
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
  position: relative;

  &.mobile {
    display: none !important;
  }

  img {
    object-fit: cover;
  }

  @media (max-width: 950px) {
    &.mobile {
      display: block !important;
    }

    &.desktop {
      display: none !important;
    }
  }
`;
