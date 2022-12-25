import { atom } from 'recoil';
import { CreateWalkRequest } from 'libs/database/dto/account';

export interface UpdateWalkModalStates {
  isOpen: boolean;
  isUploading: boolean;
  req?: CreateWalkRequest;
}

export const defaultState: UpdateWalkModalStates = {
  isOpen: false,
  isUploading: false,
};

export const updateWalkModalState = atom<UpdateWalkModalStates | null>({
  key: 'updateWalkModalStates',
  default: defaultState,
});
