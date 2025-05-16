import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
  padding-left: 480px; // Sidebar (350px) + respiro
  box-sizing: border-box;
  position: relative;
  gap: 2rem;

  @media (max-width: 1400px) {
    flex-direction: column;
    gap: 0;
    padding: 0; // ✅ remove completamente qualquer padding no mobile
    height: 100dvh;
  }
`;

export const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
 
`;

export const Content = styled.main`
  width: 100%;
  max-width: 1200px;
  padding: 2rem 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 10rem;
 


  @media (max-width: 1200px){
    padding:2rem;
    gap: 6rem;
  }


`;
