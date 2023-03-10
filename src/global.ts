import { createGlobalStyle, GlobalStyleComponent } from 'styled-components';

const GlobalStyles: GlobalStyleComponent<any, any> = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    padding: 0;
    outline: 0;
  }

  html, body {
    height: 100%;
    width: 100%;
  }

  body {
    background-image: linear-gradient(200deg, #5EF9D1 20%, #15C6F0, #095DA6);
  }

  h1 {
    color: #fff;
    margin-top: 37px;
    text-align: center;
  }
`;

export default GlobalStyles;
