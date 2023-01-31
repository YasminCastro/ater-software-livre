import { Container, Animation, ResultsList } from "./styles";
import { AiOutlineSearch } from "react-icons/ai";
import { ChangeEvent, useState } from "react";
import { Card, Input } from "@mantine/core";
import { colors } from "@/styles/GlobalStyles";
import { Title } from "@mantine/core";
import { useResponsive } from "@/Providers/MobileHeader";

const SoftwareLivreSection: React.FC = () => {
  const { isMobileSize } = useResponsive();

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
      <Animation>
        <Title
          size="h1"
          style={{
            fontFamily: "'Lato', sans-serif",
          }}
        >
          software livre
        </Title>
      </Animation>

      <Card
        style={{
          background: colors.darkerGray,
          border: isMobileSize ? "" : `1px solid ${colors.white}`,
          borderRadius: isMobileSize ? 10 : 20,
          width: "100%",
          maxWidth: 580,
          height: isMobileSize ? 300 : 400,
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
  );
};

export default SoftwareLivreSection;
