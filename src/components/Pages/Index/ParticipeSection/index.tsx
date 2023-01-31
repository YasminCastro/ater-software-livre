import { Title } from "@/components/Global/Geral";
import { Square } from "@/components/Global/Geral/styles";
import { colors } from "@/styles/GlobalStyles";
import { IoIosArrowForward } from "react-icons/io";
import {
  ButtonsBlock,
  Container,
  Content,
  ContentBlock,
  Wrapper,
} from "./styles";

const ParticipeSection: React.FC = () => {
  return (
    <Wrapper>
      <Square />
      <Container>
        <ContentBlock>
          <Title title="PARTICIPE" />

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
