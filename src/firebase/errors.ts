import { FirebaseError } from "firebase/app";

function getFirebaseErrorMessage(error: FirebaseError): string {
  switch (error.code) {
    case "auth/email-already-in-use":
      return "Email já está sendo utilizado por outra conta.";
    case "auth/invalid-email":
      return "Email inválido.";
    case "auth/user-disabled":
      return "Usuário desabilitado.";
    case "auth/user-not-found":
      return "Usuário não encontrado.";
    case "auth/wrong-password":
      return "Senha incorreta.";
    case "auth/invalid-credential":
      return "Email ou senha inválidos.";
    default:
      return "Ocorreu um erro ao autenticar.";
  }
}

export default getFirebaseErrorMessage;
