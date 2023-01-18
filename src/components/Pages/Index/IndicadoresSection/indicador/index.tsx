import { Container } from "./styles";

const Indicador: React.FC<{ title: string; image?: string }> = ({
  title,
  image,
}) => {
  let imagePlaceholder = image ? image : "placeholder.png";
  return (
    <Container>
      <p>{title}</p>
      <img src={imagePlaceholder} />
    </Container>
  );
};

export default Indicador;
