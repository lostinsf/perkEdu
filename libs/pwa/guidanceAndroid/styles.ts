import styled from '@emotion/styled';
import { defaultTheme, zIndexes } from 'libs/styles/themes';

export const Wrapper = styled.div`
  padding: 24px 20px 60px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #ffffff;
  z-index: ${zIndexes.pwaPrompt};
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.3);
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  gap: 14px;
`;

export const IconContainer = styled.div`
  img {
    width: 54px;
    height: 54px;
    border-radius: 30px;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
  }
`;

export const InfoContainer = styled.div`
  display: flex;

  .name-container {
    display: flex;
    flex-direction: column;

    .name {
      font-size: 19px;
      font-weight: bold;
      color: #111111;
      margin-bottom: 6px;
    }
    .url {
      font-size: 14px;
      color: #888888;
      word-break: break-word;
    }
  }
`;

export const AddButton = styled.button`
  position: absolute;
  bottom: -40px;
  right: 0;
  padding: 8px 20px;
  font-size: 18px;
  color: #fff;
  background-color: ${defaultTheme.colors.primary};
  border-radius: 6px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: -5px;
  right: 0;
  width: 30px;
  height: 30px;
  background: none;

  img {
    width: 100%;
    height: 100%;
  }
`;
