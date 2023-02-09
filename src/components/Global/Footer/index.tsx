import { FooterWrapper, FooterContainer } from "./styles";

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <img
          src="footer.svg"
          alt="Logo da PROAC, do projeto Ater e do Governo do Estado de São Paulo"
        />
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
