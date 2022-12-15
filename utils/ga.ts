// ga.ts: 구글 애널시스트 이용을 위한 각 페이지 이벤트 설정 함수

// 1. 페이지 뷰 분석
export const gaPageView = (url: string) => {
  // @ts-ignore
  window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
    page_path: url,
  });
};

// 2. 이벤트 분석
export const gaEvent = (actionName: string, category?: string, label?: string, value?: number) => {
  // @ts-ignore
  window.gtag('event', actionName, {
    event_category: category,
    event_label: label,
    value,
    non_interaction: true, // avoids affecting bounce rate.
  });
};
