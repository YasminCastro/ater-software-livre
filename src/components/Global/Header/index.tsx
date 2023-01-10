import { colors } from "@/styles/GlobalStyles";
import { AiOutlineInstagram } from "react-icons/ai";

import {
  HeaderWrapper,
  HeaderContainer,
  HeaderBackground,
  BlackDot,
} from "./styles";

const Header: React.FC = () => {
  return (
    <HeaderBackground>
      <HeaderWrapper>
        <HeaderContainer>
          <a href="#">home</a>
          <a href="#">software</a>
          <a href="#">educativo</a>
          <a href="#">outros desdobramentos</a>
          <a href="#">contato</a>
          <a href="#">
            <BlackDot>
              <AiOutlineInstagram color={colors.white} />
            </BlackDot>
          </a>
        </HeaderContainer>
      </HeaderWrapper>
    </HeaderBackground>
  );
};

export default Header;
