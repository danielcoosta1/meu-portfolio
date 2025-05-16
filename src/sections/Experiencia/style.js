import styled from "styled-components";

export const Container = styled.section`
  max-width: 900px;
  margin: 0 auto;
`;

export const Titulo = styled.h2`
  font-size: 2rem;
  color: #64ffda;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const Lista = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const Card = styled.div`
  border-left: 2px solid #64ffda;
  padding-left: 1em;
  transition: background 0.3s;
  &:hover {
    background-color: rgba(100, 255, 218, 0.05);
  }

  ul {
    padding: 0;
  }
`;

export const Cargo = styled.h3`
  font-size: 1.3rem;
  color: #ccd6f6;
  margin-bottom: 0.5rem;
`;

export const Empresa = styled.p`
  font-size: 1rem;
  color: #8892b0;
`;

export const Periodo = styled.span`
  font-style: italic;
  color: #a8b2d1;
`;

export const Tarefa = styled.li`
  font-size: 0.95rem;
  color: #a8b2d1;
  line-height: 1.6;
  
`;

export const SkillsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`;

export const SkillTag = styled.span`
  background-color: #112240;
  color: #64ffda;
  font-size: 0.85rem;
  padding: 0.4rem 0.75rem;
  border-radius: 0.25rem;
  border: 1px solid #64ffda;
  font-family: "Fira Code", monospace;
  transition: background 0.2s ease;

  &:hover {
    background-color: #0f1f2e;
  }
`;
