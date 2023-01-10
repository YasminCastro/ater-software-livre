import {
  ButtonsBlock,
  Container,
  Content,
  ContentBlock,
  Square,
  Title,
  Wrapper,
} from "./styles";

const MetodologiaSection: React.FC = () => {
  return (
    <Wrapper>
      <Square />
      <Container>
        <ContentBlock>
          <Title>
            <div>
              <h2>metodologia</h2>
              <p>o que consideramos para a construção do software?</p>
            </div>
          </Title>
          <Content>
            <p>
              A base de dados do projeto {"<ATER>"} é composta por um mapeamento
              de X perfis do Instagram de artistas e curadores negros e/ou
              indigenas brasileiros e de X perfis de instituicoes de arte
              brasileiras coletadas entre os meses de setembro a novembro de
              2022.
            </p>
            <br />
            <p>
              A intenção inicial do projeto era que esses perfis fossem
              selecionados de forma automatizada pela mineradora de dados
              Lorraine Mendes, tendo como parâmetro a categoria Artista e Arte
              do próprio Instagram e alguns termos seletores como as palavras
              negro e indigena, por exemplo. Porém, isso não foi possível já que
              a rede social não disponibiliza essas categorias de forma livre em
              seu código. Um ponto importante para ressaltar é que o Instagram
              cria todo tipo de dificuldade possível para o acesso aos seus
              dados. A partir disso, tivemos que recorrer a criação de uma base
              de dados manual com preenchimento de uma força tarefa formada por
              todas as integrantes da equipe de desenvolvimento do projeto{" "}
              {"<ATER>"}.
            </p>
            <br />
            <p>
              Essa base de dados manual teve como critério inicial uma curadoria
              prévia de Larissa Macêdo, que acompanha desde 2018 a produção
              artística e a presença nas redes sociais de artistas brasileiros;
              a consulta à base de dados de mapeamentos artísticos já existentes
              como: projeto afro; mapa de artistas, curadoras e educadoras de
              arte racializadas no Brasil do coletivo Nacional Trovoa; mapa das
              curadoras e curadores negras, negros e indígenas brasileiras e a
              criação e comparitlhamento de uma chamada pública de mapeamento
              para artistas negros e indigenas brasileiros que tivessem
              interesse em contribuir com a base de dados do projeto. Essa
              chamada continua aberta para todos que quiserem colaborar e
              participar de futuras etapas da série {"<ATER>"}.
            </p>
            <br />
            <p>
              Já a seleção dos perfis das instituições artísticas foi construída
              a partir do diálogo entre Larissa Macêdo e Lucas Castro,
              idealizadores do projeto, considerando a localidade das
              instituições com o intuito de ter uma representação de todas as
              regiões do Brasil, o porte e a relevância dessas instituições no
              sistema da arte nacional.
            </p>
            <br />
            <p>
              As informações que fazem parte da base de dados do projeto
              consistem em todas as informações que conseguimos extrair dos
              perfis do Instagram de forma manual, e que, portanto, são de
              conhecimento público de todos que fazem parte dessa rede social.
              Com isso, devido às restrições da plataforma, não foi possível
              incluir as informações relativas às postagens. Portanto, a base de
              dados é composta pelas seguintes informações:
            </p>
            <br />
            <p>
              Perfil Instagram (@); Link do Perfil no Instagram; Atuação; Nome;
              Categoria; bio; Site; Opçoes de contato; perfil verificado; Perfil
              público ou privado; quantidade publicações; quantidade seguidores;
              quantidade seguindo; país; região (residência); estado
              (residência); cidade (residência); Perfil Individual ou Coletivo?.
            </p>
            <br />
            <p>
              Os dados referentes à raça, gênero, atuação (artista, curador,
              etc) tipo de perfil (coletivo ou individual), região, estado e
              cidade de residência só estão disponíveis para as pessoas que
              trazem essas informações no campo “bio” do perfil no Instagram ou
              que contribuíram com o mapeamento do projeto.
            </p>
            <br />
            <p>
              A escolha do Instagram como rede social baseia-se no amplo uso
              dessa plataforma no Brasil e no mundo. Segundo a pesquisa Digital
              2022: Global Digital Overview, o Instagram é a sexta rede social
              mais utilizada no mundo e ocupa a quarta posição no ranking
              brasileiro . Além disso, essa é uma rede social audiovisual, com
              foco em publicações de ordem imagética e, por isso, tende a ter
              uma adesão maior de artistas, curadores e demais trabalhadores da
              arte.
            </p>
            <br />
            <p>
              A base de dados do projeto {"<ATER>"} é pública e pode ser
              acessada aqui (inlcuir link). Para todos que desejarem conhecer,
              compreender o projeto e também como contribuição para futuras
              pesquisas no campo da arte e tecnologia.
            </p>
            <br />
          </Content>
        </ContentBlock>
        <ButtonsBlock>
          <a href="#">acesso à planilha</a>
          <a href="#">acesso ao código</a>
        </ButtonsBlock>
      </Container>
    </Wrapper>
  );
};

export default MetodologiaSection;
