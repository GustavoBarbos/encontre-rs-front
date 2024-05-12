import { IPersonFound } from "@/interfaces/i-person-found";
import ky from "ky";
import {IAnimalFound} from "@/interfaces/i-animal-found";

const URL = process.env.REACT_APP_API_URL;

async function getAnimal(animalId: string): Promise<IAnimalFound> {
  try {
    const response = await ky.get(`${URL}/found-animal/${animalId}`).json();

    return response as IAnimalFound;
  } catch (error) {
    return {
      id: 0,
      name: "",
      imageLink: "",
      description: "",
      foundBy: { name: "", email: "" },
      animalType: ""
    } as IAnimalFound;
  }
}

export default getAnimal;
