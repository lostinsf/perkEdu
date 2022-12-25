// 라이브러리 PWA 설정 값
export interface PwaNavigator extends Navigator {
  standalone: boolean;
}

export type PlatformType = 'chromium-android' | 'chrome-android' | 'safari-iphone' | 'webkit-iphone' | 'standalone';

export interface PlatformInfo {
  platform: PlatformType | null;
  isSupported: boolean;
}

export interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];

  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;

  prompt(): Promise<void>;
}

export type PwaPromptCtx = {
  deferredPromptEvent: BeforeInstallPromptEvent | null;
  isInstalled: boolean;
  showGuidance: boolean;
  platform?: PlatformInfo;
  showPrompt?: () => void;
  hidePrompt?: () => void;
};
