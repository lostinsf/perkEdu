import { atom } from 'recoil';
import { persistAtom } from '@utils/recoil';

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
