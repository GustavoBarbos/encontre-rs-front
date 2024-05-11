import { IPersonRequest } from "@/interfaces/i-person-found";
import ky from "ky";

const URL = process.env.REACT_APP_API_URL;

const createFoundPerson = async (data: IPersonRequest, token: string) => {
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

    const response = await ky.post(`${URL}/found-person`, {
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

export default createFoundPerson;
