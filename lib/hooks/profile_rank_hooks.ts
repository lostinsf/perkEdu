import useSWR from 'swr';
import { ProfileStates } from '@lib/recoils/profile_stats';
import { getMyRankFixedAsync, getMyRankFixedRoute } from '@lib/services/rank_service';

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
