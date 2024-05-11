import { IPersonFound } from "@/interfaces/i-person-found";
import ky from "ky";

const URL = process.env.REACT_APP_API_URL;

async function getPersons(personId: string): Promise<IPersonFound> {
  try {
    const response = await ky.get(`${URL}/found-person/${personId}`).json();

    return response as IPersonFound;
  } catch (error) {
    return {
      id: 0,
      name: "",
      imageLink: "",
      description: "",
      foundBy: { name: "", email: "" },
    } as IPersonFound;
  }
}

export default getPersons;
