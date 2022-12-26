import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { zIndexes } from 'libs/styles/themes';

// 라이브러리 PWA 가이드 사파리 스타일
type OverlayProps = {
  $isShow: boolean;
};

export const Overlay = styled.div<OverlayProps>`
  position: absolute;
  bottom: 0;
  left: 0;
  opacity: 0;
  background-color: rgba(10, 10, 10, 0.5);
  width: 100%;
  z-index: ${zIndexes.pwaPrompt};
  transition: opacity 0.2s ease-in;

  ${({ $isShow }) =>
    $isShow &&
    css`
      opacity: 1;
      display: block;
    `};
`;

type ContainerProps = {
  $isShow: boolean;
};

export const Container = styled.div<ContainerProps>`
  position: fixed;
  bottom: 0;
  left: 0;
  border-radius: 12px;
  backdrop-filter: blur(10px);
  background-color: rgba(65, 65, 65, 0.7);
  filter: brightness(1.1);
  margin: 0 8px 10px;
  overflow: hidden;
  z-index: ${zIndexes.pwaPrompt};
  transform: translateY(calc(100% + 10px));
  transition: transform 0.4s cubic-bezier(0.4, 0.24, 0.3, 1);
  width: calc(100vw - 16px);

  ${({ $isShow }) =>
    $isShow &&
    css`
      transform: translateY(0);
      display: block;
    `};
`;

export const Header = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border-bottom: 1px solid rgba(140, 140, 140, 0.7);
`;

export const Title = styled.p`
  line-height: 1.125;
  font-weight: 500;
  font-size: 18px;
  color: #fff;
`;

export const Cancel = styled.button`
  background: transparent;
  font-size: 16px;
  color: rgba(9, 132, 255, 1);
  padding: 0;
`;

export const Body = styled.div`
  display: flex;

  .description {
    color: inherit;
    border-bottom: 1px solid rgba(140, 140, 140, 0.7);
    margin: 0 16px;
    padding: 16px;
    width: 100%;
    text-align: center;

    > p {
      color: rgba(235, 235, 245, 0.6);
      font-size: 14px;
      line-height: 17px;
    }
  }
`;

export const Instruction = styled.div`
  margin: 0 16px;
  padding: 16px;

  .step-item {
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-items: center;
    text-align: left;
    margin-bottom: 16px;

    &:last-of-type {
      margin-bottom: 0;
    }
  }

  .icon {
    flex: 0 0 auto;
    width: 26px;
    height: 30px;
    margin-right: 32px;

    &.home {
      color: white;
      fill: white;
    }
    &.share {
      color: rgba(9, 132, 255, 1);
      fill: rgba(9, 132, 255, 1);
    }
  }

  p {
    font-size: 14px;
    line-height: 17px;
    font-weight: 600;
    color: rgba(235, 235, 245, 0.6);
  }
`;
