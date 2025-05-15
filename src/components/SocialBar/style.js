import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  z-index: 5;

  @media (max-width: 1200px) {
    position: relative;
    left: 0;
    flex-direction: row;
    padding-left: 2rem;
   
    width: 100%;
    margin-top: 2rem;
  }
`;

export const SocialLink = styled(motion.a)`
  color: #8892b0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s;
`;

export const Line = styled.div`
  width: 1px;
  height: 80px;
  background-color: #8892b0;
  margin-top: 1rem;

  @media (max-width:1200px) {
    display: none;
  }
`;
