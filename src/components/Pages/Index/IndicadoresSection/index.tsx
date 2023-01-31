import { Title } from "@/components/Global/Geral";
import { Square } from "@/components/Global/Geral/styles";
import Indicador from "./indicador";
import { Container, Content, ContentBlock, Wrapper } from "./styles";

const ParticipeSection: React.FC = () => {
  return (
    <Wrapper>
      <Square />
      <Container>
        <ContentBlock>
          <Title title="INDICADORES" />
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
        </ContentBlock>
      </Container>
    </Wrapper>
  );
};

export default ParticipeSection;
