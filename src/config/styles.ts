import { createGlobalStyle } from "styled-components"

export const Normalize = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  *:not(p, h1, h2, h3, h4, h5, h6) {
    margin: 0;
  }
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
  input, button, textarea, select {
    font: inherit;
  }
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }
  #root {
    isolation: isolate;
  }
`
