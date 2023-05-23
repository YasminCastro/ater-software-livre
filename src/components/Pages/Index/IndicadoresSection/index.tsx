import { HorizontalLine } from "@/styles/Page";
import { Title } from "@mantine/core";
import { useState } from "react";
import Lightbox, { ImagesListType } from "react-spring-lightbox";
import { AiFillCloseCircle } from "react-icons/ai";

import {
  Container,
  InticadorContainer,
  IndicadorItem,
  Wrapper,
  ImageModalHeaderWrapper,
  ImageModalHeaderContainer,
  StyledLightbox,
} from "./styles";
import { colors } from "@/styles/GlobalStyles";

const images: ImagesListType = [
  {
    src: "indicadores/artistas-geografico.png",
    loading: "lazy",
    alt: "Geográfico <> Profissionais das Artes: indica a localização compartilhada no campo bio do perfil no Instagram.",
  },
  {
    src: "indicadores/instituicoes-geografico.png",
    loading: "lazy",
    alt: "Instituições de Arte: indica a localização compartilhada no campo bio do perfil no Instagram.",
  },
  {
    src: "indicadores/artistas-quantidade-seguidores.png",
    loading: "lazy",
    alt: "Profissionais das Artes: indica a quantidade de seguidores dos perfis no Instagram presentes na base de dados do projeto.",
  },
  {
    src: "indicadores/instituicoes-quantidade-seguidores.png",
    loading: "lazy",
    alt: "Instituições de Arte: indica a quantidade de seguidores dos perfis no Instagram presentes na base de dados do projeto.",
  },
  {
    src: "indicadores/nuvem_1.png",
    loading: "lazy",
    alt: "Nuvem de palavras com os principais termos que aparecem nas bios dos perfis no Instagram dos profissionais das artes presentes na base de dados do projeto.",
  },
  {
    src: "indicadores/nuvem_2.png",
    loading: "lazy",
    alt: 'Nuvem de palavras com os principais termos que aparecem nas bios dos perfis no Instagram dos profissionais das artes presentes na base de dados do projeto. Filtrando apenas os perfis "verificados".',
  },
];

const ParticipeSection: React.FC = () => {
  const [currentImageIndex, setCurrentIndex] = useState(0);
  const [isOpen, setOpen] = useState(false);

  const gotoPrevious = () =>
    currentImageIndex > 0 && setCurrentIndex(currentImageIndex - 1);

  const gotoNext = () =>
    currentImageIndex + 1 < images.length &&
    setCurrentIndex(currentImageIndex + 1);

  const ImageModalHeader = () => {
    return (
      <ImageModalHeaderWrapper>
        <ImageModalHeaderContainer>
          <h3>{images[currentImageIndex].alt}</h3>
          <button onClick={() => setOpen(false)}>
            <AiFillCloseCircle size={18} color={colors.white} />
          </button>
        </ImageModalHeaderContainer>
      </ImageModalHeaderWrapper>
    );
  };

  return (
    <Wrapper>
      <StyledLightbox
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        onPrev={gotoPrevious}
        onNext={gotoNext}
        images={images}
        currentIndex={currentImageIndex}
        className="modal-image"
        renderHeader={() => <ImageModalHeader />}
      />
      <Container>
        <HorizontalLine />
        <Title
          size="h2"
          style={{
            fontFamily: "'Lato', sans-serif",
          }}
        >
          INDICADORES
        </Title>

        <InticadorContainer>
          <IndicadorItem>
            <p>
              Geográfico {"<>"} Profissionais das Artes: indica a localização
              compartilhada no campo bio do perfil no Instagram.
            </p>
            <button
              onClick={() => {
                setOpen(true);
                setCurrentIndex(0);
              }}
            >
              <img
                src="indicadores/artistas-geografico.png"
                alt="Profissionais das Artes: indica a localização compartilhada no campo bio do perfil no Instagram."
              />
            </button>
          </IndicadorItem>
          <IndicadorItem>
            <p>
              Geográfico {"<>"} Instituições de Arte: indica a localização
              compartilhada no campo bio do perfil no Instagram.
            </p>
            <button
              onClick={() => {
                setOpen(true);
                setCurrentIndex(1);
              }}
            >
              <img
                src="indicadores/instituicoes-geografico.png"
                alt="Instituições de Arte: indica a localização compartilhada no campo bio do perfil no Instagram."
              />
            </button>
          </IndicadorItem>
          <IndicadorItem>
            <p>
              Quantidade de seguidores {"<>"} Profissionais das Artes: indica a
              quantidade de seguidores dos perfis no Instagram presentes na base
              de dados do projeto.
            </p>
            <button
              onClick={() => {
                setOpen(true);
                setCurrentIndex(2);
              }}
            >
              <img
                src="indicadores/artistas-quantidade-seguidores.png"
                alt="Profissionais das Artes: indica a quantidade de seguidores dos perfis no Instagram presentes na base de dados do projeto."
              />
            </button>
          </IndicadorItem>
          <IndicadorItem>
            <p>
              Quantidade de seguidores {"<>"} Instituições de Arte: indica a
              quantidade de seguidores dos perfis no Instagram presentes na base
              de dados do projeto.
            </p>
            <button
              onClick={() => {
                setOpen(true);
                setCurrentIndex(3);
              }}
            >
              <img
                src="indicadores/instituicoes-quantidade-seguidores.png"
                alt="Profissionais das Artes: indica a quantidade de seguidores dos perfis no Instagram presentes na base de dados do projeto."
              />
            </button>
          </IndicadorItem>
          <IndicadorItem>
            <p>
              Nuvem de palavras com os principais termos que aparecem nas bios
              dos perfis no Instagram dos profissionais das artes presentes na
              base de dados do projeto.
            </p>
            <button
              onClick={() => {
                setOpen(true);
                setCurrentIndex(4);
              }}
            >
              <img
                src="indicadores/nuvem_1.png"
                alt="Nuvem de palavras com os principais termos que aparecem nas bios dos perfis no Instagram dos profissionais das artes presentes na base de dados do projeto."
              />
            </button>
          </IndicadorItem>
          <IndicadorItem>
            <p>
              Nuvem de palavras com os principais termos que aparecem nas bios
              dos perfis no Instagram dos profissionais das artes presentes na
              base de dados do projeto. Filtrando apenas os perfis
              "verificados".
            </p>
            <button
              onClick={() => {
                setOpen(true);
                setCurrentIndex(5);
              }}
            >
              <img
                src="indicadores/nuvem_2.png"
                alt="Nuvem de palavras com os principais termos que aparecem nas bios dos perfis no Instagram dos profissionais das artes presentes na base de dados do projeto."
              />
            </button>
          </IndicadorItem>
        </InticadorContainer>
      </Container>
    </Wrapper>
  );
};

export default ParticipeSection;
