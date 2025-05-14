// src/styles/global.js
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    overflow: hidden;  /* Impede que o scroll afete o body */
    font-family: 'Inter', sans-serif;
    display: flex;
    justify-content: center; /* Centraliza o layout na tela */
  }
  
  * {
    box-sizing: border-box;
  }

  body {
    background-color: #0a192f;
    color: #fff;
    width: 100%;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }
`;
