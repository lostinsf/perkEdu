import { createAxiosInstance } from '@utils/api';
import { SearchCheckVerificationDTO, CreateSendVerificationDTO, DeleteVerificationDTO } from '../dto/verification';

// 라이브러리 데이터베이스 서비스 인증 설정 및 기능
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
