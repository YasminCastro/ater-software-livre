import { colors } from "@/styles/GlobalStyles";
import { AiOutlineInstagram } from "react-icons/ai";
import { Burger } from "@mantine/core";
import { Drawer } from "@mantine/core";

import {
  HeaderWrapper,
  HeaderContainer,
  HeaderRight,
  HeaderLeft,
} from "./styles";
import { useState } from "react";

const Header: React.FC = () => {
  const [opened, setOpened] = useState(false);

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderLeft>
          <a href="https://www.projetoater.com.br">Início</a>
          <a href="#">Software</a>
          <a href="https://www.projetoater.com.br/c%C3%B3pia-in%C3%ADcio">
            Educativo
          </a>
          <a href="https://www.projetoater.com.br/c%C3%B3pia-educativo">
            Outros desdobramentos
          </a>
          <a href="https://www.projetoater.com.br/c%C3%B3pia-educativo-1">
            Contato
          </a>
        </HeaderLeft>
        <HeaderRight>
          <a
            className="instagram-icon"
            href="https://www.instagram.com/projetoater"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <AiOutlineInstagram color={colors.white} size={32} />
          </a>
          <div className="menu-mobile">
            <Burger
              className="burger"
              color={colors.white}
              opened={false}
              onClick={() => setOpened((o) => !o)}
            />
            <Drawer
              position="right"
              opened={opened}
              onClose={() => setOpened(false)}
              padding="xl"
              size="50%"
              styles={{
                drawer: { background: "black" },
                body: {
                  color: "white",
                },
                closeButton: { color: "white" },
              }}
            >
              <a
                href="https://yasmincanabrava.wixsite.com/ater"
                style={stylesA}
              >
                Início
              </a>
              <hr style={stylesHR} />
              <a href="#" style={stylesA}>
                Software
              </a>
              <hr style={stylesHR} />

              <a href="#" style={stylesA}>
                Educativo
              </a>
              <hr style={stylesHR} />

              <a href="#" style={stylesA}>
                Outros desdobramentos
              </a>
              <hr style={stylesHR} />

              <a href="#" style={stylesA}>
                Contato
              </a>
            </Drawer>
          </div>
        </HeaderRight>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;

const stylesA = {
  color: colors.white,
  fontSize: "24px",
};

const stylesHR = {
  marginBottom: 14,
  marginTop: 14,
};
