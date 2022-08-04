import { createGlobalStyle } from "styled-components";
import { colors, space } from "./Theme";

const GlobalStyle = createGlobalStyle`

html,
body {
  padding: 0;
  margin: 0;
  font-family: 'Quicksand', sans-serif;
  scroll-behavior: smooth;
  background: ${colors["background-azul/primary-base"]};
}

a {
  color: unset;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

p {
  color: ${colors["cinza/neutral"]};
  line-height: 30px;
}

h1, h2, h3, h4, h5, h6 {
  color: ${colors["white/neutral-0"]}
}

h2 {
  font-size: 2.5rem;
}

section {
  padding-top: 100px;

  @media only screen and (max-width: 576px) {
    padding-top: ${space[5]}px;
  }
}

table {
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  border: 1px solid #ffffff;
  text-align: left;
  padding: 8px;
}

th {
  background-color: rgb(117, 201, 250);
}

td {
  background-color: rgb(205, 235, 253);
}

`;

export default GlobalStyle;
