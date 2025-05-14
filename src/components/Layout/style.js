import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

export const Content = styled.main`
  flex: 1;
  height: 100vh;
  overflow-y: auto;
  scroll-behavior: smooth;
  padding: 2rem; // ajustável
`;
