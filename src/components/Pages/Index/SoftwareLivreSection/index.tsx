import { Container, Left, Results, Right, SearchBar } from "./styles";
import { AiOutlineSearch } from "react-icons/ai";

const SoftwareLivreSection: React.FC = () => {
  return (
    <Container>
      <Left>
        <h1>software livre</h1>
      </Left>
      <Right>
        <SearchBar>
          <input placeholder="buscar..." type="text" />
          <AiOutlineSearch size={26} />
        </SearchBar>
        <Results>
          <p>resultados em lista</p>
        </Results>
      </Right>
    </Container>
  );
};

export default SoftwareLivreSection;
