import Axios, { AxiosInstance } from 'axios';
import { appConfig } from 'libs/seo/interfaces';

//  api.ts : 노드 서버 접속을 위한 axios 상수

// 1. 생성
export const createAxiosInstance = (): AxiosInstance =>
  Axios.create({
    baseURL: appConfig.apiUrl,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    timeout: 0, // 20000,
    withCredentials: true,
  });
