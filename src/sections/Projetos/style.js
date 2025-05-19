import styled from "styled-components";

export const Container = styled.section`
  margin-top: 6rem;
`;

export const Titulo = styled.h2`
  font-size: 2rem;
  color: #64ffda;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const BotaoTodos = styled.button`
  margin-top: 2rem;
  background-color: transparent;
  color: #64ffda;
  border: 1px solid #64ffda;
  padding: 0.75rem 1.5rem;
  border-radius: 0.25rem;
  cursor: pointer;
  font-family: "Fira Code", monospace;
  font-size: 0.95rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(100, 255, 218, 0.1);
    transform: translateY(-2px);
    box-shadow: 0 0 10px rgba(100, 255, 218, 0.3);
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;
    padding: 0.6rem 1.2rem;
  }
`;
