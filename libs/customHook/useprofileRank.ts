import useSWR from 'swr';
import { ProfileStates } from 'libs/recoil/profileState';
import { getMyRankFixedAsync, getMyRankFixedRoute } from 'libs/database/service/rank';

// 라이브러리 커스텀훅 프로파일 랭크 설정 및 기능
interface ProfileRankState {
  rank?: number;
  isLoading: boolean;
  isError: boolean;
}

export default function useProfileRank(profile: ProfileStates): ProfileRankState {
  const { data, error } = useSWR(getMyRankFixedRoute(profile.id), getMyRankFixedAsync);

  return {
    rank: data,
    isLoading: !error && !data,
    isError: error,
  };
}
