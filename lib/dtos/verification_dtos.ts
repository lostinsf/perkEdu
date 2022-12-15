export interface SendVerificationRequest {
  phoneNumber: string;
}

export interface DeleteVerificationRequest {
  phoneNumber: string;
}

export interface CheckVerificationRequest {
  phoneNumber: string;
  code: string;
}
