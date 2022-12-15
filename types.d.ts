import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primary: string;
      section: string;
      black: string;
      white: string;
      danger: string;
      text: string;
      title: string;
      p: string;
    };
    fontSizes: {
      base: number;
      base: number;
      h1: number;
      h2: number;
      h3: number;
      h4: number;
      h5: number;
      h6: number;
      p: number;
      copyright: number;
      link: number;
    };
    fontWeights: {
      light: number;
      normal: number;
      bold: number;
      black: number;
    };
  }
}
