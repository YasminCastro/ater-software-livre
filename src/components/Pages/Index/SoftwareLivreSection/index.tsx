import { Container, Left, Results, Right } from "./styles";
import { AiOutlineSearch } from "react-icons/ai";
import { ChangeEvent, useState } from "react";
import { Input, Tooltip } from "@mantine/core";

const SoftwareLivreSection: React.FC = () => {
  const [filteredSearch, setFilteredSearch] = useState<string[]>([]);
  const strings = [
    "abelha ",
    "baleia",
    "cachorro ",
    "elefante",
    "flamingo",
    "guaxinim",
    "hipopótamo",
  ];

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    const stringsFilter = strings.filter((word) => word.includes(value));
    setFilteredSearch(stringsFilter);
  };

  return (
    <Container>
      <Left>
        <h1>software livre</h1>
      </Left>
      <Right>
        <Input
          radius="md"
          size="lg"
          placeholder="Buscar..."
          rightSection={<AiOutlineSearch size={26} />}
          onChange={handleChange}
        />
        <Results>
          <ul>
            {filteredSearch.map((word) => {
              return <li key={word}>{word}</li>;
            })}
          </ul>
        </Results>
      </Right>
    </Container>
  );
};

export default SoftwareLivreSection;
