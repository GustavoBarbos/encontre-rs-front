import ky from "ky";

interface User {
  email: string;
  name: string;
  contacts: string;
  idToken: string;
}

const URL = process.env.REACT_APP_API_URL;

const createUser = async (data: User) => {
  try {
    const response = await ky.post(`${URL}/user`, {
      json: data,
    });

    return response;
  } catch (error) {
    throw error;
  }
};

export default createUser;
