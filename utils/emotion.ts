import createCache, { EmotionCache } from '@emotion/cache';

// emotion.ts : 이모션내 사용자 정의 커스텀 적용을 위한 함수

// 1. 생성
export function createEmotionCache(): EmotionCache {
  return createCache({ key: 'bj' });
}
