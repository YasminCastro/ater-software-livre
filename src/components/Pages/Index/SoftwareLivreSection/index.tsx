import { Container, Left, Results, Right, SearchBar } from "./styles";

const SoftwareLivreSection: React.FC = () => {
  return (
    <Container>
      <Left>
        <h1>software livre</h1>
      </Left>
      <Right>
        <SearchBar placeholder="campo de busca" type="text" />
        <Results>
          <p>resultados em lista</p>
        </Results>
      </Right>
    </Container>
  );
};

export default SoftwareLivreSection;
