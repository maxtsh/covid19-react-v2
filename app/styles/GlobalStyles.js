import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  :root {
    /** Colors */
    --white: #ffffff;
    --black: #000000;
    --primary-text-color: #332e38;
    /** Typography */
  }

  *{
    box-sizing: border-box;
  }

  html{
    font-size: 16px;
    font-family: 'Rubik', sans-serif;
  }

  h1, h2, h3, h4, h5, h6, p, ul{
    margin: 0;
    padding: 0;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    background-color: var(--white);
  }
`;

export default GlobalStyle;
