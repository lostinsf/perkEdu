import useSWR from 'swr';
import { SearchCountProfileDTO } from 'libs/database/dto/profile';
import { ProfileStates } from 'libs/recoils/profile_stats';
import { getCountByIdAsync, getCountByIdRoute } from 'libs/database/service/profile';

interface ProfileWalkCountState {
  walkCount?: SearchCountProfileDTO;
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
