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
            <Indicador title="Geográfico (profissionais das artes)" />
            <Indicador title="Categoria informada no Instagram (Ex: artista, arte etc.)" />
            <Indicador title="Quantidade de seguidores (profissionais das artes)" />
            <Indicador title="Perfil verificado (profissionais das artes)" />
            <Indicador title="Geográfico (instituições de arte)" />
            <Indicador title="Quantidade de seguidores (instituições de arte)" />
          </Content>
        </ContentBlock>
      </Container>
    </Wrapper>
  );
};

export default IndicadoresSection;
