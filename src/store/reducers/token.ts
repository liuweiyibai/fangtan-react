import { getToken, updateToken } from '@/utils/storage';
import { UPDATE_TOKEN } from '../actions/user';

interface IActionType {
  type: string;
  payload: any;
}

export default (state = getToken('x-token'), action: IActionType) => {
  const { type, payload } = action;
  switch (type) {
    case UPDATE_TOKEN: {
      updateToken('x-token', action.payload.token);
      return payload;
    }
    default:
      return state || '';
  }
};
