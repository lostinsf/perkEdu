import { css } from '@emotion/react';
import { defaultTheme } from '@lib/styles/themes';

export const globalStyles = css`
  @font-face {
    font-family: 'Pretendard-Regular';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: ${defaultTheme.fontWeights.normal};
    font-style: normal;
  }

  :root {
    --app-height: 100%;
  }

  html {
    overflow: hidden;
    overflow-y: auto;
    scroll-behavior: smooth;
  }
  body {
    overflow: hidden;
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  div[data-rsbs-overlay],
  [data-rsbs-backdrop],
  [data-rsbs-root]:after {
    position: relative;
  }

  * {
    box-sizing: border-box;
    font-family: 'Pretendard-Regular';
  }
  a {
    text-decoration: none;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  h1,
  h2,
  h3,
  p {
    margin: 0;
  }
  h1 {
    font-weight: ${defaultTheme.fontWeights.bold};
  }
  button {
    border: none;
    outline: none;
  }
`;
