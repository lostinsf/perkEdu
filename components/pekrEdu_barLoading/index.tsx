import { memo } from 'react';
import IsEqual from 'react-fast-compare';
import { LoadingBarComponent, LoadingBarSpinner } from './styles';

// 컴포넌트 로딩바 기능
function LoadingBar(): JSX.Element {
  return (
    <LoadingBarComponent>
      <LoadingBarSpinner />
    </LoadingBarComponent>
  );
}

export default memo(LoadingBar, IsEqual);
