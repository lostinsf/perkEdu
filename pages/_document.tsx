import Document, { DocumentInitialProps, Head, Html, Main, NextScript } from 'next/document';
import { Children } from 'react';
import createEmotionServer from '@emotion/server/create-instance';
import { createEmotionCache } from '@utils/index';

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <meta name="application-name" content="테스트 교육센터" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="apple-mobile-web-app-title" content="테스트 교육센터" />
          <meta name="description" content="테스트, 교육" />
          <meta name="format-detection" content="테스트시 테스트구" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="theme-color" content="#aa967d" />
          <link rel="apple-touch-icon" href={`${process.env.NEXT_PUBLIC_STORAGE_URL}apple-touch-icon-120x120.png`} />
          <link rel="shortcut icon" href={`${process.env.NEXT_PUBLIC_STORAGE_URL}favicon-32x32.png`} />
        </Head>
        <Main />
        <NextScript />
      </Html>
    );
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
MyDocument.getInitialProps = async (ctx): Promise<DocumentInitialProps> => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  const originalRenderPage = ctx.renderPage;

  // You can consider sharing the same emotion cache between all the SSR requests to speed up performance.
  // However, be aware that it can have global side effects.
  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = (): any =>
    originalRenderPage({
      enhanceApp: (App: any) =>
        function EnhanceApp(props): any {
          return <App emotionCache={cache} {...props} />;
        },
    });

  const initialProps = await Document.getInitialProps(ctx);
  // 이모션 랜더링 옵션 추가
  // https://github.com/mui-org/material-ui/issues/26561#issuecomment-855286153
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [...emotionStyleTags, ...Children.toArray(initialProps.styles)],
  };
};

export default MyDocument;
