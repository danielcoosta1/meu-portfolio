// src/components/Layout/styles.js
import styled from "styled-components";

export const SidebarContainer = styled.aside`
  width: 550px;
  height: 100vh;
  padding: 2rem;
  background-color: #0a192f;
  color: #ccd6f6;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: sticky;
  top: 0;
  align-self: flex-start;
  box-sizing: border-box;
`;

export const Content = styled.main`
  flex: 1;
  height: 100%;
  overflow-y: auto;
  scroll-behavior: smooth;
  padding-right: 1rem; /* Espaço interno à direita */
  max-width: 100%; /* Garante que o Content respeite o máximo do container */
  width: 100%; /* Garante que o Content ocupe toda a largura disponível */
`;
