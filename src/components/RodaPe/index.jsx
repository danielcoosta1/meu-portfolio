import { Container, Texto, LinkDestaque } from "./style";

const RodaPe = () => {
  return (
    <Container>
      <Texto>
        Projetado no{" "}
        <LinkDestaque href="https://www.figma.com/" target="_blank" rel="noopener noreferrer">
          Figma
        </LinkDestaque>{" "}
        e desenvolvido no{" "}
        <LinkDestaque href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">
          Visual Studio Code
        </LinkDestaque>
        . Construído com{" "}
        <LinkDestaque href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
          ReactJS
        </LinkDestaque>{" "}
        e{" "}
        <LinkDestaque href="https://styled-components.com/" target="_blank" rel="noopener noreferrer">
          Styled-Components
        </LinkDestaque>
        , implantado via{" "}
        <LinkDestaque href="https://vercel.com/" target="_blank" rel="noopener noreferrer">
          Vercel
        </LinkDestaque>
        .
      </Texto>
    </Container>
  );
};

export default RodaPe;
