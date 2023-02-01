import { ButtonsBlock, Container, Content, Wrapper } from "./styles";
import { IoIosArrowForward } from "react-icons/io";
import { colors } from "@/styles/GlobalStyles";
import { Title } from "@mantine/core";

const MetodologiaSection: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <Title
          size="h2"
          style={{
            fontFamily: "'Lato', sans-serif",
          }}
        >
          METODOLOGIA
        </Title>
        <Content>
          <p>
            A base de dados do projeto {"<ATER>"} é composta por um mapeamento
            com uma amostragem de mais de 400 perfis do Instagram de artistas e
            curadores negros e/ou indígenas brasileiros e mais de 30 perfis de
            instituições de arte brasileiras coletados entre os meses de
            setembro e novembro de 2022.
          </p>
          <br />
          <p>
            A intenção inicial do projeto era que esses perfis fossem
            selecionados de forma automatizada pela mineradora de dados Lorraine
            Mendes, tendo como parâmetro as categorias Artista e Arte do próprio
            Instagram e alguns termos seletores, como as palavras negro e
            indígena, por exemplo. Porém, isso não foi possível, já que essa
            rede social não disponibiliza essas categorias de forma livre em seu
            código, limitando, com isso, as possibilidades e escopo da base de
            dados do projeto. Um ponto importante a ressaltar é que o Instagram
            cria todo tipo de dificuldade possível para o acesso a seus dados. A
            partir disso, tivemos que recorrer à criação de uma base de dados
            manual, realizada por uma força-tarefa formada por todas as
            integrantes da equipe de desenvolvimento do projeto {"<ATER>"}.
          </p>
          <br />
          <p>
            Essa base de dados manual teve como pontos de partida uma curadoria
            prévia de Larissa Macêdo, que acompanha desde 2018 a produção
            artística e a presença nas redes sociais de artistas brasileiros; a
            consulta a bases de dados de mapeamentos artísticos já existentes,
            como{" "}
            <a href="https://projetoafro.com" target="_blank" rel="noreferrer">
              projeto afro
            </a>
            ;{" "}
            <a
              href="https://www.trabajadoresdearte.org/sitio/mapa-das-artistas-curadoras-e-educadoras-de-arte-racializadas-no-brasil/"
              target="_blank"
              rel="noreferrer"
            >
              mapa de artistas, curadoras e educadoras de arte racializadas no
              Brasil do coletivo Nacional Trovoa
            </a>
            ;
            <a
              href="https://www.trabajadoresdearte.org/sitio/mapa-das-curadoras-e-curadores-negras-negros-e-indigenas/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              mapa das curadoras e curadores negras, negros e indígenas
              brasileiras
            </a>
            ; e a criação e compartilhamento de uma{" "}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdD2oQPx-yUi2PcpaSWELf_LcSbWElYHhhiCLHQfsbsUzhttA/viewform?usp=sf_link"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              chamada pública de mapeamento para artistas negros e indígenas
              brasileiros
            </a>{" "}
            que tivessem interesse em contribuir com a base de dados do projeto.
            Essa chamada ficará aberta em fluxo contínuo para todos que quiserem
            colaborar e participar de outras etapas da série {"<ATER>"}.
          </p>
          <br />
          <p>
            Já a seleção dos perfis das instituições artísticas foi construída a
            partir do diálogo entre Larissa Macêdo e Lucas Castro, idealizadores
            do projeto, considerando uma amostragem baseada na localidade das
            instituições, com o intuito de ter uma representação de todas as
            regiões do Brasil, no porte e na relevância dessas instituições para
            o sistema da arte nacional.
          </p>
          <br />
          <p>
            As informações que fazem parte da base de dados do projeto são todas
            aquelas que conseguimos extrair dos perfis do Instagram de forma
            manual e que, portanto, são de conhecimento de todos que fazem parte
            dessa rede social. Devido às restrições da plataforma, não foi
            possível incluir as informações relativas às postagens. Portanto, a
            base de dados é composta pelas seguintes informações:
          </p>
          <br />
          <p>
            Perfil do Instagram (@); link do perfil no Instagram; atuação; nome;
            categoria; site; opções de contato; se o perfil é verificado ou não;
            se o perfil é público ou privado; quantidade publicações; quantidade
            de seguidores; quantidade de perfis que segue; e todas as
            informações que aparecem no campo de texto da bio, como, por
            exemplo: país, região (residência), estado (residência), cidade
            (residência) etc.
          </p>
          <br />
          <p>
            Os dados referentes a raça, gênero, atuação (artista, curador etc.),
            tipo de perfil (coletivo ou individual), região, estado e cidade de
            residência só estão disponíveis no caso de pessoas que forneceram
            essas informações no campo “bio” do perfil no Instagram ou que
            contribuíram com a chamada pública de mapeamento do projeto.
          </p>
          <br />
          <p>
            A escolha do Instagram como rede social baseia-se no amplo uso dessa
            plataforma no Brasil e no mundo. Segundo a pesquisa Digital 2022:
            Global Digital Overview, o Instagram é a sexta rede social mais
            utilizada no mundo e ocupa a quarta posição no ranking brasileiro.
            Além disso, essa é uma rede social audiovisual, com foco em
            publicações de ordem imagética e, por isso, tende a ter uma adesão
            maior de artistas, curadores e demais trabalhadores da arte.
          </p>
          <br />
          <p>
            A base de dados do projeto {"<ATER>"} é pública e pode ser acessada{" "}
            <a
              href="https://docs.google.com/spreadsheets/d/1vnp8Wf_mI4kMCqwsS16bwBZX43kz2EAPgy9CuYcn190/edit?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              aqui
            </a>
            . O código do software também é público e pode ser acessado{" "}
            <a
              href="https://github.com/projetoater/software"
              target="_blank"
              rel="noreferrer"
            >
              aqui
            </a>
            . É para todos que desejam conhecer e compreender o projeto, e
            também serve como contribuição para pesquisas no campo da arte e
            tecnologia e demais áreas correlatas.
          </p>
          <br />
        </Content>
        <ButtonsBlock>
          <a
            href="https://docs.google.com/spreadsheets/d/1vnp8Wf_mI4kMCqwsS16bwBZX43kz2EAPgy9CuYcn190/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            acesso à planilha
            <IoIosArrowForward color={colors.white} />
          </a>

          <a
            href="https://github.com/projetoater/software"
            target="_blank"
            rel="noreferrer"
          >
            acesso ao código
            <IoIosArrowForward color={colors.white} />
          </a>
        </ButtonsBlock>
      </Container>
    </Wrapper>
  );
};

export default MetodologiaSection;
