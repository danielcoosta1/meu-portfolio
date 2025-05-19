import ListaDeProjetos from "../../components/ListaDeProjetos";
import { Container, Titulo, BotaoTodos } from "./style";
import { useNavigate } from "react-router-dom";

export default function Projetos() {
  const navigate = useNavigate();

  return (
    <Container id="projetos">
      <Titulo>Projetos em destaque</Titulo>
      <ListaDeProjetos apenasDestaques />
      <BotaoTodos onClick={() => navigate("/projetos")}>
        Ver todos os projetos
      </BotaoTodos>
    </Container>
  );
}
