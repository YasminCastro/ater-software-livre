import { HorizontalLine } from "@/styles/Page";
import { Title } from "@mantine/core";
import {
  Container,
  InticadorContainer,
  IndicadorItem,
  Wrapper,
} from "./styles";

const ParticipeSection: React.FC = () => {
  return (
    <Wrapper>
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
            <p>Geográfico (profissionais das artes)</p>
            <img
              src="indicadores/artistas-geografico.png"
              alt="Gráfico com o mapa do Brasil, informando o número de profissionais das artes por estado."
            />
          </IndicadorItem>
          <IndicadorItem>
            <p>Categoria informada no Instagram (Ex: artista, arte etc.)</p>
            <img
              src="indicadores/nuvem_1.png"
              alt="Diversas palavras relacionadas a arte."
            />
          </IndicadorItem>
          <IndicadorItem>
            <p>Quantidade de seguidores (profissionais das artes)</p>
            <img
              src="indicadores/artistas-quantidade-seguidores.png"
              alt="Gráfico mostrando o número de seguidores para profissionais das artes."
            />
          </IndicadorItem>
          <IndicadorItem>
            <p>Perfil verificado (profissionais das artes)</p>
            <img
              src="indicadores/nuvem_2.png"
              alt="Diversas palavras relacionadas a artistas."
            />
          </IndicadorItem>
          <IndicadorItem>
            <p>Geográfico (instituições de arte)</p>
            <img
              src="indicadores/instituicoes-geografico.png"
              alt="Gráfico com o mapa do Brasil, informando o número de instituições de arte por estado."
            />
          </IndicadorItem>
          <IndicadorItem>
            <p>Quantidade de seguidores (instituições de arte)</p>
            <img
              src="indicadores/instituicoes-quantidade-seguidores.png"
              alt="Gráfico mostrando o número de seguidores para instituições de arte."
            />
          </IndicadorItem>
        </InticadorContainer>
      </Container>
    </Wrapper>
  );
};

export default ParticipeSection;
