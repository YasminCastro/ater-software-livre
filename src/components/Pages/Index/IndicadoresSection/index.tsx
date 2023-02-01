import { Title } from "@mantine/core";
import Indicador from "./indicador";
import { Container, Content, Wrapper } from "./styles";

const ParticipeSection: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <Title
          size="h2"
          style={{
            fontFamily: "'Lato', sans-serif",
          }}
        >
          INDICADORES
        </Title>
        <Content>
          <Indicador
            title="Geográfico (profissionais das artes)"
            image="indicadores/artistas-geografico.png"
          />
          <Indicador
            title="Categoria informada no Instagram (Ex: artista, arte etc.)"
            image="indicadores/artistas-geografico.png"
          />
          <Indicador
            title="Quantidade de seguidores (profissionais das artes)"
            image="indicadores/artistas-quantidade-seguidores.png"
          />
          <Indicador
            title="Perfil verificado (profissionais das artes)"
            image="indicadores/artistas-quantidade-seguidores.png"
          />
          <Indicador
            title="Geográfico (instituições de arte)"
            image="indicadores/instituicoes-geografico.png"
          />
          <Indicador
            title="Quantidade de seguidores (instituições de arte)"
            image="indicadores/instituicoes-quantidade-seguidores.png"
          />
        </Content>
      </Container>
    </Wrapper>
  );
};

export default ParticipeSection;
