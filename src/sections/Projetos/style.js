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
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  margin-top: 2rem;
  padding: 0.75rem 1.5rem;
  background: transparent;
  border: none;
  border-radius: 0.25rem;
  color: #999;
  font-family: "Fira Code", monospace;
  font-size: 1.25rem;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;

  svg {
    transition: transform 0.3s ease, scale 0.3s ease;
  }

  &:hover {
    background-color: rgba(100, 255, 218, 0.1);
    color: #64ffda;

    svg {
      transform: translateX(4px) scale(1.2);
    }
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
    padding: 0.6rem 1.2rem;
  }
`;
