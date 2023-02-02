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
            <img src="indicadores/artistas-geografico.png" />
          </IndicadorItem>
          <IndicadorItem>
            <p>Categoria informada no Instagram (Ex: artista, arte etc.)</p>
            <img src="indicadores/artistas-geografico.png" />
          </IndicadorItem>
          <IndicadorItem>
            <p>Quantidade de seguidores (profissionais das artes)</p>
            <img src="indicadores/artistas-quantidade-seguidores.png" />
          </IndicadorItem>
          <IndicadorItem>
            <p>Perfil verificado (profissionais das artes)</p>
            <img src="indicadores/artistas-quantidade-seguidores.png" />
          </IndicadorItem>
          <IndicadorItem>
            <p>Geográfico (instituições de arte)</p>
            <img src="indicadores/instituicoes-geografico.png" />
          </IndicadorItem>
          <IndicadorItem>
            <p>Quantidade de seguidores (instituições de arte)</p>
            <img src="indicadores/instituicoes-quantidade-seguidores.png" />
          </IndicadorItem>
        </InticadorContainer>
      </Container>
    </Wrapper>
  );
};

export default ParticipeSection;
