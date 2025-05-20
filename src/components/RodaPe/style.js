import styled from "styled-components";

export const Container = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  background-color: #0a192f;
`;

export const Texto = styled.p`
  font-size: 0.85rem;
  line-height: 1.5;
  color: #ccd6f6;
  text-align: center;
  max-width: 800px;
`;

export const LinkDestaque = styled.a`
  color: #64ffda;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #ffffff;
    text-decoration: underline;
  }
`;
