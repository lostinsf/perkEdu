// 라이브러리 인증 데이터베이스 디티오
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
