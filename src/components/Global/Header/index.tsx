import Link from "next/link";

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
          <Link href="/" passHref>
            software
          </Link>
          <Link href="/chatbots" passHref>
            educativo
          </Link>
          <Link href="/notificacoes" passHref>
            outros desdobramentos
          </Link>
          <Link href="/aplicativos" passHref>
            <BlackDot />
          </Link>
        </HeaderContainer>
      </HeaderWrapper>
    </HeaderBackground>
  );
};

export default Header;
