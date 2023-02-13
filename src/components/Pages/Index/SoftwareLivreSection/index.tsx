import { useState } from "react";
import axios from "axios";
import { Title } from "@mantine/core";
import { Button, Card, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { AiOutlineSearch } from "react-icons/ai";
import InfiniteScroll from "react-infinite-scroller";

import { Container, Animation, ResultsList, Wrapper, Scroll } from "./styles";

const SoftwareLivreSection: React.FC = () => {
  const form = useForm({
    initialValues: {
      query: "",
    },
    validate: {
      query: (value) =>
        value.length < 1 ? "Pesquisa precisa ter no mínimo 1 caracter." : null,
    },
  });

  const [response, setResponse] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async ({ query }: { query: string }) => {
    setLoading(true);
    const { data } = await axios.post(`/api/apiPesquisa`, { query });
    setResponse(data);
    setLoading(false);
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
          <form onSubmit={form.onSubmit((values) => handleSubmit(values))}>
            <TextInput
              radius="md"
              size="lg"
              placeholder="Buscar..."
              {...form.getInputProps("query")}
            />
            <Button
              radius="md"
              size="lg"
              type="submit"
              variant="outline"
              leftIcon={<AiOutlineSearch size={18} />}
              loading={loading}
            >
              Procurar
            </Button>
          </form>

          <Scroll>
            <ResultsList>
              {response.map((username) => {
                const parsedUsername = username.replace("@", "");
                const instagramUrl = `https://www.instagram.com/${parsedUsername}`;
                return (
                  <li key={username}>
                    <a href={instagramUrl} target="_blank">
                      {username}
                    </a>
                  </li>
                );
              })}
            </ResultsList>
          </Scroll>
        </Card>
      </Container>
    </Wrapper>
  );
};

export default SoftwareLivreSection;
