import { Theme } from '@emotion/react';

// 레이어
export const zIndexes = {
  layout: 1, // 레이아웃 레이어
  component: 10, // 컴포넌트 레이어
  loading: 100, // 최상위 레이어
  pwaPrompt: 101,
};

// 반응형: 넓이
export const breakPoints = {
  customDown: '(max-width: 292px)',
  xsDown: '(max-width: 320px)',
  smDown: '(max-width: 575px)',
  mdDown: '(max-width: 767px)',
  lgDown: '(max-width: 991px)',
  xlDown: '(max-width: 1199px)',
  xxlDown: '(max-width: 1599px)',
  xxxlDown: '(max-width: 1999px)',
  xsUp: '(min-width: 321px)',
  smUp: '(min-width: 576px)',
  mdUp: '(min-width: 768px)',
  lgUp: '(min-width: 992px)',
  xlUp: '(min-width: 1200px)',
  xxlUp: '(min-width: 1600px)',
  xxxlUp: '(min-width: 2000px)',
};

// 반응형: 높이
export const breakPointsHeight = {
  customDown: '(max-height: 540px)',
  iphone8Down: '(max-height: 666px)',
  iphone8PlusDown: '(max-height: 735px)',
  iphoneXDown: '(max-height: 811px)',
  iphone8PUp: '(min-height: 667px)',
  iphone8PlusUp: '(min-height: 736px)',
  iphoneXUp: '(min-height: 812px)',
};

// 공통테마: 컬러, 폰트크기, 폰트두께
export const defaultTheme: Theme = {
  colors: {
    primary: '#aa967d',
    section: '#f9f9f9',
    black: '#000000',
    white: '#ffffff',
    danger: '#C92014',
    text: '#191919',
    title: '#565758',
    p: ' #717275',
  },
  fontSizes: {
    base: 24,
    h1: 72,
    h2: 42,
    h3: 36,
    h4: 32,
    h5: 24,
    h6: 22,
    p: 20,
    copyright: 14,
    link: 12,
  },
  fontWeights: {
    light: 300,
    normal: 400,
    bold: 700,
    black: 900,
  },
};
