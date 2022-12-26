import styled from '@emotion/styled';

// 컴포넌트 인트로스크린 스타일
export const IntroSectionComponent = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const IntroSectionTopContainer = styled.div`
  position: relative;
  width: 100%;
  height: 10%;
`;

export const IntroSectionCenterContainer = styled.div`
  position: relative;
  width: 100%;
  height: 80%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: url(${process.env.NEXT_PUBLIC_STORAGE_URL}about1.jpg) center center/cover;
`;

export const IntroSectionBottomContainer = styled.div`
  position: relative;
  width: 100%;
  height: 10%;
`;
