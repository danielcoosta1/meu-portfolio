import styled from "styled-components";

export const SobreContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

export const Titulo = styled.h2`
  font-size: 2rem;
  color: #64ffda;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const Texto = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #ccd6f6;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const Destaque = styled.span`
  color: #64ffda;
  font-weight: 600;
`;
