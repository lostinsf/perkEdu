import { memo, useCallback, useEffect } from 'react';
import IsEqual from 'react-fast-compare';
import { Container, Wrapper } from './styles';

// 레이아웃 베이스 기능
type BaseLayoutProps = {
  children: JSX.Element;
};

function BaseLayout(props: BaseLayoutProps): JSX.Element {
  const { children } = props;

  const handleResize = useCallback(() => {
    const doc = document.documentElement;
    doc.style.setProperty('--app-height', `${window.innerHeight}px`);
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Wrapper>
      <Container>{children}</Container>
    </Wrapper>
  );
}

export default memo(BaseLayout, IsEqual);
