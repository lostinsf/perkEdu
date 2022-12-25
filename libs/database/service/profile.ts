import { createAxiosInstance } from '@utils/api';
import {
  CreateProfileDTO,
  SearchCountProfileDTO,
  SearchCountWithIDProfileDTO,
  SearchSignUpCheckProfileDTO,
} from '../dto/profile';

// 라이브러리 데이터베이스 서비스 프로파일 설정 및 기능
export const getProfileAsync = async (data: SearchCountWithIDProfileDTO): Promise<string> => {
  const res = await createAxiosInstance().post<string>('profiles', data);

  return res.data;
};

export const getProfileByNumberRoute = (phoneNumber: number): string => `profiles/number/${phoneNumber}`;
export const getProfileByNumberAsync = async (route: string): Promise<SearchCountWithIDProfileDTO> => {
  const res = await createAxiosInstance().get<SearchCountWithIDProfileDTO>(route);

  return res.data;
};

export const getProfileByNameRoute = (nickName: string): string => `profiles/name/${nickName}`;
export const getProfileByNameAsync = async (route: string): Promise<SearchCountWithIDProfileDTO> => {
  const res = await createAxiosInstance().get<SearchCountWithIDProfileDTO>(route);

  return res.data;
};

export const getCountByIdRoute = (profileId: number): string => `profiles/count/id/${profileId}`;
export const getCountByIdAsync = async (route: string): Promise<SearchCountProfileDTO> => {
  const res = await createAxiosInstance().get<SearchCountProfileDTO>(route);

  return res.data;
};

export const createProfileAsync = async (data: CreateProfileDTO): Promise<SearchCountWithIDProfileDTO> => {
  const res = await createAxiosInstance().post<SearchCountWithIDProfileDTO>('profiles', data);

  return res.data;
};

export const checkSignUpAsync = async (data: SearchSignUpCheckProfileDTO): Promise<SearchCountWithIDProfileDTO> => {
  const res = await createAxiosInstance().post<SearchCountWithIDProfileDTO>('profiles/signUp/check', data);

  return res.data;
};
