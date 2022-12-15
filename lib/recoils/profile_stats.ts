import { atom } from 'recoil';
import { persistAtom } from '@utils/recoil';

export interface ProfileStates {
  id: number;
  nickName: string;
}

export const profileState = atom<ProfileStates | null>({
  key: 'profileStates',
  default: null,
  effects_UNSTABLE: [persistAtom<ProfileStates | null>('profileStates', null)],
});
