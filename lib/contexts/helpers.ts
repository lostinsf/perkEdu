import { PlatformType, PwaNavigator } from './interfaces';

const testPlatform = {
  iPhone: /iphone|ipad|ipod/i,
  android: /android/i,
  chrome: /Chrome/i,
  version: /Version/i,
  safari: /Safari/i,
};

export function getPlatform(): PlatformType | null {
  const navigator = window.navigator as PwaNavigator;
  const { userAgent } = navigator;

  const isPwaIOS = !!navigator?.standalone;
  const isPwaChrome = window.matchMedia('(display-mode: standalone)').matches;

  const isChromium = 'onbeforeinstallprompt' in window;
  const isAndroid = testPlatform.android.test(userAgent);

  const isChrome = testPlatform.chrome.test(userAgent);
  const isExistVersion = testPlatform.version.test(userAgent);
  const isSafari = testPlatform.safari.test(userAgent) && isExistVersion;
  const isIPhone = testPlatform.iPhone.test(userAgent);

  if (isPwaIOS || isPwaChrome) {
    return 'standalone';
  }
  if (isIPhone && isSafari) {
    return 'safari-iphone';
  }
  if (isIPhone && !isSafari) {
    return 'webkit-iphone';
  }
  if (isChrome && isChromium && isAndroid) {
    return 'chrome-android';
  }
  if (isChromium && isAndroid) {
    return 'chromium-android';
  }

  return null;
}
