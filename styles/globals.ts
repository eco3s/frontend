import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
	${reset}

  :root {
    --LSG-color: #1EB79A;
    --MS-color: #00E6A4;
    --UFO-color: #3FE48A;
  }
  
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html,
  body {
    max-width: 100vw;
    overflow-x: hidden;
    transition: all .35s;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`