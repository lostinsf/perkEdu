import { createAxiosInstance } from '@utils/api';
import { SearchCheckVerificationDTO, CreateSendVerificationDTO, DeleteVerificationDTO } from '../dto/verification';

export const checkVerificationAsync = async (data: SearchCheckVerificationDTO): Promise<string> => {
  const res = await createAxiosInstance().post<string>('verifications/check', data);

  return res.data;
};

export const sendVerificationAsync = async (data: CreateSendVerificationDTO): Promise<string> => {
  const res = await createAxiosInstance().post<string>('verifications/send', data);

  return res.data;
};

export const deleteVerificationAsync = async (data: DeleteVerificationDTO): Promise<boolean> => {
  const res = await createAxiosInstance().delete<boolean>('verifications', { data });

  return res.data;
};
