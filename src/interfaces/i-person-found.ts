export interface IPersonFound {
  id: number;
  name: string;
  imageLink: string;
  description?: string;
  foundBy: {
    name: string;
    email: string;
    contacts: string;
  };
}

export interface IPersonRequest {
  name?: string;
  image?: File;
  description?: string;
}
