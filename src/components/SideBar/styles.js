import styled from "styled-components";

export const SidebarContainer = styled.aside`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-700px); // - metade do max-width do layout (1400px / 2)
  width: 350px;
  height: 100vh;
  padding: 3rem;
  background-color: #0a192f;
  color: #ccd6f6;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  z-index: 10;

  @media (max-width: 1400px) {
    width: 100%;
    position: relative;
    left: 0;

    transform: none;
    padding: 2rem; // ✅ uniformemente (2rem top/right/bottom/left)
    gap: 1rem;
  }
`;

export const Name = styled.h1`
  font-size: 4.5rem;
  font-weight: bold;
  color: white;
  margin-bottom: 0.5rem;
`;

export const Subtitle = styled.p`
  font-size: 1.75rem;
  color: #8892b0;
`;

export const NavList = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 3rem;
  @media (max-width: 1400px) {
    display: none;
  }
`;

export const NavItem = styled.a`
  font-size: 0.9rem;
  color: #8892b0;
  text-decoration: none;
  transition: color 0.2s;

  &:hover {
    color: #64ffda;
  }
`;

export const SocialLinksContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  margin-top: auto;
  @media (max-width: 1400px) {
    margin-bottom: 0;
    margin-top: 0;
  }
`;

export const SocialLink = styled.a`
  color: #8892b0;
  transition: color 0.2s;

  &:hover {
    color: #64ffda;
  }
`;
