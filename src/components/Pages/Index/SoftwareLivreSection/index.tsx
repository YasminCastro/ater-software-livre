import { Container, Animation, ResultsList, Wrapper } from "./styles";
import { AiOutlineSearch } from "react-icons/ai";
import { ChangeEvent, useState } from "react";
import { Card, Input } from "@mantine/core";
import { Title } from "@mantine/core";

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
    <Wrapper>
      <Container>
        <Animation>
          <Title
            size="h1"
            style={{
              fontFamily: "'Lato', sans-serif",
            }}
          >
            Software
          </Title>
        </Animation>

        <Card
          style={{
            fontFamily: "'Lato', sans-serif",
          }}
        >
          <Input
            radius="md"
            size="lg"
            placeholder="Buscar..."
            rightSection={<AiOutlineSearch size={26} />}
            onChange={handleChange}
          />

          <ResultsList>
            {filteredSearch.map((word) => {
              return <li key={word}>{word}</li>;
            })}
          </ResultsList>
        </Card>
      </Container>
    </Wrapper>
  );
};

export default SoftwareLivreSection;
