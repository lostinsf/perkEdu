import { createAxiosInstance } from '@utils/api';
import { CreateProfileRequest, ProfileCountDTO, ProfileWithCountDTO, SignUpCheckRequest } from '../dtos/profile_dtos';

export const getProfileAsync = async (data: ProfileWithCountDTO): Promise<string> => {
  const res = await createAxiosInstance().post<string>('profiles', data);

  return res.data;
};

export const getProfileByNumberRoute = (phoneNumber: number): string => `profiles/number/${phoneNumber}`;
export const getProfileByNumberAsync = async (route: string): Promise<ProfileWithCountDTO> => {
  const res = await createAxiosInstance().get<ProfileWithCountDTO>(route);

  return res.data;
};

export const getProfileByNameRoute = (nickName: string): string => `profiles/name/${nickName}`;
export const getProfileByNameAsync = async (route: string): Promise<ProfileWithCountDTO> => {
  const res = await createAxiosInstance().get<ProfileWithCountDTO>(route);

  return res.data;
};

export const getCountByIdRoute = (profileId: number): string => `profiles/count/id/${profileId}`;
export const getCountByIdAsync = async (route: string): Promise<ProfileCountDTO> => {
  const res = await createAxiosInstance().get<ProfileCountDTO>(route);

  return res.data;
};

export const createProfileAsync = async (data: CreateProfileRequest): Promise<ProfileWithCountDTO> => {
  const res = await createAxiosInstance().post<ProfileWithCountDTO>('profiles', data);

  return res.data;
};

export const checkSignUpAsync = async (data: SignUpCheckRequest): Promise<ProfileWithCountDTO> => {
  const res = await createAxiosInstance().post<ProfileWithCountDTO>('profiles/signUp/check', data);

  return res.data;
};
