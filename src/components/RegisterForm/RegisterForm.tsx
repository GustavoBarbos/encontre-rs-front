import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { FirebaseError } from "firebase/app";
import { createUser, getToken } from "../../actions/post";
import createUserInFirebase from "../../firebase/methods/createUser";
import getFirebaseErrorMessage from "../../firebase/errors";
import * as S from "./RegisterForm.styles";

interface RegisterFormProps {
  toggleForm: () => void;
}

interface User {
  email: string;
  password: string;
  name: string;
  contacts: string;
}

const RegisterForm = ({ toggleForm }: RegisterFormProps) => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const onSubmit: SubmitHandler<User> = async (data) => {
    setLoading(true);
    setError("");

    try {
      const idToken = await createUserInFirebase(data);
      const { password, ...userData } = data;

      await createUser({
        ...userData,
        idToken,
      });

      const { token } = await getToken({ idToken });

      dispatch({ type: "auth/setToken", payload: token });

      setSuccess(true);
      setLoading(false);
      reset();

      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    } catch (error) {
      const message = getFirebaseErrorMessage(error as FirebaseError);
      setError(message);
      setLoading(false);
    }
  };

  return (
    <S.RegisterFormContainer>
      <h2>Faça o Registro</h2>

      <form onSubmit={handleSubmit(onSubmit as SubmitHandler<FieldValues>)}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            {...register("email", { required: "Email é obrigatório" })}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            {...register("password", { required: "Senha é obrigatória" })}
          />
        </div>
        <div>
          <label htmlFor="fullName">Nome completo:</label>
          <input
            type="text"
            id="name"
            {...register("name", {
              required: "Nome completo é obrigatório",
            })}
          />
        </div>
        <div>
          <label htmlFor="contactForms">Formas de contato:</label>
          <textarea
              id="contacts"
              {...register("contacts", {
                required: "Formas de contato são obrigatórias",
              })}
              rows={10}
              placeholder="Por favor, adicione todas as suas formas de contato para que a família possa entrar em contato com você."
          />
        </div>
        <button type="submit">
          {loading ? "Registrando..." : "Registrar"}
        </button>
        {success && <span className="success">Registrado com sucesso!</span>}
        {error && <span className="error">{error}</span>}
        <span onClick={toggleForm}>Já tenho uma conta?</span>
      </form>
    </S.RegisterFormContainer>
  );
};

export default RegisterForm;
