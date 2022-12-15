import styled from '@emotion/styled';
import { zIndexes } from '@lib/styles/themes';

// 컨포넌트 로딩바 스타일
export const LoadingBarComponent = styled.section`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: ${zIndexes.loading};
`;

export const LoadingBarSpinner = styled.div`
  width: 50px;
  height: 50px;
  display: inline-block;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: #3160da;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;

  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;
