import VoltarHome from "../../components/VoltarHome";
import ListaDeProjetos from "../../components/ListaDeProjetos";
import { Container, Titulo } from "./styles";

export default function PaginaProjetos() {
  return (
    <Container>
      <VoltarHome />
      <Titulo>Todos os Projetos</Titulo>
      <ListaDeProjetos mostrarAno />
    </Container>
  );
}
