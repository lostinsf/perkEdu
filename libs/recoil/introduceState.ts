import { atom } from 'recoil';
import { persistAtom } from '@utils/recoil';

// 라이브러리 리코일 소개상태 글로벌 설정
export interface IntroduceStates {
  firstVisit: boolean;
}

export const defaultState: IntroduceStates = {
  firstVisit: true,
};

export const introduceStates = atom<IntroduceStates>({
  key: 'introduceStates',
  default: defaultState,
  effects_UNSTABLE: [persistAtom<IntroduceStates>('introduceStates', defaultState)],
});
