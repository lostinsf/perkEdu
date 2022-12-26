import { memo } from 'react';
import IsEqual from 'react-fast-compare';
import {
  IntroSectionComponent,
  IntroSectionTopContainer,
  IntroSectionCenterContainer,
  IntroSectionBottomContainer,
} from './styles';

// 컴포넌트 인트로스크린 기능
function IntroSection(): JSX.Element {
  return (
    <IntroSectionComponent>
      <IntroSectionTopContainer />
      <IntroSectionCenterContainer />
      <IntroSectionBottomContainer />
    </IntroSectionComponent>
  );
}

export default memo(IntroSection, IsEqual);
