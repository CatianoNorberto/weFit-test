import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
    outline: 0;
  }

  body {
    background: #2F2E41;
    -webkit-font-smoothing: antialiased;
    scrollbar-width: thin;
  }

  body #root{
    /* height: 100%; */
     /* Hide scrollbar for IE, Edge and Firefox */
     -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    /* Hide scrollbar for Chrome, Safari and Opera */
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;
