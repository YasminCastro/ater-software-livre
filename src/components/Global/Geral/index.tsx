import { TitleWrapper } from "./styles";

export const Title: React.FC<{ title: string }> = ({ title }) => {
  return (
    <TitleWrapper>
      <h2>{title}</h2>
    </TitleWrapper>
  );
};
