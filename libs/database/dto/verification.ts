// 라이브러리 데이터베이스 디티오 인증 인증 인터페이스
export interface CreateSendVerificationDTO {
  phoneNumber: string;
}

export interface DeleteVerificationDTO {
  phoneNumber: string;
}

export interface SearchCheckVerificationDTO {
  phoneNumber: string;
  code: string;
}
