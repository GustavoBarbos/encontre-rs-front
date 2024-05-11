import { IPersonFound } from "@/interfaces/i-person-found";
import ky from "ky";
export interface Response {
  results: IPersonFound[];
  currentPage: number;
  totalPages: number;
  totalPeople: number;
}
const URL = process.env.REACT_APP_API_URL;

async function getPersons(
  token: string,
  search: string,
  page: number,
  limit: number
): Promise<Response> {
  try {
    const response = await ky
      .get(`${URL}/found-person?search=${search}&page=${page}&limit=${limit}`, {
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

export default getPersons;
