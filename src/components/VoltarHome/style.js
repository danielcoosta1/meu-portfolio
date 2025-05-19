// src/components/VoltarHome.jsx
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Botao = styled(Link)`
  display: inline-block;
  margin-bottom: 2rem;
  background-color: #1e293b;
  color: #f8fafc;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  text-decoration: none;
  font-size: 0.9rem;
  transition: background 0.2s;

  &:hover {
    background-color: #334155;
  }
`;