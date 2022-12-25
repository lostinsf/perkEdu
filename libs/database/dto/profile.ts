// 라이브러리 데이터베이스 디티오 프로파일 인터페이스
export interface CreateProfileDTO {
  nickName: string;
  phoneNumber: string;
}

export interface SearchSignUpCheckProfileDTO {
  nickName: string;
  phoneNumber: string;
}

export interface SearchCountWithIDProfileDTO {
  id: number;
  nickName: string;
  phoneNumber: string;
  totalCount: number;
  totalCountFixed: number;
  todayCount: number;
}

export interface SearchCountProfileDTO {
  id: number;
  totalCount: number;
  totalCountFixed: number;
  todayCount: number;
}
