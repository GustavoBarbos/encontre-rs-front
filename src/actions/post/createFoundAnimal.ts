import ky from "ky";
import {IAnimalRequest} from "@/interfaces/i-animal-found";

const URL = process.env.REACT_APP_API_URL;

const createFoundAnimal = async (data: IAnimalRequest, token: string) => {
  try {
    const formData = new FormData();

    if (data.image) {
      formData.append("image", data.image);
    }

    if (data.name) {
      formData.append("name", data.name);
    }

    if (data.description) {
      formData.append("description", data.description);
    }

    if(data.animalType) {
      formData.append("animalType", data.animalType);
    }

    const response = await ky.post(`${URL}/found-animal`, {
      body: formData,
      headers: {
        Authorization: token,
        contentType: "multipart/form-data",
      },
    });

    return response;
  } catch (error) {
    throw error;
  }
};

export default createFoundAnimal;
