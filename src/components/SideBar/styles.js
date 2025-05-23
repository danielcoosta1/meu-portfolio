import styled from "styled-components";
import { motion } from "framer-motion";

export const SidebarContainer = styled.aside`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-800px);
  width: 550px;
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
    padding: 2rem;
    gap: 1rem;
  }
`;

export const Name = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  color: white;
  margin-bottom: 0.5rem;
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const Subtitle = styled.p`
  width: 80%;
  font-size: 1.25rem;
  color: #8892b0;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const SubtitleDestaque = styled(Subtitle)`
  color: #fff;
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

export const NavItem = styled(motion.button)`
  all: unset; // remove estilos padrão de botão
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 1rem;
  text-transform: uppercase;
`;

export const NavItemLine = styled(motion.div)`
  height: 2px;
  background-color: #64ffda;
`;

export const NavItemContent = styled(motion.span)`
  font-size: 0.9rem;
  color: #8892b0;
`;
