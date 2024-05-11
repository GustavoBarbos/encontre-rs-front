import { useState } from "react";
import { useDispatch } from "react-redux";
import { FieldValues, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FirebaseError } from "firebase/app";
import { getToken, login } from "../../actions/post";
import getFirebaseErrorMessage from "../../firebase/errors";
import * as S from "./LoginForm.styles";

interface LoginFormProps {
  toggleForm: () => void;
}

interface FormData extends FieldValues {
  email: string;
  password: string;
}

const LoginForm = ({ toggleForm }: LoginFormProps) => {
  const { register, handleSubmit, reset } = useForm();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (data: FieldValues) => {
    const formData = data as FormData;
    setLoading(true);

    try {
      const idToken = await login(formData);

      if (idToken !== null) {
        const { token } = await getToken({ idToken });

        dispatch({ type: "auth/setToken", payload: token });

        setMessage("Login realizado com sucesso");
        reset();

        setTimeout(() => {
          setMessage(null);
          navigate("/register-person");
        }, 1000);
      }
    } catch (error) {
      const message = getFirebaseErrorMessage(error as FirebaseError);
      setError(message);

      setTimeout(() => {
        setError("");
      }, 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <S.LoginFormContainer>
      <h2>Faça Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            {...register("email", { required: "Email is required" })}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            {...register("password", { required: "Password is required" })}
          />
        </div>
        <button type="submit">{loading ? "Carregando..." : "Entrar"}</button>
        <span onClick={toggleForm}>Não tem uma conta?</span>
        {message && <p className="success">{message}</p>}
        {error && <p className="error">{error}</p>}
      </form>
    </S.LoginFormContainer>
  );
};

export default LoginForm;
