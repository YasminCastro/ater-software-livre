import { TitleWrapper } from "./styles";

export const Title: React.FC<{ title: string }> = ({ title }) => {
  return (
    <TitleWrapper>
      <div>
        <h2>{title}</h2>
      </div>
    </TitleWrapper>
  );
};
