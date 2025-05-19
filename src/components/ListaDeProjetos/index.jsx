import { useEffect, useState } from "react";
import {
  Lista,
  Projeto,
  Nome,
  Descricao,
  Tecnologias,
  Tag,
  Links,
  Botao,
  Imagem,
} from "./style";

export default function ListaDeProjetos({ apenasDestaques = false }) {
  const [projetos, setProjetos] = useState([]);

  useEffect(() => {
    fetch("/mocks/projetos.json")
      .then((res) => res.json())
      .then((data) => {
        if (apenasDestaques) {
          setProjetos(data.filter((proj) => proj.destaque));
        } else {
          setProjetos(data);
        }
      });
  }, [apenasDestaques]);

  return (
    <Lista>
      {projetos.map((projeto, index) => (
        <Projeto key={index}>
          <Imagem
            src={projeto.imagem}
            alt={`Thumb do projeto ${projeto.nome}`}
          />
          <Nome>{projeto.nome}</Nome>
          <Descricao>{projeto.descricao}</Descricao>
          <Tecnologias>
            {projeto.tecnologias.map((tec, i) => (
              <Tag key={i}>{tec}</Tag>
            ))}
          </Tecnologias>
          <Links>
            {projeto.link ? (
              <Botao href={projeto.link} target="_blank" rel="noreferrer">
                Ver projeto
              </Botao>
            ) : (
              <Botao as="span" style={{ opacity: 0.6 }}>
                Deploy em breve
              </Botao>
            )}
            <Botao href={projeto.repositorio} target="_blank" rel="noreferrer">
              GitHub
            </Botao>
          </Links>
        </Projeto>
      ))}
    </Lista>
  );
}
