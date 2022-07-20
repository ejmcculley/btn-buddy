import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html {
    font-size: calc(18px + 0.390625vw);
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
    font-size: 1.8rem;
    font-family: neue-haas-grotesk-text,sans-serif;
    font-weight: 700;
    font-style: normal;
  }

  h2 {
    font-size: 1.5rem;
    font-family: neue-haas-grotesk-text,sans-serif;
    font-weight: 400;
    font-style: normal;
  }

  p {
    font-size: 1rem;
    font-family: neue-haas-grotesk-display,sans-serif;
    font-weight: 400;
    font-style: normal;
  }

  button {
    font-size: 1rem;
    font-family: neue-haas-grotesk-display,sans-serif;
    font-weight: 400;
    font-style: normal;
  }

  img {
    width: 20vw;
    height: 20vh;
  }

 
`
export default GlobalStyles