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
          <Link href="#" passHref>
            software
          </Link>
          <Link href="#" passHref>
            educativo
          </Link>
          <Link href="#" passHref>
            outros desdobramentos
          </Link>
          <Link href="#" passHref>
            <BlackDot />
          </Link>
        </HeaderContainer>
      </HeaderWrapper>
    </HeaderBackground>
  );
};

export default Header;
