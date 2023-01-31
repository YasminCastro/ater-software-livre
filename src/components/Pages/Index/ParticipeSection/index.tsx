import { colors } from "@/styles/GlobalStyles";
import { Title } from "@mantine/core";
import { IoIosArrowForward } from "react-icons/io";
import { ButtonsBlock, Container, Wrapper } from "./styles";

const ParticipeSection: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <Title
          size="h2"
          style={{
            fontFamily: "'Lato', sans-serif",
            color: colors.white,
            fontSize: 40,
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
