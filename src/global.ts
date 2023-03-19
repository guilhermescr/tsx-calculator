import { createGlobalStyle, GlobalStyleComponent } from 'styled-components';

const GlobalStyles: GlobalStyleComponent<any, any> = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    padding: 0;
  }

  :root {
    font-size: 62.5%;
  }

  html {
    scroll-behavior: smooth;
  }

  html, body {
    background-image: linear-gradient(200deg, #5EF9D1 20%, #15C6F0, #095DA6);
    height: 100%;
    width: 100%;
  }

  body {
    font-size: 1.6rem;
  }
`;

export default GlobalStyles;
