import Image from "next/image";
import { FooterWrapper, FooterContainer } from "./styles";

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <Image
          width={260}
          height={260}
          src="/footer/logo-proac.png"
          alt="Logo da Proac"
        />
        <Image
          width={260}
          height={260}
          src="/footer/logo-ater.png"
          alt="Logo da Ater"
        />
        <Image
          width={260}
          height={260}
          src="/footer/logo-estado.png"
          alt="Logo do Estado de São Paulo"
        />
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
