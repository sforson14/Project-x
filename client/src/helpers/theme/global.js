import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    justify-content: center;
    margin: 0;
    padding: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;

  }
  nav {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
  }
  
  nav ul li a{
      background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
  }
  .box-content{
      background: ${({ theme }) => theme.box};
       color: ${({ theme }) => theme.text};
}
  
  .setting__links{
  color: ${({ theme }) => theme.text};
  }
   .setting__links:hover{
  color: #CA9B0F
  } 
  
  h1, h2, h3 , h4 , h5{
  color: ${({ theme }) => theme.text};
  }
  
  `
