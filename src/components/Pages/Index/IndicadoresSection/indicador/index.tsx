import { Container } from "./styles";

const Indicador: React.FC<{ title: string; image?: string }> = ({
  title,
  image,
}) => {
  return (
    <Container>
      <p>{title}</p>
      <div></div>
    </Container>
  );
};

export default Indicador;
