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
`
export default GlobalStyles