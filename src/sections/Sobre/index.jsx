import { SobreContainer, Titulo, Texto, Destaque } from "./style";

const Sobre = () => {
  return (
    <SobreContainer id="sobre">
      <Titulo>Sobre mim</Titulo>
      <Texto>
        Sou um{" "}
        <Destaque>
          Desenvolvedor Full Stack em formação (Ciência da Computação)
        </Destaque>{" "}
        com foco no ecossistema JavaScript (<Destaque>React.js</Destaque>,{" "}
        <Destaque>Node.js</Destaque>, <Destaque>Express</Destaque>). Utilizo a
        base lógica da <Destaque>Engenharia</Destaque> para projetar
        arquiteturas seguras e escaláveis com <Destaque>Prisma</Destaque> e{" "}
        <Destaque>MongoDB</Destaque>.
      </Texto>
    </SobreContainer>
  );
};

export default Sobre;
