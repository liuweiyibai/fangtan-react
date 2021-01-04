export interface IUserState {
  token: string;
  isPending: boolean;
  userInfo: {
    [key: string]: any;
  };
}

export interface IUserForm {
  username: string;
  password: string;
  checkout: boolean;
}
