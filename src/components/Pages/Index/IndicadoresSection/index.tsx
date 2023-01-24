import Indicador from "./indicador";
import {
  Container,
  Content,
  ContentBlock,
  Square,
  Title,
  Wrapper,
} from "./styles";

const IndicadoresSection: React.FC = () => {
  return (
    <Wrapper>
      <Square />
      <Container>
        <ContentBlock>
          <Title>
            <div>
              <h2>INDICADORES</h2>
            </div>
          </Title>
          <Content>
            <Indicador
              title="Geográfico (profissionais das artes)"
              image="indicadores/artistas-geografico.png"
            />
            <Indicador title="Categoria informada no Instagram (Ex: artista, arte etc.)" />
            <Indicador
              title="Quantidade de seguidores (profissionais das artes)"
              image="indicadores/artistas-quantidade-seguidores.png"
            />
            <Indicador title="Perfil verificado (profissionais das artes)" />
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

export default IndicadoresSection;
