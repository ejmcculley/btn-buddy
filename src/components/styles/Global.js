import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background: #d8d8de ;
    color: #414141;
    font-family: neue-haas-grotesk-display, sans-serif;
  }

  .btn {
    background: none;
    color: #B442F9;
    border: 2px solid #B442F9;
    padding: .5em 1em;
    margin: .5em;
    border-radius: 5px;
  }

  h1 {
    font-size: 5vw;
    font-family: neue-haas-grotesk-text,sans-serif;
    font-weight: 700;
    font-style: normal;
  }

  h2 {
    font-size: 3vw;
    font-family: neue-haas-grotesk-text,sans-serif;
    font-weight: 400;
    font-style: normal;
  }

  p {
    font-size: 1.5vw;
    font-family: neue-haas-grotesk-display,sans-serif;
    font-weight: 400;
    font-style: normal;
  }

  button {
    font-size: 1.5vw;
    font-family: neue-haas-grotesk-display,sans-serif;
    font-weight: 400;
    font-style: normal;
  }

 
`
export default GlobalStyles