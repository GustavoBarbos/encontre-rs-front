import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

interface LoginData {
  email: string;
  password: string;
}

async function login({ email, password }: LoginData): Promise<string | null> {
  try {
    const auth = getAuth();
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    const idToken = await user.getIdToken();

    return idToken;
  } catch (error) {
    throw error;
  }
}

export default login;
