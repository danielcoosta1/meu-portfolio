// src/components/Sidebar/styles.js
import styled from "styled-components";

export const SidebarContainer = styled.aside`
  width: 550px;
  height: 100vh;
  padding: 3rem;
  background-color: #0a192f;
  color: #ccd6f6;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
`;


export const Name = styled.h1`
  font-size: 4.5rem;
  font-weight: bold;
  color: white; /* Texto branco */
  margin-bottom: 0.5rem;
`;

export const Subtitle = styled.p`
  font-size: 1.75rem;
  color: #8892b0; /* Cinza claro */
`;

export const NavList = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 3rem;
`;

export const NavItem = styled.a`
  font-size: 0.9rem;
  color: #8892b0; /* Links em cinza claro */
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: #64ffda; /* Cor de destaque no hover */
  }
`;

export const SocialLinksContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 3rem;
`;

export const SocialLink = styled.a`
  color: #8892b0; /* Ícones das redes sociais em cinza claro */
  transition: color 0.2s;

  &:hover {
    color: #64ffda; /* Cor de destaque no hover */
  }
`;
