import { createAxiosInstance } from '@utils/api';
import {
  CheckVerificationRequest,
  DeleteVerificationRequest,
  SendVerificationRequest,
} from '../dtos/verification_dtos';

export const checkVerificationAsync = async (data: CheckVerificationRequest): Promise<string> => {
  const res = await createAxiosInstance().post<string>('verifications/check', data);

  return res.data;
};

export const sendVerificationAsync = async (data: SendVerificationRequest): Promise<string> => {
  const res = await createAxiosInstance().post<string>('verifications/send', data);

  return res.data;
};

export const deleteVerificationAsync = async (data: DeleteVerificationRequest): Promise<boolean> => {
  const res = await createAxiosInstance().delete<boolean>('verifications', { data });

  return res.data;
};
