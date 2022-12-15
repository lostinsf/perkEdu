import useSWR from 'swr';
import { ProfileCountDTO } from '@lib/dtos/profile_dtos';
import { ProfileStates } from '@lib/recoils/profile_stats';
import { getCountByIdAsync, getCountByIdRoute } from '@lib/services/profile_service';

interface ProfileWalkCountState {
  walkCount?: ProfileCountDTO;
  isLoading: boolean;
  isError: boolean;
}

export default function useProfileWalkCount(profile: ProfileStates): ProfileWalkCountState {
  const { data, error } = useSWR(getCountByIdRoute(profile.id), getCountByIdAsync);

  return {
    walkCount: data,
    isLoading: !error && !data,
    isError: error,
  };
}
