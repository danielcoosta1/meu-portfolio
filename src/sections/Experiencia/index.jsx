import {
  Container,
  Titulo,
  Lista,
  Card,
  Cargo,
  Empresa,
  Periodo,
  Tarefa,
  SkillsWrapper,
  SkillTag
} from "./style";
import experiencias from "../../mocks/experiencias";

export default function Experiencia() {
  return (
    <Container id="experiencia">
      <Titulo>Experiência</Titulo>
      <Lista>
        {experiencias.map((item, index) => (
          <Card key={index}>
            <Cargo>{item.cargo}</Cargo>
            <Empresa>{item.empresa} — <Periodo>{item.periodo}</Periodo></Empresa>
            <ul>
              {item.responsabilidades.map((res, i) => (
                <Tarefa key={i}>{res}</Tarefa>
              ))}
            </ul>
            <SkillsWrapper>
              {item.skills.map((skill, i) => (
                <SkillTag key={i}>{skill}</SkillTag>
              ))}
            </SkillsWrapper>
          </Card>
        ))}
      </Lista>
    </Container>
  );
}
