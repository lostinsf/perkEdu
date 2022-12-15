export interface CreateProfileRequest {
  nickName: string;
  phoneNumber: string;
}

export interface SignUpCheckRequest {
  nickName: string;
  phoneNumber: string;
}

export interface ProfileWithCountDTO {
  id: number;
  nickName: string;
  phoneNumber: string;
  totalCount: number;
  totalCountFixed: number;
  todayCount: number;
}

export interface ProfileCountDTO {
  id: number;
  totalCount: number;
  totalCountFixed: number;
  todayCount: number;
}
