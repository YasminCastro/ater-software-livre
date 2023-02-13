import { HorizontalLine } from "@/styles/Page";
import { Title } from "@mantine/core";
import { RModalImages } from "react-modal-images";
import {
  Container,
  InticadorContainer,
  IndicadorItem,
  Wrapper,
} from "./styles";

const ParticipeSection: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <HorizontalLine />
        <Title
          size="h2"
          style={{
            fontFamily: "'Lato', sans-serif",
          }}
        >
          INDICADORES
        </Title>

        <InticadorContainer>
          <IndicadorItem>
            <p>
              Geográfico {"<>"} Profissionais das Artes: indica a localização
              compartilhada no campo bio do perfil no Instagram.
            </p>
            <RModalImages
              small={"indicadores/artistas-geografico.png"}
              medium={"indicadores/artistas-geografico.png"}
              large={"indicadores/artistas-geografico.png"}
              alt={
                "Profissionais das Artes: indica a localização compartilhada no campo bio do perfil no Instagram."
              }
              className="modal-image"
            />
          </IndicadorItem>
          <IndicadorItem>
            <p>
              Geográfico {"<>"} Instituições de Arte: indica a localização
              compartilhada no campo bio do perfil no Instagram.
            </p>
            <RModalImages
              small={"indicadores/instituicoes-geografico.png"}
              medium={"indicadores/instituicoes-geografico.png"}
              large={"indicadores/instituicoes-geografico.png"}
              alt={
                "Instituições de Arte: indica a localização compartilhada no campo bio do perfil no Instagram."
              }
              className="modal-image"
            />
          </IndicadorItem>
          <IndicadorItem>
            <p>
              Quantidade de seguidores {"<>"} Profissionais das Artes: indica a
              quantidade de seguidores dos perfis no Instagram presentes na base
              de dados do projeto.
            </p>
            <RModalImages
              small={"indicadores/artistas-quantidade-seguidores.png"}
              medium={"indicadores/artistas-quantidade-seguidores.png"}
              large={"indicadores/artistas-quantidade-seguidores.png"}
              alt={
                "Profissionais das Artes: indica a quantidade de seguidores dos perfis no Instagram presentes na base de dados do projeto."
              }
              className="modal-image"
            />
          </IndicadorItem>
          <IndicadorItem>
            <p>
              Quantidade de seguidores {"<>"} Instituições de Arte: indica a
              quantidade de seguidores dos perfis no Instagram presentes na base
              de dados do projeto.
            </p>
            <RModalImages
              small={"indicadores/instituicoes-quantidade-seguidores.png"}
              medium={"indicadores/instituicoes-quantidade-seguidores.png"}
              large={"indicadores/instituicoes-quantidade-seguidores.png"}
              alt={
                "Instituições de Arte: indica a quantidade de seguidores dos perfis no Instagram presentes na base de dados do projeto."
              }
              className="modal-image"
            />
          </IndicadorItem>
          <IndicadorItem>
            <p>
              Nuvem de palavras com os principais termos que aparecem nas bios
              dos perfis no Instagram dos profissionais das artes presentes na
              base de dados do projeto.
            </p>
            <RModalImages
              small={"indicadores/nuvem_1.png"}
              medium={"indicadores/nuvem_1.png"}
              large={"indicadores/nuvem_1.png"}
              alt={
                "Nuvem de palavras com os principais termos que aparecem nas bios dos perfis no Instagram dos profissionais das artes presentes na base de dados do projeto."
              }
              className="modal-image"
            />
          </IndicadorItem>
          <IndicadorItem>
            <p>
              Nuvem de palavras com os principais termos que aparecem nas bios
              dos perfis no Instagram dos profissionais das artes presentes na
              base de dados do projeto.
            </p>
            <RModalImages
              small={"indicadores/nuvem_2.png"}
              medium={"indicadores/nuvem_2.png"}
              large={"indicadores/nuvem_2.png"}
              alt={
                "Nuvem de palavras com os principais termos que aparecem nas bios dos perfis no Instagram dos profissionais das artes presentes na base de dados do projeto."
              }
              className="modal-image"
            />
          </IndicadorItem>
        </InticadorContainer>
      </Container>
    </Wrapper>
  );
};

export default ParticipeSection;
