import styled from '@emotion/styled';
import { breakPoints, defaultTheme } from '@lib/styles/themes';

export const Wrapper = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${defaultTheme.colors.primary};
  color: ${defaultTheme.colors.text};
  overflow: hidden;

  @media ${breakPoints.lgDown} {
    width: 100%;
    height: 100vh; /* fallback */
    height: var(--app-height);
  }
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  outline: none;
  border-radius: 0;
  background: none;
  overflow: hidden;
`;
