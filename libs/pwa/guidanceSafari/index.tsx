import { memo } from 'react';
import IsEqual from 'react-fast-compare';
import IconHome from './icon_home';
import IconShare from './icon_share';
import { Body, Cancel, Container, Header, Instruction, Title, Overlay } from './styles';

type GuidanceSafariProps = {
  onCancelClick: () => void;
};

function GuidanceSafari(props: GuidanceSafariProps): JSX.Element {
  const { onCancelClick } = props;

  return (
    <>
      <Overlay $isShow />
      <Container $isShow>
        <Header>
          <Title>홈 화면에 추가</Title>
          <Cancel type="button" onClick={onCancelClick}>
            취소
          </Cancel>
        </Header>
        <Body>
          <div className="description">
            <p>
              현재 웹사이트는 &apos;홈 화면 추가 기능&apos; 을 탑재하고 있습니다. 전체화면 및 오프라인 사용을 위해
              Safari 브라우저를 통해 홈 스크린에 현재 웹사이트를 추가해 주세요.
            </p>
          </div>
        </Body>
        <Instruction>
          <div className="step-item">
            <IconShare className="icon share" />
            <p>1) 하단의 &apos;공유&apos; 버튼을 누릅니다.</p>
          </div>
          <div className="step-item">
            <IconHome className="icon home" />
            <p>2) &apos;홈 화면에 추가 버튼을 눌러주세요</p>
          </div>
        </Instruction>
      </Container>
    </>
  );
}

export default memo(GuidanceSafari, IsEqual);
