import { createAxiosInstance } from '@utils/api';
import { SearchCountWithIDProfileDTO } from '../dto/profile';
import { CreateAccountDTO } from '../dto/account';

// 라이브러리 데이터베이스 서비스 계정 설정 및 기능
export const getTotalWalksRoute = (): string => 'walks/total';
export const getTotalWalksAsync = async (route: string): Promise<number> => {
  const res = await createAxiosInstance().get<number>(route);

  return res.data;
};

export const getTotalWalksFixedRoute = (): string => 'walks/total/fixed';
export const getTotalWalksFixedAsync = async (route: string): Promise<number> => {
  const res = await createAxiosInstance().get<number>(route);

  return res.data;
};

export const createWalksAsync = async (data: CreateAccountDTO): Promise<SearchCountWithIDProfileDTO> => {
  const res = await createAxiosInstance().post<SearchCountWithIDProfileDTO>('walks', data);

  return res.data;
};
