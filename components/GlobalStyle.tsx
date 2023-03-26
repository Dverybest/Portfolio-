import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
html,
body {
  max-width: 100vw;
  overflow-x: hidden;
  font-family: Fira Code;
  background-color:${({ theme }) => theme.colors.background};
  color: ${(props) => props.theme.colors.white};
  scroll-behavior: smooth!important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
a{
  text-decoration: none;
}
`;
