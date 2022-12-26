import { createAxiosInstance } from '@utils/api';
import { SearchUploadDTO } from '../dto/upload';

// 라이브러리 데이터베이스 서비스 업로드 설정 및 기능
export const uploadImageAsync = async (
  data: FormData,
  handleUploadProgress?: (progressEvent: unknown) => void,
): Promise<SearchUploadDTO> => {
  const res = await createAxiosInstance().post<SearchUploadDTO>('upload/image', data, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    onUploadProgress: handleUploadProgress,
  });

  return res.data;
};
