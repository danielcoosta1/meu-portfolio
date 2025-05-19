import { SobreContainer, Titulo, Texto, Destaque } from "./style";

const Sobre = () => {
  return (
    <SobreContainer id="sobre">
      <Titulo>Sobre mim</Titulo>
      <Texto>
        Olá! Sou um desenvolvedor front-end em transição de carreira, com uma
        base sólida em Engenharia Elétrica e experiência no setor de energia
        solar. Hoje, aplico minha visão estratégica e habilidades de liderança
        no desenvolvimento de soluções web modernas, funcionais e centradas no
        usuário.
      </Texto>

      <Texto>
        Atualmente, utilizo <Destaque>HTML</Destaque>, <Destaque>CSS</Destaque>,{" "}
        <Destaque>JavaScript</Destaque>, <Destaque>TypeScript</Destaque>,{" "}
        <Destaque>ReactJS</Destaque> e <Destaque>Node.js</Destaque> para
        construir aplicações responsivas, com atenção especial à usabilidade e
        boas práticas de código.
      </Texto>

      <Texto>
        Busco oportunidades para colaborar com times de tecnologia e contribuir
        com soluções criativas que unam performance, acessibilidade e uma
        excelente experiência para o usuário.
      </Texto>
    </SobreContainer>
  );
};

export default Sobre;
