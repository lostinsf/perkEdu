import { createAxiosInstance } from '@utils/api';
import { SearchCountWithIDProfileDTO } from '../dto/profile';

// 라이브러리 데이터베이스 서비스 랭크 설정 및 기능
export const getRankByTotalRoute = (): string => `ranks/total`;
export const getRankByTotalAsync = async (route: string): Promise<SearchCountWithIDProfileDTO[]> => {
  const res = await createAxiosInstance().get<SearchCountWithIDProfileDTO[]>(route);

  return res.data;
};

export const getRankByTotalFixedRoute = (): string => `ranks/total/fixed`;
export const getRankByTotalFixedAsync = async (route: string): Promise<SearchCountWithIDProfileDTO[]> => {
  const res = await createAxiosInstance().get<SearchCountWithIDProfileDTO[]>(route);

  return res.data;
};

export const getRankByTodayRoute = (): string => `ranks/today`;
export const getRankByTodayAsync = async (route: string): Promise<SearchCountWithIDProfileDTO[]> => {
  const res = await createAxiosInstance().get<SearchCountWithIDProfileDTO[]>(route);

  return res.data;
};

export const getMyRankRoute = (profileId: number): string => `ranks/my/id/${profileId}`;
export const getMyRankAsync = async (route: string): Promise<number> => {
  const res = await createAxiosInstance().get<number>(route);

  return res.data;
};

export const getMyRankFixedRoute = (profileId: number): string => `ranks/fixed/my/id/${profileId}`;
export const getMyRankFixedAsync = async (route: string): Promise<number> => {
  const res = await createAxiosInstance().get<number>(route);

  return res.data;
};
