import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root{
    --background: #121214;
    --color-primary: #FF577F;
    --color-primary-focus: #FF427F;
    --color-primaey-negative: #59323F;
    --gray-4: #121214;
    --gray-3: #212529;
    --gray-2: #343B41;
    --gray-1: #868E96;
    --gray-0: #F8F9FA;
    --sucess: #3FE864;
    --negative: #E83F5B;
    --title: 16px bold;
    --headline: 12px;
    --headline-bold: 12px bold;
    --headline-italic: 12px italic;
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

    font-family: 'Inter', sans-serif;
  }

  h1, h2, h3, h4, h5, h6{
    color: var(--gray-0);
    font: var(--title);
  }

  p, span, label, ::placeholder{
    font: var(--headline);
    color: var(--gray-1);
  }

  p{
    color: var(--gray-0);
  }
`;
