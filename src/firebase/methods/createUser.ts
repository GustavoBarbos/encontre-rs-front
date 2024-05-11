import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../config";

const auth = getAuth(app);

interface User {
  email: string;
  password: string;
}

async function createUserInFirebase({ email, password }: User) {
  try {
    const userCredential = await createUserWithEmailAndPassword(
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

export default createUserInFirebase;
