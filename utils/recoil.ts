import { AtomEffect } from 'recoil';
import Localforage from 'localforage';

// recoil.ts: 글로벌 스텟

// 1. 로컬포지내 저장
export function persistAtom<T>(key: string, initialValue: T): AtomEffect<T> {
  return ({ setSelf, onSet }) => {
    if (typeof window !== 'undefined') {
      setSelf(
        Localforage.getItem(key).then((savedValue) => (savedValue ? JSON.parse(savedValue as string) : initialValue)),
      );
    }

    // Subscribe to state changes and persist them to localForage
    onSet((newValue, _, isReset) => {
      if (isReset) {
        if (typeof window !== 'undefined') {
          Localforage.removeItem(key);
        }
        return;
      }

      if (typeof window !== 'undefined') {
        Localforage.setItem(key, JSON.stringify(newValue));
      }
    });
  };
}
