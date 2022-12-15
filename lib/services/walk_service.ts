import { createAxiosInstance } from '@utils/api';
import { ProfileWithCountDTO } from '../dtos/profile_dtos';
import { CreateWalkRequest } from '../dtos/walk_dtos';

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

export const createWalksAsync = async (data: CreateWalkRequest): Promise<ProfileWithCountDTO> => {
  const res = await createAxiosInstance().post<ProfileWithCountDTO>('walks', data);

  return res.data;
};
