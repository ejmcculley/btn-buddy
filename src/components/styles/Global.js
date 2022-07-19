import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;600&display=swap');  

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

 
`
export default GlobalStyles