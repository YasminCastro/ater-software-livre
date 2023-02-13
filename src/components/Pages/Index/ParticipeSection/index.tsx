import { colors } from "@/styles/GlobalStyles";
import { HorizontalLine } from "@/styles/Page";
import { Title } from "@mantine/core";
import { IoIosArrowForward } from "react-icons/io";
import { ButtonsBlock, Container, Wrapper } from "./styles";

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
            Colabore com a nossa base de dados!{" "}
            <IoIosArrowForward color={colors.white} />
          </a>
        </ButtonsBlock>
      </Container>
    </Wrapper>
  );
};

export default ParticipeSection;
