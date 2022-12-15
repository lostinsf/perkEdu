import { AppProps, NextWebVitalsMetric } from 'next/app';
import NextHead from 'next/head';
import { useRouter } from 'next/router';
import Script from 'next/script';
import { appWithTranslation } from 'next-i18next';
import { DefaultSeo } from 'next-seo';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import { RecoilRoot } from 'recoil';
import { SWRConfig } from 'swr';
import { CacheProvider, EmotionCache, Global, ThemeProvider } from '@emotion/react';
import config from '@lib/configs/seo.json';
import { PromptToInstallProvider } from '@lib/contexts/pwa_context';
import { globalStyles } from '@lib/styles/globals';
import { defaultTheme } from '@lib/styles/themes';
import { createEmotionCache, gaEvent, gaPageView } from '@utils/index';
import 'react-toastify/dist/ReactToastify.css';

type MyAppProps = {
  emotionCache?: EmotionCache;
} & AppProps;

function MyApp(props: MyAppProps): JSX.Element {
  const { Component, emotionCache = createEmotionCache(), pageProps } = props;
  const router = useRouter();

  useEffect(() => {
    const handleRouteChangeEnd = (url: string): void => {
      gaPageView(url);
    };

    router.events.on('routeChangeComplete', handleRouteChangeEnd);

    return (): void => {
      router.events.off('routeChangeComplete', handleRouteChangeEnd);
    };
  }, [router.events]);

  return (
    <>
      <NextHead>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
      </NextHead>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <CacheProvider value={emotionCache}>
        <DefaultSeo {...config} />
        <RecoilRoot>
          {/* TODO: Add `Dev tools` and `ExternalStatePortal` for Recoil */}
          <Global styles={globalStyles} />
          <SWRConfig>
            <ThemeProvider theme={defaultTheme}>
              <PromptToInstallProvider>
                <Component {...pageProps} key={router.route} />
                <ToastContainer hideProgressBar closeOnClick position="top-right" autoClose={5000} />
              </PromptToInstallProvider>
            </ThemeProvider>
          </SWRConfig>
        </RecoilRoot>
      </CacheProvider>
    </>
  );
}

export function reportWebVitals(metric: NextWebVitalsMetric) {
  // @ts-ignore
  if (typeof gtag === 'undefined') {
    return;
  }

  // NOTE - 1: id unique to current page load
  // NOTE - 2: values must be integers
  gaEvent(
    metric.name,
    metric.label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
    metric.id,
    Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
  );
}

MyApp.defaultProps = {
  emotionCache: undefined,
} as MyAppProps;

export default appWithTranslation(MyApp);
