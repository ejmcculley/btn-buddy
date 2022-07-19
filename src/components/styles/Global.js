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
    font-family: 'Space Grotesk', sans-serif;
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
  }

  h2 {
    font-size: 3vw;
  }

  p {
    font-size: 1.5vw;
  }

  button {
    font-size: 1.5vw;
  }

 
`
export default GlobalStyles