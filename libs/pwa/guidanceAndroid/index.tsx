/* eslint-disable @next/next/no-img-element */
import { memo } from 'react';
import IsEqual from 'react-fast-compare';
import { AddButton, CloseButton, Container, IconContainer, InfoContainer, Wrapper } from './styles';

type GuidanceeAndroidProps = {
  onAddClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onCloseClick: () => void;
};

function GuidanceAndroid(props: GuidanceeAndroidProps): JSX.Element {
  const { onAddClick, onCloseClick } = props;

  return (
    <Wrapper>
      <Container>
        <IconContainer>
          <img src="./images/walkingIcon.png" alt="walkingIcon" />
        </IconContainer>
        <InfoContainer>
          <div className="name-container">
            <p className="name">착한 청맥, 착한 걸음</p>
            <p className="url">https://pekrtask.azurewebsites.net/</p>
          </div>
        </InfoContainer>
        <CloseButton type="button" onClick={onCloseClick}>
          <img src="./icons/ic_close.svg" alt="modalCloseBtn" />
        </CloseButton>
        <AddButton type="button" onClick={onAddClick}>
          홈 화면에 추가
        </AddButton>
      </Container>
    </Wrapper>
  );
}

export default memo(GuidanceAndroid, IsEqual);
