import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root{
--background: #121214;
}

* {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
  }

  body{
    width: 100vw;
    height: 100vh;
    background-color: var(--background);
  }
`;
