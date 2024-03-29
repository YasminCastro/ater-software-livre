import { colors } from "@/styles/GlobalStyles";
import styled from "styled-components";
import Lightbox from "react-spring-lightbox";

export const Wrapper = styled.section`
  width: 100%;
  max-width: 1440px;

  display: flex;

  align-items: center;
`;

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  margin: 148px 98px 0 98px;

  h1 {
    color: ${colors.white};
    font-size: 40px;
    margin-bottom: 16px;
  }

  @media (max-width: 1038px) {
    margin-top: 64px;
    h1 {
      font-size: 30px;
    }
  }

  @media (max-width: 650px) {
    margin: 64px 58px 0 58px;
  }

  @media (max-width: 450px) {
    margin: 48px 38px 0 38px;
  }
`;

export const InticadorContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px 16px;

  margin-top: 45px;

  @media (max-width: 500px) {
    margin-top: 12px;
  }
`;

export const IndicadorItem = styled.div`
  display: flex;
  flex-direction: column;

  .modal-image {
    width: 540px;
  }

  img {
    max-width: 540px;
    object-fit: cover;
    transition: 0.15s linear;
  }

  p {
    max-width: 540px;

    font-size: 20px;
    color: ${colors.white};
    margin-bottom: 30px;
    height: 70px;
  }

  @media (max-width: 1300px) {
    img {
      max-width: 444px;
    }

    p {
      max-width: 444px;
    }
  }

  @media (max-width: 1100px) {
    img {
      max-width: 600px;
    }

    p {
      margin-bottom: 16px;
      max-width: 600px;
      height: auto;
    }
  }

  @media (max-width: 800px) {
    img {
      max-width: 400px;
    }

    p {
      max-width: 400px;
      font-size: 16px;
    }
  }

  @media (max-width: 500px) {
    img {
      max-width: 350px;
    }

    p {
      max-width: 350px;
    }
  }

  @media (max-width: 400px) {
    img {
      max-width: 300px;
    }

    p {
      max-width: 300px;
    }
  }

  @media (max-width: 375px) {
    img {
      max-width: 250px;
    }

    p {
      max-width: 250px;
    }
  }
`;

export const ImageModalHeaderWrapper = styled.div`
  background: rgba(0, 0, 0, 0.8);
`;

export const ImageModalHeaderContainer = styled.div`
  color: ${colors.whiteGray};
  display: flex;
  justify-content: space-between;
  margin: 16px 120px 0;
  gap: 16px;
  button {
    background: none;
    border: none;
    cursor: pointer;
  }

  @media (max-width: 1200px) {
    margin: 16px 60px 0;
  }

  @media (max-width: 650px) {
    margin: 16px 30px 0;
  }

  @media (max-width: 400px) {
    margin: 16px 16px 0;
  }
`;

export const StyledLightbox = styled(Lightbox)`
  background: rgba(0, 0, 0, 0.8);
  * ::selection {
    background: rgba(0, 0, 0, 0.8);
  }
  * ::-moz-selection {
    background: rgba(0, 0, 0, 0.8);
  }
`;
