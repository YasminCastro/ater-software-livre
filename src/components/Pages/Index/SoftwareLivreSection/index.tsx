import { useState } from "react";
import axios from "axios";
import { Title } from "@mantine/core";
import { Button, Card, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { AiOutlineSearch } from "react-icons/ai";

import { Container, Animation, ResultsList, Wrapper, Scroll } from "./styles";

const SoftwareLivreSection: React.FC = () => {
  const [response, setResponse] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const form = useForm({
    initialValues: {
      query: "",
    },
    validate: {
      query: (value) =>
        value.length < 1 ? "A busca não pode estar vazia." : null,
    },
  });

  const handleSubmit = async ({ query }: { query: string }) => {
    setLoading(true);
    try {
      const { data } = await axios.post(`/api/apiPesquisa`, { query });
      if (data.length === 0) {
        form.setFieldError(
          "query",
          "Nenhum resultado encontrado. Ex.: BR, SP, GO, RJ..."
        );
      }
      setResponse(data);
    } catch (error) {
      form.setFieldError(
        "query",
        "Ocorreu um erro inesperado. Por favor, tente novamente mais tarde."
      );
    } finally {
      setLoading(false);
    }
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
            SOFTWARE
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
                    <a href={instagramUrl} target="_blank" rel="noreferrer">
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
