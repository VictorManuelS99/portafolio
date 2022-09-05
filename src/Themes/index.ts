import { createGlobalStyle } from "styled-components";
import { colors } from "./colors";

export const GlobalStyle = createGlobalStyle`
    @font-face {
      font-family: 'Dank Mono';
      src: url('../../Assets/Fonts/Dank Mono Regular.otf');
    }
    @font-face {
      font-family: 'Jetbrains Mono';
      src: url('../Assets/Fonts/JetBrainsMono-Regular.woff2');
    }

    html,
    body {
      padding: 0;
      margin: 0;
      font-family:'Jetbrains Mono', sans-serif;
      background-color: #242424;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    * {
      box-sizing: border-box;
    }
`;

export const theme = {
  colors,
};
