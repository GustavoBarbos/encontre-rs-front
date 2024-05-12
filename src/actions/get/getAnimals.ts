import ky from "ky";
import {IAnimalFound} from "@/interfaces/i-animal-found";
export interface Response {
  results: IAnimalFound[];
  currentPage: number;
  totalPages: number;
  totalPeople: number;
}
const URL = process.env.REACT_APP_API_URL;

async function getAnimals(
  token: string,
  search: string,
  page: number,
  limit: number
): Promise<Response> {
  try {
    const response = await ky
      .get(`${URL}/found-animal?search=${search}&page=${page}&limit=${limit}`, {
        headers: {
          Authorization: token,
        },
      })
      .json();

    return response as Response;
  } catch (error) {
    return { results: [], currentPage: 0, totalPages: 0, totalPeople: 0 };
  }
}

export default getAnimals;
