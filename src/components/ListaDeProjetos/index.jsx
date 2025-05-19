import { useEffect, useState } from "react";
import {
  Lista,
  Projeto,
  Nome,
  Descricao,
  Tecnologias,
  Tag,
  Links,
  Imagem,
  WrapperImagem,
  LinkEstilizado,
  AnoProjeto,
} from "./style";

import { GoLinkExternal } from "react-icons/go";
import { FaGithub } from "react-icons/fa";

export default function ListaDeProjetos({
  apenasDestaques = false,
  mostrarAno = false,
}) {
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
          {mostrarAno && <AnoProjeto>{projeto.ano}</AnoProjeto>}

          {!mostrarAno && (
            <WrapperImagem>
              <Imagem
                src={projeto.imagem}
                alt={`Thumb do projeto ${projeto.nome}`}
              />
            </WrapperImagem>
          )}

          <div>
            <Nome>{projeto.nome}</Nome>
            <Descricao>{projeto.descricao}</Descricao>
            <Tecnologias>
              {projeto.tecnologias.map((tec, i) => (
                <Tag key={i}>{tec}</Tag>
              ))}
            </Tecnologias>
            <Links>
              {projeto.link && projeto.link !== "#" ? (
                <LinkEstilizado
                  href={projeto.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  Ver projeto <GoLinkExternal size={16} />
                </LinkEstilizado>
              ) : (
                <LinkEstilizado as="span" $desabilitado>
                  Deploy em breve
                </LinkEstilizado>
              )}

              <LinkEstilizado
                href={projeto.repositorio}
                target="_blank"
                rel="noreferrer"
              >
                GitHub <FaGithub size={16} />
              </LinkEstilizado>
            </Links>
          </div>
        </Projeto>
      ))}
    </Lista>
  );
}
