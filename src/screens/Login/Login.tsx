import { useState } from "react";
import { LoginForm, RegisterForm } from "../../components";
import * as S from "./Login.styles";

const Login = () => {
  const [isRegistered, setIsRegistered] = useState(false);

  const toggleForm = () => {
    setIsRegistered(!isRegistered);
  };

  return (
    <S.WelcomeContainer>
      <div className="form-container">
        {isRegistered ? (
          <LoginForm toggleForm={toggleForm} />
        ) : (
          <RegisterForm toggleForm={toggleForm} />
        )}
      </div>
    </S.WelcomeContainer>
  );
};

export default Login;
