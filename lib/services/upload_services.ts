import { createAxiosInstance } from '@utils/api';
import { UploadResultDTO } from '../dtos/upload_dtos';

export const uploadImageAsync = async (
  data: FormData,
  handleUploadProgress?: (progressEvent: any) => void,
): Promise<UploadResultDTO> => {
  const res = await createAxiosInstance().post<UploadResultDTO>('upload/image', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    onUploadProgress: handleUploadProgress,
  });

  return res.data;
};
