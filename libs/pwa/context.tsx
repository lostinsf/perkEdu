import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { getCookieValue, setCookie } from '@utils/cookie';
import PromptGuidance from './guidance';
import { getPlatform } from './helpers';
import { BeforeInstallPromptEvent, PlatformInfo, PwaPromptCtx } from './interfaces';

// 라이브러리 PWA 설치 설정 값, 타잎 및 기능
const PromptToInstall = createContext<PwaPromptCtx>({
  deferredPromptEvent: null,
  isInstalled: false,
  showGuidance: false,
});

type PromptToInstallProviderProps = {
  cookieName?: string;
  cookieExpireDays?: number;
  children: JSX.Element | JSX.Element[];
};

export function PromptToInstallProvider(props: PromptToInstallProviderProps): JSX.Element {
  const { children, cookieExpireDays, cookieName } = props;
  const [deferredPromptEvent, setDeferredEvt] = useState<BeforeInstallPromptEvent | null>(null);
  const [installed, setInstalled] = useState<boolean>(false);
  const [platform, setPlatform] = useState<PlatformInfo>();
  const [showGuidance, setShowGuidance] = useState<boolean>(false);

  const showPrompt = useCallback(() => {
    setShowGuidance(true);
  }, []);

  const hidePrompt = useCallback(() => {
    setShowGuidance(false);

    if (cookieName && cookieExpireDays) {
      setCookie(cookieName, cookieExpireDays, 'closed');
    }
  }, [cookieName, cookieExpireDays]);

  const handleBeforeInstallPrompt = useCallback((e: Event): void => {
    e.preventDefault();

    setDeferredEvt(e as BeforeInstallPromptEvent);
  }, []);

  const handleAppInstalled = useCallback((): void => {
    setInstalled(true);
  }, []);

  useEffect(() => {
    if (getCookieValue(cookieName!)) {
      return () => {};
    }

    const existInstall = 'onbeforeinstallprompt' in window;
    const existOnInstalled = 'onappinstalled' in window;
    if (existInstall) {
      window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    }
    if (existOnInstalled) {
      window.addEventListener('appinstalled', handleAppInstalled);
    }

    const platform = getPlatform();
    setPlatform({
      platform,
      isSupported: !!(platform && platform !== 'standalone'),
    });

    return () => {
      if (existInstall) {
        window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      }
      if (existOnInstalled) {
        window.removeEventListener('appinstalled', handleAppInstalled);
      }
    };
  }, []);

  const memoziedCtxValue = useMemo(
    (): PwaPromptCtx => ({
      deferredPromptEvent,
      isInstalled: installed,
      showGuidance,
      platform,
      showPrompt,
      hidePrompt,
    }),
    [deferredPromptEvent, installed, showGuidance, platform, hidePrompt],
  );

  return (
    <PromptToInstall.Provider value={memoziedCtxValue}>
      {children}
      <PromptGuidance ctxValue={memoziedCtxValue} />
    </PromptToInstall.Provider>
  );
}

PromptToInstallProvider.defaultProps = {
  cookieName: undefined,
  cookieExpireDays: undefined,
} as PromptToInstallProviderProps;

export function usePromptToInstall() {
  const ctx = useContext(PromptToInstall);
  if (!ctx) {
    throw new Error('Cannot use usePromptToInstall() outside <PromptToInstallProvider />');
  }

  return ctx;
}
