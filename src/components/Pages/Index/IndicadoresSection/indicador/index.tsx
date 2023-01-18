import { Container } from "./styles";

const Indicador: React.FC<{ title: string; image?: string }> = ({
  title,
  image,
}) => {
  const imagePlaceholder = "";
  return (
    <Container>
      <p>{title}</p>
      <img src="placeholder.png" />
    </Container>
  );
};

export default Indicador;
