import { memo, useCallback } from 'react';
import IsEqual from 'react-fast-compare';
import { toast } from 'react-toastify';
import GuidanceAndroid from './guidanceAndroid';
import GuidanceSafari from './guidanceSafari';
import { PwaPromptCtx } from './interfaces';

// 라이브러리 PWA 설치 랜더 설정 타잎 및 기능
type PwaGuidanceProps = {
  ctxValue: PwaPromptCtx;
};

function PwaGuidance(props: PwaGuidanceProps): JSX.Element | null {
  const { ctxValue } = props;

  const handleGuidanceClose = useCallback((): void => {
    if (ctxValue.hidePrompt) {
      ctxValue.hidePrompt();
    }
  }, [ctxValue.hidePrompt]);

  const onInstallClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>): void => {
      e.stopPropagation();
      if (!ctxValue.deferredPromptEvent) {
        toast.warn('Chrome 브라우저를 통해 홈 화면에 추가하실 수 있습니다.');
        handleGuidanceClose();
        return;
      }

      ctxValue.deferredPromptEvent
        .prompt()
        .then(() => ctxValue.deferredPromptEvent!.userChoice)
        .then(() => {
          handleGuidanceClose();
        })
        .catch(() => handleGuidanceClose());
    },
    [ctxValue.deferredPromptEvent, ctxValue.hidePrompt],
  );

  const renderComponent = useCallback((): JSX.Element | null => {
    if (!ctxValue.isInstalled && ctxValue.platform?.platform === 'chrome-android' && ctxValue.showGuidance) {
      return <GuidanceAndroid onAddClick={onInstallClick} onCloseClick={handleGuidanceClose} />;
    }
    if (
      (ctxValue.platform?.platform === 'safari-iphone' || ctxValue.platform?.platform === 'webkit-iphone') &&
      ctxValue.showGuidance
    ) {
      return <GuidanceSafari onCancelClick={handleGuidanceClose} />;
    }

    return null;
  }, [
    ctxValue.deferredPromptEvent,
    ctxValue.isInstalled,
    ctxValue.showGuidance,
    ctxValue.platform,
    ctxValue.hidePrompt,
  ]);

  return renderComponent();
}

export default memo(PwaGuidance, IsEqual);
