import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin:0;
    padding: 0;
    box-sizing: border-box;
    outline:0;
  }

  body{
    background: #FBF4FF;
    -webkit-font-smoothing: antialiased;
    height:100vh;
    width:100vw;

    & > div{
      display:flex;
      width:100%;
      height:100%;
      justify-content:center;
      align-items:center;
    }

  }
  border-style, input, button{
    font-family: 'Roboto Slab', serif;
    font-size: 16px;
  }
  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 500
  }

  button{
    cursor: pointer;
  }
`;