import { memo } from 'react';
import IsEqual from 'react-fast-compare';
import IntroSection from '@components/pekrtEdu_sectionIntro';

// 조합 메인 기능
function Home(): JSX.Element {
  return <IntroSection />;
}

export default memo(Home, IsEqual);
