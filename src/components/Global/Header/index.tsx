import { colors } from "@/styles/GlobalStyles";
import { AiOutlineInstagram } from "react-icons/ai";

import { HeaderWrapper, HeaderContainer } from "./styles";

const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <a href="#">Início</a>
        <a href="#">Software</a>
        <a href="#">Educativo</a>
        <a href="#">Outros desdobramentos</a>
        <a href="#">Contato</a>
        <a
          href="https://www.instagram.com/projetoater"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineInstagram color={colors.white} size={32} />
        </a>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
