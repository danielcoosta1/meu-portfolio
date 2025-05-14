import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
  padding-left: 370px; // ⬅️ 350px do sidebar + um pequeno respiro
  box-sizing: border-box;
  position: relative;
  gap: 2rem;
`;

export const ContentWrapper = styled.div`
  flex: 1; /* O conteúdo vai ocupar o restante do espaço */
  display: flex;
  justify-content: center; /* Centraliza o conteúdo à direita */
  padding: 2rem;
  /* Adiciona scroll no conteúdo */
`;

export const Content = styled.main`
  width: 100%;
  max-width: 1200px; /* Limita a largura do conteúdo */
  padding: 2rem;
  box-sizing: border-box;
`;
