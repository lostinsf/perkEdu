import useSWR from 'swr';
import { SearchCountProfileDTO } from 'libs/database/dto/profile';
import { ProfileStates } from 'libs/recoil/profileState';
import { getCountByIdAsync, getCountByIdRoute } from 'libs/database/service/profile';

// 라이브러리 커스텀훅 프로파일 카운트 설정 및 기능
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
