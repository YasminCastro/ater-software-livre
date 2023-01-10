import Indicador from "./indicador";
import {
  ButtonsBlock,
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
              <h2>indicadores</h2>
              <p>
                indicadores quais os indicadores que podemos aferir dessa base
                de dados?
              </p>
            </div>
          </Title>
          <Content>
            <Indicador title="Geográfico (artistas por região do Brasil, artistas por estado, artistas por cidade)" />
            <Indicador title="Artistas - com qual categoria se identificam no Instagram (artista, cientista, etc)" />
            <Indicador title="Artistas - quantidade de seguidores (faixas)" />
            <Indicador title="Instituições de arte geográfico (por região, estado, por cidade" />
            <Indicador title="Artistas - quantos tem perfil verificado" />
            <Indicador title="Instituições de arte - quantidade de seguidores por seguidores" />
          </Content>
        </ContentBlock>
      </Container>
    </Wrapper>
  );
};

export default IndicadoresSection;
