import { createGlobalStyle } from "styled-components";

export const globalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
    background-color: #0a192f;
    color: #fff;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;
