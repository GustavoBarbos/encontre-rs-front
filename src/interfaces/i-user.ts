export interface IUserState {
  auth: {
    token: string;
  };
}

export interface User {
  name?: string;
  imageLink?: File;
  description?: string;
}
