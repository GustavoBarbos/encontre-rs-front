export interface IAnimalFound {
  id: number;
  name: string;
  imageLink: string;
  description?: string;
  foundBy: {
    name: string;
    email: string;
    contacts: string;
  };
  animalType: string;
}

export interface IAnimalRequest {
  name?: string;
  image?: File;
  description?: string;
  animalType: string;
}
