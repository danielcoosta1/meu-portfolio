import styled from "styled-components";
import { motion } from "framer-motion";

export const SidebarContainer = styled.aside`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-800px);
  width: 450px;
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
  font-size: 3.5rem;
  font-weight: bold;
  color: white;
  margin-bottom: 0.5rem;
`;

export const Subtitle = styled.p`
  font-size: 1.25rem;
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

export const NavItem = styled(motion.a)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  gap: 1rem;
  cursor: pointer;
`;

export const NavItemLine = styled(motion.div)`
  height: 2px;
  background-color: #64ffda;
`;

export const NavItemContent = styled(motion.span)`
  font-size: 0.9rem;
  color: #8892b0;
`;


