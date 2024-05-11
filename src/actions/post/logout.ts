import { getAuth, signOut } from "firebase/auth";

async function logout(): Promise<void> {
  try {
    const auth = getAuth();
    await signOut(auth);
  } catch (error) {
    throw error;
  }
}

export default logout;
