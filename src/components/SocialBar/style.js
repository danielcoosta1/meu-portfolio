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

  &:hover .line-vertical {
    height: 120px;
  }

  &:hover .line-horizontal {
    width: 120px;
  }

  &:hover .icon {
    transform: translateY(-6px);
    margin-bottom: 0.3rem;
  }

  @media (max-width: 1400px) {
    position: relative;
    left: 0;
    flex-direction: row;
    padding-left: 2rem;
    width: 100%;
    margin-top: 2rem;

    &:hover .line-horizontal {
      width: 120px;
    }

    &:hover .icon {
      transform: translateX(-3px);
    }
  }
`;

export const SocialLink = styled(motion.a)`
  color: #8892b0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s;

  .icon {
    font-size: 35px;
    transition: transform 0.3s ease, margin-bottom 0.3s ease;

    @media (max-width: 1200px) {
      font-size: 26px;
    }

    @media (max-width: 768px) {
      font-size: 22px;
    }
  }
`;

export const LineH = styled.div`
  width: 1px;
  height: 80px;
  background-color: #8892b0;
  margin-top: 1rem;
  transition: height 0.3s ease;

  @media (max-width: 1400px) {
    display: none;
  }

  &.line-vertical {
    /* Usado para hover */
  }
`;

export const LineV = styled.div`
  width: 80px;
  height: 1px;
  background-color: #8892b0;
  margin-left: 1rem;
  display: none;
  transition: width 0.3s ease;

  @media (max-width: 1400px) {
    display: inline-block;
  }

  &.line-horizontal {
    /* Usado para hover */
  }
`;
