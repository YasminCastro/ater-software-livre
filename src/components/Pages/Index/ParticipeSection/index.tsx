import { colors } from "@/styles/GlobalStyles";
import { IoIosArrowForward } from "react-icons/io";
import {
  ButtonsBlock,
  Container,
  Content,
  ContentBlock,
  Square,
  Title,
  Wrapper,
} from "./styles";

const ParticipeSection: React.FC = () => {
  return (
    <Wrapper>
      <Square />
      <Container>
        <ContentBlock>
          <Title>
            <div>
              <h2>PARTICIPE</h2>
            </div>
          </Title>
          <Content>
            <ButtonsBlock>
              <a href="#">
                formulário de inscrição{" "}
                <IoIosArrowForward color={colors.white} />
              </a>
            </ButtonsBlock>
          </Content>
        </ContentBlock>
      </Container>
    </Wrapper>
  );
};

export default ParticipeSection;
