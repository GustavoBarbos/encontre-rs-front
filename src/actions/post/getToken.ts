import ky from "ky";

interface Token {
  idToken: string;
}

interface Response {
  token: string;
}

const URL = process.env.REACT_APP_API_URL;

const getToken = async (token: Token) => {
  try {
    const response = (await ky
      .post(`${URL}/user/authenticate`, {
        json: token,
      })
      .json()) as Response;

    return response as Response;
  } catch (error) {
    throw error;
  }
};

export default getToken;
