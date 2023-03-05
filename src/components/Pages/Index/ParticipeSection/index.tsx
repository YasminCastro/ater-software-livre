import { colors } from "@/styles/GlobalStyles";
import { HorizontalLine } from "@/styles/Page";
import { Title } from "@mantine/core";
import { IoIosArrowForward } from "react-icons/io";
import { ButtonsBlock, Container, Wrapper } from "./styles";
import Image from "next/image";

const ParticipeSection: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <HorizontalLine />

        <Title
          size="h2"
          style={{
            fontFamily: "'Lato', sans-serif",
          }}
        >
          PARTICIPE
        </Title>
        <ButtonsBlock>
          <a
            href="https://docs.google.com/forms/d/1_XJatwUc1AFKt994RjAWIAT1UCpoMEE1BgBpHhIb6fE/viewform?edit_requested=true"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/participe/banco-de-dados.svg"
              alt="Estrela"
              width={170}
              height={170}
            />
            <p>Colabore com nossa base de dados!</p>
          </a>

          <a
            href="https://www.sympla.com.br/evento-online/programa-educativo-projeto-ater/1897732"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/participe/inscrever.svg"
              alt="Estrela"
              width={170}
              height={170}
            />
            <p>Inscreva-se no programa educativo!</p>
          </a>

          <a href="https://www.projetoater.com.br/c%C3%B3pia-educativo-1">
            <Image
              src="/participe/duvidas.svg"
              alt="Estrela"
              width={170}
              height={170}
            />
            <p>Dúvidas, comentários, reflexões</p>
          </a>
        </ButtonsBlock>
      </Container>
    </Wrapper>
  );
};

export default ParticipeSection;
