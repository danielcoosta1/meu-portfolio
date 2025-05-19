import styled from "styled-components";

export const Lista = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  flex: 1;
`;

export const Nome = styled.h3`
  font-size: 1.3rem;
  color: #ccd6f6;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const Descricao = styled.p`
  font-size: 0.95rem;
  color: #a8b2d1;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

export const Tecnologias = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const Tag = styled.span`
  background-color: #112240;
  color: #64ffda;
  font-size: 0.85rem;
  padding: 0.4rem 0.75rem;
  border-radius: 0.25rem;
  border: 1px solid #64ffda;
  font-family: "Fira Code", monospace;
  transition: background 0.2s ease;

  @media (max-width: 768px) {
    font-size: 0.75rem;
    padding: 0.3rem 0.65rem;
  }

  &:hover {
    background-color: #0f1f2e;
  }
`;

export const Links = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 0.5rem;
`;

export const Projeto = styled.div`
  display: flex;

  gap: 1rem;

  border-left: 2px solid #64ffda;
  padding: 1em 0.75em;
  transition: all 0.3s ease;
  background-color: rgba(100, 255, 218, 0.02);
  border-radius: 4px;

  &:hover {
    background-color: rgba(100, 255, 218, 0.05);
    transform: translateY(-4px);
    border-left: 3px solid #64ffda;
    box-shadow: 0 0 10px rgba(100, 255, 218, 0.3),
      0 0 20px rgba(100, 255, 218, 0.2), 0 0 30px rgba(100, 255, 218, 0.1);
  }

 
`;

export const WrapperImagem = styled.div`
  width: 160px;
  flex-shrink: 0;

  @media (max-width: 768px) {
   
    width: 100%;
    max-width: 150px; /* <- Limita a largura da imagem em mobile */
  }
`;

export const Imagem = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 4px;
  border: 1px solid #233554;
  @media (max-width: 768px) {
    display: block;
    margin: 0 auto;
  }
`;

export const LinkEstilizado = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  background: transparent;
  color: #999;
  font-family: "Fira Code", monospace;
  font-size: 0.85rem;
  text-decoration: none;
  border: none;
  padding: 0.6rem 1rem;
  border-radius: 0.25rem;
  transition: all 0.3s ease;
  cursor: pointer;

  svg {
    transition: transform 0.3s ease;
  }

  &:hover {
    background-color: rgba(100, 255, 218, 0.1);
    color: #64ffda;

    svg {
      transform: translateX(4px) scale(1.2);
    }
  }
`;
