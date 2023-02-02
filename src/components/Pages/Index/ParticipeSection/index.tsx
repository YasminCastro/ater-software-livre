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
          <a href="#">
            formulário de inscrição <IoIosArrowForward color={colors.white} />
          </a>
        </ButtonsBlock>
      </Container>
    </Wrapper>
  );
};

export default ParticipeSection;
